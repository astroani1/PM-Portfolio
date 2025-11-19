import React from 'react';
import { Globe, User, Zap, Code, ExternalLink, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../../constants';
import GlassCard from '../GlassCard';
import { Project } from '../../types';

const getIcon = (type: Project['iconType']) => {
  switch(type) {
    case 'globe': return <Globe size={24} />;
    case 'user': return <User size={24} />;
    case 'zap': return <Zap size={24} />;
    default: return <Code size={24} />;
  }
};

const ProjectsView: React.FC = () => {
  return (
    <div className="animate-fadeIn pb-24">
      <div className="mb-10">
         <h2 className="text-3xl font-bold text-white mb-2">Lab & Projects</h2>
         <p className="text-white/50">Showcasing product initiatives from ideation to execution.</p>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        {PROJECTS.map((project, i) => (
          <GlassCard key={i} className="group p-0">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative p-8 md:flex items-start gap-8">
                {/* Icon Column */}
               <div className="w-full md:w-auto mb-6 md:mb-0 shrink-0">
                  <div className="w-20 h-20 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-lg">
                    {getIcon(project.iconType)}
                  </div>
               </div>
               
               {/* Content Column */}
               <div className="w-full flex-1">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                     <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                     <div className="inline-flex items-center px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium">
                       {project.tag}
                     </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mt-6">
                     <div className="md:col-span-2">
                        <h4 className="text-xs font-bold text-white/30 uppercase tracking-widest mb-3">Overview</h4>
                        <p className="text-white/70 leading-relaxed">
                          {project.desc}
                        </p>
                     </div>
                     
                     <div className="md:col-span-1">
                        <h4 className="text-xs font-bold text-white/30 uppercase tracking-widest mb-3">Impact</h4>
                         <div className="p-4 rounded-2xl bg-black/20 border border-white/5 text-emerald-300 font-mono text-xs leading-relaxed shadow-inner">
                           {project.metrics}
                         </div>
                     </div>
                  </div>

                  <div className="flex gap-3 mt-8 pt-6 border-t border-white/5">
                    <button className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors shadow-lg flex items-center gap-2">
                      View PRD <ExternalLink size={14} className="opacity-50"/>
                    </button>
                    <button className="px-5 py-2.5 rounded-xl border border-white/10 hover:border-white/30 hover:bg-white/5 text-white text-sm font-medium transition-colors flex items-center gap-2">
                      Live Demo <ArrowUpRight size={14} className="opacity-50"/>
                    </button>
                  </div>
               </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default ProjectsView;