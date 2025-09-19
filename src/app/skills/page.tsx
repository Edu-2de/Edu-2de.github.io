'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Types
interface Skill {
  id: number;
  name: string;
  category: string;
  level: number;
  experience: string;
  description: string;
  icon?: string;
  projects?: string[];
}

interface SkillCategory {
  name: string;
  skills: Skill[];
  color: string;
  description: string;
}

// Skills Data
const skillsData: SkillCategory[] = [
  {
    name: 'Frontend Development',
    description: 'User interface and experience technologies',
    color: 'from-blue-400 to-cyan-400',
    skills: [
      {
        id: 1,
        name: 'React',
        category: 'Frontend',
        level: 85,
        experience: '2+ years',
        description: 'Component-based UI development with hooks and state management',
        projects: ['Portfolio Website', 'E-commerce Dashboard', 'Task Management App']
      },
      {
        id: 2,
        name: 'Next.js',
        category: 'Frontend',
        level: 80,
        experience: '1+ years',
        description: 'Full-stack React framework with SSR and API routes',
        projects: ['Personal Portfolio', 'Blog Platform', 'Business Website']
      },
      {
        id: 3,
        name: 'TypeScript',
        category: 'Frontend',
        level: 75,
        experience: '1+ years',
        description: 'Type-safe JavaScript for scalable applications',
        projects: ['React Applications', 'Node.js APIs', 'Configuration Tools']
      },
      {
        id: 4,
        name: 'Tailwind CSS',
        category: 'Frontend',
        level: 90,
        experience: '2+ years',
        description: 'Utility-first CSS framework for rapid UI development',
        projects: ['All Recent Projects', 'Component Libraries', 'Landing Pages']
      }
    ]
  },
  {
    name: 'Backend Development',
    description: 'Server-side technologies and databases',
    color: 'from-green-400 to-emerald-400',
    skills: [
      {
        id: 5,
        name: 'Node.js',
        category: 'Backend',
        level: 70,
        experience: '1+ years',
        description: 'JavaScript runtime for building scalable server applications',
        projects: ['REST APIs', 'Real-time Chat App', 'Authentication Systems']
      },
      {
        id: 6,
        name: 'Python',
        category: 'Backend',
        level: 65,
        experience: '1+ years',
        description: 'Versatile programming language for web development and automation',
        projects: ['Data Processing Scripts', 'Web Scrapers', 'API Integrations']
      },
      {
        id: 7,
        name: 'PostgreSQL',
        category: 'Backend',
        level: 60,
        experience: '6 months',
        description: 'Advanced open-source relational database system',
        projects: ['User Management System', 'E-commerce Database', 'Analytics Platform']
      },
      {
        id: 8,
        name: 'MongoDB',
        category: 'Backend',
        level: 55,
        experience: '6 months',
        description: 'NoSQL document database for flexible data storage',
        projects: ['Content Management', 'User Profiles', 'Logging Systems']
      }
    ]
  },
  {
    name: 'Tools & Technologies',
    description: 'Development tools and deployment platforms',
    color: 'from-purple-400 to-pink-400',
    skills: [
      {
        id: 9,
        name: 'Git',
        category: 'Tools',
        level: 85,
        experience: '2+ years',
        description: 'Version control system for tracking code changes',
        projects: ['All Projects', 'Open Source Contributions', 'Team Collaboration']
      },
      {
        id: 10,
        name: 'Docker',
        category: 'Tools',
        level: 50,
        experience: '3 months',
        description: 'Containerization platform for consistent deployments',
        projects: ['Development Environment', 'Microservices', 'CI/CD Pipeline']
      },
      {
        id: 11,
        name: 'VS Code',
        category: 'Tools',
        level: 95,
        experience: '3+ years',
        description: 'Primary code editor with extensive customization',
        projects: ['Daily Development', 'Extension Configuration', 'Team Settings']
      },
      {
        id: 12,
        name: 'Vercel',
        category: 'Tools',
        level: 80,
        experience: '1+ years',
        description: 'Platform for frontend deployment with serverless functions',
        projects: ['Portfolio Hosting', 'Static Sites', 'API Deployment']
      }
    ]
  }
];

// Back Button Component
const BackButton = () => (
  <motion.button
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.5, duration: 0.8 }}
    onClick={() => window.location.href = '/'}
    className="fixed top-8 left-8 z-50 group"
  >
    <div className="flex items-center gap-3 px-4 py-2 bg-gray-900/80 hover:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700/50 transition-all duration-300">
      <motion.svg
        className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        whileHover={{ x: -3 }}
        transition={{ duration: 0.2 }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
      </motion.svg>
      <span className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium">
        Back
      </span>
    </div>
  </motion.button>
);

// Floating Particles Background
const FloatingParticles = () => {
  const [particles, setParticles] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const elements = [];
      const numberOfParticles = 30;

      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 3 + 1;
        const duration = 15 + Math.random() * 25;
        const delay = Math.random() * 10;
        
        elements.push(
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
              opacity: [0.1, 0.3, 0.1, 0.1],
              scale: [1, 1.2, 0.8, 1]
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        );
      }
      setParticles(elements);
    };

    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles}
    </div>
  );
};

