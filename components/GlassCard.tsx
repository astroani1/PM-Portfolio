import React, { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", hoverEffect = false, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        relative overflow-hidden
        bg-white/5 backdrop-blur-xl border border-white/10 
        rounded-3xl shadow-xl
        transition-all duration-300 ease-out
        ${hoverEffect ? 'hover:bg-white/10 hover:scale-[1.01] hover:shadow-2xl hover:border-white/20 cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;