import { db } from './firebase';

// Check if Firebase is configured
const isFirebaseConfigured = () => {
  return !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY &&
         !!process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN &&
         !!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID &&
         !!process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET &&
         !!process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID &&
         !!process.env.NEXT_PUBLIC_FIREBASE_APP_ID;
};
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
  limit,
  setDoc
} from 'firebase/firestore';
import type {
  User,
  MathScore,
  Ticket,
  Resource,
  Class,
  ClassEnrollment,
  Student,
  StudentGuardian,
  Assessment,
  AssessmentResult,
  MathAnalysis,
  InterventionPlan,
  InterventionProgress,
  ICTTicket,
  AiLog,
  RuntimeConfig,
  NotebookRef,
  Report
} from '@/types/index';

// User operations
export const createUser = async (userData: Omit<User, 'id'> & { uid: string }) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return { id: userData.uid, ...userData };
    }
    // Non-null assertion since we checked for null
    const docRef = doc(db!, 'users', userData.uid);
    await setDoc(docRef, userData);
    return { id: docRef.id, ...(userData as object) };
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return [
        { id: 'mock-user-1', email: 'teacher@mathict.com', displayName: 'Teacher', role: 'teacher', createdAt: new Date().toISOString() },
        { id: 'mock-user-2', email: 'student@mathict.com', displayName: 'Student', role: 'student', createdAt: new Date().toISOString() }
      ];
    }
    // Non-null assertion since we checked for null
    const querySnapshot = await getDocs(collection(db!, 'users'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as object)
    } as User));
  } catch (error) {
    console.error('Error getting users:', error);
    throw error;
  }
};

// Math Score operations
export const createMathScore = async (scoreData: Omit<MathScore, 'id'>) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return { id: 'mock-mathscore-1', ...scoreData, createdAt: new Date().toISOString() };
    }
    // Non-null assertion since we checked for null
    const docRef = await addDoc(collection(db!, 'mathScores'), scoreData);
    return { id: docRef.id, ...(scoreData as object) };
  } catch (error) {
    console.error('Error creating math score:', error);
    throw error;
  }
};

export const getMathScoresByStudent = async (studentId: string) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return [
        {
          id: 'mock-mathscore-1',
          studentId: studentId,
          studentName: 'John Doe',
          topic: 'Fractions',
          score: 85,
          maxScore: 100,
          date: new Date().toISOString(),
          assessmentType: 'quiz',
          createdAt: new Date().toISOString()
        },
        {
          id: 'mock-mathscore-2',
          studentId: studentId,
          studentName: 'John Doe',
          topic: 'Algebra',
          score: 92,
          maxScore: 100,
          date: new Date(Date.now() - 86400000).toISOString(), // Yesterday
          assessmentType: 'test',
          createdAt: new Date().toISOString()
        }
      ];
    }
    // Non-null assertion since we checked for null
    const q = query(
      collection(db!, 'mathScores'),
      where('studentId', '==', studentId),
      orderBy('date', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as object)
    } as MathScore));
  } catch (error) {
    console.error('Error getting math scores:', error);
    throw error;
  }
};

// Ticket operations
export const createTicket = async (ticketData: Omit<Ticket, 'id'>) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return { id: 'mock-ticket-1', ...ticketData, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
    // Non-null assertion since we checked for null
    const docRef = await addDoc(collection(db!, 'tickets'), ticketData);
    return { id: docRef.id, ...(ticketData as object) };
  } catch (error) {
    console.error('Error creating ticket:', error);
    throw error;
  }
};

