import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import StatsCards from '@/components/StatsCards';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsChart from '@/components/SkillsChart';
import ActivityFeed from '@/components/ActivityFeed';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 shadow-xl">
              <h1 className="text-3xl font-bold text-white mb-2">
                Welcome to Your Portfolio Dashboard
              </h1>
              <p className="text-blue-100">
                Track your projects, skills, and achievements in one place.
              </p>
            </div>

            {/* Stats Cards */}
            <StatsCards />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <ProjectsSection />
              </div>
              
              <div className="space-y-6">
                <SkillsChart />
                <ActivityFeed />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
