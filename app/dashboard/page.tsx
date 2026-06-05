import Link from 'next/link';
import DashboardCard from '@/components/DashboardCard';

export default function DashboardPage() {
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
          <DashboardCard
            title="Math Tracker"
            description="Track student progress in mathematics"
            icon="📊"
            href="/math-tracker"
          />
          <DashboardCard
            title="ICT Helpdesk"
            description="Manage technical support tickets"
            icon="🔧"
            href="/ict-helpdesk"
          />
          <DashboardCard
            title="Resources"
            description="Access teaching and learning materials"
            icon="📚"
            href="/resources"
          />
          <DashboardCard
            title="Settings"
            description="Configure your profile and preferences"
            icon="⚙️"
            href="/settings"
          />
        </div>
      </div>
    </div>
  );
}