export const getTickets = async (filters: Partial<Ticket> = {}) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return [
        {
          id: 'mock-ticket-1',
          subject: 'Projector not displaying in Room 205',
          description: 'The projector in Room 205 is not displaying any image when connected to the teacher\'s laptop.',
          status: 'Open',
          priority: 'Medium',
          createdAt: '2026-06-01',
          assignedTo: 'IT Support Team',
          createdBy: 'Ms. Johnson (Math Teacher)'
        },
        {
          id: 'mock-ticket-2',
          subject: 'Unable to access online quiz platform',
          description: 'Students in Period 3 Algebra class cannot access the quiz platform due to authentication errors.',
          status: 'In Progress',
          priority: 'High',
          createdAt: '2026-06-02',
          assignedTo: 'Tech Coordinator',
          createdBy: 'Mr. Davis (Math Teacher)'
        }
      ];
    }
    // Non-null assertion since we checked for null
    let q = collection(db!, 'tickets') as any;

    if (filters.status) {
      q = query(q, where('status', '==', filters.status));
    }
    if (filters.priority) {
      q = query(q, where('priority', '==', filters.priority));
    }

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as object)
    } as Ticket));
  } catch (error) {
    console.error('Error getting tickets:', error);
    throw error;
  }
};

export const updateTicket = async (id: string, updates: Partial<Ticket>) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return { id, ...updates, updatedAt: new Date().toISOString() };
    }
    // Non-null assertion since we checked for null
    const docRef = doc(db!, 'tickets', id);
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
    if (!db) {
      // Return mock data when Firebase is not configured
      return { id: 'mock-resource-1', ...resourceData, createdAt: new Date().toISOString() };
    }
    // Non-null assertion since we checked for null
    const docRef = await addDoc(collection(db!, 'resources'), resourceData);
    return { id: docRef.id, ...(resourceData as object) };
  } catch (error) {
    console.error('Error creating resource:', error);
    throw error;
  }
};

export const getResources = async (filters: Partial<Resource> = {}) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return [
        {
          id: 'mock-resource-1',
          title: 'Fractions Worksheet',
          description: 'Practice worksheet for fraction operations',
          subject: 'Mathematics',
          gradeLevel: '5',
          resourceType: 'worksheet',
          fileUrl: 'https://example.com/fractions-worksheet.pdf',
          fileType: 'application/pdf',
          isPublic: true,
          createdBy: 'mock-user-1',
          createdAt: new Date().toISOString()
        },
        {
          id: 'mock-resource-2',
          title: 'Introduction to Algebra Video',
          description: 'Video tutorial introducing basic algebra concepts',
          subject: 'Mathematics',
          gradeLevel: '6',
          resourceType: 'video',
          fileUrl: 'https://example.com/algebra-intro.mp4',
          fileType: 'video/mp4',
          isPublic: true,
          createdBy: 'mock-user-1',
          createdAt: new Date().toISOString()
        }
      ];
    }
    // Non-null assertion since we checked for null
    let q = collection(db!, 'resources') as any;

    if (filters.subject) {
      q = query(q, where('subject', '==', filters.subject));
    }
    if (filters.gradeLevel) {
      q = query(q, where('gradeLevel', '==', filters.gradeLevel));
    }

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as object)
    } as Resource));
  } catch (error) {
    console.error('Error getting resources:', error);
    throw error;
  }
};

// Class operations
export const createClass = async (classData: Omit<Class, 'id'>) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return { id: 'mock-class-1', ...classData, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
    // Non-null assertion since we checked for null
    const docRef = await addDoc(collection(db!, 'classes'), classData);
    return { id: docRef.id, ...classData };
  } catch (error) {
    console.error('Error creating class:', error);
    throw error;
  }
};

