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
  icon?: string;
  features?: string[];
  useCases?: string[];
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
    name: 'Development Environment',
    description: 'Core development and coding tools',
    color: 'from-pink-300 to-rose-400',
    tools: [
      {
        id: 1,
        name: 'Visual Studio Code',
        category: 'Editor',
        proficiency: 95,
        experience: '3+ years',
        description: 'Primary code editor with extensive customization and extensions for enhanced productivity',
        features: ['IntelliSense', 'Git Integration', 'Extensions', 'Debugging'],
        useCases: ['Daily Development', 'Code Review', 'Project Management']
      },
      {
        id: 2,
        name: 'GitHub',
        category: 'Version Control',
        proficiency: 90,
        experience: '2+ years',
        description: 'Version control and collaboration platform for managing code repositories and team projects',
        features: ['Git Repositories', 'Pull Requests', 'Actions', 'Project Boards'],
        useCases: ['Source Control', 'Team Collaboration', 'CI/CD Pipeline']
      },
      {
        id: 3,
        name: 'Terminal',
        category: 'CLI',
        proficiency: 80,
        experience: '2+ years',
        description: 'Command-line interface for system operations, package management, and automation',
        features: ['Shell Scripting', 'Package Managers', 'System Operations', 'Git Commands'],
        useCases: ['Project Setup', 'Build Processes', 'Server Management']
      },
      {
        id: 4,
        name: 'Postman',
        category: 'API Testing',
        proficiency: 75,
        experience: '1+ years',
        description: 'API development and testing platform for building and debugging REST APIs',
        features: ['API Testing', 'Collections', 'Environment Variables', 'Mock Servers'],
        useCases: ['API Development', 'Testing Workflows', 'Documentation']
      }
    ]
  },
  {
    name: 'Design & Prototyping',
    description: 'Visual design and user interface tools',
    color: 'from-rose-400 to-pink-500',
    tools: [
      {
        id: 5,
        name: 'Figma',
        category: 'Design',
        proficiency: 85,
        experience: '1.5+ years',
        description: 'Collaborative design tool for creating user interfaces, prototypes, and design systems',
        features: ['UI Design', 'Prototyping', 'Component Libraries', 'Real-time Collaboration'],
        useCases: ['Interface Design', 'Wireframing', 'Design Systems']
      },
      {
        id: 6,
        name: 'Adobe Photoshop',
        category: 'Graphics',
        proficiency: 70,
        experience: '2+ years',
        description: 'Professional image editing and graphic design software for digital art creation',
        features: ['Photo Editing', 'Digital Art', 'Layer Management', 'Filter Effects'],
        useCases: ['Image Processing', 'Graphic Design', 'Asset Creation']
      },
      {
        id: 7,
        name: 'Canva',
        category: 'Graphics',
        proficiency: 80,
        experience: '1+ years',
        description: 'Online graphic design platform for creating presentations, social media content, and marketing materials',
        features: ['Templates', 'Drag & Drop', 'Stock Media', 'Brand Kit'],
        useCases: ['Presentations', 'Social Media', 'Marketing Content']
      }
    ]
  },
  {
    name: 'Deployment & Hosting',
    description: 'Platform and infrastructure tools',
    color: 'from-pink-500 to-fuchsia-500',
    tools: [
      {
        id: 8,
        name: 'Vercel',
        category: 'Hosting',
        proficiency: 90,
        experience: '1.5+ years',
        description: 'Frontend deployment platform with serverless functions and edge network optimization',
        features: ['Auto Deployment', 'Custom Domains', 'Analytics', 'Edge Functions'],
        useCases: ['Frontend Hosting', 'Static Sites', 'Serverless APIs']
      },
      {
        id: 9,
        name: 'Netlify',
        category: 'Hosting',
        proficiency: 75,
        experience: '1+ years',
        description: 'Web development platform for deploying and managing modern web applications',
        features: ['Continuous Deployment', 'Form Handling', 'CDN', 'Identity Management'],
        useCases: ['JAMstack Sites', 'Form Processing', 'Branch Previews']
      },
      {
        id: 10,
        name: 'Firebase',
        category: 'Backend',
        proficiency: 65,
        experience: '8 months',
        description: 'Google\'s mobile and web application development platform with real-time database',
        features: ['Real-time Database', 'Authentication', 'Hosting', 'Cloud Functions'],
        useCases: ['User Authentication', 'Real-time Apps', 'Backend Services']
      }
    ]
  },
  {
    name: 'Productivity & Communication',
    description: 'Workflow and collaboration tools',
    color: 'from-fuchsia-500 to-purple-500',
    tools: [
      {
        id: 11,
        name: 'Notion',
        category: 'Productivity',
        proficiency: 85,
        experience: '1+ years',
        description: 'All-in-one workspace for notes, project management, and team collaboration',
        features: ['Database Management', 'Templates', 'Kanban Boards', 'Team Collaboration'],
        useCases: ['Project Planning', 'Documentation', 'Task Management']
      },
      {
        id: 12,
        name: 'Discord',
        category: 'Communication',
        proficiency: 90,
        experience: '3+ years',
        description: 'Communication platform for text, voice, and video chat with community features',
        features: ['Voice Channels', 'Screen Sharing', 'Bot Integration', 'Server Management'],
        useCases: ['Team Communication', 'Community Building', 'Code Reviews']
      },
      {
        id: 13,
        name: 'Trello',
        category: 'Project Management',
        proficiency: 70,
        experience: '1+ years',
        description: 'Visual project management tool based on Kanban boards for organizing tasks and workflows',
        features: ['Kanban Boards', 'Cards & Lists', 'Team Collaboration', 'Power-Ups'],
        useCases: ['Task Tracking', 'Project Organization', 'Team Workflows']
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
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);

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
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col gap-2 p-4 bg-neutral-900/70 backdrop-blur-xl rounded-2xl border border-neutral-700/40 shadow-2xl"
          >
            <div className="text-xs text-neutral-400 font-medium mb-2 px-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
              Solar System
            </div>
            {planets.map((planet, index) => {
              const isCurrent = planet.path === '/tools';
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
                      ? 'bg-neutral-800/70 text-pink-300 cursor-default border border-pink-500/30' 
                      : isSelected
                      ? 'bg-neutral-800/50 text-neutral-200 border border-neutral-600/30'
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

// Planet Background - Right side
const PlanetBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {/* Tools Planet - Half visible from top right */}
    <motion.div
      initial={{ scale: 0.8, opacity: 0, rotate: 15 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ duration: 2.5, ease: "easeOut" }}
      className="absolute -top-1/3 -right-1/4 w-[140vh] h-[140vh] rounded-full"
      style={{
        background: `radial-gradient(circle at 30% 30%, 
          rgba(236, 72, 153, 0.16) 0%,
          rgba(219, 39, 119, 0.12) 25%,
          rgba(190, 24, 93, 0.08) 50%,
          rgba(157, 23, 77, 0.04) 75%,
          transparent 100%)`,
        filter: 'blur(1.5px)',
      }}
    />
    
    {/* Orbital rings */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 2 }}
      className="absolute -top-1/3 -right-1/4 w-[160vh] h-[160vh] rounded-full border border-pink-500/6"
      style={{
        animation: 'spin 140s linear infinite',
      }}
    />
    
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.8, duration: 2 }}
      className="absolute -top-1/3 -right-1/4 w-[180vh] h-[180vh] rounded-full border border-pink-500/3"
      style={{
        animation: 'spin 200s linear infinite reverse',
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
      const numberOfElements = 10;

      for (let i = 0; i < numberOfElements; i++) {
        const size = Math.random() * 6 + 3;
        const duration = 20 + Math.random() * 15;
        const delay = Math.random() * 8;
        
        components.push(
          <motion.div
            key={i}
            className="absolute opacity-20"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(219, 39, 119, 0.2) 50%, transparent 100%)`,
              borderRadius: Math.random() > 0.5 ? '50%' : '20%',
              filter: 'blur(0.5px)',
            }}
            animate={{
              y: [0, -40, 0, 30, 0],
              x: [0, 30, -20, 0],
              scale: [1, 1.3, 0.9, 1.1, 1],
              rotate: [0, 45, -30, 60, 0],
              opacity: [0.2, 0.5, 0.1, 0.4, 0.2],
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

// Digital Grid Effect
const DigitalGrid = () => (
  <div className="fixed inset-0 pointer-events-none z-0">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, delay: 1 }}
      className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-lg opacity-5"
      style={{
        backgroundImage: `linear-gradient(rgba(236, 72, 153, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(236, 72, 153, 0.1) 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
        animation: 'spin 400s linear infinite',
      }}
    />
  </div>
);

// Tool Card Component
const ToolCard = ({ tool, index }: { tool: Tool; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: index * 0.1, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: "-80px" }}
      className="group bg-neutral-900/40 backdrop-blur-xl rounded-2xl p-8 border border-neutral-700/30 hover:border-pink-500/20 hover:bg-neutral-900/50 transition-all duration-500 relative overflow-hidden"
      style={{
        boxShadow: `0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(236, 72, 153, 0.05)`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/3 via-transparent to-fuchsia-500/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h4 className="text-2xl font-medium text-neutral-100 group-hover:text-pink-200 transition-colors duration-300 mb-2">
              {tool.name}
            </h4>
            <div className="flex items-center gap-3 text-sm">
              <span className="px-3 py-1 bg-pink-500/10 text-pink-300 rounded-full border border-pink-500/20 font-medium">
                {tool.category}
              </span>
              <span className="text-neutral-500">{tool.experience}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-light text-pink-300 mb-1">
              {tool.proficiency}%
            </div>
            <div className="w-16 bg-neutral-800/40 rounded-full h-2 overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-pink-400 to-fuchsia-500 h-2 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: isVisible ? `${tool.proficiency}%` : 0 }}
                transition={{ duration: 2, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true }}
                style={{
                  boxShadow: `0 0 8px rgba(236, 72, 153, 0.3)`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-neutral-400 leading-relaxed mb-6 font-light">
          {tool.description}
        </p>

        {/* Features */}
        {tool.features && (
          <div className="mb-6">
            <h5 className="text-sm font-medium text-neutral-300 mb-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
              Key Features
            </h5>
            <div className="flex flex-wrap gap-2">
              {tool.features.map((feature, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 + idx * 0.05, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="inline-block px-3 py-1 text-xs bg-neutral-800/40 text-neutral-300 rounded-lg border border-neutral-700/30 hover:bg-neutral-700/40 hover:border-pink-500/20 transition-all duration-300"
                >
                  {feature}
                </motion.span>
              ))}
            </div>
          </div>
        )}

        {/* Use Cases */}
        {tool.useCases && (
          <div>
            <h5 className="text-sm font-medium text-neutral-300 mb-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-fuchsia-400 rounded-full animate-pulse delay-75" />
              Use Cases
            </h5>
            <div className="flex flex-wrap gap-2">
              {tool.useCases.map((useCase, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 + idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="inline-block px-3 py-1 text-xs bg-pink-500/10 text-pink-300 rounded-lg border border-pink-500/20 hover:bg-pink-500/20 transition-all duration-300"
                >
                  {useCase}
                </motion.span>
              ))}
            </div>
          </div>
        )}

        {/* Proficiency Indicator */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: index * 0.1 + 0.8, duration: 0.5 }}
          viewport={{ once: true }}
          className="absolute top-4 right-4 w-3 h-3 bg-pink-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            boxShadow: `0 0 15px rgba(236, 72, 153, 0.6)`,
          }}
        />
      </div>
    </motion.div>
  );
};

// Tool Category Section
const ToolCategorySection = ({ category, index }: { category: ToolCategory; index: number }) => (
  <motion.section
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, delay: index * 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    viewport={{ once: true, margin: "-150px" }}
    className="mb-32"
  >
    <div className="text-center mb-16">
      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
        whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: index * 0.3 + 0.4 }}
        viewport={{ once: true }}
        className={`inline-block px-8 py-4 rounded-full bg-gradient-to-r ${category.color} text-neutral-900 text-sm font-semibold mb-6 shadow-lg relative overflow-hidden`}
        style={{
          boxShadow: `0 0 30px rgba(236, 72, 153, 0.2)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/15 to-transparent" />
        <span className="relative z-10">{category.name}</span>
      </motion.div>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.3 + 0.6, duration: 1 }}
        viewport={{ once: true }}
        className="text-neutral-400 max-w-2xl mx-auto text-lg font-light leading-relaxed"
      >
        {category.description}
      </motion.p>
    </div>

    <div className="grid gap-8 lg:grid-cols-2 xl:gap-10">
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
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center max-w-6xl mx-auto"
      >
        <motion.h1
          className="text-8xl md:text-9xl font-extralight mb-16 text-neutral-100 tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.4 }}
          style={{
            textShadow: `0 0 40px rgba(236, 72, 153, 0.2)`,
          }}
        >
          Digital Arsenal
        </motion.h1>

        <motion.p
          className="text-2xl text-neutral-400 font-light leading-relaxed mb-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.3 }}
        >
          A curated collection of professional tools and platforms that power modern development workflows and creative processes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {['Development Suite', 'Design Studio', 'Deployment Engine'].map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 1.9 + index * 0.15, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -3, rotate: 1 }}
              className="px-6 py-3 bg-neutral-800/30 text-neutral-300 rounded-full border border-neutral-700/40 font-light backdrop-blur-xl hover:bg-neutral-700/30 hover:border-pink-500/20 hover:text-pink-200 transition-all duration-300 cursor-pointer relative overflow-hidden"
              style={{
                boxShadow: `0 4px 20px rgba(0, 0, 0, 0.3)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">{tag}</span>
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>

    {/* Scroll Indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3.2 }}
      className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
    >
      <motion.div
        animate={{ 
          y: [0, 18, 0],
          scale: [1, 1.08, 1] 
        }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        className="w-8 h-16 border-2 border-neutral-600 rounded-full flex justify-center relative overflow-hidden backdrop-blur-sm"
        style={{
          boxShadow: `0 0 15px rgba(236, 72, 153, 0.1)`,
        }}
      >
        <motion.div
          animate={{ 
            y: [0, 26, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
          className="w-1 h-6 bg-gradient-to-b from-pink-400 to-fuchsia-500 rounded-full mt-4"
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
    transition={{ duration: 1.6 }}
    viewport={{ once: true, margin: "-120px" }}
    className="py-32"
  >
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-6xl font-light text-neutral-100 mb-6">
          Workflow Analytics
        </h2>
        <p className="text-neutral-400 text-xl font-light max-w-3xl mx-auto leading-relaxed">
          Professional metrics from the digital workspace ecosystem
        </p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
        {[
          { number: '13+', label: 'Tools', description: 'Active Arsenal', color: '#ec4899' },
          { number: '4', label: 'Categories', description: 'Core Domains', color: '#db2777' },
          { number: '80%', label: 'Efficiency', description: 'Avg. Proficiency', color: '#be185d' },
          { number: '24/7', label: 'Uptime', description: 'Productivity Flow', color: '#9d174d' }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0, y: 40, rotate: -3 }}
            whileInView={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: index * 0.2, duration: 1 }}
            viewport={{ once: true }}
            className="group text-center relative"
          >
            <motion.div 
              className="text-5xl md:text-6xl font-extralight text-neutral-100 mb-4 group-hover:text-pink-200 transition-colors duration-500 relative"
              whileHover={{ scale: 1.1, y: -5, rotate: 2 }}
              transition={{ duration: 0.3 }}
              style={{
                textShadow: `0 0 20px ${stat.color}25`,
              }}
            >
              {stat.number}
            </motion.div>
            <div className="text-lg font-medium text-neutral-300 mb-2">
              {stat.label}
            </div>
            <div className="text-sm text-neutral-500 font-light">
              {stat.description}
            </div>
            <motion.div
              className="w-12 h-0.5 mx-auto mt-3 rounded-full bg-pink-400"
              style={{ 
                boxShadow: `0 0 8px rgba(236, 72, 153, 0.4)`
              }}
              initial={{ scaleX: 0, rotate: -5 }}
              whileInView={{ scaleX: 1, rotate: 0 }}
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
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.6 }}
    viewport={{ once: true, margin: "-120px" }}
    className="py-32"
  >
    <div className="container mx-auto px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.h3 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font-light text-neutral-100 mb-10 tracking-tight"
          style={{
            textShadow: `0 0 25px rgba(236, 72, 153, 0.15)`,
          }}
        >
          Let&apos;s Build Together
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl text-neutral-400 leading-relaxed mb-14 font-light"
        >
          Ready to leverage these tools for your next project? Let&apos;s create something exceptional with professional-grade development workflows.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -3, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-neutral-900 font-semibold hover:from-pink-400 hover:to-fuchsia-400 transition-all duration-300 rounded-full text-lg cursor-pointer relative overflow-hidden"
            onClick={() => window.location.href = '/contact'}
            style={{
              boxShadow: `0 8px 25px rgba(236, 72, 153, 0.3)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Start Project</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -3, rotate: -1 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 border-2 border-neutral-600 text-neutral-300 font-semibold hover:bg-neutral-800/20 hover:border-pink-500/30 hover:text-pink-200 transition-all duration-300 rounded-full text-lg backdrop-blur-xl cursor-pointer relative overflow-hidden"
            onClick={() => window.location.href = '/projects'}
            style={{
              boxShadow: `0 4px 20px rgba(0, 0, 0, 0.3)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">View Portfolio</span>
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
      <DigitalGrid />
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
      
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}