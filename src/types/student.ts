export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: string; // ISO date string
  gender?: 'male' | 'female' | 'other' | 'preferNotToSay';
  email?: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  enrollmentDate: string; // ISO date string
  status: 'active' | 'inactive' | 'graduated' | 'transferred';
  parentGuardianContact?: {
    name: string;
    relationship: string;
    phone: string;
    email: string;
  };
  // Academic info
  currentClassId?: string; // Reference to classes
  studentId: string; // School-specific ID
  createdAt: string; // ISO date string
  updatedAt?: string;
}

export interface StudentGuardian {
  id: string;
  studentId: string;
  guardianName: string;
  relationship: string;
  phone: string;
  email: string;
  address?: string;
  createdAt: string;
}