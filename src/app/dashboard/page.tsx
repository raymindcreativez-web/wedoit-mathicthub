'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import StatsCard from '@/components/StatsCard';
import { getClasses, getIctTickets, getStudents } from '@/lib/firestore';

export default function DashboardPage() {
  const [totalClasses, setTotalClasses] = useState(0);
  const [pendingTickets, setPendingTickets] = useState(0);
  const [studentsNeedingIntervention, setStudentsNeedingIntervention] = useState(0);
  const [aiGenerationsToday, setAiGenerationsToday] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        setLoading(true);

        // Try to get real data, fallback to mock data if Firebase not configured
        try {
          // Get total classes
          const classes = await getClasses();
          setTotalClasses(classes.length);

          // Get pending ICT tickets
          const tickets = await getIctTickets({ status: 'Open' });
          setPendingTickets(tickets.length);

          // For demo purposes, we'll calculate students needing intervention
          // In a real app, this would be based on assessment scores, analysis, etc.
          const students = await getStudents({ status: 'active' });
          // Simulate: 20% of active students need intervention
          const interventionCount = Math.max(1, Math.floor(students.length * 0.2));
          setStudentsNeedingIntervention(interventionCount);
        } catch (error) {
          // Firebase not configured or other error - use mock data
          console.log('Using mock data for dashboard (Firebase not configured or error):', (error as Error).message);
          setTotalClasses(5);
          setPendingTickets(3);
          setStudentsNeedingIntervention(8);
        }

        // For AI generations today - in a real app, this would query aiLogs for today
        // Using mock data since we don't have AI logs collection implemented yet
        setAiGenerationsToday(12);

        setLoading(false);
      } catch (err) {
        console.error('Error loading dashboard data:', err);
        setError('Failed to load dashboard data. Please try again.');
        setLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Loading Dashboard...</h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="h-4 w-4 border-t-2 border-b-2 border-blue-600 rounded"></div>
              <div className="h-4 w-4 border-t-2 border-b-2 border-blue-600 rounded"></div>
              <div className="h-4 w-4 border-t-2 border-b-2 border-blue-600 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-red-800 font-bold mb-2">Error</h3>
            <p className="text-red-700">{error}</p>
          </div>

          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <Link href="/login" className="text-blue-600 hover:underline">
              Sign Out
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              title="Total Classes"
              value="--"
              icon="🏫"
              color="blue"
              href="/dashboard"
            />
            <StatsCard
              title="Pending ICT Tickets"
              value="--"
              icon="🎫"
              color="red"
              href="/ict-helpdesk"
            />
            <StatsCard
              title="Students Needing Intervention"
              value="--"
              icon="👨‍🏫"
              color="yellow"
              href="/dashboard"
            />
            <StatsCard
              title="AI Generations Used Today"
              value="--"
              icon="🤖"
              color="purple"
              href="/dashboard"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <Link href="/login" className="text-blue-600 hover:underline">
            Sign Out
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Classes"
            value={totalClasses}
            icon="🏫"
            color="blue"
            href="/dashboard"
          />
          <StatsCard
            title="Pending ICT Tickets"
            value={pendingTickets}
            icon="🎫"
            color="red"
            href="/ict-helpdesk"
          />
          <StatsCard
            title="Students Needing Intervention"
            value={studentsNeedingIntervention}
            icon="👨‍🏫"
            color="yellow"
            href="/dashboard"
          />
          <StatsCard
            title="AI Generations Used Today"
            value={aiGenerationsToday}
            icon="🤖"
            color="purple"
            href="/dashboard"
          />
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/math-tracker-flow" className="group flex items-center justify-between bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7 20h10a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Math Tracker Flow</h3>
                  <p className="text-sm text-gray-500">Track student performance and generate intervention plans</p>
                </div>
              </div>
              <div className="text-right">
                <svg className="h-5 w-5 text-gray-400 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </Link>

            <Link href="/ai-lesson-quiz" className="group flex items-center justify-between bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-indigo-50 rounded-full flex items-center justify-center">
                  <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">AI Lesson & Quiz Generator</h3>
                  <p className="text-sm text-gray-500">Generate lesson plans, quizzes, and remediation activities</p>
                </div>
              </div>
              <div className="text-right">
                <svg className="h-5 w-5 text-gray-400 group-hover:text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </Link>

            <Link href="/resources" className="group flex items-center justify-between bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-green-50 rounded-full flex items-center justify-center">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H3a2 2 0 00-2 2v5a2 2 0 002 2h7m0 0V5a2 2 0 012-2h6.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V19a2 2 0 01-2 2h-1M8 7V5a2 2 0 00-2-2H3a2 2 0 00-2 2v14a2 2 0 002 2h5"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Resources</h3>
                  <p className="text-sm text-gray-500">Access teaching materials and learning resources</p>
                </div>
              </div>
              <div className="text-right">
                <svg className="h-5 w-5 text-gray-400 group-hover:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}