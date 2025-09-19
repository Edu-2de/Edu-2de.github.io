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
  themeColor: string;
  bgPattern: string;
}

interface HobbyCategory {
  name: string;
  hobbies: Hobby[];
  color: string;
  description: string;
}

// Hobbies Data
const hobbiesData: HobbyCategory[] = [
  {
    name: 'Creative Expression',
    description: 'Artistic outlets that fuel my imagination',
    color: 'from-cyan-300 to-blue-400',
    hobbies: [
      {
        id: 1,
        name: 'Music & Guitar',
        category: 'Creative',
        experience: '4+ years',
        description: 'Expressing emotions through melodies and exploring different musical genres on the guitar',
        favoriteAspect: 'Creating original riffs and learning complex solos',
        highlights: ['Rock & Metal', 'Fingerstyle Acoustic', 'Songwriting'],
        themeColor: '#f97316', // Orange for music/energy
        bgPattern: 'musical'
      },
      {
        id: 2,
        name: 'Drawing & Art',
        category: 'Creative',
        experience: 'Lifetime',
        description: 'A lifelong passion for visual storytelling through sketches, digital art, and character design',
        favoriteAspect: 'Character design and concept art creation',
        highlights: ['Character Design', 'Digital Illustration', 'Concept Art'],
        themeColor: '#8b5cf6', // Purple for creativity
        bgPattern: 'artistic'
      }
    ]
  },
  {
    name: 'Active Lifestyle',
    description: 'Physical activities that keep me energized',
    color: 'from-blue-400 to-indigo-400',
    hobbies: [
      {
        id: 3,
        name: 'Skateboarding',
        category: 'Sports',
        experience: '8+ years',
        description: 'Street skating culture, learning technical tricks, and the freedom of rolling through the city',
        favoriteAspect: 'Landing new tricks after countless attempts',
        highlights: ['Street Skating', 'Technical Tricks', 'Urban Exploration'],
        themeColor: '#10b981', // Green for energy/movement
        bgPattern: 'urban'
      }
    ]
  },
  {
    name: 'Digital Adventures',
    description: 'Virtual worlds and interactive entertainment',
    color: 'from-indigo-400 to-purple-400',
    hobbies: [
      {
        id: 4,
        name: 'Gaming',
        category: 'Entertainment',
        experience: 'Lifetime',
        description: 'Exploring immersive worlds, challenging gameplay, and rich storytelling in video games',
        favoriteAspect: 'Elden Ring - The perfect blend of challenge and exploration',
        highlights: ['Elden Ring', 'Soulslike Games', 'Open World RPGs'],
        themeColor: '#dc2626', // Red for intensity/gaming
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
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);

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
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col gap-2 p-4 bg-neutral-900/70 backdrop-blur-xl rounded-2xl border border-neutral-700/40 shadow-2xl"
          >
            <div className="text-xs text-neutral-400 font-medium mb-2 px-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              Solar System
            </div>
            {planets.map((planet, index) => {
              const isCurrent = planet.path === '/hobbies';
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
                      ? 'bg-neutral-800/70 text-cyan-300 cursor-default border border-cyan-500/30' 
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
    {/* Hobbies Planet - Half visible from top left */}
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
      const numberOfEffects = 15;

      for (let i = 0; i < numberOfEffects; i++) {
        let effectElement;

        switch (hobby.bgPattern) {
          case 'musical':
            // Musical notes floating
            effectElement = (
              <motion.div
                key={i}
                className="absolute text-2xl opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  color: hobby.themeColor,
                  fontSize: `${12 + Math.random() * 16}px`,
                }}
                animate={{
                  y: [0, -50, 0],
                  rotate: [0, 360],
                  scale: [1, 1.5, 1],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  delay: Math.random() * 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {['♪', '♫', '♬', '♩', '♭', '♯'][Math.floor(Math.random() * 6)]}
              </motion.div>
            );
            break;

          case 'artistic':
            // Paint splashes and brushes
            effectElement = (
              <motion.div
                key={i}
                className="absolute rounded-full opacity-20"
                style={{
                  width: `${8 + Math.random() * 20}px`,
                  height: `${8 + Math.random() * 20}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `radial-gradient(circle, ${hobby.themeColor}40 0%, transparent 70%)`,
                }}
                animate={{
                  scale: [0.5, 1.5, 0.8],
                  rotate: [0, 180, 360],
                  opacity: [0.1, 0.4, 0.1],
                }}
                transition={{
                  duration: 6 + Math.random() * 4,
                  delay: Math.random() * 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            );
            break;

          case 'urban':
            // Geometric shapes for skateboarding
            effectElement = (
              <motion.div
                key={i}
                className="absolute opacity-15"
                style={{
                  width: `${4 + Math.random() * 12}px`,
                  height: `${20 + Math.random() * 40}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  backgroundColor: hobby.themeColor,
                  borderRadius: Math.random() > 0.5 ? '0' : '50%',
                }}
                animate={{
                  x: [0, 100, -50, 0],
                  y: [0, -20, 20, 0],
                  rotate: [0, 90, 180, 270, 360],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 10 + Math.random() * 5,
                  delay: Math.random() * 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            );
            break;

          case 'digital':
            // Pixel/digital effects
            effectElement = (
              <motion.div
                key={i}
                className="absolute opacity-25 font-mono text-sm"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  color: hobby.themeColor,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.8, 1.2, 0.8],
                  y: [0, -30, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  delay: Math.random() * 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {['0', '1', '█', '▓', '▒', '░', 'HP', 'MP', 'EXP'][Math.floor(Math.random() * 9)]}
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

// Themed Hobby Section
const ThemedHobbySection = ({ hobby, index }: { hobby: Hobby; index: number }) => {
  const getThemeStyles = () => {
    switch (hobby.bgPattern) {
      case 'musical':
        return {
          background: `linear-gradient(135deg, 
            rgba(249, 115, 22, 0.1) 0%, 
            rgba(251, 146, 60, 0.05) 50%, 
            transparent 100%)`,
          border: `1px solid rgba(249, 115, 22, 0.2)`,
          shadow: `0 0 50px rgba(249, 115, 22, 0.1)`,
        };
      case 'artistic':
        return {
          background: `linear-gradient(135deg, 
            rgba(139, 92, 246, 0.1) 0%, 
            rgba(168, 85, 247, 0.05) 50%, 
            transparent 100%)`,
          border: `1px solid rgba(139, 92, 246, 0.2)`,
          shadow: `0 0 50px rgba(139, 92, 246, 0.1)`,
        };
      case 'urban':
        return {
          background: `linear-gradient(135deg, 
            rgba(16, 185, 129, 0.1) 0%, 
            rgba(34, 197, 94, 0.05) 50%, 
            transparent 100%)`,
          border: `1px solid rgba(16, 185, 129, 0.2)`,
          shadow: `0 0 50px rgba(16, 185, 129, 0.1)`,
        };
      case 'digital':
        return {
          background: `linear-gradient(135deg, 
            rgba(220, 38, 38, 0.1) 0%, 
            rgba(239, 68, 68, 0.05) 50%, 
            transparent 100%)`,
          border: `1px solid rgba(220, 38, 38, 0.2)`,
          shadow: `0 0 50px rgba(220, 38, 38, 0.1)`,
        };
      default:
        return {};
    }
  };

  const themeStyles = getThemeStyles();

  return (
    <motion.section
      initial={{ opacity: 0, y: 200, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 2, 
        delay: index * 0.5, 
        ease: [0.25, 0.1, 0.25, 1],
        type: "spring",
        stiffness: 50
      }}
      viewport={{ once: true, margin: "-200px" }}
      className="min-h-screen flex items-center justify-center py-32 relative"
      style={{
        background: themeStyles.background,
        boxShadow: themeStyles.shadow,
      }}
    >
      <DynamicBackground hobby={hobby} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Hobby Title */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.5 + 0.3, duration: 1.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-7xl md:text-8xl font-extralight mb-8 tracking-tight"
              style={{
                color: hobby.themeColor,
                textShadow: `0 0 40px ${hobby.themeColor}40`,
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {hobby.name}
            </motion.h2>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <div 
                className="w-4 h-4 rounded-full animate-pulse"
                style={{ 
                  backgroundColor: hobby.themeColor,
                  boxShadow: `0 0 20px ${hobby.themeColor}60`,
                }}
              />
              <span 
                className="text-xl font-medium"
                style={{ color: hobby.themeColor }}
              >
                {hobby.experience}
              </span>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, rotateX: -30 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            transition={{ delay: index * 0.5 + 0.6, duration: 1.8 }}
            viewport={{ once: true }}
            className="bg-neutral-900/40 backdrop-blur-2xl rounded-[3rem] p-12 relative overflow-hidden"
            style={{
              border: themeStyles.border,
              boxShadow: `${themeStyles.shadow}, 0 20px 60px rgba(0, 0, 0, 0.5)`,
            }}
          >
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                background: `radial-gradient(circle at 30% 30%, ${hobby.themeColor}20 0%, transparent 70%)`,
              }}
            />
            
            <div className="relative z-10">
              {/* Description */}
              <p className="text-2xl text-neutral-200 leading-relaxed mb-12 font-light text-center max-w-4xl mx-auto">
                {hobby.description}
              </p>

              {/* Favorite Aspect */}
              {hobby.favoriteAspect && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.5 + 1, duration: 1.2 }}
                  viewport={{ once: true }}
                  className="bg-neutral-800/60 backdrop-blur-xl rounded-3xl p-8 mb-12 text-center relative overflow-hidden"
                  style={{
                    border: `1px solid ${hobby.themeColor}30`,
                    boxShadow: `0 0 30px ${hobby.themeColor}20`,
                  }}
                >
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      background: `linear-gradient(45deg, ${hobby.themeColor}10, transparent)`,
                    }}
                  />
                  
                  <div className="flex items-center justify-center gap-3 mb-4 relative z-10">
                    <motion.svg 
                      className="w-6 h-6" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      style={{ color: hobby.themeColor }}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </motion.svg>
                    <span 
                      className="text-lg font-medium"
                      style={{ color: hobby.themeColor }}
                    >
                      What I Love Most
                    </span>
                  </div>
                  <p className="text-neutral-200 font-light text-xl relative z-10">
                    {hobby.favoriteAspect}
                  </p>
                </motion.div>
              )}

              {/* Highlights */}
              {hobby.highlights && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.5 + 1.3, duration: 1.5 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap justify-center gap-6"
                >
                  {hobby.highlights.map((highlight, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.6, rotateZ: -10 }}
                      whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
                      transition={{ 
                        delay: index * 0.5 + 1.5 + idx * 0.2, 
                        duration: 0.8,
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -5,
                        boxShadow: `0 10px 30px ${hobby.themeColor}40`
                      }}
                      className="px-8 py-4 bg-neutral-800/40 backdrop-blur-xl rounded-2xl text-neutral-200 font-medium cursor-pointer relative overflow-hidden"
                      style={{
                        border: `1px solid ${hobby.themeColor}20`,
                        boxShadow: `0 4px 20px ${hobby.themeColor}15`,
                      }}
                    >
                      <div 
                        className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-300"
                        style={{ background: hobby.themeColor }}
                      />
                      <span className="relative z-10">{highlight}</span>
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Section Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: index * 0.5 + 2, duration: 2 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 rounded-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${hobby.themeColor}, transparent)`,
          boxShadow: `0 0 20px ${hobby.themeColor}60`,
        }}
      />
    </motion.section>
  );
};

// Hero Section
const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center max-w-6xl mx-auto"
      >
        <motion.h1
          className="text-8xl md:text-9xl font-extralight mb-16 text-neutral-100 tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.4 }}
          style={{
            textShadow: `0 0 40px rgba(56, 189, 248, 0.25)`,
          }}
        >
          Personal Passions
        </motion.h1>

        <motion.p
          className="text-2xl text-neutral-400 font-light leading-relaxed mb-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1.4 }}
        >
          Each passion tells a unique story, with its own rhythm, color, and energy that shapes who I am.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1.2 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {[
            { name: 'Music Creator', color: '#f97316' },
            { name: 'Street Artist', color: '#10b981' },
            { name: 'Digital Explorer', color: '#dc2626' }
          ].map((tag, index) => (
            <motion.span
              key={tag.name}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 2.1 + index * 0.2, duration: 0.9 }}
              whileHover={{ 
                scale: 1.05, 
                y: -3, 
                rotate: 1,
                boxShadow: `0 10px 30px ${tag.color}30`
              }}
              className="px-6 py-3 bg-neutral-800/30 text-neutral-300 rounded-full border backdrop-blur-xl hover:text-neutral-100 transition-all duration-300 cursor-pointer relative overflow-hidden"
              style={{
                borderColor: `${tag.color}30`,
                boxShadow: `0 4px 20px rgba(0, 0, 0, 0.3)`,
              }}
            >
              <div 
                className="absolute inset-0 opacity-0 hover:opacity-10 transition-opacity duration-300"
                style={{ background: tag.color }}
              />
              <span className="relative z-10">{tag.name}</span>
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
          y: [0, 20, 0],
          scale: [1, 1.1, 1] 
        }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="w-8 h-16 border-2 border-neutral-600 rounded-full flex justify-center relative overflow-hidden backdrop-blur-sm"
        style={{
          boxShadow: `0 0 15px rgba(56, 189, 248, 0.15)`,
        }}
      >
        <motion.div
          animate={{ 
            y: [0, 28, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mt-4"
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
    className="py-40 relative"
  >
    <div className="container mx-auto px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.h3 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font-light text-neutral-100 mb-12 tracking-tight"
          style={{
            textShadow: `0 0 30px rgba(56, 189, 248, 0.2)`,
          }}
        >
          Let&apos;s Share Adventures
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-2xl text-neutral-400 leading-relaxed mb-16 font-light"
        >
          Whether it&apos;s jamming together, skating the streets, or discussing the lore of Elden Ring, I&apos;m always up for connecting over shared passions.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-8 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -4, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-neutral-900 font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 rounded-full text-lg cursor-pointer relative overflow-hidden"
            onClick={() => window.location.href = '/contact'}
            style={{
              boxShadow: `0 8px 25px rgba(56, 189, 248, 0.35)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/25 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Connect & Jam</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -4, rotate: -1 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-4 border-2 border-neutral-600 text-neutral-300 font-semibold hover:bg-neutral-800/20 hover:border-cyan-500/30 hover:text-cyan-200 transition-all duration-300 rounded-full text-lg backdrop-blur-xl cursor-pointer relative overflow-hidden"
            onClick={() => window.location.href = '/projects'}
            style={{
              boxShadow: `0 4px 20px rgba(0, 0, 0, 0.3)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/8 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">View Creations</span>
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
        {/* Individual Themed Sections */}
        {hobbiesData.map((category) =>
          category.hobbies.map((hobby, index) => (
            <ThemedHobbySection key={hobby.id} hobby={hobby} index={index} />
          ))
        )}
        
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