export const getClasses = async (filters: Partial<Class> = {}) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return [
        {
          id: 'mock-class-1',
          name: 'Grade 5 Mathematics',
          gradeLevel: '5',
          subject: 'Mathematics',
          teacherId: 'mock-user-1',
          roomNumber: '201',
          schedule: 'Mon/Wed/Fri 10:00-11:00',
          maxStudents: 25,
          currentEnrollment: 20,
          description: 'Basic arithmetic and introductory geometry',
          syllabusUrl: 'https://example.com/grade5-math-syllabus.pdf',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          isActive: true
        },
        {
          id: 'mock-class-2',
          name: 'Grade 8 ICT',
          gradeLevel: '8',
          subject: 'ICT',
          teacherId: 'mock-user-1',
          roomNumber: '105',
          schedule: 'Tue/Thu 14:00-15:30',
          maxStudents: 20,
          currentEnrollment: 15,
          description: 'Introduction to computer systems and productivity software',
          syllabusUrl: 'https://example.com/grade8-ict-syllabus.pdf',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          isActive: true
        }
      ];
    }
    // Non-null assertion since we checked for null
    let q = collection(db!, 'classes') as any;

    if (filters.gradeLevel) {
      q = query(q, where('gradeLevel', '==', filters.gradeLevel));
    }
    if (filters.subject) {
      q = query(q, where('subject', '==', filters.subject));
    }
    if (filters.isActive !== undefined) {
      q = query(q, where('isActive', '==', filters.isActive));
    }

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as object)
    } as Class));
  } catch (error) {
    console.error('Error getting classes:', error);
    throw error;
  }
};

export const updateClass = async (id: string, updates: Partial<Class>) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return { id, ...updates, updatedAt: new Date().toISOString() };
    }
    // Non-null assertion since we checked for null
    const docRef = doc(db!, 'classes', id);
    await updateDoc(docRef, updates);
    return { id, ...updates };
  } catch (error) {
    console.error('Error updating class:', error);
    throw error;
  }
};

export const deleteClass = async (id: string) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return { id };
    }
    // Non-null assertion since we checked for null
    await deleteDoc(doc(db!, 'classes', id));
    return { id };
  } catch (error) {
    console.error('Error deleting class:', error);
    throw error;
  }
};

// Student operations
export const createStudent = async (studentData: Omit<Student, 'id'>) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return { id: 'mock-student-1', ...studentData, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
    // Non-null assertion since we checked for null
    const docRef = await addDoc(collection(db!, 'students'), studentData);
    return { id: docRef.id, ...studentData };
  } catch (error) {
    console.error('Error creating student:', error);
    throw error;
  }
};

export const getStudents = async (filters: Partial<Student> = {}) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return [
        {
          id: 'mock-student-1',
          firstName: 'John',
          lastName: 'Doe',
          dateOfBirth: '2010-05-15',
          gender: 'male',
          email: 'john.doe@school.com',
          phone: '555-1234',
          address: {
            street: '123 School St',
            city: 'Education City',
            state: 'ED',
            postalCode: '12345',
            country: 'USA'
          },
          enrollmentDate: '2023-09-01',
          status: 'active',
          parentGuardianContact: {
            name: 'Jane Doe',
            relationship: 'Mother',
            phone: '555-5678',
            email: 'jane.doe@email.com'
          },
          currentClassId: 'mock-class-1',
          studentId: 'ST001',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 'mock-student-2',
          firstName: 'Sarah',
          lastName: 'Smith',
          dateOfBirth: '2011-08-22',
          gender: 'female',
          email: 'sarah.smith@school.com',
          phone: '555-5678',
          address: {
            street: '456 Learning Ave',
            city: 'Education City',
            state: 'ED',
            postalCode: '12345',
            country: 'USA'
          },
          enrollmentDate: '2023-09-01',
          status: 'active',
          parentGuardianContact: {
            name: 'Robert Smith',
            relationship: 'Father',
            phone: '555-9012',
            email: 'robert.smith@email.com'
          },
          currentClassId: 'mock-class-1',
          studentId: 'ST002',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      ];
    }
    // Non-null assertion since we checked for null
    let q = collection(db!, 'students') as any;

    if (filters.status) {
      q = query(q, where('status', '==', filters.status));
    }
    if (filters.currentClassId) {
      q = query(q, where('currentClassId', '==', filters.currentClassId));
    }

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as object)
    } as Student));
  } catch (error) {
    console.error('Error getting students:', error);
    throw error;
  }
};

