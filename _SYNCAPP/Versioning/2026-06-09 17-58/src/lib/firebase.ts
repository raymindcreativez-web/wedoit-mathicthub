import { initializeApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

// Check if Firebase is configured
const isFirebaseConfigured = () => {
  return !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY &&
         !!process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN &&
         !!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID &&
         !!process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET &&
         !!process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID &&
         !!process.env.NEXT_PUBLIC_FIREBASE_APP_ID;
};

// Firebase instance holders - initialized lazily on client side
let app: ReturnType<typeof initializeApp> | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;
let initialized = false;

// Initialize Firebase - safe for both SSR and client-side
const initializeFirebase = () => {
  // Prevent multiple initializations
  if (initialized) {
    return;
  }

  // Only initialize in browser environment
  if (typeof window === 'undefined') {
    // Server-side: return mock values to prevent errors during SSR
    auth = null;
    db = null;
    initialized = true;
    return;
  }

  // Check if Firebase is configured
  if (!isFirebaseConfigured()) {
    // Development mode: use mock services when not configured
    console.warn('Firebase: Missing configuration, using mock services');
    auth = null;
    db = null;
    initialized = true;
    return;
  }

  try {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
    };

    // Initialize Firebase
    app = initializeApp(firebaseConfig);

    // Initialize services
    auth = getAuth(app);
    db = getFirestore(app);

    initialized = true;
    console.log('Firebase initialized successfully');
  } catch (error) {
    console.error('Error initializing Firebase:', error);
    // Fallback to mock services on error
    auth = null;
    db = null;
    initialized = true;
  }
};

// Initialize Firebase when module loads (will only run in browser due to next/dynamic behavior)
if (typeof window !== 'undefined') {
  initializeFirebase();
}

export { auth, db };
export default app;