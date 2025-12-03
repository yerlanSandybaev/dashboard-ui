'use client';

import { MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-slate-900/80 backdrop-blur-md border-b border-blue-800/30">
      <div className="flex items-center justify-between p-4 lg:p-6">
        {/* Search Bar */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects, skills..."
              className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-blue-700/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 ml-4">
          {/* Notifications */}
          <button className="relative p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-600/10 rounded-lg transition-all">
            <BellIcon className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Quick Actions */}
          <button className="hidden sm:block px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all font-medium shadow-lg hover:shadow-blue-500/50">
            New Project
          </button>
        </div>
      </div>
    </header>
  );
}
