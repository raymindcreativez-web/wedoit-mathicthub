export interface NotebookRef {
  id: string;
  title: string;
  description?: string;
  type: 'lessonPlan' | 'quiz' | 'worksheet' | 'notes' | 'presentation' | 'other';
  subject: string; // e.g., "Mathematics", "ICT"
  gradeLevel: string;
  fileUrl: string; // URL to the actual notebook/file (could be cloud storage)
  fileType: string; // e.g., 'application/pdf', 'text/plain', 'application/vnd.google-apps.document'
  sizeBytes?: number;
  pageCount?: number;
  isPublic: boolean; // Whether this notebook is shared publicly
  tags?: string[]; // For categorization and search
  createdBy: string; // Reference to User
  createdAt: string; // ISO date string
  updatedAt?: string;
  version: number; // For tracking revisions
  // Optional: references to related entities
  relatedClassId?: string;
  relatedStudentId?: string;
  relatedAssessmentId?: string;
}

export interface NotebookRefCreateInput {
  title: string;
  description?: string;
  type: 'lessonPlan' | 'quiz' | 'worksheet' | 'notes' | 'presentation' | 'other';
  subject: string;
  gradeLevel: string;
  fileUrl: string;
  fileType: string;
  isPublic?: boolean;
  tags?: string[];
  relatedClassId?: string;
  relatedStudentId?: string;
  relatedAssessmentId?: string;
}