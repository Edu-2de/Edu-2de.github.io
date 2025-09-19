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
    color: 'from-purple-400 to-pink-400',
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
    color: 'from-emerald-400 to-teal-400',
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

// Planet Navigation Data
const planets = [
  { name: 'Skills', path: '/skills', color: '#fbbf24' },
  { name: 'Hobbies', path: '/hobbies', color: '#38bdf8' },
  { name: 'Tools', path: '/tools', color: '#ec4899' },
  { name: 'Dreams', path: '/dreams', color: '#22d3ee' }
];

// Back Button Component
const BackButton = () => (
  <motion.button
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.5, duration: 0.8 }}
    onClick={() => window.location.href = '/'}
    className="fixed top-8 left-8 z-50 group cursor-pointer"
  >
    <div className="flex items-center gap-3 px-4 py-2 bg-slate-900/40 hover:bg-slate-800/60 backdrop-blur-xl rounded-full border border-slate-700/50 hover:border-slate-600/70 transition-all duration-300 shadow-2xl shadow-blue-500/10">
      <motion.svg
        className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        whileHover={{ x: -3 }}
        transition={{ duration: 0.2 }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
      </motion.svg>
      <span className="text-sm text-slate-300 group-hover:text-white transition-colors font-medium">
        Return to Base
      </span>
    </div>
  </motion.button>
);

