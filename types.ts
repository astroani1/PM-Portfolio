import { ReactNode } from 'react';

export interface Profile {
  name: string;
  image: string;
  role: string;
  location: string;
  email: string;
  phone: string;
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
  iconType: 'globe' | 'user' | 'zap' | 'code' | 'wallet' | 'plane'; 
  links?: {
    prd?: string;
    demo?: string;
  };
}

export interface Skill {
  name: string;
  logo?: 'figma' | 'jira' | 'notion' | 'servicenow' | 'huggingface' | 'n8n';
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface Education {
  school: string;
  degree: string;
  year: string;
}

export type TabType = 'overview' | 'experience' | 'projects' | 'skills';