export const updateStudent = async (id: string, updates: Partial<Student>) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return { id, ...updates, updatedAt: new Date().toISOString() };
    }
    // Non-null assertion since we checked for null
    const docRef = doc(db!, 'students', id);
    await updateDoc(docRef, updates);
    return { id, ...updates };
  } catch (error) {
    console.error('Error updating student:', error);
    throw error;
  }
};

// Class Enrollment operations
export const createClassEnrollment = async (enrollmentData: Omit<ClassEnrollment, 'id'>) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return { id: 'mock-enrollment-1', ...enrollmentData, enrolledAt: new Date().toISOString() };
    }
    // Non-null assertion since we checked for null
    const docRef = await addDoc(collection(db!, 'classEnrollments'), enrollmentData);
    return { id: docRef.id, ...enrollmentData };
  } catch (error) {
    console.error('Error creating class enrollment:', error);
    throw error;
  }
};

export const getClassEnrollmentsByStudent = async (studentId: string) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return [
        {
          id: 'mock-enrollment-1',
          classId: 'mock-class-1',
          studentId: studentId,
          enrolledAt: new Date().toISOString(),
          status: 'active',
          finalGrade: 'A',
          notes: 'Excellent student'
        },
        {
          id: 'mock-enrollment-2',
          classId: 'mock-class-2',
          studentId: studentId,
          enrolledAt: new Date(Date.now() - 86400000).toISOString(), // Yesterday
          status: 'active',
          finalGrade: 'B+',
          notes: 'Good progress'
        }
      ];
    }
    // Non-null assertion since we checked for null
    const q = query(
      collection(db!, 'classEnrollments'),
      where('studentId', '==', studentId)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as object)
    } as ClassEnrollment));
  } catch (error) {
    console.error('Error getting class enrollments:', error);
    throw error;
  }
};

// Assessment operations
export const createAssessment = async (assessmentData: Omit<Assessment, 'id'>) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return { id: 'mock-assessment-1', ...assessmentData, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
    // Non-null assertion since we checked for null
    const docRef = await addDoc(collection(db!, 'assessments'), assessmentData);
    return { id: docRef.id, ...assessmentData };
  } catch (error) {
    console.error('Error creating assessment:', error);
    throw error;
  }
};

export const getAssessmentsByClass = async (classId: string) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return [
        {
          id: 'mock-assessment-1',
          title: 'Fractions Quiz',
          description: 'Quiz on fraction operations',
          classId: classId,
          subject: 'Mathematics',
          gradeLevel: '5',
          assessmentType: 'quiz',
          totalMarks: 20,
          passingMarks: 12,
          startDate: new Date().toISOString(),
          endDate: new Date(Date.now() + 7*86400000).toISOString(), // One week from now
          durationMinutes: 30,
          instructions: 'Complete all questions to the best of your ability.',
          createdBy: 'mock-user-1',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          isActive: true,
          maxAttempts: 2
        }
      ];
    }
    // Non-null assertion since we checked for null
    const q = query(
      collection(db!, 'assessments'),
      where('classId', '==', classId),
      where('isActive', '==', true)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as object)
    } as Assessment));
  } catch (error) {
    console.error('Error getting assessments:', error);
    throw error;
  }
};

export const updateAssessment = async (id: string, updates: Partial<Assessment>) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return { id, ...updates, updatedAt: new Date().toISOString() };
    }
    // Non-null assertion since we checked for null
    const docRef = doc(db!, 'assessments', id);
    await updateDoc(docRef, updates);
    return { id, ...updates };
  } catch (error) {
    console.error('Error updating assessment:', error);
    throw error;
  }
};

