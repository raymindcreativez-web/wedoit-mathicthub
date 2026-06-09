module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/api/ai/generate-lesson-quiz/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-route] (ecmascript)");
;
;
async function POST(request) {
    try {
        const { gradeLevel, topic, competency, difficulty, numQuestions } = await request.json();
        // Validate required fields
        if (!gradeLevel || !topic || !difficulty || numQuestions === undefined) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Grade level, topic, difficulty, and number of questions are required'
            }, {
                status: 400
            });
        }
        // Initialize Gemini AI
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            console.error('GEMINI_API_KEY is not defined in environment variables');
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'AI service configuration error'
            }, {
                status: 500
            });
        }
        console.log('API Key found, length:', apiKey.length);
        const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](apiKey);
        // Try different model names that work with API version v1
        const modelNames = [
            'gemini-1.5-flash',
            'gemini-1.5-pro',
            'gemini-pro',
            'gemini-1.0-pro'
        ];
        let model = null;
        let lastError = null;
        for (const modelName of modelNames){
            try {
                model = genAI.getGenerativeModel({
                    model: modelName
                });
                // Test the model with a simple prompt
                await model.generateContent('test');
                console.log(`Successfully initialized model: ${modelName}`);
                break;
            } catch (error) {
                console.error(`Failed to initialize model ${modelName}:`, error.message);
                lastError = error;
                continue;
            }
        }
        if (!model) {
            console.error('Failed to initialize any Gemini model', lastError);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to initialize AI model: ' + (lastError?.message || 'unknown')
            }, {
                status: 500
            });
        }
        const prompt = `
      Generate a comprehensive lesson plan and quiz for the following:
      Grade Level: ${gradeLevel}
      Topic: ${topic}
      ${competency ? `Competency: ${competency}` : ''}
      Difficulty: ${difficulty}
      Number of Quiz Questions: ${numQuestions}

      Please provide a JSON object with the following structure:
      {
        "lessonOutline": {
          "learningObjectives": string[],
          "materialsNeeded": string[],
          "introduction": string,
          "mainActivities": string[],
          "guidedPractice": string,
          "independentPractice": string,
          "assessment": string,
          "differentiationStrategies": string[],
          "homeworkExtension": string
        },
        "quiz": {
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
        },
        "answerKey": {
          "correctAnswers": Record<number, string | number>,
          "explanations": Record<number, string>
        },
        "remediationActivity": {
          "activityTitle": string,
          "description": string,
          "materialsNeeded": string[],
          "steps": string[],
          "estimatedTime": string
        }
      }

      Important:
      1. The quiz should have exactly ${numQuestions} questions.
      2. For multiple-choice questions, provide 4 options and the correctAnswer should be the index (0-based) of the correct option.
      3. For short-answer questions, the correctAnswer should be the expected answer string.
      4. The answerKey should mirror the correct answers and explanations from the quiz.
      5. The remediation activity should be an activity to help students who struggled with the quiz.
      6. Ensure the response is valid JSON and matches the structure exactly.
    `;
        console.log('Calling generateContent with prompt length:', prompt.length);
        const result = await model.generateContent(prompt);
        console.log('Received result from generateContent');
        const response = await result.response;
        const text = response.text();
        console.log('Received text response, length:', text.length);
        console.log('Response text preview:', text.substring(0, 200));
        // Try to parse as JSON
        let lessonQuizResponse;
        try {
            lessonQuizResponse = JSON.parse(text);
            // Validate that the response has the required structure
            if (!lessonQuizResponse.lessonOutline || !lessonQuizResponse.quiz || !lessonQuizResponse.answerKey || !lessonQuizResponse.remediationActivity) {
                throw new Error('Missing required sections in AI response');
            }
        } catch (e) {
            console.error('AI response was not valid JSON:', e);
            // Fallback: create a basic structure from the raw text
            lessonQuizResponse = {
                lessonOutline: {
                    learningObjectives: [],
                    materialsNeeded: [],
                    introduction: 'AI response was not valid JSON, see generatedContent',
                    mainActivities: [],
                    guidedPractice: '',
                    independentPractice: '',
                    assessment: '',
                    differentiationStrategies: [],
                    homeworkExtension: ''
                },
                quiz: {
                    quizTitle: 'Generated Quiz',
                    topic,
                    gradeLevel,
                    numQuestions: parseInt(numQuestions, 10) || 0,
                    difficulty,
                    questions: []
                },
                answerKey: {
                    correctAnswers: {},
                    explanations: {}
                },
                remediationActivity: {
                    activityTitle: 'Remediation Activity',
                    description: 'AI response was not valid JSON, see generatedContent',
                    materialsNeeded: [],
                    steps: [],
                    estimatedTime: '0 minutes'
                }
            };
            // If we have raw text, we could store it somewhere, but for simplicity we'll just note in the lesson outline
            lessonQuizResponse.lessonOutline.generatedContent = text;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(lessonQuizResponse);
    } catch (error) {
        console.error('Error generating lesson quiz:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to generate lesson and quiz: ' + (error instanceof Error ? error.message : String(error))
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1jfq3in._.js.map