'use client';

const activities = [
  {
    id: 1,
    type: 'project',
    message: 'Deployed E-Commerce Platform v2.0',
    time: '2 hours ago',
    icon: '🚀',
  },
  {
    id: 2,
    type: 'skill',
    message: 'Completed TypeScript Advanced Course',
    time: '5 hours ago',
    icon: '🎓',
  },
  {
    id: 3,
    type: 'achievement',
    message: 'Reached 1K GitHub followers',
    time: '1 day ago',
    icon: '⭐',
  },
  {
    id: 4,
    type: 'project',
    message: 'Started AI Chat Application',
    time: '2 days ago',
    icon: '💡',
  },
  {
    id: 5,
    type: 'update',
    message: 'Updated portfolio design',
    time: '3 days ago',
    icon: '🎨',
  },
];

export default function ActivityFeed() {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-blue-700/30 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Recent Activity</h2>
        <button className="text-sm text-blue-400 hover:text-blue-300">View All</button>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={activity.id} className="flex items-start space-x-3 group">
            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-sm">{activity.icon}</span>
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                {activity.message}
              </p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>

            {index < activities.length - 1 && (
              <div className="absolute left-10 w-0.5 h-12 bg-blue-700/30 mt-8"></div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-blue-700/30">
        <button className="w-full py-2 bg-slate-700/50 hover:bg-slate-700 text-gray-300 hover:text-white rounded-lg font-medium transition-all">
          Load More
        </button>
      </div>
    </div>
  );
}
