import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Teaching Resources</h1>
          <Link href="/dashboard" className="text-blue-600 hover:underline">
            ← Back to Dashboard
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Resource Library</h2>
            <p className="text-gray-600">
              Access lesson plans, worksheets, multimedia content, and other teaching materials.
            </p>
          </div>

          <div className="mb-6 flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search resources..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Subjects</option>
              <option value="math">Mathematics</option>
              <option value="ict">ICT/Computer Science</option>
              <option value="science">Science</option>
              <option value="english">English/Language Arts</option>
            </select>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Search
            </button>
          </div>

          <div className="space-y-4">
            <div className="border-b pb-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                  📖
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    Fractions Workbook - Grade 5
                  </h3>
                  <p className="text-sm text-gray-500">
                    Mathematics • 45 pages • Updated Jun 1, 2026
                  </p>
                  <div className="mt-2 flex space-x-3 text-xs">
                    <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">
                      Free
                    </span>
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-full">
                      PDF
                    </span>
                    <span className="px-2 py-0.5 bg-purple-100 text-purple-800 text-xs rounded-full">
                      Printable
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b pb-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                  💻
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    Introduction to Coding with Scratch
                  </h3>
                  <p className="text-sm text-gray-500">
                    ICT • Video Tutorial • 25 minutes • Updated May 28, 2026
                  </p>
                  <div className="mt-2 flex space-x-3 text-xs">
                    <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">
                      Free
                    </span>
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-full">
                      Video
                    </span>
                    <span className="px-2 py-0.5 bg-purple-100 text-purple-800 text-xs rounded-full">
                      Beginner
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b pb-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                  📐
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    Geometry Manipulatives Kit
                  </h3>
                  <p className="text-sm text-gray-500">
                    Mathematics • Interactive Activities • Updated Jun 3, 2026
                  </p>
                  <div className="mt-2 flex space-x-3 text-xs">
                    <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">
                      Free
                    </span>
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-full">
                      Interactive
                    </span>
                    <span className="px-2 py-0.5 bg-purple-100 text-purple-800 text-xs rounded-full">
                      Grades 3-6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Upload New Resource
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}