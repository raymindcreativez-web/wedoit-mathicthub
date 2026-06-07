export type UserRole = 'admin' | 'teacher' | 'student' | 'parent';

export interface AppUser {
  id: string;
  email: string;
  displayName: string;
  role: UserRole;
  schoolId: string;
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  displayName: string;
  role: UserRole;
  createdAt: string;
  updatedAt?: string;
  profilePhoto?: string;
  preferences?: {
    theme: 'light' | 'dark';
    notifications: boolean;
    emailUpdates: boolean;
  };
}

export interface UserCredentials {
  email: string;
  password: string;
}

export interface UserRegistration extends UserCredentials {
  displayName: string;
  role: UserRole;
}