'use client';

import { useState } from 'react';

export default function AILessonQuizPage() {
  const [formData, setFormData] = useState({
    gradeLevel: '',
    topic: '',
    competency: '',
    difficulty: 'medium',
    numQuestions: '10'
  });

  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch('/api/ai/generate-lesson-quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          gradeLevel: formData.gradeLevel,
          topic: formData.topic,
          competency: formData.competency,
          difficulty: formData.difficulty,
          numQuestions: formData.numQuestions
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate lesson and quiz');
      }

      const data = await response.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred');
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">AI Lesson & Quiz Generator</h1>
          <a href="/dashboard" className="text-blue-600 hover:underline">
            ← Back to Dashboard
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6">Generate Custom Lesson Plan and Quiz</h2>
          <p className="text-gray-600 mb-6">
            Enter the details below to generate a comprehensive lesson plan, quiz, answer key, and remediation activity using AI.
          </p>

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md text-red-800">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="gradeLevel" className="block text-sm font-medium text-gray-700 mb-1">
                  Grade Level
                </label>
                <select
                  id="gradeLevel"
                  name="gradeLevel"
                  value={formData.gradeLevel}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Grade Level</option>
                  <option value="Kindergarten">Kindergarten</option>
                  <option value="Grade 1">Grade 1</option>
                  <option value="Grade 2">Grade 2</option>
                  <option value="Grade 3">Grade 3</option>
                  <option value="Grade 4">Grade 4</option>
                  <option value="Grade 5">Grade 5</option>
                  <option value="Grade 6">Grade 6</option>
                  <option value="Grade 7">Grade 7</option>
                  <option value="Grade 8">Grade 8</option>
                  <option value="Grade 9">Grade 9</option>
                  <option value="Grade 10">Grade 10</option>
                  <option value="Grade 11">Grade 11</option>
                  <option value="Grade 12">Grade 12</option>
                </select>
              </div>

              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
                  Topic
                </label>
                <input
                  id="topic"
                  name="topic"
                  type="text"
                  value={formData.topic}
                  onChange={handleChange}
                  placeholder="e.g., Fractions, Algebra, Geometry"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="competency" className="block text-sm font-medium text-gray-700 mb-1">
                  Competency (Optional)
                </label>
                <input
                  id="competency"
                  name="competency"
                  type="text"
                  value={formData.competency}
                  onChange={handleChange}
                  placeholder="e.g., M7AL-Ia-1 (specific competency code)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700 mb-1">
                  Difficulty Level
                </label>
                <select
                  id="difficulty"
                  name="difficulty"
                  value={formData.difficulty}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="numQuestions" className="block text-sm font-medium text-gray-700 mb-1">
                Number of Quiz Questions
              </label>
              <input
                id="numQuestions"
                name="numQuestions"
                type="number"
                min="5"
                max="20"
                value={formData.numQuestions}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="mt-1 text-xs text-gray-500">
                Recommended: 10 questions
              </p>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus-ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Generating...' : 'Generate Lesson & Quiz'}
              </button>
            </div>
          </form>
        </div>

        {/* Results Section */}
        {result && (
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">Generated Results</h2>

            <div className="space-y-8">
              {/* Lesson Outline */}
              <section>
                <h3 className="text-xl font-bold mb-4">Lesson Outline</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Learning Objectives</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {result.lessonOutline.learningObjectives.map((obj: string, index: number) => (
                        <li key={index}>{obj}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold">Materials Needed</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {result.lessonOutline.materialsNeeded.map((mat: string, index: number) => (
                        <li key={index}>{mat}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold">Introduction/Warm-up</h4>
                    <p>{result.lessonOutline.introduction}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold">Main Activities</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {result.lessonOutline.mainActivities.map((act: string, index: number) => (
                        <li key={index}>{act}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold">Guided Practice</h4>
                    <p>{result.lessonOutline.guidedPractice}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold">Independent Practice</h4>
                    <p>{result.lessonOutline.independentPractice}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold">Assessment/Closure</h4>
                    <p>{result.lessonOutline.assessment}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold">Differentiation Strategies</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {result.lessonOutline.differentiationStrategies.map((strat: string, index: number) => (
                        <li key={index}>{strat}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold">Homework/Extension Activities</h4>
                    <p>{result.lessonOutline.homeworkExtension}</p>
                  </div>
                </div>
              </section>

              {/* Quiz */}
              <section>
                <h3 className="text-xl font-bold mb-4">Quiz: {result.quiz.quizTitle}</h3>
                <p className="text-gray-600">
                  {result.quiz.numQuestions} questions • {result.quiz.difficulty} difficulty • {result.quiz.topic}
                </p>

                <div className="space-y-4">
                  {result.quiz.questions.map((q: any, index: number) => (
                    <div key={q.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium">Question {q.id}</span>
                        <span className="px-2 py-1 text-xs rounded-full
                          ${q.type === 'multiple-choice' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}
                        ">
                          {q.type === 'multiple-choice' ? 'Multiple Choice' : 'Short Answer'}
                        </span>
                      </div>

                      <p className="mb-3">{q.question}</p>

                      {q.type === 'multiple-choice' && q.options && (
                        <div className="space-y-2">
                          <p className="font-semibold mb-2">Options:</p>
                          {q.options.map((opt: string, optIndex: number) => (
                            <div key={optIndex} className="flex items-start space-x-2">
                              <span className="flex-shrink-0">
                                {String.fromCharCode(65 + optIndex)}.
                              </span>
                              <span>{opt}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <p className="font-semibold">Answer:</p>
                        <p className="pl-4">
                          {q.type === 'multiple-choice'
                            ? q.options?.[Number(q.correctAnswer)] || q.correctAnswer
                            : q.correctAnswer
                          }
                        </p>
                        <p className="mt-2 text-sm text-gray-600">
                          Explanation: {q.explanation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Answer Key */}
              <section>
                <h3 className="text-xl font-bold mb-4">Answer Key</h3>
                <div className="space-y-2">
                  {Object.entries(result.answerKey.correctAnswers).map(([questionId, answer]: [string, any]) => (
                    <div key={questionId} className="flex items-start space-x-2">
                      <span className="flex-shrink-0 font-medium">Q{questionId}:</span>
                      <span>{answer}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Remediation Activity */}
              <section>
                <h3 className="text-xl font-bold mb-4">Remediation Activity</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">{result.remediationActivity.activityTitle}</h4>
                    <p className="text-gray-600">{result.remediationActivity.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold">Materials Needed</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {result.remediationActivity.materialsNeeded.map((mat: string, index: number) => (
                        <li key={index}>{mat}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold">Steps</h4>
                    <ol className="list-decimal list-inside space-y-2">
                      {result.remediationActivity.steps.map((step: string, index: number) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <h4 className="font-semibold">Estimated Time</h4>
                    <p>{result.remediationActivity.estimatedTime}</p>
                  </div>
                </div>
              </section>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Print Results
              </button>
              <button
                onClick={() => {
                  // In a real app, this would save to database
                  alert('Results saved successfully! (Feature coming soon)');
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus-ring-offset-2"
              >
                Save Results
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}