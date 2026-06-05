import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(request: Request) {
  try {
    const { topic, gradeLevel, numQuestions, difficulty } = await request.json();

    if (!topic || !gradeLevel || !numQuestions || !difficulty) {
      return NextResponse.json(
        { error: 'Topic, gradeLevel, numQuestions, and difficulty are required' },
        { status: 400 }
      );
    }

    // Initialize Gemini AI
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

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

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Try to parse as JSON, if not possible, wrap in a basic structure
    let quiz;
    try {
      quiz = JSON.parse(text);
    } catch (e) {
      quiz = {
        topic,
        gradeLevel,
        numQuestions,
        difficulty,
        generatedContent: text,
        note: 'AI response was not valid JSON, raw content provided'
      };
    }

    return NextResponse.json(quiz);
  } catch (error) {
    console.error('Error generating quiz:', error);
    return NextResponse.json(
      { error: 'Failed to generate quiz' },
      { status: 500 }
    );
  }
}