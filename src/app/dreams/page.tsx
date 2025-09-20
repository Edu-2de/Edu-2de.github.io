'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';

// Types
interface Dream {
  id: number;
  title: string;
  category: string;
  timeline: string;
  description: string;
  motivation: string;
  steps: string[];
  impact: string;
  status: 'planning' | 'in-progress' | 'achieved' | 'evolving';
}

interface DreamCategory {
  name: string;
  dreams: Dream[];
  color: string;
  description: string;
}

// Dreams Data
const dreamsData: DreamCategory[] = [
  {
    name: 'Career Growth',
    description: 'Professional development and career milestones',
    color: 'from-cyan-500 to-blue-600',
    dreams: [
      {
        id: 1,
        title: 'Senior Full-Stack Developer',
        category: 'Professional',
        timeline: '2-3 years',
        description: 'Become a senior developer with expertise in modern web technologies and system architecture',
        motivation: 'Lead complex projects and mentor other developers while building scalable applications',
        steps: [
          'Master advanced React/Next.js patterns',
          'Deep dive into system design',
          'Lead team projects',
          'Contribute to open source',
        ],
        impact: 'Create impactful applications and help shape development teams',
        status: 'in-progress',
      },
      {
        id: 2,
        title: 'Tech Startup Founder',
        category: 'Entrepreneurship',
        timeline: '5-7 years',
        description: 'Launch and scale a technology startup that solves real-world problems',
        motivation: 'Build something meaningful that creates value for users and society',
        steps: [
          'Identify market opportunities',
          'Build MVP and validate',
          'Assemble strong team',
          'Secure funding and scale',
        ],
        impact: 'Create jobs, drive innovation, and make a positive impact on the world',
        status: 'planning',
      },
    ],
  },
  {
    name: 'Creative Pursuits',
    description: 'Artistic and creative aspirations',
    color: 'from-blue-600 to-indigo-600',
    dreams: [
      {
        id: 3,
        title: 'Music Album Release',
        category: 'Music',
        timeline: '1-2 years',
        description: 'Compose, record, and release an original music album showcasing my guitar skills',
        motivation: 'Share my musical creativity and connect with people through original compositions',
        steps: [
          'Complete 10-12 original songs',
          'Set up home recording studio',
          'Professional mixing/mastering',
          'Digital platform distribution',
        ],
        impact: 'Inspire others and express artistic vision through music',
        status: 'in-progress',
      },
      {
        id: 4,
        title: 'Digital Art Exhibition',
        category: 'Visual Art',
        timeline: '2-3 years',
        description: 'Create a collection of digital artworks and host an online/physical exhibition',
        motivation: 'Showcase artistic growth and connect with the art community',
        steps: [
          'Develop consistent art style',
          'Create 20+ finished pieces',
          'Build online portfolio',
          'Organize exhibition event',
        ],
        impact: 'Contribute to digital art culture and inspire fellow artists',
        status: 'planning',
      },
    ],
  },
  {
    name: 'Personal Growth',
    description: 'Self-improvement and lifestyle goals',
    color: 'from-indigo-600 to-purple-600',
    dreams: [
      {
        id: 5,
        title: 'World Travel Adventure',
        category: 'Travel',
        timeline: '3-5 years',
        description: 'Visit 20+ countries while working remotely and experiencing diverse cultures',
        motivation: 'Broaden perspectives, create memories, and understand different ways of life',
        steps: ['Establish remote work setup', 'Save travel fund', 'Plan route and logistics', 'Document experiences'],
        impact: 'Gain global perspective and create lifelong memories',
        status: 'planning',
      },
      {
        id: 6,
        title: 'Fitness & Wellness Master',
        category: 'Health',
        timeline: '1-2 years',
        description: 'Achieve peak physical fitness and establish sustainable wellness routines',
        motivation: 'Maintain energy, health, and mental clarity for all life pursuits',
        steps: [
          'Consistent workout routine',
          'Optimal nutrition plan',
          'Stress management techniques',
          'Regular health monitoring',
        ],
        impact: 'Live healthier, longer, and inspire others to prioritize wellness',
        status: 'in-progress',
      },
    ],
  },
  {
    name: 'Impact & Legacy',
    description: 'Long-term contributions to society and future generations',
    color: 'from-purple-600 to-pink-600',
    dreams: [
      {
        id: 7,
        title: 'Educational Platform',
        category: 'Education',
        timeline: '5-10 years',
        description: 'Build an innovative online learning platform that democratizes quality education',
        motivation: 'Make high-quality education accessible to everyone, regardless of their background',
        steps: ['Research educational gaps', 'Develop platform prototype', 'Partner with educators', 'Scale globally'],
        impact: 'Transform lives through education and reduce inequality',
        status: 'evolving',
      },
      {
        id: 8,
        title: 'Mentorship Program',
        category: 'Community',
        timeline: '3-5 years',
        description: 'Establish a mentorship program for aspiring developers and creators',
        motivation: 'Give back to the community and help others achieve their dreams',
        steps: ['Build personal expertise', 'Create curriculum', 'Find mentees', 'Measure impact'],
        impact: "Accelerate others' growth and create a cycle of knowledge sharing",
        status: 'planning',
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
    <div className="flex items-center gap-3 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 border border-neutral-600 hover:border-cyan-500 transition-all duration-300 shadow-lg">
      <motion.svg
        className="w-5 h-5 text-neutral-300 group-hover:text-cyan-300 transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        whileHover={{ x: -3 }}
        transition={{ duration: 0.2 }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
      </motion.svg>
      <span className="text-sm text-neutral-300 group-hover:text-cyan-300 transition-colors font-medium">
        Return to Base
      </span>
    </div>
  </motion.button>
);

// Planet Navigation Component
const PlanetNavigation = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handlePlanetClick = (planet: (typeof planets)[0]) => {
    if (planet.path === '/dreams') return;
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
            className="group flex items-center gap-3 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 border border-neutral-600 hover:border-cyan-500 transition-all duration-300 shadow-lg cursor-pointer"
          >
            <span className="text-sm text-neutral-300 group-hover:text-cyan-300 transition-colors font-medium">
              Next Orbit
            </span>
            <motion.svg
              className="w-5 h-5 text-neutral-300 group-hover:text-cyan-300 transition-colors"
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
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              Solar System
            </div>
            {planets.map((planet, index) => {
              const isCurrent = planet.path === '/dreams';

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
                      ? 'bg-neutral-700 text-cyan-300 cursor-default border border-cyan-500'
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
                      <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
                      <div className="w-1 h-1 bg-cyan-400/60 rounded-full animate-pulse delay-75" />
                      <div className="w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse delay-150" />
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

// Planet Background - Top center
const PlanetBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {/* Dreams Planet - Half visible from top center */}
    <motion.div
      initial={{ scale: 0.7, opacity: 0, y: -100 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 3, ease: 'easeOut' }}
      className="absolute -top-1/2 left-1/2 transform -translate-x-1/2 w-[110vh] h-[110vh] rounded-full"
      style={{
        background: `radial-gradient(circle at 50% 80%, 
          rgba(34, 211, 238, 0.12) 0%,
          rgba(6, 182, 212, 0.08) 30%,
          rgba(8, 145, 178, 0.04) 60%,
          transparent 100%)`,
        filter: 'blur(2px)',
      }}
    />

    {/* Orbital rings */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 1.5, duration: 2.5 }}
      className="absolute -top-1/2 left-1/2 transform -translate-x-1/2 w-[130vh] h-[130vh] rounded-full border border-cyan-400/6"
      style={{
        animation: 'spin 180s linear infinite',
      }}
    />

    <motion.div
      initial={{ opacity: 0, scale: 1.2, rotate: 15 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 2.2, duration: 2.8 }}
      className="absolute -top-1/2 left-1/2 transform -translate-x-1/2 w-[150vh] h-[150vh] rounded-full border border-cyan-400/3"
      style={{
        animation: 'spin 240s linear infinite reverse',
      }}
    />
  </div>
);

// Floating Stars Background
const FloatingStars = () => {
  const [stars, setStars] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const components = [];
      const numberOfStars = 12;

      for (let i = 0; i < numberOfStars; i++) {
        const size = Math.random() * 3 + 1;
        const duration = 20 + Math.random() * 15;
        const delay = Math.random() * 10;

        components.push(
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(34, 211, 238, 0.6) 0%, rgba(6, 182, 212, 0.2) 50%, transparent 100%)`,
              boxShadow: `0 0 ${size * 2}px rgba(34, 211, 238, 0.3)`,
            }}
            animate={{
              scale: [1, 1.5, 1, 0.8, 1],
              opacity: [0.3, 1, 0.4, 0.8, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        );
      }
      setStars(components);
    };

    generateStars();
  }, []);

  return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">{stars}</div>;
};

// Status Badge Component
const StatusBadge = ({ status }: { status: string }) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'planning':
        return { color: 'bg-blue-600', text: 'Planning', icon: '📋' };
      case 'in-progress':
        return { color: 'bg-orange-600', text: 'In Progress', icon: '⚡' };
      case 'achieved':
        return { color: 'bg-green-600', text: 'Achieved', icon: '✅' };
      case 'evolving':
        return { color: 'bg-purple-600', text: 'Evolving', icon: '🔄' };
      default:
        return { color: 'bg-gray-600', text: 'Unknown', icon: '❓' };
    }
  };

  const config = getStatusConfig();

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 ${config.color} text-white text-sm font-semibold`}>
      <span>{config.icon}</span>
      {config.text}
    </div>
  );
};

// Dream Card Component
const DreamCard = ({ dream, index }: { dream: Dream; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ delay: index * 0.15, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: '-80px' }}
      className="group bg-neutral-800 border border-neutral-700 hover:border-cyan-500 transition-all duration-500 relative overflow-hidden"
      style={{
        boxShadow: `0 8px 32px rgba(0, 0, 0, 0.4)`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h4 className="text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors duration-300 mb-2">
              {dream.title}
            </h4>
            <div className="flex items-center gap-3 text-sm mb-3">
              <span className="px-3 py-1 bg-cyan-600 text-white font-medium">{dream.category}</span>
              <span className="text-neutral-400 font-medium">{dream.timeline}</span>
            </div>
            <StatusBadge status={dream.status} />
          </div>
        </div>

        {/* Description */}
        <p className="text-neutral-300 text-base leading-relaxed mb-6 font-normal">{dream.description}</p>

        {/* Motivation */}
        <div className="mb-6">
          <h5 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Motivation
          </h5>
          <p className="text-cyan-200 text-sm font-medium italic bg-cyan-900/20 p-3 border-l-4 border-cyan-500">
            &ldquo;{dream.motivation}&rdquo;
          </p>
        </div>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Steps */}
              <div>
                <h5 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-75" />
                  Action Steps
                </h5>
                <div className="space-y-2">
                  {dream.steps.map((step, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.3 }}
                      className="flex items-center gap-3 text-sm"
                    >
                      <div className="w-6 h-6 bg-neutral-700 text-white flex items-center justify-center text-xs font-bold">
                        {idx + 1}
                      </div>
                      <span className="text-neutral-300 font-medium">{step}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div>
                <h5 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-150" />
                  Expected Impact
                </h5>
                <p className="text-purple-200 text-sm font-medium bg-purple-900/20 p-3 border-l-4 border-purple-500">
                  {dream.impact}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-6 w-full py-3 bg-neutral-700 hover:bg-neutral-600 text-white font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
        >
          {isExpanded ? 'Show Less' : 'Show Details'}
          <motion.svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

// Dream Category Section
const DreamCategorySection = ({ category, index }: { category: DreamCategory; index: number }) => (
  <motion.section
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, delay: index * 0.3 }}
    viewport={{ once: true, margin: '-120px' }}
    className="mb-20"
  >
    <div className="text-center mb-16">
      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotateX: -20 }}
        whileInView={{ scale: 1, opacity: 1, rotateX: 0 }}
        transition={{ duration: 1, delay: index * 0.3 + 0.4 }}
        viewport={{ once: true }}
        className={`inline-block px-10 py-5 bg-gradient-to-r ${category.color} text-white text-xl font-bold mb-6 shadow-xl relative overflow-hidden`}
        style={{
          boxShadow: `0 0 40px rgba(34, 211, 238, 0.2)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
        <span className="relative z-10">{category.name}</span>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.3 + 0.7, duration: 1 }}
        viewport={{ once: true }}
        className="text-neutral-300 max-w-2xl mx-auto text-lg font-normal leading-relaxed"
      >
        {category.description}
      </motion.p>
    </div>

    <div className="grid gap-8 lg:grid-cols-2">
      {category.dreams.map((dream, dreamIndex) => (
        <DreamCard key={dream.id} dream={dream} index={dreamIndex} />
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
        transition={{ duration: 1.6 }}
        className="text-center max-w-6xl mx-auto"
      >
        <motion.h1
          className="text-7xl md:text-8xl font-bold mb-16 text-white tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.4 }}
          style={{
            textShadow: `0 0 40px rgba(34, 211, 238, 0.3)`,
          }}
        >
          Future Visions
        </motion.h1>

        <motion.p
          className="text-xl text-neutral-300 font-normal leading-relaxed mb-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.3 }}
        >
          Ambitious goals and aspirations that drive my journey forward. Each dream represents a commitment to growth,
          impact, and the pursuit of meaningful achievements that extend beyond personal success.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {['Career Excellence', 'Creative Expression', 'Personal Growth', 'Global Impact'].map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8, rotateZ: -5 }}
              animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
              transition={{ delay: 2 + index * 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -3, rotateZ: 2 }}
              className="px-8 py-4 bg-neutral-800 text-neutral-300 border border-neutral-600 font-semibold hover:bg-neutral-700 hover:border-cyan-500 hover:text-cyan-200 transition-all duration-300 cursor-pointer relative overflow-hidden"
              style={{
                boxShadow: `0 4px 20px rgba(0, 0, 0, 0.3)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
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
      transition={{ delay: 3.5 }}
      className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="w-8 h-16 border-2 border-neutral-500 flex justify-center relative"
        style={{
          boxShadow: `0 0 15px rgba(34, 211, 238, 0.2)`,
        }}
      >
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 mt-4"
        />
      </motion.div>
    </motion.div>
  </section>
);

// Dreams Overview Stats
const DreamsStats = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.4 }}
    viewport={{ once: true, margin: '-120px' }}
    className="py-24 bg-neutral-800/30"
  >
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">Vision Analytics</h2>
        <p className="text-neutral-300 text-xl font-normal max-w-3xl mx-auto leading-relaxed">
          Strategic goals mapped across different life dimensions, each with clear timelines and actionable steps toward
          realization.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
        {[
          { number: '8', label: 'Active Dreams', description: 'Vision Pipeline', color: '#22d3ee' },
          { number: '4', label: 'Life Areas', description: 'Holistic Growth', color: '#06b6d4' },
          { number: '3', label: 'In Progress', description: 'Active Pursuit', color: '#0891b2' },
          { number: '5-10', label: 'Year Horizon', description: 'Strategic Timeline', color: '#0e7490' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0, y: 40, rotateY: -20 }}
            whileInView={{ scale: 1, opacity: 1, y: 0, rotateY: 0 }}
            transition={{ delay: index * 0.2, duration: 1 }}
            viewport={{ once: true }}
            className="group text-center p-8 bg-neutral-800 border border-neutral-700 hover:border-cyan-500 transition-all duration-500 relative overflow-hidden"
            style={{
              boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <motion.div
              className="text-5xl md:text-6xl font-bold text-white mb-4 group-hover:text-cyan-200 transition-colors duration-500 relative z-10"
              whileHover={{ scale: 1.1, y: -5, rotateZ: 3 }}
              transition={{ duration: 0.3 }}
              style={{
                textShadow: `0 0 20px ${stat.color}40`,
              }}
            >
              {stat.number}
            </motion.div>
            <div className="text-lg font-bold text-neutral-200 mb-3 relative z-10">{stat.label}</div>
            <div className="text-sm text-neutral-400 font-normal relative z-10">{stat.description}</div>
            <motion.div
              className="w-16 h-1 mx-auto mt-6 bg-cyan-500 relative z-10"
              style={{
                boxShadow: `0 0 10px rgba(34, 211, 238, 0.5)`,
              }}
              initial={{ scaleX: 0, rotateZ: -5 }}
              whileInView={{ scaleX: 1, rotateZ: 0 }}
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
    transition={{ duration: 1.4 }}
    viewport={{ once: true, margin: '-120px' }}
    className="py-32"
  >
    <div className="container mx-auto px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font-bold text-white mb-12 tracking-tight"
          style={{
            textShadow: `0 0 30px rgba(34, 211, 238, 0.2)`,
          }}
        >
          Dream With Me
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-2xl text-neutral-300 leading-relaxed mb-16 font-normal"
        >
          Whether you share similar aspirations or have complementary goals, let&apos;s connect and explore how we can
          support each other&apos;s journey toward meaningful achievements and lasting impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-8 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -4, rotateZ: 1 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 cursor-pointer relative overflow-hidden"
            onClick={() => (window.location.href = '/contact')}
            style={{
              boxShadow: `0 10px 30px rgba(34, 211, 238, 0.4)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/15 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Join the Journey</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -4, rotateZ: -1 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-5 border-2 border-neutral-600 text-neutral-300 font-bold hover:bg-neutral-800 hover:border-cyan-500 hover:text-cyan-200 transition-all duration-300 cursor-pointer relative overflow-hidden"
            onClick={() => (window.location.href = '/projects')}
            style={{
              boxShadow: `0 6px 25px rgba(0, 0, 0, 0.3)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/8 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">See Current Progress</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

// Main Dreams Page Component
export default function DreamsPage() {
  const { t } = useLanguage();
  
  // Hero Section with translations
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
            className="text-8xl md:text-9xl font-extralight mb-16 text-neutral-100 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            style={{
              textShadow: `0 0 40px rgba(251, 191, 36, 0.2)`,
            }}
          >
            {t.dreamsTitle}
          </motion.h1>

          <motion.p
            className="text-2xl text-neutral-400 font-light leading-relaxed mb-20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1.2 }}
          >
            {t.dreamsPageDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {[t.careerExcellence, t.creativeExpression, t.globalImpact].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 + index * 0.15, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-6 py-3 bg-neutral-800/30 text-neutral-300 rounded-full border border-neutral-700/40 font-light backdrop-blur-xl hover:bg-neutral-700/30 hover:border-purple-500/20 hover:text-purple-200 transition-all duration-300 cursor-pointer relative overflow-hidden"
                style={{
                  boxShadow: `0 4px 20px rgba(0, 0, 0, 0.3)`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
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
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          className="w-8 h-16 border-2 border-neutral-600 rounded-full flex justify-center relative overflow-hidden backdrop-blur-sm"
          style={{
            boxShadow: `0 0 15px rgba(251, 191, 36, 0.1)`,
          }}
        >
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="w-1 h-6 bg-gradient-to-b from-purple-400 to-indigo-500 rounded-full mt-4"
          />
        </motion.div>
      </motion.div>
    </section>
  );
  
  return (
    <div className="min-h-screen bg-neutral-900 text-white relative overflow-hidden">
      <FloatingStars />
      <PlanetBackground />
      <BackButton />
      <PlanetNavigation />

      <HeroSection />

      <div className="relative z-10">
        <DreamsStats />

        <main className="container mx-auto px-6 py-20">
          {dreamsData.map((category, index) => (
            <DreamCategorySection key={category.name} category={category} index={index} />
          ))}
        </main>

        <CTASection />
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
