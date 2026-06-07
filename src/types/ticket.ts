export interface Ticket {
  id: string;
  subject: string;
  description: string;
  status: 'New' | 'In Progress' | 'Waiting' | 'Resolved';
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  createdAt: string; // ISO date string
  updatedAt?: string; // ISO date string
  assignedTo: string;
  createdBy: string;
  // Optional fields
  dueDate?: string; // ISO date string
  resolution?: string;
  actionTaken?: string; // Action taken to resolve the ticket
  resolutionDate?: string; // Date when ticket was resolved (ISO date string)
  category?: string; // e.g., 'Hardware', 'Software', 'Network', 'Account'
  tags?: string[];
}

export interface TicketFilters {
  status?: Ticket['status'];
  priority?: Ticket['priority'];
  assignedTo?: string;
  createdBy?: string;
  category?: string;
  tags?: string[];
}

export interface TicketCreateInput {
  subject: string;
  description: string;
  status?: Ticket['status'];
  priority?: Ticket['priority'];
  assignedTo?: string;
  createdBy: string; // This would come from auth in a real app
  dueDate?: string;
  category?: string;
  tags?: string[];
}