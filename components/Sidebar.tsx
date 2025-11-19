import React from 'react';
import { Mail, Linkedin, MapPin, ExternalLink } from 'lucide-react';
import { PROFILE } from '../constants';
import GlassCard from './GlassCard';

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden lg:flex flex-col w-80 h-full shrink-0 relative z-20">
      <GlassCard className="h-full p-8 flex flex-col relative group rounded-[2.5rem]">
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-8">
            <div className="relative w-24 h-24 mb-6">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-indigo-500 to-purple-500 blur-lg opacity-60"></div>
              <img 
                src={PROFILE.image} 
                alt={PROFILE.name} 
                className="relative w-full h-full rounded-[2rem] object-cover border-2 border-white/20 shadow-2xl"
              />
            </div>
            
            <h1 className="text-3xl font-bold text-white tracking-tight mb-2">{PROFILE.name}</h1>
            <p className="text-indigo-200/90 font-medium">{PROFILE.role}</p>
            
            <div className="flex items-center gap-2 mt-4 text-sm text-white/50 bg-white/5 px-3 py-1.5 rounded-full w-fit">
              <MapPin size={14} />
              <span>{PROFILE.location}</span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
            <p className="text-sm leading-relaxed text-white/70 font-light">
              {PROFILE.summary}
            </p>
          </div>

          <div className="mt-auto pt-6 border-t border-white/10 flex gap-3">
            <a 
               href={`mailto:${PROFILE.email}`}
               className="flex-1 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/5 transition-all flex items-center justify-center gap-2 text-sm font-medium text-white group/btn shadow-lg"
            >
              <Mail size={16} className="group-hover/btn:scale-110 transition-transform" />
              Contact
            </a>
            <a 
              href={PROFILE.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-2xl bg-[#0077b5]/20 hover:bg-[#0077b5]/40 border border-[#0077b5]/30 text-[#0077b5] text-blue-300 transition-all shadow-lg"
            >
              <Linkedin size={18} />
            </a>
             <a 
              href={PROFILE.social.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all shadow-lg"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </GlassCard>
    </aside>
  );
};

export default Sidebar;