import React from 'react';
import { User, Layout, Terminal, Cpu } from 'lucide-react';
import { SKILLS } from '../../constants';
import GlassCard from '../GlassCard';
import { SkillGroup } from '../../types';

const getIcon = (type: SkillGroup['iconType']) => {
  switch(type) {
    case 'strategy': return <User className="text-pink-400" size={24} />;
    case 'prioritization': return <Layout className="text-cyan-400" size={24} />;
    case 'tools': return <Terminal className="text-emerald-400" size={24} />;
    case 'metrics': return <Cpu className="text-orange-400" size={24} />;
    default: return <User className="text-white" size={24} />;
  }
};

const SkillsView: React.FC = () => {
  return (
    <div className="animate-fadeIn h-full flex flex-col justify-center min-h-[60vh]">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-white mb-3">Tech Stack & Tools</h2>
        <p className="text-white/50 max-w-xl text-lg">The strategic and technical arsenal used to build and scale products.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILLS.map((group, i) => (
          <GlassCard key={i} className="p-8 hover:bg-white/[0.07]">
            <div className="flex items-center gap-4 mb-6">
               <div className="p-3 rounded-xl bg-white/5 border border-white/5 shadow-lg">
                  {getIcon(group.iconType)}
               </div>
               <h3 className="text-xl font-bold text-white tracking-tight">
                 {group.category}
               </h3>
            </div>
            
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((skill, j) => (
                <span 
                  key={j} 
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/5 text-sm text-white/80 transition-all cursor-default hover:scale-105 hover:shadow-lg hover:border-white/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default SkillsView;