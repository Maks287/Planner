'use client';

import { useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { useLanguage } from '@/hooks/use-language';
import content from '@/lib/content';
import { getRecommendations, RecommendationState } from '@/app/actions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Wand2, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  const { language } = useLanguage();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Getting recommendations...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          {content.problemSolution[language].aiPrompt.button}
        </>
      )}
    </Button>
  );
}

export default function ProblemSolution() {
  const { language } = useLanguage();
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  
  const sectionContent = content.problemSolution[language];
  const aiContent = sectionContent.aiPrompt;

  const initialState: RecommendationState = {};
  const [state, dispatch] = useFormState(getRecommendations, initialState);

  useEffect(() => {
    if (state.message === 'Success!') {
      toast({
        title: "Recommendations Ready!",
        description: "We've found some templates that might suit you.",
      });
      formRef.current?.reset();
    } else if (state.message && state.message !== 'There was an error with your submission.') {
       toast({
        title: "Heads up!",
        description: state.message,
        variant: "default",
      });
    } else if (state.errors) {
       toast({
        title: "Oops!",
        description: "Please check the form for errors.",
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <section id="about" className="w-full py-16 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              {sectionContent.title}
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {sectionContent.painPoints}
            </p>
            <p className="max-w-[600px] text-foreground md:text-lg">
                Planner for life helps students, entrepreneurs, and ambitious individuals turn chaos into an organized action plan, giving you a competitive advantage and peace of mind.
            </p>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wand2 className="text-primary" /> {aiContent.title}
              </CardTitle>
              <p className="text-muted-foreground text-sm pt-2">
                {aiContent.description}
              </p>
            </CardHeader>
            <CardContent>
              <form ref={formRef} action={dispatch} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="profile">{aiContent.profileLabel}</Label>
                  <Select name="profile" required>
                    <SelectTrigger id="profile">
                      <SelectValue placeholder="Select your profile" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">
                        {aiContent.profiles.student}
                      </SelectItem>
                      <SelectItem value="entrepreneur">
                        {aiContent.profiles.entrepreneur}
                      </SelectItem>
                      <SelectItem value="ambitious individual">
                        {aiContent.profiles.ambitious}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {state.errors?.profile && <p className="text-sm font-medium text-destructive">{state.errors.profile[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="goals">{aiContent.goalsLabel}</Label>
                  <Textarea
                    id="goals"
                    name="goals"
                    placeholder={aiContent.goalsPlaceholder}
                    className="min-h-[100px]"
                    required
                  />
                  {state.errors?.goals && <p className="text-sm font-medium text-destructive">{state.errors.goals[0]}</p>}
                </div>
                <SubmitButton />
              </form>

              {state.recommendations && state.recommendations.length > 0 && (
                 <div className="mt-6">
                    <Alert>
                        <AlertTitle className="flex items-center gap-2">
                            <Star className="h-4 w-4" />
                            {aiContent.resultTitle}
                        </AlertTitle>
                        <AlertDescription>
                            <ul className="mt-2 list-disc list-inside">
                                {state.recommendations.map((rec) => (
                                    <li key={rec}>{rec}</li>
                                ))}
                            </ul>
                        </AlertDescription>
                    </Alert>
                 </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
