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
      </div>
    </div>
  );
}