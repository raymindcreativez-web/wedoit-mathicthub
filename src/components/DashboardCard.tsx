import Link from 'next/link';

interface DashboardCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export default function DashboardCard({ title, description, icon, href }: DashboardCardProps) {
  return (
    <Link href={href} className="group">
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <div className="h-10 w-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
            {icon}
          </div>
          <h3 className="ml-4 text-lg font-medium text-gray-900">
            {title}
          </h3>
        </div>
        <p className="text-gray-600 flex-1 mb-4">
          {description}
        </p>
        <div className="flex items-center">
          <span className="mr-2 text-sm text-gray-400">Explore</span>
          <svg className="h-4 w-4 text-gray-400 group-hover:text-gray-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}