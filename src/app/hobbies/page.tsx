'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Types
interface Hobby {
  id: number;
  name: string;
  category: string;
  experience: string;
  description: string;
  icon?: string;
  highlights?: string[];
  favoriteAspect?: string;
  personalStory: string;
  mood: string;
  intensity: number;
  themeColor: string;
  bgPattern: string;
}

interface HobbyCategory {
  name: string;
  hobbies: Hobby[];
  color: string;
  description: string;
  vibe: string;
}

// Hobbies Data
const hobbiesData: HobbyCategory[] = [
  {
    name: 'Creative Flow',
    description: 'Where imagination meets expression',
    vibe: 'Artistic & Soulful',
    color: 'from-cyan-400 to-blue-500',
    hobbies: [
      {
        id: 1,
        name: 'Guitar & Music',
        category: 'Musical Expression',
        experience: '4+ years of passion',
        description: 'Every chord tells a story, every riff captures an emotion. Music is my universal language.',
        personalStory: 'Started with a cheap acoustic guitar and fell in love with the way six strings could express what words couldn\'t. From metal riffs to gentle fingerpicking, each style opened a new dimension of creativity.',
        favoriteAspect: 'That magical moment when a new riff just flows naturally',
        highlights: ['Heavy Metal Riffs', 'Acoustic Fingerpicking', 'Original Compositions', 'Jam Sessions'],
        mood: '🎸 Energetic & Expressive',
        intensity: 95,
        themeColor: '#f97316',
        bgPattern: 'musical'
      },
      {
        id: 2,
        name: 'Digital Art & Drawing',
        category: 'Visual Storytelling',
        experience: 'Lifetime companion',
        description: 'Bringing imagination to life through pixels and pencil strokes, one character at a time.',
        personalStory: 'Art has been my constant companion since childhood. What started as doodles in school notebooks evolved into digital masterpieces and character designs that tell their own stories.',
        favoriteAspect: 'Creating characters that feel alive and have their own personality',
        highlights: ['Character Design', 'Digital Illustration', 'Concept Art', 'Storytelling Through Art'],
        mood: '🎨 Imaginative & Dreamy',
        intensity: 88,
        themeColor: '#8b5cf6',
        bgPattern: 'artistic'
      }
    ]
  },
  {
    name: 'Urban Adventures',
    description: 'Street culture and city exploration',
    vibe: 'Raw & Authentic',
    color: 'from-blue-500 to-indigo-500',
    hobbies: [
      {
        id: 3,
        name: 'Skateboarding',
        category: 'Street Culture',
        experience: '8+ years of progression',
        description: 'Rolling through life with style, balance, and an endless pursuit of the perfect trick.',
        personalStory: 'Started skateboarding as a way to explore the city differently. Every curb became a challenge, every staircase an opportunity. The skateboarding community taught me perseverance and creativity.',
        favoriteAspect: 'The pure satisfaction of finally landing a trick you\'ve been working on for weeks',
        highlights: ['Street Skating', 'Technical Tricks', 'Urban Exploration', 'Skate Culture'],
        mood: '🛹 Rebellious & Determined',
        intensity: 92,
        themeColor: '#10b981',
        bgPattern: 'urban'
      }
    ]
  },
  {
    name: 'Digital Realms',
    description: 'Virtual worlds and epic adventures',
    vibe: 'Immersive & Strategic',
    color: 'from-indigo-500 to-purple-500',
    hobbies: [
      {
        id: 4,
        name: 'Gaming Universe',
        category: 'Interactive Entertainment',
        experience: 'Lifetime explorer',
        description: 'Conquering digital worlds, solving complex puzzles, and living a thousand different stories.',
        personalStory: 'Gaming opened doors to infinite worlds where I could be anyone and do anything. From the challenging lands of Elden Ring to strategic battles, each game teaches patience, problem-solving, and creativity.',
        favoriteAspect: 'Elden Ring - The perfect blend of challenge, exploration, and pure artistic beauty',
        highlights: ['Elden Ring Mastery', 'Soulslike Challenges', 'Open World Exploration', 'Strategic Gaming'],
        mood: '🎮 Focused & Adventurous',
        intensity: 90,
        themeColor: '#dc2626',
        bgPattern: 'digital'
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
    <div className="flex items-center gap-3 px-4 py-2 bg-neutral-900/60 hover:bg-neutral-800/70 backdrop-blur-xl rounded-full border border-neutral-700/40 hover:border-cyan-500/30 transition-all duration-300 shadow-xl">
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

  const handlePlanetClick = (planet: typeof planets[0]) => {
    if (planet.path === '/hobbies') return;
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
            className="group flex items-center gap-3 px-4 py-2 bg-neutral-900/60 hover:bg-neutral-800/70 backdrop-blur-xl rounded-full border border-neutral-700/40 hover:border-cyan-500/30 transition-all duration-300 shadow-xl cursor-pointer"
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
            className="flex flex-col gap-2 p-4 bg-neutral-900/70 backdrop-blur-xl rounded-2xl border border-neutral-700/40 shadow-2xl"
          >
            <div className="text-xs text-neutral-400 font-medium mb-2 px-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              Solar System
            </div>
            {planets.map((planet, index) => {
              const isCurrent = planet.path === '/hobbies';
              
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
                      ? 'bg-neutral-800/70 text-cyan-300 cursor-default border border-cyan-500/30' 
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

// Planet Background - Left side
const PlanetBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <motion.div
      initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ duration: 2.5, ease: "easeOut" }}
      className="absolute -top-1/3 -left-1/4 w-[130vh] h-[130vh] rounded-full"
      style={{
        background: `radial-gradient(circle at 70% 70%, 
          rgba(56, 189, 248, 0.18) 0%,
          rgba(14, 165, 233, 0.14) 25%,
          rgba(2, 132, 199, 0.10) 50%,
          rgba(3, 105, 161, 0.06) 75%,
          transparent 100%)`,
        filter: 'blur(1.5px)',
      }}
    />
    
    {/* Orbital rings */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 2 }}
      className="absolute -top-1/3 -left-1/4 w-[150vh] h-[150vh] rounded-full border border-cyan-500/8"
      style={{
        animation: 'spin 120s linear infinite',
      }}
    />
    
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.8, duration: 2 }}
      className="absolute -top-1/3 -left-1/4 w-[170vh] h-[170vh] rounded-full border border-cyan-500/4"
      style={{
        animation: 'spin 180s linear infinite reverse',
      }}
    />
  </div>
);

// Dynamic Background Effects for each hobby
const DynamicBackground = ({ hobby }: { hobby: Hobby }) => {
  const [effects, setEffects] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const generateEffects = () => {
      const elements = [];
      const numberOfEffects = 12;

      for (let i = 0; i < numberOfEffects; i++) {
        let effectElement;

        switch (hobby.bgPattern) {
          case 'musical':
            effectElement = (
              <motion.div
                key={i}
                className="absolute text-xl opacity-15"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  color: hobby.themeColor,
                  fontSize: `${10 + Math.random() * 12}px`,
                }}
                animate={{
                  y: [0, -40, 0],
                  rotate: [0, 360],
                  scale: [1, 1.3, 1],
                  opacity: [0.1, 0.25, 0.1],
                }}
                transition={{
                  duration: 6 + Math.random() * 4,
                  delay: Math.random() * 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {['♪', '♫', '♬', '♩'][Math.floor(Math.random() * 4)]}
              </motion.div>
            );
            break;

          case 'artistic':
            effectElement = (
              <motion.div
                key={i}
                className="absolute rounded-full opacity-15"
                style={{
                  width: `${6 + Math.random() * 15}px`,
                  height: `${6 + Math.random() * 15}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `radial-gradient(circle, ${hobby.themeColor}40 0%, transparent 70%)`,
                }}
                animate={{
                  scale: [0.5, 1.2, 0.7],
                  rotate: [0, 180, 360],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 5 + Math.random() * 3,
                  delay: Math.random() * 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            );
            break;

          case 'urban':
            effectElement = (
              <motion.div
                key={i}
                className="absolute opacity-12"
                style={{
                  width: `${3 + Math.random() * 8}px`,
                  height: `${15 + Math.random() * 30}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  backgroundColor: hobby.themeColor,
                  borderRadius: Math.random() > 0.5 ? '0' : '2px',
                }}
                animate={{
                  x: [0, 80, -40, 0],
                  y: [0, -15, 15, 0],
                  rotate: [0, 180, 360],
                  opacity: [0.1, 0.25, 0.1],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  delay: Math.random() * 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            );
            break;

          case 'digital':
            effectElement = (
              <motion.div
                key={i}
                className="absolute opacity-20 font-mono text-xs"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  color: hobby.themeColor,
                }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scale: [0.8, 1.1, 0.8],
                  y: [0, -25, 0],
                }}
                transition={{
                  duration: 2.5 + Math.random() * 2,
                  delay: Math.random() * 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {['0', '1', '█', '▓', 'HP', 'EXP'][Math.floor(Math.random() * 6)]}
              </motion.div>
            );
            break;

          default:
            effectElement = null;
        }

        if (effectElement) {
          elements.push(effectElement);
        }
      }
      setEffects(elements);
    };

    generateEffects();
  }, [hobby]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {effects}
    </div>
  );
};

// Passion Meter Component
const PassionMeter = ({ hobby }: { hobby: Hobby }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.5 }}
    viewport={{ once: true }}
    className="relative"
  >
    <div className="flex items-center justify-between mb-3">
      <span className="text-sm font-medium text-neutral-300">Passion Intensity</span>
      <span className="text-2xl font-bold" style={{ color: hobby.themeColor }}>
        {hobby.intensity}%
      </span>
    </div>
    
    <div className="relative w-full h-3 bg-neutral-800 rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{
          background: `linear-gradient(90deg, ${hobby.themeColor}60, ${hobby.themeColor})`,
          boxShadow: `0 0 15px ${hobby.themeColor}40`,
        }}
        initial={{ width: 0 }}
        whileInView={{ width: `${hobby.intensity}%` }}
        transition={{ duration: 2, delay: 0.8 }}
        viewport={{ once: true }}
      />
      
      {/* Pulse effect */}
      <motion.div
        className="absolute top-0 left-0 h-full w-2 rounded-full opacity-60"
        style={{ backgroundColor: hobby.themeColor }}
        animate={{
          x: [`0%`, `${hobby.intensity - 2}%`],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          delay: 2.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </div>
  </motion.div>
);

// Story Card Component
const StoryCard = ({ hobby, index }: { hobby: Hobby; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 1.2, 
        delay: index * 0.3, 
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative overflow-hidden group"
    >
      {/* Background with dynamic effects */}
      <div 
        className="absolute inset-0 rounded-3xl"
        style={{
          background: `linear-gradient(135deg, 
            ${hobby.themeColor}15 0%, 
            ${hobby.themeColor}08 50%, 
            transparent 100%)`,
        }}
      />
      
      <DynamicBackground hobby={hobby} />
      
      {/* Main content */}
      <div className="relative z-10 p-8 md:p-12">
        {/* Header with mood */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.3 + 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-neutral-800/60 backdrop-blur-xl rounded-full mb-6"
            style={{ border: `1px solid ${hobby.themeColor}30` }}
          >
            <div 
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ backgroundColor: hobby.themeColor }}
            />
            <span className="text-neutral-300 font-medium">{hobby.mood}</span>
          </motion.div>
          
          <motion.h3
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
            style={{ 
              color: hobby.themeColor,
              textShadow: `0 0 30px ${hobby.themeColor}40`
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 + 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {hobby.name}
          </motion.h3>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 + 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 text-sm text-neutral-400"
          >
            <span className="px-3 py-1 bg-neutral-800/40 rounded-full">
              {hobby.category}
            </span>
            <span>{hobby.experience}</span>
          </motion.div>
        </div>

        {/* Main description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.3 + 1, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-xl text-neutral-200 leading-relaxed text-center mb-10 max-w-3xl mx-auto font-light"
        >
          {hobby.description}
        </motion.p>

        {/* Passion Meter */}
        <div className="mb-10">
          <PassionMeter hobby={hobby} />
        </div>

        {/* Expandable content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8 overflow-hidden"
            >
              {/* Personal story */}
              <div className="bg-neutral-800/40 backdrop-blur-xl rounded-2xl p-6 border border-neutral-700/50">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: hobby.themeColor }}
                  />
                  My Journey
                </h4>
                <p className="text-neutral-300 leading-relaxed italic">
                  "{hobby.personalStory}"
                </p>
              </div>

              {/* Favorite aspect */}
              <div 
                className="bg-gradient-to-r from-neutral-800/60 to-neutral-800/30 backdrop-blur-xl rounded-2xl p-6"
                style={{ border: `1px solid ${hobby.themeColor}30` }}
              >
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: hobby.themeColor }}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  What I Love Most
                </h4>
                <p className="text-neutral-200 font-medium">
                  {hobby.favoriteAspect}
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {hobby.highlights?.map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="bg-neutral-800/60 backdrop-blur-xl rounded-xl p-4 text-center hover:bg-neutral-700/60 transition-all duration-300 cursor-pointer group"
                    style={{ border: `1px solid ${hobby.themeColor}20` }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div 
                      className="w-2 h-2 rounded-full mx-auto mb-2 group-hover:scale-125 transition-transform"
                      style={{ backgroundColor: hobby.themeColor }}
                    />
                    <span className="text-sm text-neutral-300 font-medium">
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-8 py-4 bg-neutral-800/60 hover:bg-neutral-700/60 backdrop-blur-xl rounded-xl text-white font-semibold transition-all duration-300 flex items-center justify-center gap-3 group"
          style={{ border: `1px solid ${hobby.themeColor}30` }}
        >
          <span>{isExpanded ? 'Show Less' : 'Discover More'}</span>
          <motion.svg
            className="w-5 h-5 group-hover:scale-110 transition-transform"
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

// Category Section
const CategorySection = ({ category, index }: { category: HobbyCategory; index: number }) => (
  <motion.section
    initial={{ opacity: 0, y: 120 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5, delay: index * 0.4 }}
    viewport={{ once: true, margin: "-150px" }}
    className="min-h-screen py-20 relative"
  >
    {/* Category header */}
    <div className="container mx-auto px-6 mb-20">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotateZ: -5 }}
          whileInView={{ scale: 1, opacity: 1, rotateZ: 0 }}
          transition={{ duration: 1, delay: index * 0.4 + 0.3 }}
          viewport={{ once: true }}
          className={`inline-block px-8 py-4 bg-gradient-to-r ${category.color} text-white text-lg font-bold mb-6 rounded-2xl shadow-2xl relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
          <span className="relative z-10">{category.name}</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.4 + 0.6, duration: 1 }}
          viewport={{ once: true }}
          className="text-2xl text-neutral-300 font-light mb-4"
        >
          {category.description}
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.4 + 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800/40 backdrop-blur-xl rounded-full text-sm text-neutral-400 border border-neutral-700/30"
        >
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          {category.vibe}
        </motion.div>
      </div>
    </div>

    {/* Hobbies */}
    <div className="container mx-auto px-6">
      <div className="space-y-32">
        {category.hobbies.map((hobby, hobbyIndex) => (
          <StoryCard key={hobby.id} hobby={hobby} index={hobbyIndex} />
        ))}
      </div>
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
        transition={{ duration: 1.8 }}
        className="text-center max-w-6xl mx-auto"
      >
        <motion.h1
          className="text-7xl md:text-8xl font-extralight mb-16 text-white tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.4 }}
          style={{
            textShadow: `0 0 40px rgba(56, 189, 248, 0.25)`,
          }}
        >
          Life in Motion
        </motion.h1>

        <motion.p
          className="text-2xl text-neutral-400 font-light leading-relaxed mb-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1.4 }}
        >
          Beyond the code and pixels, these are the passions that fuel my creativity and shape my perspective on life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1.2 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {[
            { name: 'Creative Soul', emoji: '🎨', color: '#8b5cf6' },
            { name: 'Street Explorer', emoji: '🛹', color: '#10b981' },
            { name: 'Digital Wanderer', emoji: '🎮', color: '#dc2626' }
          ].map((tag, index) => (
            <motion.div
              key={tag.name}
              initial={{ opacity: 0, scale: 0.8, rotateZ: -5 }}
              animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
              transition={{ delay: 2.1 + index * 0.2, duration: 0.9 }}
              whileHover={{ 
                scale: 1.1, 
                y: -5, 
                rotateZ: 2,
              }}
              className="flex items-center gap-3 px-6 py-3 bg-neutral-800/60 backdrop-blur-xl rounded-2xl text-neutral-300 hover:text-white transition-all duration-300 cursor-pointer border border-neutral-700/30 hover:border-cyan-500/30 group"
            >
              <span className="text-xl group-hover:scale-125 transition-transform">
                {tag.emoji}
              </span>
              <span className="font-medium">{tag.name}</span>
            </motion.div>
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
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="w-6 h-12 border-2 border-neutral-600 rounded-full flex justify-center relative backdrop-blur-sm"
      >
        <motion.div
          animate={{ y: [0, 16, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mt-3"
        />
      </motion.div>
    </motion.div>
  </section>
);

// Call to Action Section  
const CTASection = () => (
  <motion.section
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.8 }}
    viewport={{ once: true, margin: "-120px" }}
    className="py-32 relative"
  >
    <div className="container mx-auto px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <motion.h3 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font-light text-white mb-12 tracking-tight"
        >
          Share the Experience
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-2xl text-neutral-400 leading-relaxed mb-16 font-light"
        >
          Whether you want to jam on guitar, explore the city on wheels, or dive into epic gaming sessions, 
          I believe the best experiences are shared with others.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-8 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -4, rotateZ: 1 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 rounded-2xl text-lg cursor-pointer relative overflow-hidden shadow-2xl"
            onClick={() => window.location.href = '/contact'}
            style={{
              boxShadow: `0 10px 30px rgba(56, 189, 248, 0.4)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/25 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-3">
              Let's Connect
              <span className="text-xl">🤝</span>
            </span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -4, rotateZ: -1 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-5 border-2 border-neutral-600 text-neutral-300 font-bold hover:bg-neutral-800/40 hover:border-cyan-500/50 hover:text-cyan-200 transition-all duration-300 rounded-2xl text-lg backdrop-blur-xl cursor-pointer relative overflow-hidden"
            onClick={() => window.location.href = '/projects'}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-3">
              See My Creations
              <span className="text-xl">✨</span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

// Main Hobbies Page Component
export default function HobbiesPage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white relative overflow-hidden">
      <PlanetBackground />
      <BackButton />
      <PlanetNavigation />
      
      <HeroSection />
      
      <div className="relative z-10">
        {hobbiesData.map((category, index) => (
          <CategorySection key={category.name} category={category} index={index} />
        ))}
        
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