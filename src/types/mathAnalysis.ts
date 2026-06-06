export interface MathAnalysis {
  id: string;
  studentId: string;
  studentName: string;
  classId?: string; // Reference to classes (optional)
  topic: string;
  analysisType: 'skillGap' | 'progressTrend' | 'misconception' | 'mastery' | 'learningPattern';
  analysisDate: string; // ISO date string
  periodStart?: string; // ISO date string (start of analysis period)
  periodEnd?: string; // ISO date string (end of analysis period)
  dataPoints: number; // Number of scores/assessments analyzed
  averageScore: number;
  scoreTrend: 'improving' | 'declining' | 'stable' | 'fluctuating';
  strengthAreas: string[]; // Topics where student excels
  weaknessAreas: string[]; // Topics needing improvement
  misconceptions?: string[]; // Common misunderstandings identified
  recommendations: string[]; // Actionable suggestions for improvement
  confidenceScore: number; // 0-100, confidence in the analysis
  generatedBy: string; // Could be teacher ID or 'system' for AI-generated
  isAIGenerated: boolean;
  createdAt: string; // ISO date string
  updatedAt?: string;
}