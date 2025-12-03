'use client';

import { BriefcaseIcon, CodeBracketIcon, StarIcon, EyeIcon } from '@heroicons/react/24/outline';

const stats = [
  {
    name: 'Total Projects',
    value: '24',
    change: '+12%',
    icon: BriefcaseIcon,
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Skills Mastered',
    value: '18',
    change: '+3',
    icon: CodeBracketIcon,
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    name: 'GitHub Stars',
    value: '1.2K',
    change: '+18%',
    icon: StarIcon,
    color: 'from-sky-500 to-sky-600',
  },
  {
    name: 'Profile Views',
    value: '3.4K',
    change: '+24%',
    icon: EyeIcon,
    color: 'from-indigo-500 to-indigo-600',
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-700/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group overflow-hidden"
        >
          {/* Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
          
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color} shadow-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                {stat.change}
              </span>
            </div>
            
            <h3 className="text-gray-400 text-sm font-medium mb-1">{stat.name}</h3>
            <p className="text-3xl font-bold text-white">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
