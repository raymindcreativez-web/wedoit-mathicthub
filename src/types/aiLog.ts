export interface AiLog {
  id: string;
  userId: string; // Reference to User
  userName: string;
  actionType: 'lessonGeneration' | 'quizGeneration' | 'interventionSuggestion' | 'resourceRecommendation' | 'other';
  prompt: string; // The input prompt given to the AI
  response: string; // The AI's response
  parameters?: Record<string, any>; // Parameters used (temperature, maxTokens, etc.)
  modelUsed: string; // e.g., 'gemini-pro'
  tokensUsed?: number;
  cost?: number; // In USD or relevant currency
  status: 'success' | 'error' | 'pending';
  errorMessage?: string;
  createdAt: string; // ISO date string
  // Optional: reference to related entities
  relatedClassId?: string;
  relatedStudentId?: string;
  relatedAssessmentId?: string;
}