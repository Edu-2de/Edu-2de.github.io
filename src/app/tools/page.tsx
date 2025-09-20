'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';

// Types
interface Tool {
  id: number;
  name: string;
  category: string;
  proficiency: number;
  experience: string;
  description: string;
  features: string[];
  useCases: string[];
}

interface ToolCategory {
  name: string;
  tools: Tool[];
  color: string;
  description: string;
}

// Tools Data
const toolsData: ToolCategory[] = [
  {
    name: 'Development',
    description: 'Core development tools',
    color: 'from-pink-500 to-rose-600',
    tools: [
      {
        id: 1,
        name: 'Visual Studio Code',
        category: 'Editor',
        proficiency: 95,
        experience: '3+ years',
        description: 'Primary code editor with extensive customization and extensions',
        features: ['IntelliSense', 'Git Integration', 'Extensions', 'Debugging'],
        useCases: ['Daily Development', 'Code Review', 'Project Management'],
      },
      {
        id: 2,
        name: 'GitHub',
        category: 'Version Control',
        proficiency: 90,
        experience: '2+ years',
        description: 'Version control and collaboration platform for code repositories',
        features: ['Git Repositories', 'Pull Requests', 'Actions', 'Project Boards'],
        useCases: ['Source Control', 'Team Collaboration', 'CI/CD Pipeline'],
      },
      {
        id: 3,
        name: 'Terminal',
        category: 'CLI',
        proficiency: 80,
        experience: '2+ years',
        description: 'Command-line interface for system operations and automation',
        features: ['Shell Scripting', 'Package Managers', 'Git Commands'],
        useCases: ['Project Setup', 'Build Processes', 'Server Management'],
      },
    ],
  },
  {
    name: 'Design',
    description: 'Visual design and prototyping',
    color: 'from-rose-600 to-pink-700',
    tools: [
      {
        id: 4,
        name: 'Figma',
        category: 'Design',
        proficiency: 85,
        experience: '1.5+ years',
        description: 'Collaborative design tool for UI/UX and prototyping',
        features: ['UI Design', 'Prototyping', 'Component Libraries', 'Collaboration'],
        useCases: ['Interface Design', 'Wireframing', 'Design Systems'],
      },
      {
        id: 5,
        name: 'Adobe Photoshop',
        category: 'Graphics',
        proficiency: 70,
        experience: '2+ years',
        description: 'Professional image editing and graphic design software',
        features: ['Photo Editing', 'Digital Art', 'Layer Management'],
        useCases: ['Image Processing', 'Graphic Design', 'Asset Creation'],
      },
    ],
  },
  {
    name: 'Deployment',
    description: 'Hosting and infrastructure',
    color: 'from-pink-700 to-fuchsia-700',
    tools: [
      {
        id: 6,
        name: 'Vercel',
        category: 'Hosting',
        proficiency: 90,
        experience: '1.5+ years',
        description: 'Frontend deployment platform with serverless functions',
        features: ['Auto Deployment', 'Custom Domains', 'Analytics'],
        useCases: ['Frontend Hosting', 'Static Sites', 'Serverless APIs'],
      },
      {
        id: 7,
        name: 'Firebase',
        category: 'Backend',
        proficiency: 65,
        experience: '8 months',
        description: "Google's development platform with real-time database",
        features: ['Real-time Database', 'Authentication', 'Hosting'],
        useCases: ['User Authentication', 'Real-time Apps', 'Backend Services'],
      },
    ],
  },
  {
    name: 'Productivity',
    description: 'Workflow and communication',
    color: 'from-fuchsia-700 to-purple-700',
    tools: [
      {
        id: 8,
        name: 'Notion',
        category: 'Productivity',
        proficiency: 85,
        experience: '1+ years',
        description: 'All-in-one workspace for notes and project management',
        features: ['Database Management', 'Templates', 'Kanban Boards'],
        useCases: ['Project Planning', 'Documentation', 'Task Management'],
      },
      {
        id: 9,
        name: 'Discord',
        category: 'Communication',
        proficiency: 90,
        experience: '3+ years',
        description: 'Communication platform for team collaboration',
        features: ['Voice Channels', 'Screen Sharing', 'Bot Integration'],
        useCases: ['Team Communication', 'Community Building', 'Code Reviews'],
      },
    ],
  },
];

// Planet Navigation Data
const planets = [
  { name: 'Skills', path: '/skills', color: '#fbbf24' },
  { name: 'Hobbies', path: '/hobbies', color: '#38bdf8' },
  { name: 'Tools', path: '/tools', color: '#ec4899' },
  { name: 'Dreams', path: '/dreams', color: '#22d3ee' },
];

// Back Button Component
const BackButton = () => (
  <motion.button
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.5, duration: 0.8 }}
    onClick={() => (window.location.href = '/')}
    className="fixed top-8 left-8 z-50 group cursor-pointer"
  >
    <div className="flex items-center gap-3 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 border border-neutral-600 hover:border-pink-500 transition-all duration-300 shadow-lg">
      <motion.svg
        className="w-5 h-5 text-neutral-300 group-hover:text-pink-300 transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        whileHover={{ x: -3 }}
        transition={{ duration: 0.2 }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
      </motion.svg>
      <span className="text-sm text-neutral-300 group-hover:text-pink-300 transition-colors font-medium">
        Return to Base
      </span>
    </div>
  </motion.button>
);

