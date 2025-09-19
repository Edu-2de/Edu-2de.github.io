'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/SpaceNavigation/SpaceNavigation';

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
    color: 'from-blue-500 to-cyan-500',
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
    color: 'from-green-500 to-emerald-500',
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
    color: 'from-purple-500 to-pink-500',
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

// Animated Skill Bar Component
const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-lg font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
          {skill.name}
        </h4>
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <span className="font-medium">{skill.level}%</span>
          <span className="text-gray-500">{skill.experience}</span>
        </div>
      </div>
      
      <div className="relative mb-3">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-gray-600 to-gray-800 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: isVisible ? `${skill.level}%` : 0 }}
            transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
          />
        </div>
      </div>
      
      <p className="text-sm text-gray-600 leading-relaxed mb-2">
        {skill.description}
      </p>
      
      {skill.projects && (
        <div className="flex flex-wrap gap-1">
          {skill.projects.slice(0, 2).map((project, idx) => (
            <span
              key={idx}
              className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md"
            >
              {project}
            </span>
          ))}
          {skill.projects.length > 2 && (
            <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-500 rounded-md">
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
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    viewport={{ once: true, margin: "-100px" }}
    className="mb-20"
  >
    <div className="text-center mb-12">
      <motion.div
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
        className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-medium mb-4`}
      >
        {category.name}
      </motion.div>
      <p className="text-gray-600 max-w-md mx-auto">
        {category.description}
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
      {category.skills.map((skill, skillIndex) => (
        <div key={skill.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <SkillBar skill={skill} index={skillIndex} />
        </div>
      ))}
    </div>
  </motion.section>
);

// Hero Section
const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
    {/* Subtle Background Pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
        backgroundSize: '20px 20px'
      }} />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.h1
          className="text-6xl md:text-7xl font-light mb-8 text-gray-900 tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Technical Skills
        </motion.h1>

        <motion.p
          className="text-xl text-gray-600 font-light leading-relaxed mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Technologies and tools I use to build modern web applications and solve complex problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 text-sm text-gray-500"
        >
          <span className="px-3 py-1 bg-gray-50 rounded-full">Self-taught</span>
          <span className="px-3 py-1 bg-gray-50 rounded-full">Continuously Learning</span>
          <span className="px-3 py-1 bg-gray-50 rounded-full">Problem Solver</span>
        </motion.div>
      </motion.div>
    </div>

    {/* Scroll Indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="w-6 h-10 border border-gray-400 rounded-full flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-1 h-3 bg-gray-400 rounded-full mt-2"
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
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="py-20 bg-gray-50"
  >
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
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
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="text-3xl md:text-4xl font-light text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
              {stat.number}
            </div>
            <div className="text-sm font-medium text-gray-800 mb-1">
              {stat.label}
            </div>
            <div className="text-xs text-gray-600">
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
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="py-20 bg-white"
  >
    <div className="container mx-auto px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
          Let&apos;s Build Something Together
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          I&apos;m always eager to learn new technologies and take on challenging projects. 
          Let&apos;s discuss how we can create something amazing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
            onClick={() => window.location.href = '/contact'}
          >
            Get In Touch
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            onClick={() => window.location.href = '/projects'}
          >
            View Projects
          </motion.button>
        </div>
      </div>
    </div>
  </motion.section>
);

// Main Skills Page Component
export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <HeroSection />
      
      <SkillsStats />
      
      <main className="container mx-auto px-6 py-20">
        {skillsData.map((category, index) => (
          <SkillCategorySection key={category.name} category={category} index={index} />
        ))}
      </main>
      
      <CTASection />
    </div>
  );
}