// Planet Navigation Component
const PlanetNavigation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
  const currentPlanetIndex = planets.findIndex(p => p.path === '/skills');

  const getNextPlanet = () => {
    return planets[(currentPlanetIndex + 1) % planets.length];
  };

  const nextPlanet = getNextPlanet();

  const handlePlanetClick = (planet: typeof planets[0]) => {
    if (planet.path === '/skills') return;
    window.location.href = planet.path;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="fixed top-8 right-8 z-50 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setSelectedPlanet(null);
      }}
    >
      <AnimatePresence>
        {!isHovered ? (
          <motion.button
            key="next-button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="group flex items-center gap-3 px-4 py-2 bg-slate-900/40 hover:bg-slate-800/60 backdrop-blur-xl rounded-full border border-slate-700/50 hover:border-slate-600/70 transition-all duration-300 shadow-2xl shadow-purple-500/10 cursor-pointer"
          >
            <span className="text-sm text-slate-300 group-hover:text-white transition-colors font-medium">
              Next Orbit
            </span>
            <motion.svg
              className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.button>
        ) : (
          <motion.div
            key="planet-menu"
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col gap-2 p-4 bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl shadow-cyan-500/20"
          >
            <div className="text-xs text-slate-400 font-medium mb-2 px-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
              Solar System
            </div>
            {planets.map((planet, index) => {
              const isCurrent = planet.path === '/skills';
              const isSelected = selectedPlanet === planet.name;
              
              return (
                <motion.button
                  key={planet.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  onClick={() => handlePlanetClick(planet)}
                  onMouseEnter={() => setSelectedPlanet(planet.name)}
                  disabled={isCurrent}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer ${
                    isCurrent 
                      ? 'bg-slate-700/60 text-white cursor-default border border-slate-600/50' 
                      : isSelected
                      ? 'bg-slate-700/40 text-white border border-slate-600/30'
                      : 'hover:bg-slate-700/30 text-slate-300 border border-transparent hover:border-slate-600/20'
                  }`}
                  whileHover={!isCurrent ? { scale: 1.02, x: 2 } : {}}
                  whileTap={!isCurrent ? { scale: 0.98 } : {}}
                >
                  <div 
                    className="w-4 h-4 rounded-full relative"
                    style={{ 
                      backgroundColor: planet.color,
                      boxShadow: `0 0 12px ${planet.color}40, inset 0 0 6px ${planet.color}60`,
                    }}
                  >
                    <div 
                      className="absolute inset-0 rounded-full animate-ping opacity-20"
                      style={{ backgroundColor: planet.color }}
                    />
                  </div>
                  <span className="text-sm font-medium whitespace-nowrap">
                    {planet.name}
                  </span>
                  {isCurrent && (
                    <div className="flex items-center gap-1 ml-auto">
                      <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
                      <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse delay-75" />
                      <div className="w-1 h-1 bg-white/30 rounded-full animate-pulse delay-150" />
                    </div>
                  )}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Stars Background
const StarsBackground = () => {
  const [stars, setStars] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const elements = [];
      const numberOfStars = 150;

      for (let i = 0; i < numberOfStars; i++) {
        const size = Math.random() * 3 + 0.5;
        const duration = 3 + Math.random() * 4;
        const delay = Math.random() * 10;
        
        elements.push(
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        );
      }
      setStars(elements);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars}
    </div>
  );
};

// Nebula Background
const NebulaBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/30 to-pink-900/20" />
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
    <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
    <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
  </div>
);

// Animated Skill Bar Component
const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: "-80px" }}
      className="group"
    >
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-2xl font-light text-slate-100 group-hover:text-white transition-colors duration-300">
          {skill.name}
        </h4>
        <div className="flex items-center gap-4 text-sm">
          <span className="font-medium text-slate-300 px-3 py-1 bg-slate-800/40 rounded-full backdrop-blur-sm border border-slate-700/30">
            {skill.level}%
          </span>
          <span className="text-slate-500">{skill.experience}</span>
        </div>
      </div>
      
      <div className="relative mb-8">
        <div className="w-full bg-slate-800/30 rounded-full h-3 overflow-hidden border border-slate-700/20">
          <motion.div
            className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 h-3 rounded-full relative overflow-hidden"
            initial={{ width: 0 }}
            whileInView={{ width: isVisible ? `${skill.level}%` : 0 }}
            transition={{ duration: 2.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            style={{
              boxShadow: `0 0 20px rgba(59, 130, 246, 0.5)`,
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-transparent"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                delay: index * 0.1 + 1,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
      
      <p className="text-slate-400 leading-relaxed mb-6 font-light text-lg">
        {skill.description}
      </p>
      
      {skill.projects && (
        <div className="flex flex-wrap gap-3">
          {skill.projects.slice(0, 2).map((project, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.5 + idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 text-xs bg-slate-800/30 text-slate-300 rounded-full border border-slate-700/30 hover:bg-slate-700/40 hover:border-slate-600/40 transition-all duration-300 backdrop-blur-sm cursor-pointer"
            >
              {project}
            </motion.span>
          ))}
          {skill.projects.length > 2 && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.7, duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 text-xs bg-slate-800/20 text-slate-500 rounded-full border border-slate-700/20 cursor-pointer"
            >
              +{skill.projects.length - 2} more
            </motion.span>
          )}
        </div>
      )}
    </motion.div>
  );
};

// Skill Category Section
const SkillCategorySection = ({ category, index }: { category: SkillCategory; index: number }) => (
  <motion.section
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, delay: index * 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    viewport={{ once: true, margin: "-120px" }}
    className="mb-40"
  >
    <div className="text-center mb-20">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: index * 0.3 + 0.4 }}
        viewport={{ once: true }}
        className={`inline-block px-8 py-4 rounded-full bg-gradient-to-r ${category.color} text-slate-900 text-sm font-semibold mb-8 shadow-2xl relative overflow-hidden`}
        style={{
          boxShadow: `0 0 40px rgba(59, 130, 246, 0.3)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse" />
        <span className="relative z-10">{category.name}</span>
      </motion.div>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.3 + 0.6, duration: 1 }}
        viewport={{ once: true }}
        className="text-slate-400 max-w-2xl mx-auto text-xl font-light leading-relaxed"
      >
        {category.description}
      </motion.p>
    </div>

    <div className="grid gap-16 lg:grid-cols-2 xl:gap-20">
      {category.skills.map((skill, skillIndex) => (
        <motion.div 
          key={skill.id} 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: skillIndex * 0.15, duration: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          className="bg-slate-900/20 backdrop-blur-xl rounded-3xl p-10 border border-slate-700/30 hover:border-slate-600/50 hover:bg-slate-900/30 transition-all duration-700 group relative overflow-hidden"
          style={{
            boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10">
            <SkillBar skill={skill} index={skillIndex} />
          </div>
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
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center max-w-6xl mx-auto"
      >
        <motion.h1
          className="text-8xl md:text-9xl font-extralight mb-16 text-slate-100 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          style={{
            textShadow: `0 0 40px rgba(59, 130, 246, 0.3)`,
          }}
        >
          Technical Skills
        </motion.h1>

        <motion.p
          className="text-2xl text-slate-400 font-light leading-relaxed mb-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1.2 }}
        >
          Navigating the vast cosmos of technology to build extraordinary digital experiences across the universe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {['Cosmic Explorer', 'Infinite Learner', 'Code Astronaut'].map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8 + index * 0.15, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-6 py-3 bg-slate-800/30 text-slate-300 rounded-full border border-slate-700/40 font-light backdrop-blur-xl hover:bg-slate-700/40 hover:border-slate-600/60 transition-all duration-300 cursor-pointer relative overflow-hidden"
              style={{
                boxShadow: `0 4px 20px rgba(0, 0, 0, 0.3)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">{tag}</span>
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>

    {/* Enhanced Scroll Indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3 }}
      className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 16, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="w-8 h-16 border-2 border-slate-600 rounded-full flex justify-center relative overflow-hidden backdrop-blur-sm"
        style={{
          boxShadow: `0 0 20px rgba(59, 130, 246, 0.2)`,
        }}
      >
        <motion.div
          animate={{ y: [0, 24, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-4"
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
    transition={{ duration: 1.5 }}
    viewport={{ once: true, margin: "-120px" }}
    className="py-40"
  >
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <h2 className="text-5xl md:text-6xl font-light text-slate-100 mb-8">
          Mission Statistics
        </h2>
        <p className="text-slate-400 text-xl font-light max-w-3xl mx-auto leading-relaxed">
          Data from my journey through the digital cosmos and technological discoveries
        </p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
        {[
          { number: '12+', label: 'Technologies', description: 'Cosmic Tools Mastered', color: '#3b82f6' },
          { number: '20+', label: 'Projects', description: 'Stellar Missions', color: '#8b5cf6' },
          { number: '2+', label: 'Years', description: 'Space Exploration', color: '#06b6d4' },
          { number: '∞', label: 'Learning', description: 'Infinite Curiosity', color: '#10b981' }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 1 }}
            viewport={{ once: true }}
            className="group text-center relative"
          >
            <motion.div 
              className="text-6xl md:text-7xl font-extralight text-slate-100 mb-6 group-hover:text-white transition-colors duration-500 relative"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ duration: 0.3 }}
              style={{
                textShadow: `0 0 20px ${stat.color}40`,
              }}
            >
              {stat.number}
            </motion.div>
            <div className="text-xl font-light text-slate-300 mb-3">
              {stat.label}
            </div>
            <div className="text-sm text-slate-500 font-light">
              {stat.description}
            </div>
            <motion.div
              className="w-16 h-0.5 mx-auto mt-4 rounded-full"
              style={{ 
                backgroundColor: stat.color,
                boxShadow: `0 0 10px ${stat.color}60`
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

// Call to Action Section
const CTASection = () => (
  <motion.section
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5 }}
    viewport={{ once: true, margin: "-120px" }}
    className="py-40"
  >
    <div className="container mx-auto px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.h3 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font-light text-slate-100 mb-12 tracking-tight"
          style={{
            textShadow: `0 0 30px rgba(59, 130, 246, 0.2)`,
          }}
        >
          Ready for Collaboration?
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl text-slate-400 leading-relaxed mb-16 font-light"
        >
          Let&apos;s embark on a mission to create extraordinary digital experiences that reach beyond the stars.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-8 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 rounded-full text-lg cursor-pointer relative overflow-hidden"
            onClick={() => window.location.href = '/contact'}
            style={{
              boxShadow: `0 8px 25px rgba(59, 130, 246, 0.3)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Launch Contact</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-4 border-2 border-slate-600 text-slate-300 font-semibold hover:bg-slate-800/20 hover:border-slate-500 transition-all duration-300 rounded-full text-lg backdrop-blur-xl cursor-pointer relative overflow-hidden"
            onClick={() => window.location.href = '/projects'}
            style={{
              boxShadow: `0 4px 20px rgba(0, 0, 0, 0.3)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Explore Gallery</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

// Main Skills Page Component
export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <StarsBackground />
      <NebulaBackground />
      <BackButton />
      <PlanetNavigation />
      
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