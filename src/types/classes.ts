export interface Class {
  id: string;
  name: string; // e.g., "Grade 5 Mathematics", "ICT Fundamentals"
  gradeLevel: string; // e.g., "5", "9-10", "KS3"
  subject: string; // e.g., "Mathematics", "ICT", "Computer Science"
  teacherId: string; // Reference to user ID
  roomNumber?: string;
  schedule?: string; // e.g., "Mon/Wed/Fri 10:00-11:00"
  maxStudents?: number;
  currentEnrollment?: number;
  description?: string;
  syllabusUrl?: string;
  createdAt: string; // ISO date string
  updatedAt?: string;
  isActive: boolean;
}

export interface ClassEnrollment {
  id: string;
  classId: string;
  studentId: string;
  enrolledAt: string; // ISO date string
  status: 'active' | 'completed' | 'dropped' | 'pending';
  finalGrade?: string;
  notes?: string;
}