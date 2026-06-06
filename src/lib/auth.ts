import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './firebase';

// Check if Firebase is configured
const isFirebaseConfigured = () => {
  return auth !== null;
};

// Sign in with email and password
export const signIn = async (email: string, password: string) => {
  try {
    if (!isFirebaseConfigured()) {
      // Return mock user when Firebase is not configured
      return {
        uid: 'mock-user-id',
        email: email,
        displayName: email.split('@')[0],
        photoURL: null,
        isAnonymous: false,
        providerData: [],
        refreshToken: 'mock-refresh-token',
        metadata: {
          createdAt: new Date().toISOString(),
          lastSignInAt: new Date().toISOString()
        }
      };
    }

    // Non-null assertion since we checked isFirebaseConfigured
    const userCredential = await signInWithEmailAndPassword(auth!, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
};

// Sign up with email and password
export const signUp = async (email: string, password: string, additionalData: Record<string, any> = {}) => {
  try {
    if (!isFirebaseConfigured()) {
      // Return mock user when Firebase is not configured
      return {
        uid: 'mock-user-id',
        email: email,
        displayName: email.split('@')[0],
        photoURL: null,
        isAnonymous: false,
        providerData: [],
        refreshToken: 'mock-refresh-token',
        metadata: {
          createdAt: new Date().toISOString(),
          lastSignInAt: new Date().toISOString()
        }
      };
    }

    // Non-null assertion since we checked isFirebaseConfigured
    const userCredential = await createUserWithEmailAndPassword(auth!, email, password);
    // In a real app, you would save additional data to Firestore here
    return userCredential.user;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

// Sign out
export const logout = async () => {
  try {
    if (isFirebaseConfigured()) {
      // Non-null assertion since we checked isFirebaseConfigured
      await signOut(auth!);
    }
    // If Firebase is not configured, just return successfully
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};

// Listen to auth state changes
export const onAuthChange = (callback: (user: User | null) => void) => {
  if (isFirebaseConfigured()) {
    // Non-null assertion since we checked isFirebaseConfigured
    return onAuthStateChanged(auth!, callback);
  }
  // If Firebase is not configured, call callback with null and return unsubscribe function
  callback(null);
  return () => {};
};

// Get current user
export const getCurrentUser = () => {
  if (isFirebaseConfigured()) {
    // Non-null assertion since we checked isFirebaseConfigured
    return auth!.currentUser;
  }
  // Return mock user when Firebase is not configured
  return {
    uid: 'mock-user-id',
    email: 'teacher@mathict.com',
    displayName: 'Teacher',
    photoURL: null,
    isAnonymous: false,
    providerData: [],
    refreshToken: 'mock-refresh-token',
    metadata: {
      createdAt: new Date().toISOString(),
      lastSignInAt: new Date().toISOString()
    }
  };
};

// Check if user is authenticated
export const isAuthenticated = () => {
  if (isFirebaseConfigured()) {
    return !!auth!.currentUser;
  }
  // When Firebase is not configured, simulate authenticated user for development
  return true;
};

export default {
  signIn,
  signUp,
  logout,
  onAuthChange,
  getCurrentUser,
  isAuthenticated
};