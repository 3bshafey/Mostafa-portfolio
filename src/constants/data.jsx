import { Github, Linkedin, MessageCircle, MessageSquare } from "lucide-react";


export const personalInfo = {
  name: "Mostafa Ayman",
  role: "Data Science & Automation Developer",
  bio: "Hi, I’m Mostafa. I build interactive desktop apps using JavaFX and work on Data Science, Web Scraping, RAG systems, and workflow automation with n8n to create practical, data-driven, and engaging digital solutions.",
  email: "moaymn707@gmail.com",
  location: "EGY",
};

export const projects = [1, 2, 3, 4, 5, 6];

export const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    link: "https://github.com/3bshafey",
    color: "hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/3bshafey",
    color: "hover:text-blue-400",
  },
  {
    name: "Telegram",
    icon: MessageCircle,
    link: "https://t.me/M3bshafey",
    color: "hover:text-blue-500",
  },
  {
    name: "Reddit",
    icon: MessageSquare,
    link: "https://www.reddit.com/user/Ok-Doubt-8985/",
    color: "hover:text-orange-500",
  },
];

export const experiences = [
  {
    title: "Data Science Trainee",
    company: "DEPI",
    period: "2025 — Present",
    desc: "Working on data analysis, machine learning fundamentals, and Web Scraping projects. Transforming raw data into actionable insights and practical data-driven solutions.",
    color: "violet",
  },
  {
    title: "Automation Developer (n8n)",
    company: "Self Study",
    period: "2025 — Present",
    desc: "Designing automated workflows and data pipelines using n8n to connect APIs, databases, and AI services efficiently.",
    color: "cyan",
  },
  {
    title: "RAG System Trainee",
    company: "ITI",
    period: "2025",
    desc: "Built Retrieval-Augmented Generation (RAG) systems integrating external data sources with AI models to develop intelligent and context-aware applications.",
    color: "pink",
  },
  {
    title: "JavaFX Desktop Developer",
    company: "AASTMT Academy",
    period: "2024",
    desc: "Developed interactive desktop applications using JavaFX with database integration and real-time system simulations, focusing on clean architecture and responsive UI design.",
    color: "orange",
  },
];

export const tools = [
  "VS Code – Code Editor",
  "Git & GitHub – Version Control",
  "n8n – Workflow Automation",
  "Jupyter Notebook – Data Analysis & Visualization",
  "SQL / MySQL / PostgreSQL – Databases",
  "Notion – Productivity",
  "Postman – API Testing",
];

export const goals = [
  "Showcase my Data Science, Web Scraping, RAG, and JavaFX projects",
  "Build practical workflow automations with n8n",
  "Explore AI & ML for real-world applications",
  "Share knowledge through tutorials and content",
  "Learn new tools and frameworks continuously",
];

export const achievements = [
  {
    title: "Projects Completed",
    value: "10+",
    desc: "Built 15+ Data Science, Web Scraping, and JavaFX desktop projects for personal and academic purposes.",
    color: "yellow",
  },
  {
    title: "Automation Workflows",
    value: "5+",
    desc: "Created 10+ automated workflows and pipelines using n8n to connect APIs, databases, and AI services.",
    color: "cyan",
  },
  {
    title: "RAG Systems Experiments",
    value: "3+",
    desc: "Developed multiple Retrieval-Augmented Generation systems integrating external data sources with AI models.",
    color: "pink",
  },
  {
    title: "Learning Milestones",
    value: "6+",
    desc: "Completed courses and self-study projects in Data Science, AI, RAG, and Automation technologies.",
    color: "violet",
  },
];

export const skills = [
  {
    category: "Programming & Desktop Apps",
    skills: [
      "Java / JavaFX - Desktop Applications",
      "Python - Data Processing & Automation",
      "Jupyter Notebook - Data Science & Visualization",
    ],
  },
  {
    category: "Data & AI",
    skills: [
      "Data Analysis - Pandas & NumPy",
      "Web Scraping - BeautifulSoup & Selenium",
      "RAG Systems - AI & Retrieval-Augmented Generation",
      "Machine Learning Basics",
    ],
  },
  {
    category: "Automation & Tools",
    skills: [
      "n8n - Workflow Automation",
      "Git & GitHub - Version Control",
      "VS Code - Code Editor",
      "PostgreSQL / MySQL - Databases",
      "Docker - Containerization",
    ],
  },
  {
    category: "Professional Skills",
    skills: [
      "Problem Solving & Logical Thinking",
      "System Design & Architecture",
      "Project Management - Agile",
    ],
  },
];

export const certificates = [
  "RAG System Trainee - ITI",
  "Flutter Development - ITI",
  "Network Infrastructure - NTI",
  "Machine Learning - Oracle",
  "Academic Excellence - Ranked 2nd in Class",
];

export const animatedBlobs = [
  {
    className:
      "top-[-10%] left-[-5%] w-[800px] h-[800px] bg-gradient-to-br from-violet-600 via-purple-500 to-pink-500 opacity-40 blur-[180px]",
    animate: {
      x: [0, 150, -100, 0],
      y: [0, -80, 60, 0],
      scale: [1, 1.2, 0.9, 1],
      rotate: [0, 90, 180, 360],
    },
    duration: 20,
  },
  {
    className:
      "bottom-[-15%] right-[-5%] w-[700px] h-[700px] bg-gradient-to-tl from-cyan-500 via-blue-500 to-indigo-600 opacity-50 blur-[160px]",
    animate: {
      x: [0, -140, 100, 0],
      y: [0, 90, -70, 0],
      scale: [1, 0.85, 1.15, 1],
      rotate: [360, 270, 180, 0],
    },
    duration: 25,
  },
  {
    className:
      "top-[10%] left-[80%] -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 opacity-35 blur-[200px]",
    animate: {
      x: [0, 80, -120, 0],
      y: [0, -60, 80, 0],
      scale: [1, 1.1, 0.95, 1],
      rotate: [0, -90, -180, -360],
    },
    duration: 22,
  },
  {
    className:
      "top-[20%] right-[10%] w-[500px] h-[500px] bg-gradient-to-bl from-emerald-500 via-teal-500 to-cyan-600 opacity-30 blur-[190px]",
    animate: {
      x: [0, -70, 110, 0],
      y: [0, 100, -50, 0],
      scale: [1, 0.9, 1.2, 1],
      rotate: [0, 120, 240, 360],
    },
    duration: 18,
  },
  {
    className:
      "bottom-[30%] left-[20%] w-[600px] h-[600px] bg-gradient-to-tr from-amber-500 via-yellow-500 to-lime-500 opacity-25 blur-[210px]",
    animate: {
      x: [0, 130, -90, 0],
      y: [0, -70, 90, 0],
      scale: [1, 1.15, 0.88, 1],
      rotate: [0, -120, -240, -360],
    },
    duration: 28,
  },
];
