'use client';

const skills = [
  { name: 'React/Next.js', level: 90, color: 'from-blue-500 to-cyan-500' },
  { name: 'TypeScript', level: 85, color: 'from-cyan-500 to-sky-500' },
  { name: 'Node.js', level: 80, color: 'from-sky-500 to-blue-500' },
  { name: 'Tailwind CSS', level: 95, color: 'from-blue-600 to-indigo-500' },
  { name: 'Python', level: 75, color: 'from-indigo-500 to-blue-600' },
];

export default function SkillsChart() {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-blue-700/30 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Top Skills</h2>
        <button className="text-sm text-blue-400 hover:text-blue-300">Edit</button>
      </div>

      <div className="space-y-5">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-300">{skill.name}</span>
              <span className="text-sm font-semibold text-blue-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-blue-700/30">
        <button className="w-full py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-lg font-medium transition-all">
          View All Skills
        </button>
      </div>
    </div>
  );
}