export const createAssessmentResult = async (resultData: Omit<AssessmentResult, 'id'>) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return { id: 'mock-assessmentresult-1', ...resultData, completedAt: new Date().toISOString() };
    }
    // Non-null assertion since we checked for null
    const docRef = await addDoc(collection(db!, 'assessmentResults'), resultData);
    return { id: docRef.id, ...resultData };
  } catch (error) {
    console.error('Error creating assessment result:', error);
    throw error;
  }
};

// Math Analysis operations
export const createMathAnalysis = async (analysisData: Omit<MathAnalysis, 'id'>) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return { id: 'mock-mathanalysis-1', ...analysisData, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
    // Non-null assertion since we checked for null
    const docRef = await addDoc(collection(db!, 'mathAnalysis'), analysisData);
    return { id: docRef.id, ...analysisData };
  } catch (error) {
    console.error('Error creating math analysis:', error);
    throw error;
  }
};

export const getMathAnalysisByStudent = async (studentId: string) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return [
        {
          id: 'mock-mathanalysis-1',
          studentId: studentId,
          studentName: 'John Doe',
          classId: 'mock-class-1',
          topic: 'Fractions',
          analysisType: 'skillGap',
          analysisDate: new Date().toISOString(),
          periodStart: new Date(Date.now() - 30*86400000).toISOString(), // 30 days ago
          periodEnd: new Date().toISOString(),
          dataPoints: 5,
          averageScore: 78.5,
          scoreTrend: 'improving',
          strengthAreas: ['Adding fractions', 'Subtracting fractions'],
          weaknessAreas: ['Multiplying fractions', 'Dividing fractions'],
          misconceptions: ['Confusing numerator and denominator'],
          recommendations: ['Practice visual fraction models', 'Use real-world examples'],
          confidenceScore: 85,
          generatedBy: 'mock-user-1',
          isAIGenerated: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      ];
    }
    // Non-null assertion since we checked for null
    const q = query(
      collection(db!, 'mathAnalysis'),
      where('studentId', '==', studentId),
      orderBy('analysisDate', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as object)
    } as MathAnalysis));
  } catch (error) {
    console.error('Error getting math analysis:', error);
    throw error;
  }
};

// Intervention Plan operations
export const createInterventionPlan = async (planData: Omit<InterventionPlan, 'id'>) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return { id: 'mock-intervention-1', ...planData, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
    // Non-null assertion since we checked for null
    const docRef = await addDoc(collection(db!, 'interventionPlans'), planData);
    return { id: docRef.id, ...planData };
  } catch (error) {
    console.error('Error creating intervention plan:', error);
    throw error;
  }
};

export const getInterventionPlansByStudent = async (studentId: string) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return [
        {
          id: 'mock-intervention-1',
          studentId: studentId,
          studentName: 'John Doe',
          classId: 'mock-class-1',
          title: 'Fraction Skills Improvement',
          description: 'Targeted intervention to improve fraction operations',
          goal: 'Increase fraction assessment scores from 70% to 85% within 6 weeks',
          startDate: new Date().toISOString(),
          endDate: new Date(Date.now() + 6*7*86400000).toISOString(), // 6 weeks from now
          status: 'active',
          priority: 'high',
          interventionType: 'remediation',
          subjects: ['Mathematics'],
          strategies: ['Visual fraction models', 'Guided practice', 'Real-world applications'],
          resourcesNeeded: ['Fraction manipulatives', 'Worksheets', 'Online practice tools'],
          successCriteria: ['Score 85% or higher on fraction assessments', 'Complete 5 practice worksheets with 80% accuracy'],
          progressMetrics: [
            {
              metric: 'Assessment Score',
              targetValue: 85,
              currentValue: 70,
              unit: '%',
              lastUpdated: new Date().toISOString()
            }
          ],
          assignedTo: 'mock-user-1',
          createdBy: 'mock-user-1',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          notes: 'Student shows enthusiasm for visual learning approaches',
          parentInvolved: true,
          reviewDate: new Date(Date.now() + 2*7*86400000).toISOString() // 2 weeks from now
        }
      ];
    }
    // Non-null assertion since we checked for null
    const q = query(
      collection(db!, 'interventionPlans'),
      where('studentId', '==', studentId)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as object)
    } as InterventionPlan));
  } catch (error) {
    console.error('Error getting intervention plans:', error);
    throw error;
  }
};

