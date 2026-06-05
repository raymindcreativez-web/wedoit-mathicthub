import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(request: Request) {
  try {
    const { studentId, topic, currentMastery, learningStyle } = await request.json();

    if (!studentId || !topic || currentMastery === undefined || !learningStyle) {
      return NextResponse.json(
        { error: 'StudentId, topic, currentMastery, and learningStyle are required' },
        { status: 400 }
      );
    }

    // Initialize Gemini AI
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

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

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Try to parse as JSON, if not possible, wrap in a basic structure
    let interventionPlan;
    try {
      interventionPlan = JSON.parse(text);
    } catch (e) {
      interventionPlan = {
        studentId,
        topic,
        currentMastery,
        learningStyle,
        generatedContent: text,
        note: 'AI response was not valid JSON, raw content provided'
      };
    }

    return NextResponse.json(interventionPlan);
  } catch (error) {
    console.error('Error generating intervention:', error);
    return NextResponse.json(
      { error: 'Failed to generate intervention plan' },
      { status: 500 }
    );
  }
}