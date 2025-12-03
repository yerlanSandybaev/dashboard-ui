'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  HomeIcon, 
  BriefcaseIcon, 
  CodeBracketIcon, 
  DocumentTextIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const menuItems = [
  { name: 'Dashboard', icon: HomeIcon, href: '/' },
  { name: 'Projects', icon: BriefcaseIcon, href: '#projects' },
  { name: 'Skills', icon: CodeBracketIcon, href: '#skills' },
  { name: 'Resume', icon: DocumentTextIcon, href: '#resume' },
  { name: 'Analytics', icon: ChartBarIcon, href: '#analytics' },
  { name: 'Settings', icon: Cog6ToothIcon, href: '#settings' },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-blue-600 text-white"
      >
        {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-slate-900/95 backdrop-blur-sm border-r border-blue-800/30 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-blue-800/30">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio
            </h2>
            <p className="text-sm text-gray-400 mt-1">Dashboard</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-blue-600/20 hover:text-blue-400 transition-all duration-200 group"
              >
                <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-blue-800/30">
            <div className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-blue-600/10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                JP
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">John Portfolio</p>
                <p className="text-xs text-gray-400 truncate">john@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