// Animated Skill Bar Component
const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      className="group"
    >
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-xl font-light text-white group-hover:text-gray-300 transition-colors">
          {skill.name}
        </h4>
        <div className="flex items-center gap-4 text-sm">
          <span className="font-medium text-gray-300">{skill.level}%</span>
          <span className="text-gray-500">{skill.experience}</span>
        </div>
      </div>
      
      <div className="relative mb-6">
        <div className="w-full bg-gray-800 rounded-full h-1">
          <motion.div
            className="bg-gradient-to-r from-gray-300 to-white h-1 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: isVisible ? `${skill.level}%` : 0 }}
            transition={{ duration: 2, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>
      </div>
      
      <p className="text-gray-400 leading-relaxed mb-4 font-light">
        {skill.description}
      </p>
      
      {skill.projects && (
        <div className="flex flex-wrap gap-2">
          {skill.projects.slice(0, 2).map((project, idx) => (
            <span
              key={idx}
              className="inline-block px-3 py-1 text-xs bg-gray-800/50 text-gray-300 rounded-full border border-gray-700/50"
            >
              {project}
            </span>
          ))}
          {skill.projects.length > 2 && (
            <span className="inline-block px-3 py-1 text-xs bg-gray-800/30 text-gray-500 rounded-full border border-gray-700/30">
              +{skill.projects.length - 2} more
            </span>
          )}
        </div>
      )}
    </motion.div>
  );
};

// Skill Category Section
const SkillCategorySection = ({ category, index }: { category: SkillCategory; index: number }) => (
  <motion.section
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: index * 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    viewport={{ once: true, margin: "-100px" }}
    className="mb-32"
  >
    <div className="text-center mb-16">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: index * 0.3 + 0.3 }}
        viewport={{ once: true }}
        className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${category.color} text-black text-sm font-medium mb-6`}
      >
        {category.name}
      </motion.div>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.3 + 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-gray-400 max-w-lg mx-auto text-lg font-light"
      >
        {category.description}
      </motion.p>
    </div>

    <div className="grid gap-12 lg:grid-cols-2">
      {category.skills.map((skill, skillIndex) => (
        <motion.div 
          key={skill.id} 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: skillIndex * 0.1, duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-gray-700/50 hover:bg-gray-900/40 transition-all duration-500"
        >
          <SkillBar skill={skill} index={skillIndex} />
        </motion.div>
      ))}
    </div>
  </motion.section>
);

// Hero Section
const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center max-w-5xl mx-auto"
      >
        <motion.h1
          className="text-7xl md:text-8xl font-extralight mb-12 text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Technical Skills
        </motion.h1>

        <motion.p
          className="text-2xl text-gray-400 font-light leading-relaxed mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Technologies and tools I use to build modern web applications and solve complex problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {['Self-taught', 'Continuously Learning', 'Problem Solver'].map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
              className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full border border-gray-700/50 font-light"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>

    {/* Scroll Indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5 }}
      className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="w-6 h-12 border border-gray-600 rounded-full flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 16, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="w-1 h-4 bg-gray-500 rounded-full mt-3"
        />
      </motion.div>
    </motion.div>
  </section>
);

// Skills Overview Stats
const SkillsStats = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.2 }}
    viewport={{ once: true, margin: "-100px" }}
    className="py-32"
  >
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
          At a Glance
        </h2>
        <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
          A snapshot of my journey in software development
        </p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
        {[
          { number: '12+', label: 'Technologies', description: 'Languages & Frameworks' },
          { number: '20+', label: 'Projects', description: 'Built & Deployed' },
          { number: '2+', label: 'Years', description: 'Learning & Building' },
          { number: '100%', label: 'Self-taught', description: 'Continuous Learning' }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.15, duration: 0.8 }}
            viewport={{ once: true }}
            className="group text-center"
          >
            <motion.div 
              className="text-5xl md:text-6xl font-extralight text-white mb-4 group-hover:text-gray-300 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {stat.number}
            </motion.div>
            <div className="text-lg font-light text-gray-300 mb-2">
              {stat.label}
            </div>
            <div className="text-sm text-gray-500 font-light">
              {stat.description}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

// Call to Action Section
const CTASection = () => (
  <motion.section
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
    viewport={{ once: true, margin: "-100px" }}
    className="py-32"
  >
    <div className="container mx-auto px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-light text-white mb-8 tracking-tight"
        >
          Let&apos;s Create Something Amazing
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-400 leading-relaxed mb-12 font-light"
        >
          I&apos;m always eager to learn new technologies and take on challenging projects. 
          Let&apos;s discuss how we can bring your ideas to life.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 bg-white text-black font-medium hover:bg-gray-100 transition-colors duration-300 rounded-full"
            onClick={() => window.location.href = '/contact'}
          >
            Get In Touch
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 border border-gray-600 text-gray-300 font-medium hover:bg-gray-800/30 hover:border-gray-500 transition-all duration-300 rounded-full"
            onClick={() => window.location.href = '/projects'}
          >
            View Projects
          </motion.button>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

// Main Skills Page Component
export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <FloatingParticles />
      <BackButton />
      
      <HeroSection />
      
      <div className="relative z-10">
        <SkillsStats />
        
        <main className="container mx-auto px-6 py-20">
          {skillsData.map((category, index) => (
            <SkillCategorySection key={category.name} category={category} index={index} />
          ))}
        </main>
        
        <CTASection />
      </div>
    </div>
  );
}