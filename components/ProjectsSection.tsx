'use client';

import { ArrowTrendingUpIcon, ClockIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    id: 1,
    name: 'E-Commerce Platform',
    status: 'Active',
    progress: 85,
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    lastUpdate: '2 hours ago',
    stats: { views: '2.3K', stars: 45 },
  },
  {
    id: 2,
    name: 'AI Chat Application',
    status: 'In Progress',
    progress: 60,
    tech: ['React', 'Node.js', 'OpenAI'],
    lastUpdate: '5 hours ago',
    stats: { views: '1.8K', stars: 32 },
  },
  {
    id: 3,
    name: 'Portfolio Website',
    status: 'Completed',
    progress: 100,
    tech: ['Next.js', 'Framer Motion'],
    lastUpdate: '1 day ago',
    stats: { views: '3.1K', stars: 67 },
  },
  {
    id: 4,
    name: 'Task Management App',
    status: 'Active',
    progress: 45,
    tech: ['React', 'Firebase', 'Material-UI'],
    lastUpdate: '3 hours ago',
    stats: { views: '1.2K', stars: 28 },
  },
];

export default function ProjectsSection() {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-blue-700/30 overflow-hidden">
      <div className="p-6 border-b border-blue-700/30">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Recent Projects</h2>
          <button className="text-sm text-blue-400 hover:text-blue-300 font-medium">
            View All →
          </button>
        </div>
      </div>

      <div className="p-6 space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-slate-900/50 rounded-lg p-5 border border-blue-700/20 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <ClockIcon className="w-4 h-4" />
                  <span>{project.lastUpdate}</span>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  project.status === 'Completed'
                    ? 'bg-green-500/20 text-green-400'
                    : project.status === 'Active'
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}
              >
                {project.status}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="mb-3">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-400">Progress</span>
                <span className="text-blue-400 font-semibold">{project.progress}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <ArrowTrendingUpIcon className="w-4 h-4" />
                <span>{project.stats.views} views</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>⭐</span>
                <span>{project.stats.stars} stars</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
