import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 shadow-sm dark:bg-gray-800">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MathICT Hub</span>
          </Link>
        </div>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link href="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
            Dashboard
          </Link>
          <Link href="/math-tracker" className="bg-gray-900 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
            Math Tracker
          </Link>
          <Link href="/ict-helpdesk" className="bg-gray-900 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
            ICT Helpdesk
          </Link>
          <Link href="/resources" className="bg-gray-900 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
            Resources
          </Link>
          <Link href="/login" className="bg-green-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-green-700 focus:ring-4 focus:ring-green-300 dark:focus:ring-gray-600">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}