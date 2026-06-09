export interface User {
  id: string;
  email: string;
  displayName: string;
  role: 'admin' | 'teacher' | 'student' | 'parent';
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
  role: 'admin' | 'teacher' | 'student' | 'parent';
}