export const updateInterventionPlan = async (id: string, updates: Partial<InterventionPlan>) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return { id, ...updates, updatedAt: new Date().toISOString() };
    }
    // Non-null assertion since we checked for null
    const docRef = doc(db!, 'interventionPlans', id);
    await updateDoc(docRef, updates);
    return { id, ...updates };
  } catch (error) {
    console.error('Error updating intervention plan:', error);
    throw error;
  }
};

// ICT Ticket operations
export const createIctTicket = async (ticketData: Omit<ICTTicket, 'id'>) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return { id: 'mock-icticket-1', ...ticketData, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
    // Non-null assertion since we checked for null
    // Set default status to 'New' for new ICT tickets
    const ticketWithStatus = { ...ticketData, status: 'New' };
    const docRef = await addDoc(collection(db!, 'ictTickets'), ticketWithStatus);
    return { id: docRef.id, ...(ticketWithStatus as object) };
  } catch (error) {
    console.error('Error creating ICT ticket:', error);
    throw error;
  }
};

export const getIctTickets = async (filters: Partial<ICTTicket> = {}) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return [
        {
          id: 'mock-icticket-1',
          subject: 'Projector not displaying in Room 205',
          description: 'The projector in Room 205 is not displaying any image when connected to the teacher\'s laptop.',
          status: 'Open',
          priority: 'Medium',
          createdAt: '2026-06-01',
          assignedTo: 'IT Support Team',
          createdBy: 'Ms. Johnson (Math Teacher)',
          category: 'Projector',
          deviceDetails: {
            type: 'Projector',
            brand: 'Epson',
            model: 'PowerLite 1781W',
            serialNumber: 'ABC123'
          },
          location: {
            room: '205',
            building: 'Main Building',
            floor: '2'
          },
          impact: 'High',
          urgency: 'High'
        },
        {
          id: 'mock-icticket-2',
          subject: 'Unable to access online quiz platform',
          description: 'Students in Period 3 Algebra class cannot access the quiz platform due to authentication errors.',
          status: 'In Progress',
          priority: 'High',
          createdAt: '2026-06-02',
          assignedTo: 'Tech Coordinator',
          createdBy: 'Mr. Davis (Math Teacher)',
          category: 'Software',
          deviceDetails: {
            type: 'Web Application',
            brand: 'QuizPlatform Inc.',
            model: 'QuizPro v2.1'
          },
          location: {
            room: '210',
            building: 'Main Building',
            floor: '2'
          },
          impact: 'Medium',
          urgency: 'Medium'
        }
      ];
    }
    // Non-null assertion since we checked for null
    let q = collection(db!, 'ictTickets') as any;

    if (filters.status) {
      q = query(q, where('status', '==', filters.status));
    }
    if (filters.priority) {
      q = query(q, where('priority', '==', filters.priority));
    }
    if (filters.assignedTo) {
      q = query(q, where('assignedTo', '==', filters.assignedTo));
    }
    if (filters.category) {
      q = query(q, where('category', '==', filters.category));
    }

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as object)
    } as ICTTicket));
  } catch (error) {
    console.error('Error getting ICT tickets:', error);
    throw error;
  }
};

export const updateIctTicket = async (id: string, updates: Partial<ICTTicket>) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return { id, ...updates, updatedAt: new Date().toISOString() };
    }
    // Non-null assertion since we checked for null
    const docRef = doc(db!, 'ictTickets', id);
    await updateDoc(docRef, updates);
    return { id, ...updates };
  } catch (error) {
    console.error('Error updating ICT ticket:', error);
    throw error;
  }
};

