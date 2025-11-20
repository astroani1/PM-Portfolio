
import React from 'react';
import { Award } from 'lucide-react';
import { SKILLS, CERTIFICATIONS, CERTIFICATIONS_URL } from '../../constants';
import { Skill } from '../../types';

const getLogo = (logo: Skill['logo']) => {
  switch (logo) {
    case 'figma':
      return (
        <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
          <path d="M19 28.5C19 28.5 19 38 19 38C19 43.2467 14.7467 47.5 9.5 47.5C4.25329 47.5 0 43.2467 0 38C0 32.7533 4.25329 28.5 9.5 28.5H19Z" fill="#0ACF83"/>
          <path d="M0 19C0 13.7533 4.25329 9.5 9.5 9.5H19V28.5H9.5C4.25329 28.5 0 24.2467 0 19Z" fill="#A259FF"/>
          <path d="M19 0H28.5C33.7467 0 38 4.25329 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" fill="#FF7262"/>
          <path d="M19 19H28.5C33.7467 19 38 23.2467 38 28.5C38 33.7467 33.7467 38 28.5 38H19V19Z" fill="#1ABCFE"/>
          <path d="M9.5 0C4.25329 0 0 4.25329 0 9.5L0 19H19V9.5L19 0H9.5Z" fill="#F24E1E"/>
        </svg>
      );
    case 'jira':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
          <path d="M11.52 0.00499984C11.52 0.00499984 11.47 0 11.43 0C5.12 0.04 0 5.19 0 11.52C0 17.88 5.16 23.04 11.52 23.04V11.52V0.00499984Z" fill="#2684FF"/>
          <path d="M11.52 0C17.88 0 23.04 5.16 23.04 11.52H11.52V0Z" fill="url(#paint0_linear)"/>
          <path d="M11.52 11.52C11.52 17.88 16.68 23.04 23.04 23.04V11.52H11.52Z" fill="#0052CC"/>
          <defs>
            <linearGradient id="paint0_linear" x1="23.04" y1="11.52" x2="11.52" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0052CC"/>
              <stop offset="1" stopColor="#2684FF"/>
            </linearGradient>
          </defs>
        </svg>
      );
    case 'notion':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
          <path d="M9.0002 18.0527L8.9822 2.82861L4.41113 2.82861L4.41113 21.1716H7.4332L14.9998 7.04661V21.1716H19.5719V2.82861H16.1678L9.0002 18.0527Z" fill="white"/>
        </svg>
      );
    case 'servicenow':
      return (
        <div className="w-5 h-5 rounded-sm bg-[#81B5A1] flex items-center justify-center text-[8px] font-bold text-black leading-none">
          NOW
        </div>
      );
    case 'huggingface':
      return (
         <span className="text-lg leading-none">🤗</span>
      );
    case 'n8n':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#EA4B71]">
           <path d="M18.5 6.5C18.5 8.433 16.933 10 15 10C14.61 10 14.238 9.936 13.894 9.819L11.78 11.932C11.922 12.266 12 12.623 12 13C12 14.657 10.657 16 9 16C7.343 16 6 14.657 6 13C6 11.343 7.343 10 9 10C9.39 10 9.762 10.064 10.106 10.181L12.22 8.068C12.078 7.734 12 7.377 12 7C12 5.343 13.343 4 15 4C16.657 4 18.5 5.343 18.5 6.5Z" fill="currentColor"/>
           <path d="M15 17.5C15 19.433 13.433 21 11.5 21C9.567 21 8 19.433 8 17.5C8 16.333 9.5 14.5 11.5 14.5C13.5 14.5 15 16.333 15 17.5Z" fill="currentColor"/>
        </svg>
      );
    default:
      return null;
  }
};

const SkillsView: React.FC = () => {
  return (
    <div className="animate-fadeIn flex flex-col pb-40">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Skills & Toolkit</h2>
      </div>
      
      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {SKILLS.map((skill, i) => (
          <div 
            key={i} 
            className="group flex items-center justify-center gap-3 px-4 py-5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 hover:scale-[1.02] cursor-default"
          >
            {skill.logo && (
              <div className="shrink-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                 {getLogo(skill.logo)}
              </div>
            )}
            <span className="text-sm font-medium text-white/90">{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Certifications Section - Dark Card */}
      <a 
        href={CERTIFICATIONS_URL}
        target="_blank"
        rel="noreferrer"
        className="block w-full rounded-2xl bg-[#151520] border border-white/5 p-5 md:p-8 hover:border-white/10 hover:bg-[#1A1A25] transition-all duration-300 group relative overflow-hidden shadow-lg"
      >
        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-yellow-400" size={24} strokeWidth={2} />
            <h3 className="text-xl font-bold text-white">Certifications</h3>
          </div>
          
          <div className="flex flex-col gap-4 pl-1">
            {CERTIFICATIONS.map((cert, i) => (
              <div key={i} className="flex items-start gap-3 text-base">
                <div className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0 mt-2.5 group-hover:bg-indigo-400 transition-colors" />
                <span className="text-white/60 font-medium group-hover:text-white/80 transition-colors">
                  {cert.name} - {cert.issuer}
                </span>
              </div>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};

export default SkillsView;