// Planet Navigation Component
const PlanetNavigation = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handlePlanetClick = (planet: (typeof planets)[0]) => {
    if (planet.path === '/tools') return;
    window.location.href = planet.path;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="fixed top-8 right-8 z-50 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {!isHovered ? (
          <motion.button
            key="next-button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="group flex items-center gap-3 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 border border-neutral-600 hover:border-pink-500 transition-all duration-300 shadow-lg cursor-pointer"
          >
            <span className="text-sm text-neutral-300 group-hover:text-pink-300 transition-colors font-medium">
              Next Orbit
            </span>
            <motion.svg
              className="w-5 h-5 text-neutral-300 group-hover:text-pink-300 transition-colors"
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
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-2 p-4 bg-neutral-800 border border-neutral-600 shadow-xl"
          >
            <div className="text-xs text-neutral-400 font-medium mb-2 px-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
              Solar System
            </div>
            {planets.map((planet, index) => {
              const isCurrent = planet.path === '/tools';

              return (
                <motion.button
                  key={planet.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  onClick={() => handlePlanetClick(planet)}
                  disabled={isCurrent}
                  className={`flex items-center gap-3 px-4 py-3 transition-all duration-200 cursor-pointer ${
                    isCurrent
                      ? 'bg-neutral-700 text-pink-300 cursor-default border border-pink-500'
                      : 'hover:bg-neutral-700 text-neutral-400 border border-transparent hover:border-neutral-500'
                  }`}
                  whileHover={!isCurrent ? { scale: 1.02, x: 2 } : {}}
                  whileTap={!isCurrent ? { scale: 0.98 } : {}}
                >
                  <div
                    className="w-4 h-4 rounded-full relative"
                    style={{
                      backgroundColor: planet.color,
                      boxShadow: `0 0 8px ${planet.color}60`,
                    }}
                  />
                  <span className="text-sm font-medium whitespace-nowrap">{planet.name}</span>
                  {isCurrent && (
                    <div className="flex items-center gap-1 ml-auto">
                      <div className="w-1 h-1 bg-pink-400 rounded-full animate-pulse" />
                      <div className="w-1 h-1 bg-pink-400/60 rounded-full animate-pulse delay-75" />
                      <div className="w-1 h-1 bg-pink-400/30 rounded-full animate-pulse delay-150" />
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

// Planet Background - Bottom center
const PlanetBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <motion.div
      initial={{ scale: 0.8, opacity: 0, y: 50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 2.5, ease: 'easeOut' }}
      className="absolute -bottom-1/2 left-1/2 transform -translate-x-1/2 w-[100vh] h-[100vh] rounded-full"
      style={{
        background: `radial-gradient(circle at 50% 20%, 
          rgba(236, 72, 153, 0.08) 0%,
          rgba(219, 39, 119, 0.05) 30%,
          rgba(190, 24, 93, 0.02) 60%,
          transparent 100%)`,
        filter: 'blur(2px)',
      }}
    />
  </div>
);

// Tool Card Component
const ToolCard = ({ tool, index }: { tool: Tool; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      viewport={{ once: true, margin: '-50px' }}
      className="group bg-neutral-800 border border-neutral-700 hover:border-pink-500 hover:bg-neutral-750 transition-all duration-300 relative overflow-hidden p-6"
      style={{
        boxShadow: `0 4px 16px rgba(0, 0, 0, 0.4)`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h4 className="text-xl font-semibold text-white group-hover:text-pink-200 transition-colors duration-300 mb-2">
              {tool.name}
            </h4>
            <div className="flex items-center gap-3 text-sm">
              <span className="px-3 py-1 bg-pink-600 text-white font-medium text-xs">{tool.category}</span>
              <span className="text-neutral-400 font-medium">{tool.experience}</span>
            </div>
          </div>
          <div className="text-right ml-4">
            <div className="text-2xl font-bold text-pink-400 mb-2">{tool.proficiency}%</div>
            <div className="w-16 bg-neutral-700 h-2 overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-pink-500 to-fuchsia-600 h-2"
                initial={{ width: 0 }}
                whileInView={{ width: isVisible ? `${tool.proficiency}%` : 0 }}
                transition={{ duration: 1.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-neutral-300 text-sm leading-relaxed mb-5 font-normal">{tool.description}</p>

        {/* Features & Use Cases */}
        <div className="space-y-4">
          <div>
            <h5 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-pink-500 rounded-full" />
              Key Features
            </h5>
            <div className="flex flex-wrap gap-2">
              {tool.features.map((feature, idx) => (
                <span
                  key={idx}
                  className="inline-block px-3 py-1 text-xs bg-neutral-700 text-neutral-300 border border-neutral-600 font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-fuchsia-500 rounded-full" />
              Primary Uses
            </h5>
            <div className="flex flex-wrap gap-2">
              {tool.useCases.map((useCase, idx) => (
                <span
                  key={idx}
                  className="inline-block px-3 py-1 text-xs bg-pink-600/20 text-pink-300 border border-pink-500/30 font-medium"
                >
                  {useCase}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Tool Category Section
const ToolCategorySection = ({ category, index }: { category: ToolCategory; index: number }) => (
  <motion.section
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: index * 0.2 }}
    viewport={{ once: true, margin: '-100px' }}
    className="mb-16"
  >
    <div className="text-center mb-12">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
        viewport={{ once: true }}
        className={`inline-block px-8 py-4 bg-gradient-to-r ${category.color} text-white text-lg font-bold mb-6 shadow-lg`}
      >
        {category.name}
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-neutral-400 max-w-lg mx-auto text-lg font-normal"
      >
        {category.description}
      </motion.p>
    </div>

    <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
      {category.tools.map((tool, toolIndex) => (
        <ToolCard key={tool.id} tool={tool} index={toolIndex} />
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
        transition={{ duration: 1.4 }}
        className="text-center max-w-5xl mx-auto"
      >
        <motion.h1
          className="text-7xl md:text-8xl font-bold mb-12 text-white tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3 }}
        >
          Digital Toolkit
        </motion.h1>

        <motion.p
          className="text-xl text-neutral-300 font-normal leading-relaxed mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2 }}
        >
          Professional tools and platforms that power modern development workflows and creative processes. Each tool has
          been carefully selected and mastered to deliver exceptional results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {['Development Suite', 'Design Studio', 'Deployment Engine', 'Productivity Hub'].map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-6 py-3 bg-neutral-800 text-neutral-300 border border-neutral-600 font-semibold hover:bg-neutral-700 hover:border-pink-500 hover:text-pink-200 transition-all duration-300 cursor-pointer"
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
      className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        className="w-6 h-12 border-2 border-neutral-500 flex justify-center relative"
      >
        <motion.div
          animate={{ y: [0, 16, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          className="w-1 h-4 bg-gradient-to-b from-pink-400 to-fuchsia-500 mt-3"
        />
      </motion.div>
    </motion.div>
  </section>
);

// Tools Overview Stats
const ToolsStats = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.2 }}
    viewport={{ once: true, margin: '-100px' }}
    className="py-20 bg-neutral-800/50"
  >
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Toolkit Analytics</h2>
        <p className="text-neutral-300 text-lg font-normal max-w-3xl mx-auto">
          Comprehensive metrics showcasing proficiency levels and practical experience across essential development and
          design tools.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { number: '9', label: 'Active Tools', description: 'Professional Arsenal', color: '#ec4899' },
          { number: '4', label: 'Core Categories', description: 'Domain Coverage', color: '#db2777' },
          { number: '82%', label: 'Avg Proficiency', description: 'Skill Mastery', color: '#be185d' },
          { number: '24/7', label: 'Availability', description: 'Development Ready', color: '#9d174d' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.8 }}
            viewport={{ once: true }}
            className="group text-center p-6 bg-neutral-800 border border-neutral-700 hover:border-pink-500 transition-all duration-300"
          >
            <motion.div
              className="text-4xl md:text-5xl font-bold text-white mb-3 group-hover:text-pink-200 transition-colors duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {stat.number}
            </motion.div>
            <div className="text-lg font-semibold text-neutral-200 mb-2">{stat.label}</div>
            <div className="text-sm text-neutral-400 font-normal">{stat.description}</div>
            <motion.div
              className="w-12 h-1 mx-auto mt-4 bg-pink-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: index * 0.15 + 0.4, duration: 0.6 }}
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
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
    viewport={{ once: true, margin: '-100px' }}
    className="py-24"
  >
    <div className="container mx-auto px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight"
        >
          Ready to Build Together?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-neutral-300 leading-relaxed mb-12 font-normal"
        >
          Leverage these professional tools and my expertise to bring your next project to life. Let&apos;s create
          something exceptional with industry-standard development workflows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white font-bold hover:from-pink-400 hover:to-fuchsia-500 transition-all duration-300 cursor-pointer shadow-lg"
            onClick={() => (window.location.href = '/contact')}
            style={{
              boxShadow: `0 8px 25px rgba(236, 72, 153, 0.3)`,
            }}
          >
            Start Your Project
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 border-2 border-neutral-600 text-neutral-300 font-bold hover:bg-neutral-800 hover:border-pink-500 hover:text-pink-200 transition-all duration-300 cursor-pointer"
            onClick={() => (window.location.href = '/projects')}
          >
            View My Work
          </motion.button>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

// Main Tools Page Component
export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white relative overflow-hidden">
      <PlanetBackground />
      <BackButton />
      <PlanetNavigation />

      <HeroSection />

      <div className="relative z-10">
        <ToolsStats />

        <main className="container mx-auto px-6 py-16">
          {toolsData.map((category, index) => (
            <ToolCategorySection key={category.name} category={category} index={index} />
          ))}
        </main>

        <CTASection />
      </div>
    </div>
  );
}
