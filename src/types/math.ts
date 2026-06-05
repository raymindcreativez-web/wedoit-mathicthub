export interface MathScore {
  id: string;
  studentId: string;
  studentName: string;
  topic: string;
  score: number;
  maxScore: number;
  date: string; // ISO date string
  assessmentType: 'quiz' | 'test' | 'homework' | 'practice' | 'other';
  notes?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface MasteryLevel {
  studentId: string;
  topic: string;
  percentage: number; // 0-100
  level: 'beginner' | 'developing' | 'proficient' | 'advanced' | 'mastery';
  lastAssessed: string; // ISO date string
  trend: 'improving' | 'declining' | 'stable';
}

export interface LearningObjective {
  id: string;
  topic: string;
  description: string;
  gradeLevel: string;
  difficulty: 'easy' | 'medium' | 'hard';
  prerequisites: string[]; // IDs of prerequisite objectives
}