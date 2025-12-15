'use server';

import {
  personalizedTemplateRecommendations,
  PersonalizedTemplateRecommendationsInput,
} from '@/ai/flows/personalized-template-recommendations';
import { z } from 'zod';

const recommendationSchema = z.object({
  profile: z.enum(['student', 'entrepreneur', 'ambitious individual']),
  goals: z
    .string()
    .min(10, 'Please describe your goals in a bit more detail.')
    .max(500, 'Please keep your goals concise (under 500 characters).'),
});

export type RecommendationState = {
  message?: string;
  recommendations?: string[];
  errors?: {
    profile?: string[];
    goals?: string[];
  };
};

export async function getRecommendations(
  prevState: RecommendationState,
  formData: FormData
): Promise<RecommendationState> {
  const validatedFields = recommendationSchema.safeParse({
    profile: formData.get('profile'),
    goals: formData.get('goals'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'There was an error with your submission.',
    };
  }

  try {
    const result = await personalizedTemplateRecommendations(
      validatedFields.data as PersonalizedTemplateRecommendationsInput
    );
    if (result.recommendations && result.recommendations.length > 0) {
      return {
        message: 'Success!',
        recommendations: result.recommendations,
      };
    } else {
      return {
        message:
          "We couldn't find specific recommendations, but feel free to browse our full catalog!",
      };
    }
  } catch (error) {
    console.error('AI recommendation error:', error);
    return {
      message:
        'An error occurred while getting recommendations. Please try again later.',
    };
  }
}
