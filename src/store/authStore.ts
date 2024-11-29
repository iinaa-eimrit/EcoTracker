import { create } from 'zustand';
import { auth, db } from '../lib/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import type { User } from '../types';

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  signUp: (email: string, password: string, displayName: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => {
  // Track authentication state changes
  onAuthStateChanged(auth, async (firebaseUser) => {
    if (firebaseUser) {
      try {
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data() as User;
          set({ user: userData, loading: false, error: null });
        } else {
          console.error('User document does not exist.');
          set({ user: null, loading: false, error: 'User data not found.' });
        }
      } catch (error) {
        console.error('Error fetching user document:', error);
        set({ user: null, loading: false, error: 'Failed to fetch user data.' });
      }
    } else {
      set({ user: null, loading: false });
    }
  });

  return {
    user: null,
    loading: true,
    error: null,

    // Sign up functionality
    signUp: async (email, password, displayName) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const userData: User = {
          id: userCredential.user.uid,
          email,
          displayName,
          points: 0,
          challenges: [],
        };
        await setDoc(doc(db, 'users', userCredential.user.uid), userData);
        set({ user: userData, error: null });
      } catch (error) {
        console.error('Sign-up error:', error);
        set({ error: (error as Error).message });
      }
    },

    // Sign in functionality
    signIn: async (email, password) => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data() as User;
          set({ user: userData, error: null });
        } else {
          console.error('User document does not exist.');
          set({ error: 'User data not found in Firestore.' });
        }
      } catch (error) {
        console.error('Sign-in error:', error);
        set({ error: (error as Error).message });
      }
    },

    // Sign out functionality
    signOut: async () => {
      try {
        await firebaseSignOut(auth);
        set({ user: null, error: null });
      } catch (error) {
        console.error('Sign-out error:', error);
        set({ error: (error as Error).message });
      }
    },
  };
});
