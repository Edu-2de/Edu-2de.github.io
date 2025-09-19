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
        highlights: ['Rock & Metal', 'Fingerstyle Acoustic', 'Songwriting']
      },
      {
        id: 2,
        name: 'Drawing & Art',
        category: 'Creative',
        experience: 'Lifetime',
        description: 'A lifelong passion for visual storytelling through sketches, digital art, and character design',
        favoriteAspect: 'Character design and concept art creation',
        highlights: ['Character Design', 'Digital Illustration', 'Concept Art']
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
        highlights: ['Street Skating', 'Technical Tricks', 'Urban Exploration']
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
        highlights: ['Elden Ring', 'Soulslike Games', 'Open World RPGs']
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

// Floating Orbs Background
const FloatingOrbs = () => {
  const [orbs, setOrbs] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const generateOrbs = () => {
      const elements = [];
      const numberOfOrbs = 12;

      for (let i = 0; i < numberOfOrbs; i++) {
        const size = Math.random() * 8 + 4;
        const duration = 15 + Math.random() * 20;
        const delay = Math.random() * 10;
        
        elements.push(
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, rgba(14, 165, 233, 0.1) 50%, transparent 100%)`,
              filter: 'blur(1px)',
            }}
            animate={{
              y: [0, -30, 0, 20, 0],
              x: [0, 20, -10, 0],
              scale: [1, 1.2, 0.8, 1.1, 1],
              opacity: [0.3, 0.8, 0.2, 0.6, 0.3],
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
      setOrbs(elements);
    };

    generateOrbs();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {orbs}
    </div>
  );
};

// Cosmic Dust Effect
const CosmicDust = () => (
  <div className="fixed inset-0 pointer-events-none z-0">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 4, delay: 1 }}
      className="absolute top-2/3 right-1/3 w-80 h-80 rounded-full"
      style={{
        background: `radial-gradient(circle,
          transparent 20%,
          rgba(56, 189, 248, 0.05) 40%,
          rgba(14, 165, 233, 0.03) 70%,
          transparent 90%)`,
        filter: 'blur(3px)',
        animation: 'spin 300s linear infinite',
      }}
    />
  </div>
);

// Hobby Card Component
const HobbyCard = ({ hobby, index }: { hobby: Hobby; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -60, rotateY: -15 }}
    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
    transition={{ delay: index * 0.2, duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
    viewport={{ once: true, margin: "-80px" }}
    className="group bg-neutral-900/30 backdrop-blur-xl rounded-3xl p-8 border border-neutral-700/30 hover:border-cyan-500/20 hover:bg-neutral-900/40 transition-all duration-700 relative overflow-hidden"
    style={{
      boxShadow: `0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(56, 189, 248, 0.05)`,
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/4 via-transparent to-blue-500/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    
    <div className="relative z-10">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-3xl font-light text-neutral-100 group-hover:text-cyan-200 transition-colors duration-300 mb-2">
            {hobby.name}
          </h3>
          <div className="flex items-center gap-2 text-cyan-400">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">{hobby.experience}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-neutral-400 leading-relaxed mb-6 font-light text-lg">
        {hobby.description}
      </p>

      {/* Favorite Aspect */}
      {hobby.favoriteAspect && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-neutral-800/40 rounded-2xl p-4 mb-6 border border-neutral-700/20"
        >
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-cyan-300">Favorite Aspect</span>
          </div>
          <p className="text-neutral-300 font-light">{hobby.favoriteAspect}</p>
        </motion.div>
      )}

      {/* Highlights */}
      {hobby.highlights && (
        <div className="flex flex-wrap gap-3">
          {hobby.highlights.map((highlight, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.7 + idx * 0.1, duration: 0.7 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 text-xs bg-neutral-800/30 text-neutral-300 rounded-full border border-neutral-700/30 hover:bg-neutral-700/40 hover:border-cyan-500/20 transition-all duration-300 backdrop-blur-sm cursor-pointer"
            >
              {highlight}
            </motion.span>
          ))}
        </div>
      )}
    </div>
  </motion.div>
);

// Hobby Category Section
const HobbyCategorySection = ({ category, index }: { category: HobbyCategory; index: number }) => (
  <motion.section
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.4, delay: index * 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    viewport={{ once: true, margin: "-150px" }}
    className="mb-32"
  >
    <div className="text-center mb-20">
      <motion.div
        initial={{ scale: 0.7, opacity: 0, rotate: -5 }}
        whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: index * 0.4 + 0.5 }}
        viewport={{ once: true }}
        className={`inline-block px-8 py-4 rounded-full bg-gradient-to-r ${category.color} text-neutral-900 text-sm font-semibold mb-8 shadow-lg relative overflow-hidden`}
        style={{
          boxShadow: `0 0 35px rgba(56, 189, 248, 0.25)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/15 to-transparent" />
        <span className="relative z-10">{category.name}</span>
      </motion.div>
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.4 + 0.7, duration: 1.2 }}
        viewport={{ once: true }}
        className="text-neutral-400 max-w-2xl mx-auto text-xl font-light leading-relaxed"
      >
        {category.description}
      </motion.p>
    </div>

    <div className="grid gap-12 lg:gap-16">
      {category.hobbies.map((hobby, hobbyIndex) => (
        <HobbyCard key={hobby.id} hobby={hobby} index={hobbyIndex} />
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
          The creative outlets and adventures that shape my identity beyond the digital realm and fuel my inspiration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1.2 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {['Music Creator', 'Street Artist', 'Digital Explorer'].map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 2.1 + index * 0.2, duration: 0.9 }}
              whileHover={{ scale: 1.05, y: -3, rotate: 1 }}
              className="px-6 py-3 bg-neutral-800/30 text-neutral-300 rounded-full border border-neutral-700/40 font-light backdrop-blur-xl hover:bg-neutral-700/30 hover:border-cyan-500/20 hover:text-cyan-200 transition-all duration-300 cursor-pointer relative overflow-hidden"
              style={{
                boxShadow: `0 4px 20px rgba(0, 0, 0, 0.3)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/8 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
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

// Hobbies Overview Stats
const HobbiesStats = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.8 }}
    viewport={{ once: true, margin: "-120px" }}
    className="py-40"
  >
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <h2 className="text-5xl md:text-6xl font-light text-neutral-100 mb-8">
          Passion Journey
        </h2>
        <p className="text-neutral-400 text-xl font-light max-w-3xl mx-auto leading-relaxed">
          The creative and adventurous pursuits that define who I am beyond the screen
        </p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
        {[
          { number: '4+', label: 'Hobbies', description: 'Core Passions', color: '#38bdf8' },
          { number: '15+', label: 'Years', description: 'Combined Experience', color: '#0ea5e9' },
          { number: '∞', label: 'Memories', description: 'Unforgettable Moments', color: '#0284c7' },
          { number: '1', label: 'Favorite', description: 'Elden Ring', color: '#0369a1' }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0, y: 50, rotate: -5 }}
            whileInView={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: index * 0.25, duration: 1.2 }}
            viewport={{ once: true }}
            className="group text-center relative"
          >
            <motion.div 
              className="text-6xl md:text-7xl font-extralight text-neutral-100 mb-6 group-hover:text-cyan-200 transition-colors duration-500 relative"
              whileHover={{ scale: 1.15, y: -8, rotate: 2 }}
              transition={{ duration: 0.4 }}
              style={{
                textShadow: `0 0 25px ${stat.color}40`,
              }}
            >
              {stat.number}
            </motion.div>
            <div className="text-xl font-light text-neutral-300 mb-3">
              {stat.label}
            </div>
            <div className="text-sm text-neutral-500 font-light">
              {stat.description}
            </div>
            <motion.div
              className="w-16 h-0.5 mx-auto mt-4 rounded-full bg-cyan-400"
              style={{ 
                boxShadow: `0 0 10px rgba(56, 189, 248, 0.5)`
              }}
              initial={{ scaleX: 0, rotate: -10 }}
              whileInView={{ scaleX: 1, rotate: 0 }}
              transition={{ delay: index * 0.25 + 0.6, duration: 1 }}
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
    transition={{ duration: 1.8 }}
    viewport={{ once: true, margin: "-120px" }}
    className="py-40"
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
      <FloatingOrbs />
      <PlanetBackground />
      <CosmicDust />
      <BackButton />
      <PlanetNavigation />
      
      <HeroSection />
      
      <div className="relative z-10">
        <HobbiesStats />
        
        <main className="container mx-auto px-6 py-20">
          {hobbiesData.map((category, index) => (
            <HobbyCategorySection key={category.name} category={category} index={index} />
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