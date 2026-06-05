import Link from 'next/link';

export default function MathTrackerPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Math Tracker</h1>
          <Link href="/dashboard" className="text-blue-600 hover:underline">
            ← Back to Dashboard
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Student Performance Overview</h2>
            <p className="text-gray-600">
              Track and analyze student progress in mathematics concepts and skills.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-blue-800 mb-2">Concept Mastery</h3>
              <p className="text-sm text-gray-600">View mastery levels by topic</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-green-800 mb-2">Skill Progress</h3>
              <p className="text-sm text-gray-600">Track skill development over time</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-purple-800 mb-2">Assessment Results</h3>
              <p className="text-sm text-gray-600">Review quiz and test performance</p>
            </div>
          </div>

          <div className="mt-6">
            <Link href="/math-tracker/add-student" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Add New Student
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}