export interface Assessment {
  id: string;
  title: string;
  description?: string;
  classId: string; // Reference to classes
  subject: string; // e.g., "Mathematics", "ICT"
  gradeLevel: string;
  assessmentType: 'quiz' | 'test' | 'exam' | 'assignment' | 'project' | 'other';
  totalMarks: number;
  passingMarks?: number;
  startDate: string; // ISO date string
  endDate?: string; // ISO date string
  durationMinutes?: number; // Time limit for the assessment
  instructions?: string;
  rubric?: {
    criteria: string[];
    pointsPerCriterion: number;
  };
  createdBy: string; // Teacher ID (reference to User)
  createdAt: string; // ISO date string
  updatedAt?: string;
  isActive: boolean;
  maxAttempts?: number;
}

export interface AssessmentResult {
  id: string;
  assessmentId: string;
  studentId: string;
  studentName: string;
  score: number;
  percentage: number;
  grade?: string; // e.g., "A", "B+", "C"
  feedback?: string;
  completedAt: string; // ISO date string
  timeSpentMinutes?: number;
  attemptNumber: number;
  answers?: Record<string, any>; // Store student responses
}