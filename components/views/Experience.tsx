import React from 'react';
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';
import { EXPERIENCE, EDUCATION } from '../../constants';
import GlassCard from '../GlassCard';

const ExperienceView: React.FC = () => {
  return (
    <div className="animate-fadeIn pb-24 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-bold text-white">Professional Journey</h2>
        <div className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-white/40 font-mono">
          {EXPERIENCE.length} ROLES
        </div>
      </div>
      
      <div className="space-y-8 relative pl-8 md:pl-0">
        {/* Timeline Line */}
        <div className="absolute left-[20px] md:left-1/2 top-4 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/50 via-white/10 to-transparent md:-translate-x-1/2"></div>

        {EXPERIENCE.map((job, i) => (
          <div key={i} className="relative flex flex-col md:flex-row items-center justify-between md:even:flex-row-reverse group">
            
            {/* Timeline Node */}
            <div className="absolute left-[-12px] md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-full border border-white/10 bg-gray-900/60 backdrop-blur-xl shadow-[0_0_30px_rgba(129,140,248,0.15)] flex items-center justify-center z-10">
              <Briefcase size={20} className={`text-${job.color}-400`} />
            </div>
            
            {/* Content Card */}
            <div className="w-full md:w-[calc(50%-3rem)] pl-12 md:pl-0">
              <GlassCard className="p-6 hover:border-white/30 transition-colors group-hover:bg-white/[0.07]">
                <div className="flex flex-col justify-between mb-3">
                   <div className="flex items-center gap-2 mb-1">
                     <span className={`w-2 h-2 rounded-full bg-${job.color}-500 shadow-[0_0_8px_currentColor]`}></span>
                     <h3 className="text-lg font-bold text-white">{job.company}</h3>
                   </div>
                   <div className="flex items-center gap-2 text-xs text-white/40 font-mono uppercase tracking-wide">
                      <Calendar size={12} />
                      {job.period}
                   </div>
                </div>
                <div className="text-indigo-300 font-medium mb-3 text-sm">{job.role}</div>
                <p className="text-sm text-white/60 leading-relaxed">
                  {job.desc}
                </p>
                <div className="mt-4 inline-block px-2 py-1 rounded bg-white/5 text-[10px] text-white/30 border border-white/5">
                  {job.type}
                </div>
              </GlassCard>
            </div>
            
            {/* Spacer for alternate side */}
            <div className="hidden md:block md:w-[calc(50%-3rem)]" />
          </div>
        ))}
      </div>

      <div className="mt-20 pt-10 border-t border-white/10">
         <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <GraduationCap className="text-indigo-400" /> Education
         </h3>
         <div className="grid md:grid-cols-2 gap-4">
            {EDUCATION.map((edu, i) => (
              <GlassCard key={i} className="p-5 flex items-center gap-4 hover:bg-white/10">
                 <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white/70 shadow-inner">
                   <span className="text-lg font-bold">{edu.school.charAt(0)}</span>
                 </div>
                 <div>
                   <div className="font-semibold text-white">{edu.school}</div>
                   <div className="text-sm text-white/50">{edu.degree}</div>
                   <div className="text-xs text-white/30 mt-1">{edu.year}</div>
                 </div>
              </GlassCard>
            ))}
         </div>
      </div>
    </div>
  );
};

export default ExperienceView;