// AI Log operations
export const createAiLog = async (logData: Omit<AiLog, 'id'>) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return { id: 'mock-ailog-1', ...logData, createdAt: new Date().toISOString() };
    }
    // Non-null assertion since we checked for null
    const docRef = await addDoc(collection(db!, 'aiLogs'), logData);
    return { id: docRef.id, ...logData };
  } catch (error) {
    console.error('Error creating AI log:', error);
    throw error;
  }
};

export const getAiLogsByUser = async (userId: string) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return [
        {
          id: 'mock-ailog-1',
          userId: userId,
          userName: 'Teacher Smith',
          actionType: 'lessonGeneration',
          prompt: 'Create a lesson plan for teaching fractions to 5th graders',
          response: 'Here is a comprehensive lesson plan on fractions...',
          parameters: {
            temperature: 0.7,
            maxTokens: 1000
          },
          modelUsed: 'gemini-pro',
          tokensUsed: 250,
          cost: 0.005,
          status: 'success',
          createdAt: new Date().toISOString()
        },
        {
          id: 'mock-ailog-2',
          userId: userId,
          userName: 'Teacher Smith',
          actionType: 'quizGeneration',
          prompt: 'Generate a 10-question quiz on algebraic expressions',
          response: 'Here is a quiz on algebraic expressions...',
          parameters: {
            temperature: 0.5,
            maxTokens: 800
          },
          modelUsed: 'gemini-pro',
          tokensUsed: 180,
          cost: 0.0036,
          status: 'success',
          createdAt: new Date(Date.now() - 3600000).toISOString() // 1 hour ago
        }
      ];
    }
    // Non-null assertion since we checked for null
    const q = query(
      collection(db!, 'aiLogs'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as object)
    } as AiLog));
  } catch (error) {
    console.error('Error getting AI logs:', error);
    throw error;
  }
};

// Runtime Config operations
export const createRuntimeConfig = async (configData: Omit<RuntimeConfig, 'id'>) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return { id: 'mock-runtimeconfig-1', ...configData, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
    // Non-null assertion since we checked for null
    const docRef = await addDoc(collection(db!, 'runtimeConfig'), configData);
    return { id: docRef.id, ...configData };
  } catch (error) {
    console.error('Error creating runtime config:', error);
    throw error;
  }
};

export const getRuntimeConfigByKey = async (key: string) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      if (key === 'ui.theme') {
        return { id: 'mock-runtimeconfig-1', key: 'ui.theme', value: 'light', description: 'User interface theme', category: 'ui', dataType: 'string', isEditable: true, requiresRestart: false, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), createdBy: 'system', version: 1 } as RuntimeConfig;
      }
      return null;
    }
    // Non-null assertion since we checked for null
    const q = query(
      collection(db!, 'runtimeConfig'),
      where('key', '==', key)
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return null;
    }
    const doc = querySnapshot.docs[0];
    return { id: doc.id, ...(doc.data() as object) } as RuntimeConfig;
  } catch (error) {
    console.error('Error getting runtime config:', error);
    throw error;
  }
};

export const updateRuntimeConfig = async (id: string, updates: Partial<RuntimeConfig>) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return { id, ...updates, updatedAt: new Date().toISOString() };
    }
    // Non-null assertion since we checked for null
    const docRef = doc(db!, 'runtimeConfig', id);
    await updateDoc(docRef, updates);
    return { id, ...updates };
  } catch (error) {
    console.error('Error updating runtime config:', error);
    throw error;
  }
};

// Notebook Ref operations
export const createNotebookRef = async (notebookData: Omit<NotebookRef, 'id'>) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return { id: 'mock-notebookref-1', ...notebookData, createdAt: new Date().toISOString() };
    }
    // Non-null assertion since we checked for null
    const docRef = await addDoc(collection(db!, 'notebookRefs'), notebookData);
    return { id: docRef.id, ...notebookData };
  } catch (error) {
    console.error('Error creating notebook ref:', error);
    throw error;
  }
};

