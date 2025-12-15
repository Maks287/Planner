'use server';

/**
 * @fileOverview A flow to provide personalized template recommendations based on user profile and goals.
 *
 * - personalizedTemplateRecommendations - A function that returns template recommendations.
 * - PersonalizedTemplateRecommendationsInput - The input type for the personalizedTemplateRecommendations function.
 * - PersonalizedTemplateRecommendationsOutput - The return type for the personalizedTemplateRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedTemplateRecommendationsInputSchema = z.object({
  profile: z
    .enum(['student', 'entrepreneur', 'ambitious individual'])
    .describe('The user profile.'),
  goals: z.string().describe('The user stated goals.'),
});
export type PersonalizedTemplateRecommendationsInput = z.infer<
  typeof PersonalizedTemplateRecommendationsInputSchema
>;

const PersonalizedTemplateRecommendationsOutputSchema = z.object({
  recommendations: z
    .array(z.string())
    .describe('A list of recommended templates.'),
});
export type PersonalizedTemplateRecommendationsOutput = z.infer<
  typeof PersonalizedTemplateRecommendationsOutputSchema
>;

export async function personalizedTemplateRecommendations(
  input: PersonalizedTemplateRecommendationsInput
): Promise<PersonalizedTemplateRecommendationsOutput> {
  return personalizedTemplateRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedTemplateRecommendationsPrompt',
  input: {schema: PersonalizedTemplateRecommendationsInputSchema},
  output: {schema: PersonalizedTemplateRecommendationsOutputSchema},
  prompt: `You are an expert in recommending Google Sheets templates for Planner for life users.

Based on the user profile and stated goals, recommend the most suitable templates.

User Profile: {{{profile}}}
User Goals: {{{goals}}}

Available Templates:
- Weekly Planner

Consider the following:
- Everyone can benefit from the Weekly Planner.

Return a JSON array of template names that best suit the user. Only return templates from the available list.
`,
});

const personalizedTemplateRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedTemplateRecommendationsFlow',
    inputSchema: PersonalizedTemplateRecommendationsInputSchema,
    outputSchema: PersonalizedTemplateRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
