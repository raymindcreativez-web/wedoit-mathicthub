'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MathScore } from '@/types/math';
import { InterventionPlan } from '@/types/interventionPlan';
import MathScoreForm from '@/components/MathScoreForm';
import { generateInterventionPlan } from '@/lib/gemini';
import { doc, setDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function MathTrackerFlowPage() {
  // Step states
  const [currentStep, setCurrentStep] = useState(1);
  const [classData, setClassData] = useState({
    classId: '',
    className: '',
    subject: ''
  });
  const [scores, setScores] = useState<MathScore[]>([]);
  const [analysis, setAnalysis] = useState({
    classAverage: 0,
    passingRate: 0,
    masteryLevel: 0,
    leastMasteredCompetencies: [] as string[],
    studentsNeedingIntervention: [] as {studentId: string; studentName: string; topic: string; score: number; maxScore: number}[]
  });
  const [interventionPlan, setInterventionPlan] = useState<InterventionPlan | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Mock classes data - in a real app this would come from Firestore
  const mockClasses = [
    { id: 'class1', name: 'Grade 7 - Section A', subject: 'Mathematics' },
    { id: 'class2', name: 'Grade 8 - Section B', subject: 'Mathematics' },
    { id: 'class3', name: 'Grade 9 - Section C', subject: 'Mathematics' },
  ];

  // Handle step navigation
  const goToStep = (step: number) => {
    setCurrentStep(step);
    setError(null);
  };

  const nextStep = () => {
    // Validate current step before proceeding
    if (currentStep === 1) {
      if (!classData.classId || !classData.subject) {
        setError('Please select a class and subject');
        return;
      }
    } else if (currentStep === 2) {
      if (scores.length === 0) {
        setError('Please add at least one student score');
        return;
      }
    } else if (currentStep === 3) {
      // Trigger analysis
      performAnalysis();
      return; // Don't increment step, analysis will handle it
    } else if (currentStep === 4) {
      // Generate intervention plan
      generatePlan();
      return;
    }

    setCurrentStep(prev => Math.min(prev + 1, 5));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  // Handle class selection
  const handleClassSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [classId, className, subject] = e.target.value.split('|');
    setClassData({ classId, className, subject });
  };

  // Handle score submission
  const handleScoreSubmit = (formData: {
    studentName: string;
    studentId: string;
    topic: string;
    score: string;
    maxScore: string;
    date: string;
  }) => {
    // Convert string scores to numbers
    const scoreNum = parseFloat(formData.score);
    const maxScoreNum = parseFloat(formData.maxScore);

    // Generate a simple ID (in a real app, you'd use a proper ID generator)
    const scoreId = `score_${Date.now()}`;

    const newScore: MathScore = {
      id: scoreId,
      studentId: formData.studentId,
      studentName: formData.studentName,
      topic: formData.topic,
      score: scoreNum,
      maxScore: maxScoreNum,
      date: formData.date,
      assessmentType: 'quiz', // Default assessment type
      notes: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    setScores(prev => [...prev, newScore]);
    // Reset form after submission (handled by child component)
  };

  // Perform analysis on scores
  const performAnalysis = () => {
    setLoading(true);
    setError(null);

    try {
      if (scores.length === 0) {
        setError('No scores to analyze');
        setLoading(false);
        return;
      }

      // Calculate class average
      const totalScore = scores.reduce((sum, score) => {
        const percentage = (score.score / score.maxScore) * 100;
        return sum + percentage;
      }, 0);
      const classAverage = totalScore / scores.length;

      // Calculate passing rate (assuming 75% is passing)
      const passingCount = scores.filter(score => {
        const percentage = (score.score / score.maxScore) * 100;
        return percentage >= 75;
      }).length;
      const passingRate = (passingCount / scores.length) * 100;

      // Calculate overall mastery level (average of all scores)
      const masteryLevel = classAverage; // Same as class average for simplicity

      // Find least mastered competencies (topics with lowest average scores)
      const topicScores: Record<string, { total: number; count: number }> = {};
      scores.forEach(score => {
        if (!topicScores[score.topic]) {
          topicScores[score.topic] = { total: 0, count: 0 };
        }
        const percentage = (score.score / score.maxScore) * 100;
        topicScores[score.topic].total += percentage;
        topicScores[score.topic].count += 1;
      });

      const topicAverages = Object.entries(topicScores).map(([topic, data]) => ({
        topic,
        average: data.total / data.count
      }));

      // Sort by average ascending (lowest first)
      topicAverages.sort((a, b) => a.average - b.average);
      const leastMasteredCompetencies = topicAverages.slice(0, 3).map(item => item.topic);

      // Identify students needing intervention (scores below 70%)
      const studentsNeedingIntervention = scores
        .filter(score => {
          const percentage = (score.score / score.maxScore) * 100;
          return percentage < 70;
        })
        .map(score => ({
          studentId: score.studentId,
          studentName: score.studentName,
          topic: score.topic,
          score: score.score,
          maxScore: score.maxScore
        }));

      setAnalysis({
        classAverage,
        passingRate,
        masteryLevel,
        leastMasteredCompetencies,
        studentsNeedingIntervention
      });

      setLoading(false);
      goToStep(4); // Move to intervention plan step
    } catch (err) {
      setError('Failed to perform analysis. Please try again.');
      setLoading(false);
    }
  };

  // Generate intervention plan using Gemini
  const generatePlan = async () => {
    setLoading(true);
    setError(null);

    try {
      if (analysis.studentsNeedingIntervention.length === 0) {
        setError('No students need intervention based on current scores');
        setLoading(false);
        return;
      }

      // For demo, we'll create a plan for the first student needing intervention
      const student = analysis.studentsNeedingIntervention[0];

      const planData = await generateInterventionPlan(
        student.studentId,
        student.topic,
        ((student.score / student.maxScore) * 100).toFixed(1),
        'visual' // Default learning style
      );

      // Create intervention plan object
      const newPlan: InterventionPlan = {
        id: `plan_${Date.now()}`,
        studentId: student.studentId,
        studentName: student.studentName,
        classId: classData.classId,
        title: `Intervention Plan for ${student.topic}`,
        description: `Personalized intervention plan to improve mastery in ${student.topic}`,
        goal: `Achieve at least 75% mastery in ${student.topic} within 4 weeks`,
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 4 * 7 * 24 * 60 * 60 * 1000).toISOString(), // 4 weeks from now
        status: 'active',
        priority: 'high',
        interventionType: 'remediation',
        subjects: ['Mathematics'],
        strategies: planData.strategies || [
          'Differentiated instruction',
          'Small group sessions',
          'Visual aids and manipulatives',
          'Regular formative assessments'
        ],
        resourcesNeeded: planData.resourcesNeeded || [
          'Worksheets',
          'Manipulatives',
          'Educational videos',
          'Practice problems'
        ],
        successCriteria: planData.successCriteria || [
          'Score at least 75% on post-assessment',
          'Complete 5 practice exercises with 80% accuracy',
          'Demonstrate concept mastery in exit ticket'
        ],
        progressMetrics: [{
          metric: `${student.topic} Mastery`,
          targetValue: 75,
          currentValue: (student.score / student.maxScore) * 100,
          unit: '%',
          lastUpdated: new Date().toISOString()
        }],
        assignedTo: 'teacher_1', // In real app, this would be current user ID
        createdBy: 'teacher_1',
        createdAt: new Date().toISOString(),
        notes: planData.generatedContent || 'Initial intervention plan created based on assessment data',
        parentInvolved: true,
        reviewDate: new Date(Date.now() + 2 * 7 * 24 * 60 * 60 * 1000).toISOString() // 2 weeks from now
      };

      // Save to Firestore (if configured)
      try {
        if (db) {
          await setDoc(doc(db, 'interventionPlans', newPlan.id), newPlan);
        }
      } catch (firestoreError) {
        console.warn('Firestore not configured or error saving plan:', firestoreError);
        // Continue anyway - we'll still show the plan
      }

      setInterventionPlan(newPlan);
      setLoading(false);
      goToStep(5); // Move to completed step
    } catch (err) {
      setError('Failed to generate intervention plan. Please try again.');
      setLoading(false);
    }
  };

  // Reset flow
  const resetFlow = () => {
    setCurrentStep(1);
    setClassData({ classId: '', className: '', subject: '' });
    setScores([]);
    setAnalysis({
      classAverage: 0,
      passingRate: 0,
      masteryLevel: 0,
      leastMasteredCompetencies: [],
      studentsNeedingIntervention: []
    });
    setInterventionPlan(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Math Tracker Flow</h1>
          <Link href="/dashboard" className="text-blue-600 hover:underline">
            ← Back to Dashboard
          </Link>
        </div>

        {/* Progress Indicator */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${(currentStep - 1) * 25}%` }}
          ></div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Step Content */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Step 1: Select Class and Subject</h2>
              <p className="text-gray-600 mb-6">
                Choose the class and subject you want to track for this math assessment session.
              </p>

              {error && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md text-red-800">
                  {error}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label htmlFor="classSelect" className="block text-sm font-medium text-gray-700 mb-1">
                    Select Class
                  </label>
                  <select
                    id="classSelect"
                    value={`${classData.classId}|${classData.className}|${classData.subject}`}
                    onChange={handleClassSelect}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a class...</option>
                    {mockClasses.map(cls => (
                      <option key={cls.id} value={`${cls.id}|${cls.name}|${cls.subject}`}>
                        {cls.name} - {cls.subject}
                      </option>
                    ))}
                  </select>
                </div>

                {classData.classId && (
                  <div>
                    <h3 className="text-lg font-medium mb-2">Selected Class:</h3>
                    <p className="text-gray-700">
                      {classData.className} - {classData.subject}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-8">
                <button
                  onClick={nextStep}
                  disabled={!classData.classId || loading}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus-ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Loading...' : 'Continue to Score Entry'}
                </button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Step 2: Enter Student Scores</h2>
              <p className="text-gray-600 mb-6">
                Upload CSV/Excel data or manually enter scores for each student in the selected class.
              </p>

              {error && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md text-red-800">
                  {error}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Current Class:</h3>
                <p className="text-gray-700">
                  {classData.className} - {classData.subject}
                </p>
              </div>

              <div className="space-y-6">
                {/* Manual Score Entry Form */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Manual Score Entry</h3>
                  <MathScoreForm onScoreSubmit={handleScoreSubmit} />
                </div>

                {/* Scores Summary */}
                {scores.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Entered Scores ({scores.length} students)</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                              Student
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                              Topic
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                              Score
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                              Percentage
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                              Date
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {scores.map((score, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">{score.studentName}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-700">{score.topic}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{score.score}/{score.maxScore}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                  {((score.score / score.maxScore) * 100).toFixed(1)}%
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-500">
                                  {new Date(score.date).toLocaleDateString()}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Upload Section (Placeholder) */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <h3 className="text-lg font-medium mb-4">Upload CSV/Excel File</h3>
                  <p className="text-gray-500">
                    Drag & drop your file here, or click to select
                  </p>
                  <p className="mt-2 text-sm text-gray-400">
                    Supported formats: CSV, XLS, XLSX
                  </p>
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  onClick={prevStep}
                  className="w-full sm:w-auto px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  Previous Step
                </button>
                <button
                  onClick={nextStep}
                  disabled={scores.length === 0 || loading}
                  className="w-full sm:w-auto ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus-ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Saving...' : 'Continue to Analysis'}
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Step 3: View Analysis Results</h2>
              <p className="text-gray-600 mb-6">
                Review the computed metrics including class average, passing rate, mastery level, and areas needing attention.
              </p>

              {error && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md text-red-800">
                  {error}
                </div>
              )}

              {loading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  <p className="mt-2 text-gray-500">Analyzing data...</p>
                </div>
              ) : (
                <>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="text-lg font-medium text-blue-800 mb-2">Class Average</h3>
                      <p className="text-2xl font-bold text-blue-600">{analysis.classAverage.toFixed(1)}%</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="text-lg font-medium text-green-800 mb-2">Passing Rate</h3>
                      <p className="text-2xl font-bold text-green-600">{analysis.passingRate.toFixed(1)}%</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="text-lg font-medium text-purple-800 mb-2">Mastery Level</h3>
                      <p className="text-2xl font-bold text-purple-600">{analysis.masteryLevel.toFixed(1)}%</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h3 className="text-lg font-medium text-indigo-800 mb-2">Least Mastered</h3>
                      <p className="text-sm font-medium text-indigo-600">
                        {analysis.leastMasteredCompetencies.join(', ') || 'None'}
                      </p>
                    </div>
                  </div>

                  {analysis.studentsNeedingIntervention.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Students Needing Intervention</h3>
                      <p className="text-gray-600 mb-4">
                        {analysis.studentsNeedingIntervention.length} student(s) scored below 70% and may benefit from targeted support.
                      </p>
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                Student
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                Topic
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                Score
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                Percentage
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {analysis.studentsNeedingIntervention.map((student, index) => (
                              <tr key={index} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm font-medium text-gray-900">{student.studentName}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowlow">
                                  <div className="text-sm text-gray-700">{student.topic}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-900">{student.score}/{student.maxScore}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-900">
                                    {((student.score / student.maxScore) * 100).toFixed(1)}%
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {analysis.studentsNeedingIntervention.length === 0 && (
                    <div className="text-center py-8">
                      <div className="flex items-center justify-center mb-4">
                        <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7 20h10a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                      </div>
                      <p className="text-green-600 font-medium">All students are performing above the intervention threshold!</p>
                    </div>
                  )}

                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={prevStep}
                      className="w-full sm:w-auto px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    >
                      Previous Step
                    </button>
                    <button
                      onClick={nextStep}
                      disabled={loading}
                      className="w-full sm:w-auto ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus-ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Generating...' : 'Generate Intervention Plan'}
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Step 4: Intervention Plan</h2>
              <p className="text-gray-600 mb-6">
                Review the AI-generated intervention plan designed to help students improve in identified areas.
              </p>

              {error && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md text-red-800">
                  {error}
                </div>
              )}

              {loading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  <p className="mt-2 text-gray-500">Generating intervention plan...</p>
                </div>
              ) : (
                <>
                  {interventionPlan ? (
                    <div>
                      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                        <h3 className="text-lg font-medium text-blue-800 mb-2">
                          Intervention Plan for {interventionPlan.studentName}
                        </h3>
                        <p className="text-gray-600">
                          Topic: {interventionPlan.subjects.join(', ')} |
                          Priority: {interventionPlan.priority} |
                          Status: {interventionPlan.status}
                        </p>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Plan Details</h3>
                          <p className="text-gray-700">{interventionPlan.description}</p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-4">Learning Goal</h3>
                          <p className="text-gray-700">{interventionPlan.goal}</p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-4">Strategies</h3>
                          <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {interventionPlan.strategies.map((strategy, index) => (
                              <li key={index}>{strategy}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-4">Resources Needed</h3>
                          <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {interventionPlan.resourcesNeeded.map((resource, index) => (
                              <li key={index}>{resource}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-4">Success Criteria</h3>
                          <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {interventionPlan.successCriteria.map((criterion, index) => (
                              <li key={index}>{criterion}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-4">Progress Monitoring</h3>
                          <div className="space-y-2">
                            {interventionPlan.progressMetrics.map((metric, index) => (
                              <div key={index} className="bg-gray-50 p-3 rounded-md">
                                <div className="flex justify-between">
                                  <span className="font-medium">{metric.metric}</span>
                                  <span>{metric.currentValue}/{metric.targetValue} {metric.unit}</span>
                                </div>
                                <div className="text-xs text-gray-500">
                                  Last updated: {new Date(metric.lastUpdated).toLocaleDateString()}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {interventionPlan.notes && (
                          <div>
                            <h3 className="text-lg font-semibold mb-4">AI-Generated Notes</h3>
                            <p className="text-gray-700">{interventionPlan.notes}</p>
                          </div>
                        )}
                      </div>

                      <div className="mt-8 flex justify-between">
                        <button
                          onClick={prevStep}
                          className="w-full sm:w-auto px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        >
                          Previous Step
                        </button>
                        <button
                          onClick={nextStep}
                          className="w-full sm:w-auto ml-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus-ring-offset-2"
                        >
                          Mark as Completed
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No intervention plan generated yet.</p>
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          {currentStep === 5 && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Step 5: Flow Completed</h2>
              <p className="text-gray-600 mb-6">
                The math tracker flow has been completed successfully. You can now export the reports or start a new tracking session.
              </p>

              <div className="text-center py-12">
                <div className="flex items-center justify-center mb-6">
                  <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Math Tracker Flow Completed!</h3>
                <p className="text-gray-600 mb-6">
                  You have successfully:
                </p>
                <div className="space-y-2 text-left max-w-md mx-auto">
                  <p className="flex items-start">
                    <span className="flex-shrink-0 text-green-600 mr-3">✓</span>
                    <span>Selected class and subject</span>
                  </p>
                  <p className="flex items-start">
                    <span className="flex-shrink-0 text-green-600 mr-3">✓</span>
                    <span>Recorded student scores</span>
                  </p>
                  <p className="flex items-start">
                    <span className="flex-shrink-0 text-green-600 mr-3">✓</span>
                    <span>Analyzed class performance</span>
                  </p>
                  <p className="flex items-start">
                    <span className="flex-shrink-0 text-green-600 mr-3">✓</span>
                    <span>Generated intervention plan</span>
                  </p>
                </div>
              </div>

              <div className="mt-10 flex justify-center space-x-4">
                <button
                  onClick={resetFlow}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus-ring-offset-2"
                >
                  Start New Flow
                </button>
                <Link href="/dashboard" className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
                  Return to Dashboard
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}