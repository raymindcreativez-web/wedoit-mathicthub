import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(request: Request) {
  try {
    const { topic, gradeLevel, duration } = await request.json();

    if (!topic || !gradeLevel || !duration) {
      return NextResponse.json(
        { error: 'Topic, gradeLevel, and duration are required' },
        { status: 400 }
      );
    }

    // Initialize Gemini AI
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

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

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Try to parse as JSON, if not possible, wrap in a basic structure
    let lessonPlan;
    try {
      lessonPlan = JSON.parse(text);
    } catch (e) {
      lessonPlan = {
        topic,
        gradeLevel,
        duration,
        generatedContent: text,
        note: 'AI response was not valid JSON, raw content provided'
      };
    }

    return NextResponse.json(lessonPlan);
  } catch (error) {
    console.error('Error generating lesson:', error);
    return NextResponse.json(
      { error: 'Failed to generate lesson plan' },
      { status: 500 }
    );
  }
}