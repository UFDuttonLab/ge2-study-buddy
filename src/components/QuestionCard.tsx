import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Lightbulb } from "lucide-react";
import { Question } from "@/data/questions";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: Question;
  onAnswer: (selectedAnswer: number, isCorrect: boolean) => void;
  onNext?: () => void;
  isLastQuestion?: boolean;
  showAnswer?: boolean;
  className?: string;
}

export function QuestionCard({ 
  question, 
  onAnswer, 
  onNext, 
  isLastQuestion = false,
  showAnswer = false, 
  className = "" 
}: QuestionCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  // Reset answer state when question changes
  useEffect(() => {
    setSelectedAnswer(null);
    setHasAnswered(false);
  }, [question.id]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (hasAnswered && !showAnswer) return;
    
    setSelectedAnswer(answerIndex);
    setHasAnswered(true);
    
    const isCorrect = answerIndex === question.correctAnswer;
    onAnswer(answerIndex, isCorrect);
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
    <Card className={cn("w-full max-w-4xl mx-auto", className)}>
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
                "justify-start text-left h-auto py-4 px-6",
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
          <div className="mt-6 space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Explanation:</h4>
              <p className="text-sm text-muted-foreground">{question.explanation}</p>
            </div>
            
            {question.wrongAnswerExplanations && question.wrongAnswerExplanations.length > 0 && (
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Why other answers are incorrect:</h4>
                <div className="space-y-2">
                  {question.wrongAnswerExplanations.map((explanation, index) => (
                    <p key={index} className="text-sm text-muted-foreground">
                      <span className="font-medium">
                        {String.fromCharCode(65 + (index >= question.correctAnswer ? index + 1 : index))}.
                      </span>{" "}
                      {explanation}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {!showAnswer && onNext && (
              <div className="flex justify-center pt-4">
                <Button 
                  onClick={onNext}
                  className="bg-primary hover:bg-primary/90"
                >
                  {isLastQuestion ? "View Results" : "Next Question"}
                </Button>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}