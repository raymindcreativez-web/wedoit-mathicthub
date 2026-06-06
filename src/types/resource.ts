export interface Resource {
  id: string;
  title: string;
  description?: string;
  subject: string; // e.g., "Mathematics", "ICT", "Physics"
  gradeLevel: string; // e.g., "5", "9-10", "KS3"
  resourceType: 'lessonPlan' | 'worksheet' | 'presentation' | 'video' | 'article' | 'simulation' | 'other';
  fileUrl: string; // URL to the actual resource file
  fileType: string; // MIME type (e.g., 'application/pdf', 'video/mp4')
  sizeBytes?: number;
  durationMinutes?: number; // For video/audio resources
  isPublic: boolean; // Whether resource is publicly accessible
  tags?: string[]; // For categorization and search
  createdBy: string; // Reference to User
  createdAt: string; // ISO date string
  updatedAt?: string;
  version: number; // For tracking revisions
  // Optional: references to related entities
  relatedClassId?: string;
  relatedAssessmentId?: string;
}

export interface ResourceFilters {
  subject?: string;
  gradeLevel?: string;
  resourceType?: string;
  isPublic?: boolean;
  tags?: string[];
}

export interface ResourceCreateInput {
  title: string;
  description?: string;
  subject: string;
  gradeLevel: string;
  resourceType: 'lessonPlan' | 'worksheet' | 'presentation' | 'video' | 'article' | 'simulation' | 'other';
  fileUrl: string;
  fileType: string;
  isPublic?: boolean;
  tags?: string[];
  relatedClassId?: string;
  relatedAssessmentId?: string;
}