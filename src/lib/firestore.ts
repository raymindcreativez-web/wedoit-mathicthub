import { db } from './firebase';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  limit
} from 'firebase/firestore';
import type { User, MathScore, Ticket, Resource } from '@/types';

// User operations
export const createUser = async (userData: Omit<User, 'id'>) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), userData);
    return { id: docRef.id, ...userData };
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'users'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as User));
  } catch (error) {
    console.error('Error getting users:', error);
    throw error;
  }
};

// Math Score operations
export const createMathScore = async (scoreData: Omit<MathScore, 'id'>) => {
  try {
    const docRef = await addDoc(collection(db, 'mathScores'), scoreData);
    return { id: docRef.id, ...scoreData };
  } catch (error) {
    console.error('Error creating math score:', error);
    throw error;
  }
};

export const getMathScoresByStudent = async (studentId: string) => {
  try {
    const q = query(
      collection(db, 'mathScores'),
      where('studentId', '==', studentId),
      orderBy('date', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as MathScore));
  } catch (error) {
    console.error('Error getting math scores:', error);
    throw error;
  }
};

// Ticket operations
export const createTicket = async (ticketData: Omit<Ticket, 'id'>) => {
  try {
    const docRef = await addDoc(collection(db, 'tickets'), ticketData);
    return { id: docRef.id, ...ticketData };
  } catch (error) {
    console.error('Error creating ticket:', error);
    throw error;
  }
};

export const getTickets = async (filters: Partial<Ticket> = {}) => {
  try {
    let q = collection(db, 'tickets') as any;

    if (filters.status) {
      q = query(q, where('status', '==', filters.status));
    }
    if (filters.priority) {
      q = query(q, where('priority', '==', filters.priority));
    }

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Ticket));
  } catch (error) {
    console.error('Error getting tickets:', error);
    throw error;
  }
};

export const updateTicket = async (id: string, updates: Partial<Ticket>) => {
  try {
    const docRef = doc(db, 'tickets', id);
    await updateDoc(docRef, updates);
    return { id, ...updates };
  } catch (error) {
    console.error('Error updating ticket:', error);
    throw error;
  }
};

// Resource operations
export const createResource = async (resourceData: Omit<Resource, 'id'>) => {
  try {
    const docRef = await addDoc(collection(db, 'resources'), resourceData);
    return { id: docRef.id, ...resourceData };
  } catch (error) {
    console.error('Error creating resource:', error);
    throw error;
  }
};

export const getResources = async (filters: Partial<Resource> = {}) => {
  try {
    let q = collection(db, 'resources') as any;

    if (filters.subject) {
      q = query(q, where('subject', '==', filters.subject));
    }
    if (filters.gradeLevel) {
      q = query(q, where('gradeLevel', '==', filters.gradeLevel));
    }

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Resource));
  } catch (error) {
    console.error('Error getting resources:', error);
    throw error;
  }
};

export default {
  createUser,
  getUsers,
  createMathScore,
  getMathScoresByStudent,
  createTicket,
  getTickets,
  updateTicket,
  createResource,
  getResources
};