import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            MathICT Hub
          </h1>
          <p className="text-xl text-gray-600">
            An integrated platform for Mathematics and ICT education management
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Math Tracker Card */}
          <Link href="/math-tracker" className="group">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  📊
                </div>
                <h3 className="ml-4 text-2xl font-semibold text-gray-900">
                  Math Tracker
                </h3>
              </div>
              <p className="text-gray-600 flex-1 mb-4">
                Track student progress in mathematics concepts and skills with detailed analytics and reporting.
              </p>
              <div className="flex items-center">
                <span className="mr-2 text-sm text-gray-400">Explore</span>
                <svg className="h-4 w-4 text-gray-400 group-hover:text-gray-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* ICT Helpdesk Card */}
          <Link href="/ict-helpdesk" className="group">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                  🔧
                </div>
                <h3 className="ml-4 text-2xl font-semibold text-gray-900">
                  ICT Helpdesk
                </h3>
              </div>
              <p className="text-gray-600 flex-1 mb-4">
                Manage technical support tickets for students and staff with priority tracking and resolution workflows.
              </p>
              <div className="flex items-center">
                <span className="mr-2 text-sm text-gray-400">Explore</span>
                <svg className="h-4 w-4 text-gray-400 group-hover:text-gray-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Resources Card */}
          <Link href="/resources" className="group">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                  📚
                </div>
                <h3 className="ml-4 text-2xl font-semibold text-gray-900">
                  Teaching Resources
                </h3>
              </div>
              <p className="text-gray-600 flex-1 mb-4">
                Access lesson plans, worksheets, multimedia content, and other teaching materials for Mathematics and ICT.
              </p>
              <div className="flex items-center">
                <span className="mr-2 text-sm text-gray-400">Explore</span>
                <svg className="h-4 w-4 text-gray-400 group-hover:text-gray-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* AI Tools Card */}
          <Link href="/dashboard" className="group">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                  🤖
                </div>
                <h3 className="ml-4 text-2xl font-semibold text-gray-900">
                  AI-Powered Tools
                </h3>
              </div>
              <p className="text-gray-600 flex-1 mb-4">
                Generate lesson plans, quizzes, and intervention plans using AI technology powered by Google Gemini.
              </p>
              <div className="flex items-center">
                <span className="mr-2 text-sm text-gray-400">Explore</span>
                <svg className="h-4 w-4 text-gray-400 group-hover:text-gray-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Settings Card */}
          <Link href="/dashboard" className="group">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                  ⚙️
                </div>
                <h3 className="ml-4 text-2xl font-semibold text-gray-900">
                  Settings & Configuration
                </h3>
              </div>
              <p className="text-gray-600 flex-1 mb-4">
                Configure your profile, preferences, and system settings for optimal MathICT Hub experience.
              </p>
              <div className="flex items-center">
                <span className="mr-2 text-sm text-gray-400">Explore</span>
                <svg className="h-4 w-4 text-gray-400 group-hover:text-gray-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Login Card */}
          <Link href="/login" className="group">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                  🔐
                </div>
                <h3 className="ml-4 text-2xl font-semibold text-gray-900">
                  Sign In
                </h3>
              </div>
              <p className="text-gray-600 flex-1 mb-4">
                Access your personalized dashboard and start using MathICT Hub features.
              </p>
              <div className="flex items-center">
                <span className="mr-2 text-sm text-gray-400">Get Started</span>
                <svg className="h-4 w-4 text-gray-400 group-hover:text-gray-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Getting Started</h2>
          <div className="space-y-4 text-gray-600">
            <p className="flex items-start space-x-3">
              <span className="flex-shrink-0 text-blue-600">1</span>
              <span>Click "Sign In" above to access your account or create a new one.</span>
            </p>
            <p className="flex items-start space-x-3">
              <span className="flex-shrink-0 text-blue-600">2</span>
              <span>Explore the four main modules: Math Tracker, ICT Helpdesk, Resources, and AI Tools.</span>
            </p>
            <p className="flex items-start space-x-3">
              <span className="flex-shrink-0 text-blue-600">3</span>
              <span>Start tracking student progress, managing support tickets, accessing teaching materials, or generating AI-powered lesson plans.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}