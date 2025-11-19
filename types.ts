import { ReactNode } from 'react';

export interface Profile {
  name: string;
  image: string;
  role: string;
  location: string;
  email: string;
  summary: string;
  social: {
    linkedin: string;
    github: string;
  };
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  type: 'Corporate' | 'Startup';
  desc: string;
  color: string;
}

export interface Project {
  name: string;
  tag: string;
  desc: string;
  metrics: string;
  iconType: 'globe' | 'user' | 'zap' | 'code'; 
}

export interface SkillGroup {
  category: string;
  items: string[];
  iconType: 'strategy' | 'prioritization' | 'tools' | 'metrics';
}

export interface Education {
  school: string;
  degree: string;
  year: string;
}

export type TabType = 'overview' | 'experience' | 'projects' | 'skills';