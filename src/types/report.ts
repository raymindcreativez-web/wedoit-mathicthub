export interface Report {
  id: string;
  title: string;
  description?: string;
  type: 'studentProgress' | 'classPerformance' | 'assessmentResults' | 'interventionEffectiveness' | 'ictSupport' | 'resourceUsage' | 'aiActivity' | 'custom';
  generatedFor: string; // ID of user/class/student the report is about
  generatedBy: string; // ID of user who generated/requested the report
  generatedAt: string; // ISO date string
  periodStart?: string; // ISO date string (start of reporting period)
  periodEnd?: string; // ISO date string (end of reporting period)
  format: 'pdf' | 'csv' | 'json' | 'html';
  fileUrl?: string; // URL to the generated report file
  parameters: Record<string, any>; // Parameters used to generate the report
  data: Record<string, any>; // The actual report data
  isScheduled: boolean; // Whether this is a recurring report
  schedule?: {
    frequency: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly';
    dayOfWeek?: number; // 0-6 (Sunday-Saturday)
    dayOfMonth?: number; // 1-31
    month?: number; // 1-12
    time: string; // HH:MM format
  };
  recipients: string[]; // Array of user IDs who should receive this report
  status: 'generating' | 'completed' | 'failed' | 'sent';
  errorMessage?: string;
  createdAt: string; // ISO date string
  updatedAt?: string;
}

export interface ReportTemplate {
  id: string;
  name: string;
  description?: string;
  type: Report['type'];
  format: Report['format'];
  parameters: Record<string, any>; // Default parameters
  isPublic: boolean; // Whether template is available to all users
  createdBy: string; // Reference to User
  createdAt: string; // ISO date string
  updatedAt?: string;
}