import React from 'react';
import { Layout, Briefcase, Code, Cpu, Mail } from 'lucide-react';
import { TabType } from '../types';

interface DockProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  email: string;
}

interface DockItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

const DockItem: React.FC<DockItemProps> = ({ icon, label, isActive, onClick }) => {
  return (
    <div className="group relative flex flex-col items-center gap-1 px-1 md:px-2">
      <button 
        onClick={onClick}
        className={`
          relative w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ease-out
          ${isActive 
            ? 'bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.3)] scale-110 -translate-y-2' 
            : 'bg-white/5 text-white/60 hover:bg-white/20 hover:scale-110 hover:-translate-y-2 hover:text-white border border-white/5 hover:border-white/20'}
        `}
        aria-label={label}
      >
        {icon}
        {isActive && (
          <div className="absolute -bottom-3 w-1 h-1 rounded-full bg-white/80 shadow-[0_0_5px_white]"></div>
        )}
      </button>
      {/* Tooltip */}
      <span className="absolute -top-12 px-3 py-1.5 rounded-lg bg-gray-900/90 border border-white/10 backdrop-blur-xl text-[10px] font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-xl translate-y-2 group-hover:translate-y-0">
        {label}
      </span>
    </div>
  );
};

const Dock: React.FC<DockProps> = ({ activeTab, setActiveTab, email }) => {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="px-4 py-3 md:px-6 md:py-4 rounded-[2.5rem] bg-white/[0.07] backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex items-center gap-1 md:gap-2">
        <DockItem 
          icon={<Layout size={22} strokeWidth={1.5} />} 
          label="Overview" 
          isActive={activeTab === 'overview'} 
          onClick={() => setActiveTab('overview')} 
        />
        <DockItem 
          icon={<Briefcase size={22} strokeWidth={1.5} />} 
          label="Experience" 
          isActive={activeTab === 'experience'} 
          onClick={() => setActiveTab('experience')} 
        />
        <DockItem 
          icon={<Cpu size={22} strokeWidth={1.5} />} 
          label="Projects" 
          isActive={activeTab === 'projects'} 
          onClick={() => setActiveTab('projects')} 
        />
        <DockItem 
          icon={<Code size={22} strokeWidth={1.5} />} 
          label="Skills" 
          isActive={activeTab === 'skills'} 
          onClick={() => setActiveTab('skills')} 
        />
        
        <div className="w-px h-8 bg-white/10 mx-2 md:mx-3"></div>
        
        <DockItem 
          icon={<Mail size={22} strokeWidth={1.5} />} 
          label="Contact" 
          onClick={() => window.location.href = `mailto:${email}`} 
        />
      </div>
    </nav>
  );
};

export default Dock;