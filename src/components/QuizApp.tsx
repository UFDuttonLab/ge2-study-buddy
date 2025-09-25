import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { QuestionCard } from "./QuestionCard";
import { QuizResults } from "./QuizResults";
import { Question, getRandomQuestions, getQuestionsByCategory, categories } from "@/data/questions";
import { BookOpen, Brain, Trophy, RotateCcw } from "lucide-react";

export function QuizApp() {
  const [currentMode, setCurrentMode] = useState<'menu' | 'quiz' | 'results'>('menu');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Array<{questionId: number, selected: number, correct: number, isCorrect: boolean}>>([]);
  const [quizType, setQuizType] = useState<'random' | 'category'>('random');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const startQuiz = (type: 'random' | 'category', category?: string) => {
    let selectedQuestions: Question[];
    
    if (type === 'random') {
      selectedQuestions = getRandomQuestions(10);
    } else {
      selectedQuestions = getQuestionsByCategory(category!);
    }
    
    setQuestions(selectedQuestions);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setQuizType(type);
    setSelectedCategory(category || '');
    setCurrentMode('quiz');
  };

  const handleAnswer = (selectedAnswer: number, isCorrect: boolean) => {
    const currentQuestion = questions[currentQuestionIndex];
    const newAnswer = {
      questionId: currentQuestion.id,
      selected: selectedAnswer,
      correct: currentQuestion.correctAnswer,
      isCorrect
    };
    
    setAnswers(prev => [...prev, newAnswer]);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setCurrentMode('results');
    }
  };

  const resetQuiz = () => {
    setCurrentMode('menu');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setQuestions([]);
  };

  const progress = questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0;
  const correctAnswers = answers.filter(a => a.isCorrect).length;

  if (currentMode === 'menu') {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-4">
              <Brain className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">
              Chris's Ecology Challenge 2
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get ready for the second exam!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">2 minute Challenge Quiz</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Test your overall knowledge with 10 randomly selected questions from all topics (use while waiting for the bus or walking between classes)
                </p>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => startQuiz('random')} 
                  className="w-full bg-primary hover:bg-primary/90"
                  size="lg"
                >
                  Start Random Quiz
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all duration-200">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-success/10 rounded-full mb-3">
                  <Trophy className="h-6 w-6 text-success" />
                </div>
                <CardTitle className="text-xl">Study by Topic</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Focus on specific areas of community ecology
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    className="w-full justify-start hover:bg-primary/5"
                    onClick={() => startQuiz('category', category)}
                  >
                    {category}
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>103 comprehensive questions with detailed explanations</p>
            <p>Learn why each answer choice is correct or incorrect</p>
          </div>

          <footer className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>
              Developed by{" "}
              <a 
                href="https://ufduttonlab.github.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                UF Dutton Lab
              </a>
            </p>
          </footer>
        </div>
      </div>
    );
  }

  if (currentMode === 'results') {
    return (
      <QuizResults 
        answers={answers}
        questions={questions}
        onRestart={resetQuiz}
        quizType={quizType}
        category={selectedCategory}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Button variant="outline" onClick={resetQuiz} className="flex items-center gap-2">
            <RotateCcw className="h-4 w-4" />
            Back to Menu
          </Button>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="text-sm">
              {quizType === 'category' ? selectedCategory : '2 minute Challenge Quiz'}
            </Badge>
            <div className="text-sm text-muted-foreground">
              {currentQuestionIndex + 1} of {questions.length}
            </div>
          </div>
        </div>

        <Progress value={progress} className="h-2 bg-muted" />

        {questions[currentQuestionIndex] ? (
          <QuestionCard
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            onNext={handleNextQuestion}
            isLastQuestion={currentQuestionIndex === questions.length - 1}
          />
        ) : (
          <div className="text-center text-muted-foreground">Loading question...</div>
        )}

        <div className="text-center text-sm text-muted-foreground">
          Score: {correctAnswers}/{answers.length}
        </div>
      </div>
    </div>
  );
}