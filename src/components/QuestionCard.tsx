import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Lightbulb } from "lucide-react";
import { Question } from "@/data/questions";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: Question;
  onAnswer: (selectedAnswer: number, isCorrect: boolean) => void;
  showAnswer?: boolean;
  className?: string;
}

export function QuestionCard({ question, onAnswer, showAnswer = false, className }: QuestionCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (hasAnswered) return;
    
    setSelectedAnswer(answerIndex);
    setHasAnswered(true);
    const isCorrect = answerIndex === question.correctAnswer;
    setTimeout(() => {
      onAnswer(answerIndex, isCorrect);
    }, 1500);
  };

  const getOptionStyle = (index: number) => {
    if (!hasAnswered && !showAnswer) return "hover:bg-accent/50";
    
    if (index === question.correctAnswer) {
      return "bg-success/20 border-success text-success-foreground";
    }
    
    if (hasAnswered && index === selectedAnswer && index !== question.correctAnswer) {
      return "bg-destructive/20 border-destructive text-destructive-foreground";
    }
    
    return "bg-muted/30";
  };

  const getOptionIcon = (index: number) => {
    if (!hasAnswered && !showAnswer) return null;
    
    if (index === question.correctAnswer) {
      return <CheckCircle className="h-5 w-5 text-success" />;
    }
    
    if (hasAnswered && index === selectedAnswer && index !== question.correctAnswer) {
      return <XCircle className="h-5 w-5 text-destructive" />;
    }
    
    return null;
  };

  return (
    <Card className={cn("w-full max-w-4xl mx-auto bg-gradient-card shadow-card", className)}>
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs">
            {question.category}
          </Badge>
          <Badge 
            variant={question.difficulty === 'easy' ? 'default' : question.difficulty === 'medium' ? 'secondary' : 'destructive'}
            className="text-xs"
          >
            {question.difficulty}
          </Badge>
        </div>
        <CardTitle className="text-xl leading-relaxed text-foreground">
          {question.question}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid gap-3">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              size="lg"
              className={cn(
                "justify-start text-left h-auto py-4 px-6 transition-smooth",
                getOptionStyle(index),
                !hasAnswered && !showAnswer && "cursor-pointer"
              )}
              onClick={() => handleAnswerSelect(index)}
              disabled={hasAnswered || showAnswer}
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-sm leading-relaxed pr-4">
                  <span className="font-semibold mr-3">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </span>
                {getOptionIcon(index)}
              </div>
            </Button>
          ))}
        </div>

        {(hasAnswered || showAnswer) && (
          <div className="mt-6 p-6 bg-gradient-to-r from-primary/10 to-success/10 rounded-lg border border-primary/20">
            <div className="flex items-start gap-3 mb-4">
              <Lightbulb className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-semibold text-primary mb-2">Explanation</h4>
                <p className="text-sm text-foreground leading-relaxed mb-4">
                  {question.explanation}
                </p>
                
                <div className="space-y-2">
                  <h5 className="font-medium text-muted-foreground text-xs uppercase tracking-wider">
                    Why other answers are incorrect:
                  </h5>
                  {question.wrongAnswerExplanations.map((explanation, index) => {
                    const wrongIndex = index >= question.correctAnswer ? index + 1 : index;
                    return (
                      <div key={index} className="text-xs text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-destructive">
                          {String.fromCharCode(65 + wrongIndex)}.
                        </span>{" "}
                        {explanation}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}