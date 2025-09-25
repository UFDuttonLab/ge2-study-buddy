import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Lightbulb, ThumbsUp, ThumbsDown } from "lucide-react";
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
  const [isAnimating, setIsAnimating] = useState(false);

  // Reset answer state when question changes
  useEffect(() => {
    setSelectedAnswer(null);
    setHasAnswered(false);
    setIsAnimating(false);
  }, [question.id]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (hasAnswered && !showAnswer) return;
    
    setSelectedAnswer(answerIndex);
    setHasAnswered(true);
    setIsAnimating(true);
    
    const isCorrect = answerIndex === question.correctAnswer;
    onAnswer(answerIndex, isCorrect);

    // Reset animation state after animation completes
    setTimeout(() => setIsAnimating(false), 600);
  };

  const getOptionStyle = (index: number) => {
    const baseStyle = "transition-all duration-300";
    
    if (!hasAnswered && !showAnswer) return `${baseStyle} hover:bg-accent/50 hover:border-accent`;
    
    if (index === question.correctAnswer) {
      const animationClass = isAnimating && index === selectedAnswer ? "animate-success-pulse" : "";
      return `${baseStyle} bg-success/40 border-2 border-success text-success-foreground shadow-lg ${animationClass}`;
    }
    
    if (hasAnswered && index === selectedAnswer && index !== question.correctAnswer) {
      const animationClass = isAnimating ? "animate-error-shake" : "";
      return `${baseStyle} bg-destructive/40 border-2 border-destructive text-destructive-foreground shadow-lg ${animationClass}`;
    }
    
    return `${baseStyle} bg-muted/30 opacity-60`;
  };

  const getOptionIcon = (index: number) => {
    if (!hasAnswered && !showAnswer) return null;
    
    if (index === question.correctAnswer) {
      return <CheckCircle className="h-7 w-7 text-success font-bold" />;
    }
    
    if (hasAnswered && index === selectedAnswer && index !== question.correctAnswer) {
      return <XCircle className="h-7 w-7 text-destructive font-bold" />;
    }
    
    return null;
  };

  const getResultMessage = () => {
    if (!hasAnswered || showAnswer) return null;
    
    const isCorrect = selectedAnswer === question.correctAnswer;
    return (
      <div className={cn(
        "flex items-center gap-3 p-4 rounded-lg mb-4 font-semibold text-lg",
        isCorrect 
          ? "bg-success/20 text-success border border-success/30" 
          : "bg-destructive/20 text-destructive border border-destructive/30"
      )}>
        {isCorrect ? (
          <>
            <ThumbsUp className="h-8 w-8" />
            <span>Correct! Well done!</span>
          </>
        ) : (
          <>
            <ThumbsDown className="h-8 w-8" />
            <span>Incorrect. Keep learning!</span>
          </>
        )}
      </div>
    );
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
        {getResultMessage()}
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
              <div className="flex justify-center pt-4 pb-2">
                <Button 
                  onClick={onNext}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 min-h-[48px] px-8 py-3 text-base font-semibold touch-manipulation active:scale-95 transition-transform duration-150 sm:min-h-[44px] sm:px-6 sm:py-2 sm:text-sm"
                  style={{ touchAction: 'manipulation' }}
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