export const getNotebookRefs = async (filters: Partial<NotebookRef> = {}) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return [
        {
          id: 'mock-notebookref-1',
          title: 'Grade 5 Fractions Lesson Plan',
          description: 'Detailed lesson plan for teaching fraction operations',
          type: 'lesson_plan',
          subject: 'Mathematics',
          gradeLevel: '5',
          fileUrl: 'https://example.com/grade5-fractions-lesson-plan.pdf',
          fileType: 'application/pdf',
          isPublic: true,
          createdBy: 'mock-user-1',
          createdAt: new Date().toISOString()
        },
        {
          id: 'mock-notebookref-2',
          title: 'Introduction to Coding Video',
          description: 'Video tutorial introducing basic programming concepts',
          type: 'video',
          subject: 'ICT',
          gradeLevel: '6',
          fileUrl: 'https://example.com/intro-to-coding.mp4',
          fileType: 'video/mp4',
          isPublic: true,
          createdBy: 'mock-user-1',
          createdAt: new Date().toISOString()
        }
      ];
    }
    // Non-null assertion since we checked for null
    let q = collection(db!, 'notebookRefs') as any;

    if (filters.type) {
      q = query(q, where('type', '==', filters.type));
    }
    if (filters.subject) {
      q = query(q, where('subject', '==', filters.subject));
    }
    if (filters.gradeLevel) {
      q = query(q, where('gradeLevel', '==', filters.gradeLevel));
    }
    if (filters.isPublic !== undefined) {
      q = query(q, where('isPublic', '==', filters.isPublic));
    }

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as object)
    } as NotebookRef));
  } catch (error) {
    console.error('Error getting notebook refs:', error);
    throw error;
  }
};

// Report operations
export const createReport = async (reportData: Omit<Report, 'id'>) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return { id: 'mock-report-1', ...reportData, generatedAt: new Date().toISOString() };
    }
    // Non-null assertion since we checked for null
    const docRef = await addDoc(collection(db!, 'reports'), reportData);
    return { id: docRef.id, ...reportData };
  } catch (error) {
    console.error('Error creating report:', error);
    throw error;
  }
};

export const getReportsByUser = async (userId: string) => {
  try {
    if (!db) {
      // Return mock data when Firebase is not configured
      return [
        {
          id: 'mock-report-1',
          userId: userId,
          generatedBy: userId,
          reportType: 'classPerformance',
          title: 'Grade 5 Mathematics Performance Report',
          description: 'Analysis of student performance in Grade 5 Mathematics',
          data: {
            averageScore: 78.5,
            passRate: 82,
            studentsImproved: 15,
            totalStudents: 20
          },
          format: 'pdf',
          status: 'completed',
          generatedAt: new Date().toISOString()
        }
      ];
    }
    // Non-null assertion since we checked for null
    const q = query(
      collection(db!, 'reports'),
      where('generatedBy', '==', userId),
      orderBy('generatedAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as object)
    } as Report));
  } catch (error) {
    console.error('Error getting reports:', error);
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
  getResources,
  createClass,
  getClasses,
  updateClass,
  deleteClass,
  createStudent,
  getStudents,
  updateStudent,
  createClassEnrollment,
  getClassEnrollmentsByStudent,
  createAssessment,
  getAssessmentsByClass,
  updateAssessment,
  createAssessmentResult,
  createMathAnalysis,
  getMathAnalysisByStudent,
  createInterventionPlan,
  getInterventionPlansByStudent,
  updateInterventionPlan,
  createIctTicket,
  getIctTickets,
  updateIctTicket,
  createAiLog,
  getAiLogsByUser,
  createRuntimeConfig,
  getRuntimeConfigByKey,
  updateRuntimeConfig,
  createNotebookRef,
  getNotebookRefs,
  createReport,
  getReportsByUser
};