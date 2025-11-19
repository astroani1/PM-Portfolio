import { Profile, Experience, Project, SkillGroup, Education } from './types';

export const PROFILE: Profile = {
  name: "Arnab Das",
  image: "https://media.licdn.com/dms/image/v2/D4D03AQEwolosDg4JrQ/profile-displayphoto-crop_800_800/B4DZk3gbgHH4AI-/0/1757572874283?e=1765411200&v=beta&t=90ZH-oeo1WEnvQUfAIN4fQOTybfq0Ft5BfZxL1wZU_I", 
  role: "Product & Operations Professional",
  location: "Kolkata, India",
  email: "ani20161998@gmail.com",
  phone: "+918537037377",
  summary: "Product and operations professional with 5+ years spanning enterprise incident management and digital media entrepreneurship. Co-founded TechnoSports (scaling to 100K+ reach). Expert in product roadmapping, PRDs, market research, and agile delivery.",
  social: {
    linkedin: "https://www.linkedin.com/in/arnabdas7",
    github: "https://github.com/astroani1"
  }
};

export const EXPERIENCE: Experience[] = [
  {
    company: "Capgemini",
    role: "L2 Engineer - Storage & Backup",
    period: "May 2025 - Present",
    type: "Corporate",
    desc: "Managing enterprise storage incidents for global clients. Implementing preventive measures and enhancing stability through RCA and automation.",
    color: "blue"
  },
  {
    company: "Capgemini",
    role: "Service Delivery & Incident Management Lead",
    period: "Mar 2020 - May 2025",
    type: "Corporate",
    desc: "Led a 12-15 member engineering team for Major Incident Management. Deployed ServiceNow dashboards improving workflow visibility by 20%.",
    color: "indigo"
  },
  {
    company: "TechnoSports Media Group",
    role: "Co-founder, Product & Content Lead",
    period: "May 2017 - Oct 2022",
    type: "Startup",
    desc: "Scaled sub-brands to 100K+ monthly reach. Defined MVP app features, UX roadmap, and led PR campaigns. Managed design collaborations.",
    color: "orange"
  }
];

export const PROJECTS: Project[] = [
  {
    name: "Triip",
    tag: "AI Travel Copilot",
    desc: "Fine-tuned model prototype on India dataset. MVP focused on itinerary, budget, and eco-travel.",
    metrics: "Guardrails <1.5s latency, ≤2% hallucination",
    iconType: 'globe'
  },
  {
    name: "HireMate",
    tag: "AI Mock Interviewer",
    desc: "Platform with freemium pricing tiers. GTM strategy involving Product Hunt and campus partners.",
    metrics: "NPS > 40, ≥10% paid conversion",
    iconType: 'user'
  },
  {
    name: "WhatsApp Smart AI",
    tag: "Chat Summarizer",
    desc: "LLM summarizer for chat threads. Prototypes thread ingestion, key-points, and action items.",
    metrics: "Latency <1.5s per 50 msgs",
    iconType: 'zap'
  }
];

export const SKILLS: SkillGroup[] = [
  { 
    category: "Strategy", 
    items: ["User Interviews", "JTBD", "Problem Framing", "Hypothesis Design", "Competitor Research"],
    iconType: 'strategy'
  },
  { 
    category: "Prioritization", 
    items: ["PRD Writing", "Roadmapping", "RICE / MoSCoW", "Backlog Grooming", "GTM"],
    iconType: 'prioritization'
  },
  { 
    category: "Tools", 
    items: ["Figma", "Jira", "Notion", "ServiceNow", "Hugging Face", "n8n", "Excel"],
    iconType: 'tools'
  },
  { 
    category: "Metrics", 
    items: ["NPS", "CAC", "CLTV", "LTV:CAC", "Adoption Rate", "Retention"],
    iconType: 'metrics'
  }
];

export const EDUCATION: Education[] = [
  {
    school: "IIT Patna | Masai",
    degree: "Product Management & Agentic AI",
    year: "Recent"
  },
  {
    school: "UEM Kolkata",
    degree: "B.Tech in Electronics & Comm. Engineering",
    year: "Graduate"
  }
];