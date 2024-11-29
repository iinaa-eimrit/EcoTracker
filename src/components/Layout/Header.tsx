import { Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Sprout className="w-8 h-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">EcoTracker</span>
          </div>
          <nav className="flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md">
              Dashboard
            </Link>
            <Link to="/calculator" className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md">
              Calculator
            </Link>
            <Link to="/challenges" className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md">
              Challenges
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
