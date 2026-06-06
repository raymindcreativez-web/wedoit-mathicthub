import Link from 'next/link';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: string;
  href?: string;
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple';
  trend?: {
    value: number;
    label: string;
    isPositive: boolean;
  };
}

export default function StatsCard({
  title,
  value,
  icon,
  href,
  color = 'blue',
  trend
}: StatsCardProps) {
  const bgColors = {
    blue: 'bg-blue-50',
    green: 'bg-green-50',
    red: 'bg-red-50',
    yellow: 'bg-yellow-50',
    purple: 'bg-purple-50'
  };

  const textColors = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    red: 'text-red-600',
    yellow: 'text-yellow-600',
    purple: 'text-purple-600'
  };

  return (
    <Link href={href || '#'} className="group">
      <div className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ${bgColors[color]}`}>
        <div className="flex items-center mb-4">
          <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${textColors[color]} bg-${color}-100`}>
            {icon}
          </div>
          <h3 className="ml-4 text-lg font-medium text-gray-900">
            {title}
          </h3>
        </div>
        <p className="text-2xl font-bold text-gray-900 mb-2">
          {value}
        </p>
        {trend && (
          <div className="flex items-center text-sm">
            <span className={`mr-2 ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {trend.isPositive ? '↑' : '↓'} {trend.value}%
            </span>
            <span>{trend.label}</span>
          </div>
        )}
        {href && (
          <div className="mt-4 flex items-center">
            <span className="mr-2 text-sm text-gray-400">View Details</span>
            <svg className="h-4 w-4 text-gray-400 group-hover:text-gray-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>
    </Link>
  );
}