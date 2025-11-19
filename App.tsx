import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dock from './components/Dock';
import Overview from './components/views/Overview';
import ExperienceView from './components/views/Experience';
import ProjectsView from './components/views/Projects';
import SkillsView from './components/views/Skills';
import { TabType } from './types';
import { PROFILE } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(new Date());

  // Mouse tracking for background parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // Clock timer
    const timer = setInterval(() => setTime(new Date()), 1000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden text-slate-200 selection:bg-indigo-500/30">
      
      {/* --- LIQUID BACKGROUND --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <div 
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[120px] opacity-50 animate-blob"
          style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)` }}
        />
        <div 
          className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-2000"
          style={{ transform: `translate(${mousePos.x * -30}px, ${mousePos.y * 20}px)` }}
        />
        <div 
          className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-pink-600/20 rounded-full mix-blend-screen filter blur-[130px] opacity-40 animate-blob animation-delay-4000"
          style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * -20}px)` }}
        />
        <div className="absolute inset-0 bg-noise opacity-[0.03]"></div>
      </div>

      {/* --- MAIN INTERFACE --- */}
      <div className="relative z-10 flex flex-col h-screen p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto">
        
        {/* Top Status Bar */}
        <header className="flex justify-between items-center px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-6 shadow-lg shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-[0_0_10px_rgba(255,95,86,0.4)]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-[0_0_10px_rgba(255,189,46,0.4)]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-[0_0_10px_rgba(39,201,63,0.4)]"></div>
          </div>
          <div className="hidden md:block text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">Arnab OS v2.0</div>
          <div className="flex items-center gap-4 text-white/70 text-sm font-medium tabular-nums">
            <span>{time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
            <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-500 shadow-lg"></div>
          </div>
        </header>

        {/* Main Split Content */}
        <main className="flex-1 flex gap-6 overflow-hidden relative mb-20 md:mb-24">
          <Sidebar />
          
          {/* Right Panel (Content Stage) */}
          <section className="flex-1 bg-gray-900/30 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden flex flex-col">
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-10 lg:p-12">
              {activeTab === 'overview' && <Overview setTab={setActiveTab} />}
              {activeTab === 'experience' && <ExperienceView />}
              {activeTab === 'projects' && <ProjectsView />}
              {activeTab === 'skills' && <SkillsView />}
            </div>
          </section>
        </main>

        {/* Dock */}
        <Dock 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          email={PROFILE.email} 
        />
      </div>
    </div>
  );
};

export default App;