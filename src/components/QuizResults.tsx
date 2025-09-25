import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QuestionCard } from "./QuestionCard";
import { Question } from "@/data/questions";
import { Trophy, RotateCcw, BookOpen, CheckCircle, XCircle, Target } from "lucide-react";

interface QuizResultsProps {
  answers: Array<{questionId: number, selected: number, correct: number, isCorrect: boolean}>;
  questions: Question[];
  onRestart: () => void;
  quizType: 'random' | 'category';
  category: string;
}

export function QuizResults({ answers, questions, onRestart, quizType, category }: QuizResultsProps) {
  const correctCount = answers.filter(a => a.isCorrect).length;
  const totalQuestions = questions.length;
  const percentage = Math.round((correctCount / totalQuestions) * 100);
  
  const getPerformanceMessage = (score: number) => {
    if (score >= 90) return { message: "Excellent! You've mastered this material.", color: "text-success", icon: Trophy };
    if (score >= 80) return { message: "Great work! You have a strong understanding.", color: "text-success", icon: Target };
    if (score >= 70) return { message: "Good job! Review the explanations to improve.", color: "text-warning", icon: BookOpen };
    if (score >= 60) return { message: "Keep studying! Focus on the areas you missed.", color: "text-warning", icon: BookOpen };
    return { message: "More practice needed. Review the concepts carefully.", color: "text-destructive", icon: XCircle };
  };

  const performance = getPerformanceMessage(percentage);
  const PerformanceIcon = performance.icon;

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Results Header */}
        <Card className="text-center">
          <CardHeader className="pb-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4 mx-auto">
              <PerformanceIcon className={`h-8 w-8 text-primary-foreground`} />
            </div>
            <CardTitle className="text-2xl mb-2">Quiz Complete!</CardTitle>
            <div className="flex items-center justify-center gap-4 text-3xl font-bold">
              <span className={performance.color}>{correctCount}</span>
              <span className="text-muted-foreground">/</span>
              <span className="text-muted-foreground">{totalQuestions}</span>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                {percentage}%
              </Badge>
            </div>
            <p className={`text-lg ${performance.color} mt-2`}>
              {performance.message}
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={onRestart} size="lg" className="bg-primary hover:bg-primary/90">
                <RotateCcw className="h-4 w-4 mr-2" />
                Try Another Quiz
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Performance Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Performance Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-success/10 rounded-full mb-2 mx-auto">
                  <CheckCircle className="h-6 w-6 text-success" />
                </div>
                <div className="text-2xl font-bold text-success">{correctCount}</div>
                <div className="text-sm text-muted-foreground">Correct</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-destructive/10 rounded-full mb-2 mx-auto">
                  <XCircle className="h-6 w-6 text-destructive" />
                </div>
                <div className="text-2xl font-bold text-destructive">{totalQuestions - correctCount}</div>
                <div className="text-sm text-muted-foreground">Incorrect</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2 mx-auto">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">{percentage}%</div>
                <div className="text-sm text-muted-foreground">Score</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-muted/40 rounded-full mb-2 mx-auto">
                  <BookOpen className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="text-2xl font-bold">{totalQuestions}</div>
                <div className="text-sm text-muted-foreground">Total</div>
              </div>
            </div>
            {quizType === 'category' && (
              <div className="mt-4 text-center">
                <Badge variant="outline" className="text-sm">
                  Category: {category}
                </Badge>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Review Questions */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-center">Review Questions</h2>
          {questions.map((question, index) => {
            const answer = answers.find(a => a.questionId === question.id);
            return (
              <div key={question.id} className="relative">
                <div className="absolute -left-4 top-6 z-10">
                  {answer?.isCorrect ? (
                    <div className="flex items-center justify-center w-8 h-8 bg-success rounded-full">
                      <CheckCircle className="h-5 w-5 text-success-foreground" />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center w-8 h-8 bg-destructive rounded-full">
                      <XCircle className="h-5 w-5 text-destructive-foreground" />
                    </div>
                  )}
                </div>
                <QuestionCard
                  question={question}
                  onAnswer={() => {}}
                  showAnswer={true}
                  className="ml-6"
                />
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="text-center pb-8">
          <Button 
            className="w-full bg-primary hover:bg-primary/90" 
            size="lg"
            onClick={onRestart}
          >
            Take Another Quiz
          </Button>
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