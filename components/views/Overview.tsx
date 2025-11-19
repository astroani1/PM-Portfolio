import React from 'react';
import { User, Layers, Code, ChevronRight, Globe, Zap } from 'lucide-react';
import GlassCard from '../GlassCard';
import { PROJECTS, PROFILE } from '../../constants';
import { TabType, Project } from '../../types';

interface OverviewProps {
  setTab: (tab: TabType) => void;
}

const StatCard = ({ icon: Icon, val, label, colorClass }: { icon: any, val: string, label: string, colorClass: string }) => (
  <GlassCard hoverEffect className="p-6 group">
     <div className={`w-12 h-12 rounded-2xl ${colorClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
       <Icon size={24} className="text-white" />
     </div>
     <div className="text-3xl font-bold text-white mb-1 tracking-tight">{val}</div>
     <div className="text-sm text-white/40 font-medium uppercase tracking-wider">{label}</div>
  </GlassCard>
);

const getIcon = (type: Project['iconType']) => {
  switch(type) {
    case 'globe': return <Globe size={20} />;
    case 'user': return <User size={20} />;
    case 'zap': return <Zap size={20} />;
    case 'code': return <Code size={20} />;
    default: return <Code size={20} />;
  }
};

const Overview: React.FC<OverviewProps> = ({ setTab }) => {
  return (
    <div className="animate-fadeIn space-y-10 pb-20">
      <div className="space-y-2 mb-12 mt-4">
        <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400 tracking-tight">
          Building Digital Products.
        </h2>
        <p className="text-xl text-white/60 max-w-2xl font-light leading-relaxed">
          Bridging the gap between Engineering, Operations, and User Experience.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <StatCard 
          icon={User} 
          val="100K+" 
          label="Monthly Reach" 
          colorClass="bg-orange-500/20 text-orange-300"
        />
        <StatCard 
          icon={Layers} 
          val="5+ Yrs" 
          label="Experience" 
          colorClass="bg-blue-500/20 text-blue-300"
        />
        <StatCard 
          icon={Code} 
          val="AI/ML" 
          label="Specialization" 
          colorClass="bg-purple-500/20 text-purple-300"
        />
      </div>

      {/* Recent Projects Preview */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium text-white/80">Featured Projects</h3>
          <button 
            onClick={() => setTab('projects')} 
            className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-sm text-indigo-300 hover:text-indigo-200 flex items-center gap-1 transition-all"
          >
            View All <ChevronRight size={14} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.slice(0, 2).map((project, i) => (
            <GlassCard key={i} hoverEffect className="p-6 group" onClick={() => setTab('projects')}>
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 rounded-xl bg-white/10 text-white group-hover:bg-white/20 transition-colors shadow-inner">
                  {getIcon(project.iconType)}
                </div>
                <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-white/50 border border-white/5 backdrop-blur-md">
                  {project.tag}
                </span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">{project.name}</h4>
              <p className="text-sm text-white/50 line-clamp-2 leading-relaxed">{project.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
      
      {/* Mobile Profile Section (since Sidebar is hidden on mobile) */}
      <div className="lg:hidden pt-8 border-t border-white/10">
         <div className="flex items-center gap-4 mb-4">
           <img src={PROFILE.image} alt={PROFILE.name} className="w-16 h-16 rounded-2xl object-cover" />
           <div>
             <h3 className="text-xl font-bold text-white">{PROFILE.name}</h3>
             <p className="text-indigo-300 text-sm">{PROFILE.role}</p>
           </div>
         </div>
         <p className="text-sm text-white/60 leading-relaxed mb-6">{PROFILE.summary}</p>
         <div className="flex gap-3">
            <a href={PROFILE.social.linkedin} className="px-4 py-2 rounded-xl bg-[#0077b5]/20 text-[#0077b5] text-sm font-medium">LinkedIn</a>
            <a href={`mailto:${PROFILE.email}`} className="px-4 py-2 rounded-xl bg-white/10 text-white text-sm font-medium">Email</a>
         </div>
      </div>
    </div>
  );
};

export default Overview;