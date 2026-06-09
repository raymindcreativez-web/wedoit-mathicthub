export interface LessonRequest {
  gradeLevel: string;
  topic: string;
  competency?: string;
  difficulty: string;
  numQuestions: string;
}

export interface LessonOutline {
  learningObjectives: string[];
  materialsNeeded: string[];
  introduction: string;
  mainActivities: string[];
  guidedPractice: string;
  independentPractice: string;
  assessment: string;
  differentiationStrategies: string[];
  homeworkExtension: string;
}

export interface QuizQuestion {
  id: number;
  type: 'multiple-choice' | 'short-answer';
  question: string;
  options?: string[]; // for multiple-choice
  correctAnswer: string | number; // for multiple-choice: index of correct option; for short-answer: the answer
  explanation: string;
}

export interface Quiz {
  quizTitle: string;
  topic: string;
  gradeLevel: string;
  numQuestions: number;
  difficulty: string;
  questions: QuizQuestion[];
}

export interface RemediationActivity {
  activityTitle: string;
  description: string;
  materialsNeeded: string[];
  steps: string[];
  estimatedTime: string; // e.g., "15-20 minutes"
}

export interface LessonQuizResponse {
  lessonOutline: LessonOutline;
  quiz: Quiz;
  answerKey: {
    correctAnswers: Record<number, string | number>;
    explanations: Record<number, string>;
  };
  remediationActivity: RemediationActivity;
}