import { Ticket } from './ticket';

export interface ICTTicket extends Ticket {
  category: 'Hardware' | 'Software' | 'Network' | 'Account' | 'Printer' | 'Projector' | 'Laptop' | 'Desktop' | 'Tablet' | 'Smartphone' | 'Other';
  deviceDetails?: {
    type: string;
    brand?: string;
    model?: string;
    serialNumber?: string;
    assetTag?: string;
  };
  location?: {
    room: string;
    building?: string;
    floor?: string;
  };
  impact: 'Low' | 'Medium' | 'High' | 'Critical';
  urgency: 'Low' | 'Medium' | 'High' | 'Critical';
  // Steps taken to resolve
  resolutionSteps?: string[];
  // ICT staff notes
  ictNotes?: string;
}

export interface ICTTicketCreateInput extends Omit<ICTTicket, 'id' | 'createdAt' | 'updatedAt' | 'status'> {
  // We'll set default status to 'Open' in the service
}