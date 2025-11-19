import React from 'react';
import { Mail, Linkedin, MapPin, Phone, Github } from 'lucide-react';
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

          {/* Updated Footer Actions */}
          <div className="mt-auto pt-6 border-t border-white/10 grid grid-cols-4 gap-2.5">
            {/* Email */}
            <a 
               href={`mailto:${PROFILE.email}`}
               className="aspect-square rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] group relative overflow-hidden"
               aria-label="Send Email"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Mail size={20} className="relative z-10 opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* Call */}
            <a 
               href={`tel:${PROFILE.phone}`}
               className="aspect-square rounded-2xl bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/30 flex items-center justify-center text-white transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] group relative overflow-hidden"
               aria-label="Call"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Phone size={20} className="relative z-10 opacity-70 group-hover:opacity-100 group-hover:text-emerald-400 transition-all" />
            </a>

            {/* LinkedIn */}
            <a 
              href={PROFILE.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="aspect-square rounded-2xl bg-[#0077b5] flex items-center justify-center text-white transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(0,119,181,0.6)] relative group"
              aria-label="LinkedIn"
            >
               <Linkedin size={22} fill="currentColor" strokeWidth={0} className="relative z-10" />
            </a>

            {/* GitHub */}
             <a 
              href={PROFILE.social.github}
              target="_blank"
              rel="noreferrer"
              className="aspect-square rounded-2xl bg-[#1a1d21] border border-white/10 flex items-center justify-center text-white transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] relative group"
              aria-label="GitHub"
            >
              <Github size={22} className="relative z-10" />
            </a>
          </div>
        </div>
      </GlassCard>
    </aside>
  );
};

export default Sidebar;