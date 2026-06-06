export interface InterventionPlan {
  id: string;
  studentId: string;
  studentName: string;
  classId?: string; // Reference to classes (optional)
  title: string;
  description: string;
  goal: string; // Specific, measurable goal
  startDate: string; // ISO date string
  endDate?: string; // ISO date string
  status: 'active' | 'completed' | 'paused' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'critical';
  interventionType: 'remediation' | 'enrichment' | 'behavioral' | 'accommodation' | 'other';
  subjects: string[]; // e.g., ['Mathematics', 'Algebra'] or ['ICT', 'Programming']
  strategies: string[]; // Specific teaching/intervention strategies
  resourcesNeeded: string[]; // Materials, tools, personnel required
  successCriteria: string[]; // How success will be measured
  progressMetrics: {
    metric: string;
    targetValue: number;
    currentValue: number;
    unit: string;
    lastUpdated: string; // ISO date string
  }[];
  assignedTo: string; // Teacher or specialist ID
  createdBy: string; // Teacher or admin ID
  createdAt: string; // ISO date string
  updatedAt?: string;
  notes?: string; // Progress notes, observations
  parentInvolved: boolean;
  reviewDate?: string; // ISO date string for next review
}

export interface InterventionProgress {
  id: string;
  interventionId: string;
  date: string; // ISO date string
  notes: string;
  progressRating: number; // 1-5 scale
  objectiveAchieved: boolean;
  nextSteps?: string;
  recordedBy: string; // Teacher or specialist ID
}