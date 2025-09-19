'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    color: 'from-pink-400 to-rose-500',
    tools: [
      {
        id: 1,
        name: 'Visual Studio Code',
        category: 'Editor',
        proficiency: 95,
        experience: '3+ years',
        description: 'Primary code editor with extensive customization and extensions',
        features: ['IntelliSense', 'Git Integration', 'Extensions', 'Debugging'],
        useCases: ['Daily Development', 'Code Review', 'Project Management']
      },
      {
        id: 2,
        name: 'GitHub',
        category: 'Version Control',
        proficiency: 90,
        experience: '2+ years',
        description: 'Version control and collaboration platform for code repositories',
        features: ['Git Repositories', 'Pull Requests', 'Actions', 'Project Boards'],
        useCases: ['Source Control', 'Team Collaboration', 'CI/CD Pipeline']
      },
      {
        id: 3,
        name: 'Terminal',
        category: 'CLI',
        proficiency: 80,
        experience: '2+ years',
        description: 'Command-line interface for system operations and automation',
        features: ['Shell Scripting', 'Package Managers', 'Git Commands'],
        useCases: ['Project Setup', 'Build Processes', 'Server Management']
      }
    ]
  },
  {
    name: 'Design',
    description: 'Visual design and prototyping',
    color: 'from-rose-500 to-pink-600',
    tools: [
      {
        id: 4,
        name: 'Figma',
        category: 'Design',
        proficiency: 85,
        experience: '1.5+ years',
        description: 'Collaborative design tool for UI/UX and prototyping',
        features: ['UI Design', 'Prototyping', 'Component Libraries', 'Collaboration'],
        useCases: ['Interface Design', 'Wireframing', 'Design Systems']
      },
      {
        id: 5,
        name: 'Adobe Photoshop',
        category: 'Graphics',
        proficiency: 70,
        experience: '2+ years',
        description: 'Professional image editing and graphic design software',
        features: ['Photo Editing', 'Digital Art', 'Layer Management'],
        useCases: ['Image Processing', 'Graphic Design', 'Asset Creation']
      }
    ]
  },
  {
    name: 'Deployment',
    description: 'Hosting and infrastructure',
    color: 'from-pink-600 to-fuchsia-600',
    tools: [
      {
        id: 6,
        name: 'Vercel',
        category: 'Hosting',
        proficiency: 90,
        experience: '1.5+ years',
        description: 'Frontend deployment platform with serverless functions',
        features: ['Auto Deployment', 'Custom Domains', 'Analytics'],
        useCases: ['Frontend Hosting', 'Static Sites', 'Serverless APIs']
      },
      {
        id: 7,
        name: 'Firebase',
        category: 'Backend',
        proficiency: 65,
        experience: '8 months',
        description: 'Google\'s development platform with real-time database',
        features: ['Real-time Database', 'Authentication', 'Hosting'],
        useCases: ['User Authentication', 'Real-time Apps', 'Backend Services']
      }
    ]
  },
  {
    name: 'Productivity',
    description: 'Workflow and communication',
    color: 'from-fuchsia-600 to-purple-600',
    tools: [
      {
        id: 8,
        name: 'Notion',
        category: 'Productivity',
        proficiency: 85,
        experience: '1+ years',
        description: 'All-in-one workspace for notes and project management',
        features: ['Database Management', 'Templates', 'Kanban Boards'],
        useCases: ['Project Planning', 'Documentation', 'Task Management']
      },
      {
        id: 9,
        name: 'Discord',
        category: 'Communication',
        proficiency: 90,
        experience: '3+ years',
        description: 'Communication platform for team collaboration',
        features: ['Voice Channels', 'Screen Sharing', 'Bot Integration'],
        useCases: ['Team Communication', 'Community Building', 'Code Reviews']
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
    <div className="flex items-center gap-3 px-4 py-2 bg-neutral-900/60 hover:bg-neutral-800/70 backdrop-blur-xl rounded-full border border-neutral-700/40 hover:border-pink-500/30 transition-all duration-300 shadow-xl">
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

  const handlePlanetClick = (planet: typeof planets[0]) => {
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
            className="group flex items-center gap-3 px-4 py-2 bg-neutral-900/60 hover:bg-neutral-800/70 backdrop-blur-xl rounded-full border border-neutral-700/40 hover:border-pink-500/30 transition-all duration-300 shadow-xl cursor-pointer"
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
            className="flex flex-col gap-2 p-4 bg-neutral-900/70 backdrop-blur-xl rounded-2xl border border-neutral-700/40 shadow-2xl"
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
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer ${
                    isCurrent 
                      ? 'bg-neutral-800/70 text-pink-300 cursor-default border border-pink-500/30' 
                      : 'hover:bg-neutral-800/40 text-neutral-400 border border-transparent hover:border-neutral-600/20'
                  }`}
                  whileHover={!isCurrent ? { scale: 1.02, x: 2 } : {}}
                  whileTap={!isCurrent ? { scale: 0.98 } : {}}
                >
                  <div 
                    className="w-4 h-4 rounded-full relative"
                    style={{ 
                      backgroundColor: planet.color,
                      boxShadow: `0 0 12px ${planet.color}40`,
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
    {/* Tools Planet - Half visible from bottom */}
    <motion.div
      initial={{ scale: 0.8, opacity: 0, y: 50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 2.5, ease: "easeOut" }}
      className="absolute -bottom-1/2 left-1/2 transform -translate-x-1/2 w-[120vh] h-[120vh] rounded-full"
      style={{
        background: `radial-gradient(circle at 50% 20%, 
          rgba(236, 72, 153, 0.12) 0%,
          rgba(219, 39, 119, 0.08) 30%,
          rgba(190, 24, 93, 0.04) 60%,
          transparent 100%)`,
        filter: 'blur(1.5px)',
      }}
    />
    
    {/* Orbital rings */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 2 }}
      className="absolute -bottom-1/2 left-1/2 transform -translate-x-1/2 w-[140vh] h-[140vh] rounded-full border border-pink-500/4"
      style={{
        animation: 'spin 160s linear infinite',
      }}
    />
  </div>
);

// Floating Elements Background
const FloatingElements = () => {
  const [elements, setElements] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const generateElements = () => {
      const components = [];
      const numberOfElements = 8;

      for (let i = 0; i < numberOfElements; i++) {
        const size = Math.random() * 4 + 2;
        const duration = 25 + Math.random() * 10;
        const delay = Math.random() * 10;
        
        components.push(
          <motion.div
            key={i}
            className="absolute opacity-15 rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)`,
              filter: 'blur(0.5px)',
            }}
            animate={{
              y: [0, -30, 0, 20, 0],
              x: [0, 20, -15, 0],
              scale: [1, 1.2, 0.8, 1],
              opacity: [0.15, 0.4, 0.1, 0.15],
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
      setElements(components);
    };

    generateElements();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {elements}
    </div>
  );
};

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
      viewport={{ once: true, margin: "-50px" }}
      className="group bg-neutral-900/40 backdrop-blur-xl rounded-xl p-6 border border-neutral-700/30 hover:border-pink-500/20 hover:bg-neutral-900/50 transition-all duration-300 relative overflow-hidden"
      style={{
        boxShadow: `0 4px 20px rgba(0, 0, 0, 0.3)`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h4 className="text-xl font-medium text-neutral-100 group-hover:text-pink-200 transition-colors duration-300 mb-1">
              {tool.name}
            </h4>
            <div className="flex items-center gap-2 text-sm">
              <span className="px-2 py-1 bg-pink-500/10 text-pink-300 rounded-md border border-pink-500/20 font-medium text-xs">
                {tool.category}
              </span>
              <span className="text-neutral-500 text-xs">{tool.experience}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-medium text-pink-300 mb-1">
              {tool.proficiency}%
            </div>
            <div className="w-12 bg-neutral-800/40 rounded-full h-1.5 overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-pink-400 to-fuchsia-500 h-1.5 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: isVisible ? `${tool.proficiency}%` : 0 }}
                transition={{ duration: 1.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-neutral-400 text-sm leading-relaxed mb-4 font-light">
          {tool.description}
        </p>

        {/* Features & Use Cases */}
        <div className="space-y-3">
          <div>
            <h5 className="text-xs font-medium text-neutral-300 mb-2 flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse" />
              Features
            </h5>
            <div className="flex flex-wrap gap-1">
              {tool.features.map((feature, idx) => (
                <span
                  key={idx}
                  className="inline-block px-2 py-1 text-xs bg-neutral-800/40 text-neutral-300 rounded-md border border-neutral-700/30"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-xs font-medium text-neutral-300 mb-2 flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full animate-pulse delay-75" />
              Use Cases
            </h5>
            <div className="flex flex-wrap gap-1">
              {tool.useCases.map((useCase, idx) => (
                <span
                  key={idx}
                  className="inline-block px-2 py-1 text-xs bg-pink-500/10 text-pink-300 rounded-md border border-pink-500/20"
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
    viewport={{ once: true, margin: "-100px" }}
    className="mb-20"
  >
    <div className="text-center mb-12">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
        viewport={{ once: true }}
        className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${category.color} text-neutral-900 text-sm font-semibold mb-4 shadow-lg`}
      >
        {category.name}
      </motion.div>
      <motion.p 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-neutral-400 max-w-lg mx-auto text-base font-light"
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
          className="text-7xl md:text-8xl font-extralight mb-12 text-neutral-100 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          style={{
            textShadow: `0 0 30px rgba(236, 72, 153, 0.15)`,
          }}
        >
          Digital Toolkit
        </motion.h1>

        <motion.p
          className="text-xl text-neutral-400 font-light leading-relaxed mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2 }}
        >
          Professional tools and platforms that power modern development workflows and creative processes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {['Development Suite', 'Design Studio', 'Deployment Engine'].map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-5 py-2 bg-neutral-800/30 text-neutral-300 rounded-full border border-neutral-700/40 font-light backdrop-blur-xl hover:bg-neutral-700/30 hover:border-pink-500/20 hover:text-pink-200 transition-all duration-300 cursor-pointer"
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
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="w-6 h-12 border-2 border-neutral-600 rounded-full flex justify-center relative backdrop-blur-sm"
      >
        <motion.div
          animate={{ y: [0, 16, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="w-0.5 h-4 bg-gradient-to-b from-pink-400 to-fuchsia-500 rounded-full mt-3"
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
    viewport={{ once: true, margin: "-100px" }}
    className="py-24"
  >
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-light text-neutral-100 mb-4">
          Toolkit Analytics
        </h2>
        <p className="text-neutral-400 text-lg font-light max-w-2xl mx-auto">
          Professional metrics from the digital workspace
        </p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { number: '9', label: 'Tools', description: 'Active Arsenal' },
          { number: '4', label: 'Categories', description: 'Core Domains' },
          { number: '82%', label: 'Efficiency', description: 'Avg. Proficiency' },
          { number: '24/7', label: 'Uptime', description: 'Productivity Flow' }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.8 }}
            viewport={{ once: true }}
            className="group text-center"
          >
            <motion.div 
              className="text-4xl md:text-5xl font-extralight text-neutral-100 mb-2 group-hover:text-pink-200 transition-colors duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {stat.number}
            </motion.div>
            <div className="text-base font-medium text-neutral-300 mb-1">
              {stat.label}
            </div>
            <div className="text-sm text-neutral-500 font-light">
              {stat.description}
            </div>
            <motion.div
              className="w-8 h-0.5 mx-auto mt-2 rounded-full bg-pink-400"
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
    viewport={{ once: true, margin: "-100px" }}
    className="py-24"
  >
    <div className="container mx-auto px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-light text-neutral-100 mb-8 tracking-tight"
        >
          Let&apos;s Build Together
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-neutral-400 leading-relaxed mb-12 font-light"
        >
          Ready to leverage these tools for your next project? Let&apos;s create something exceptional.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-neutral-900 font-semibold hover:from-pink-400 hover:to-fuchsia-400 transition-all duration-300 rounded-full cursor-pointer"
            onClick={() => window.location.href = '/contact'}
            style={{
              boxShadow: `0 6px 20px rgba(236, 72, 153, 0.25)`,
            }}
          >
            Start Project
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 border-2 border-neutral-600 text-neutral-300 font-semibold hover:bg-neutral-800/20 hover:border-pink-500/30 hover:text-pink-200 transition-all duration-300 rounded-full backdrop-blur-xl cursor-pointer"
            onClick={() => window.location.href = '/projects'}
          >
            View Portfolio
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
      <FloatingElements />
      <PlanetBackground />
      <BackButton />
      <PlanetNavigation />
      
      <HeroSection />
      
      <div className="relative z-10">
        <ToolsStats />
        
        <main className="container mx-auto px-6 py-12">
          {toolsData.map((category, index) => (
            <ToolCategorySection key={category.name} category={category} index={index} />
          ))}
        </main>
        
        <CTASection />
      </div>
      
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}