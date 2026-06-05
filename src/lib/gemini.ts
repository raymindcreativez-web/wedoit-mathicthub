import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// Export the model instance
export const geminiModel = genAI.getGenerativeModel({ model: 'gemini-pro' });

// Helper function to generate content with error handling
export const generateContent = async (prompt: string): Promise<string> => {
  try {
    const result = await geminiModel.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating content with Gemini:', error);
    throw new Error('Failed to generate content with Gemini AI');
  }
};

// Specific helper functions for MathICT Hub features
export const generateLessonPlan = async (topic: string, gradeLevel: string, duration: string): Promise<any> => {
  const prompt = `
    Create a detailed lesson plan for:
    Topic: ${topic}
    Grade Level: ${gradeLevel}
    Duration: ${duration} minutes

    Please include:
    1. Learning objectives
    2. Materials needed
    3. Introduction/warm-up activity
    4. Main instructional activities
    5. Guided practice
    6. Independent practice
    7. Assessment/closure
    8. Differentiation strategies
    9. Homework/extension activities

    Format the response as a JSON object with these sections.
  `;

  const text = await generateContent(prompt);

  // Try to parse as JSON, if not possible, wrap in a basic structure
  try {
    return JSON.parse(text);
  } catch (e) {
    return {
      topic,
      gradeLevel,
      duration,
      generatedContent: text,
      note: 'AI response was not valid JSON, raw content provided'
    };
  }
};

export const generateQuiz = async (topic: string, gradeLevel: string, numQuestions: string, difficulty: string): Promise<any> => {
  const prompt = `
    Generate a quiz for:
    Topic: ${topic}
    Grade Level: ${gradeLevel}
    Number of Questions: ${numQuestions}
    Difficulty: ${difficulty}

    Please include:
    1. Multiple choice questions (4 options each, with correct answer indicated)
    2. Short answer questions (if appropriate for the topic and grade level)
    3. Answer key with explanations

    Format the response as a JSON object with the following structure:
    {
      "quizTitle": string,
      "topic": string,
      "gradeLevel": string,
      "numQuestions": number,
      "difficulty": string,
      "questions": [
        {
          "id": number,
          "type": "multiple-choice" | "short-answer",
          "question": string,
          "options": string[], // for multiple-choice
          "correctAnswer": string | number, // for multiple-choice: index of correct option; for short-answer: the answer
          "explanation": string
        }
      ]
    }
  `;

  const text = await generateContent(prompt);

  // Try to parse as JSON, if not possible, wrap in a basic structure
  try {
    return JSON.parse(text);
  } catch (e) {
    return {
      topic,
      gradeLevel,
      numQuestions,
      difficulty,
      generatedContent: text,
      note: 'AI response was not valid JSON, raw content provided'
    };
  }
};

export const generateInterventionPlan = async (studentId: string, topic: string, currentMastery: string, learningStyle: string): Promise<any> => {
  const prompt = `
    Generate a personalized intervention plan for:
    Student ID: ${studentId}
    Topic: ${topic}
    Current Mastery Level: ${currentMastery}% (out of 100)
    Learning Style: ${learningStyle}

    Please include:
    1. Specific learning objectives based on the gap analysis
    2. Recommended instructional strategies tailored to the learning style
    3. Suggested activities and exercises
    4. Timeline and milestones
    5. Progress monitoring methods
    6. Resources and materials needed
    7. Parent/guardian involvement suggestions (if applicable)
    8. Exit criteria for when the intervention is complete

    Format the response as a JSON object with these sections.
  `;

  const text = await generateContent(prompt);

  // Try to parse as JSON, if not possible, wrap in a basic structure
  try {
    return JSON.parse(text);
  } catch (e) {
    return {
      studentId,
      topic,
      currentMastery,
      learningStyle,
      generatedContent: text,
      note: 'AI response was not valid JSON, raw content provided'
    };
  }
};

export default {
  generateContent,
  generateLessonPlan,
  generateQuiz,
  generateInterventionPlan,
  geminiModel
};