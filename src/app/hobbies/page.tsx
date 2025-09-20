'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import type { Translations } from '@/lib/translations';

// Types
interface Hobby {
  id: number;
  name: string;
  category: string;
  proficiency: number;
  experience: string;
  description: string;
  features: string[];
  achievements: string[];
  curiosities: string[];
}

interface HobbyCategory {
  name: string;
  hobbies: Hobby[];
  color: string;
  description: string;
  subtitle: string;
}

// Back Button Component
const BackButton = () => {
  const { t } = useLanguage();

  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      onClick={() => (window.location.href = '/')}
      className="fixed top-8 left-8 z-50 group cursor-pointer"
    >
      <div className="flex items-center gap-3 px-4 py-2 bg-neutral-800/60 hover:bg-neutral-700/70 backdrop-blur-xl rounded-full border border-neutral-700/40 hover:border-sky-400/30 transition-all duration-300 shadow-xl">
        <motion.svg
          className="w-5 h-5 text-neutral-300 group-hover:text-sky-300 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          whileHover={{ x: -3 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </motion.svg>
        <span className="text-sm text-neutral-300 group-hover:text-sky-300 transition-colors font-medium">
          {t.backToHome}
        </span>
      </div>
    </motion.button>
  );
};

// Planet Navigation Component
const PlanetNavigation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useLanguage();

  const planetsWithTranslations = [
    { name: t.skills, path: '/skills', color: '#fbbf24' },
    { name: t.hobbies, path: '/hobbies', color: '#38bdf8', current: true },
    { name: t.tools, path: '/tools', color: '#ec4899' },
    { name: t.dreams, path: '/dreams', color: '#22d3ee' },
  ];

  const handlePlanetClick = (planet: typeof planetsWithTranslations[0]) => {
    if (planet.current) return;
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
            className="group flex items-center gap-3 px-4 py-2 bg-neutral-800/60 hover:bg-neutral-700/70 backdrop-blur-xl rounded-full border border-neutral-700/40 hover:border-sky-400/30 transition-all duration-300 shadow-xl cursor-pointer"
          >
            <span className="text-sm text-neutral-300 group-hover:text-sky-300 transition-colors font-medium">
              {t.nextOrbit}
            </span>
            <motion.svg
              className="w-5 h-5 text-neutral-300 group-hover:text-sky-300 transition-colors"
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
            className="flex flex-col gap-2 p-4 bg-neutral-800/70 backdrop-blur-xl rounded-2xl border border-neutral-700/40 shadow-2xl"
          >
            <div className="text-xs text-neutral-400 font-medium mb-2 px-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
              {t.solarSystem}
            </div>
            {planetsWithTranslations.map((planet, index) => {
              const isCurrent = planet.current;

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
                      ? 'bg-neutral-700/70 text-sky-300 cursor-default border border-sky-400/30'
                      : 'hover:bg-neutral-700/40 text-neutral-400 border border-transparent hover:border-neutral-600/20'
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
                  />
                  <span className="text-sm font-medium whitespace-nowrap">{planet.name}</span>
                  {isCurrent && (
                    <div className="flex items-center gap-1 ml-auto">
                      <div className="w-1 h-1 bg-sky-400 rounded-full animate-pulse" />
                      <div className="w-1 h-1 bg-sky-400/60 rounded-full animate-pulse delay-75" />
                      <div className="w-1 h-1 bg-sky-400/30 rounded-full animate-pulse delay-150" />
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

// Planet Background
const PlanetBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 2, ease: 'easeOut' }}
      className="absolute -bottom-1/2 left-1/2 transform -translate-x-1/2 w-[120vh] h-[120vh] rounded-full"
      style={{
        background: `radial-gradient(circle at 50% 20%, 
          rgba(56, 189, 248, 0.08) 0%,
          rgba(56, 189, 248, 0.04) 30%,
          rgba(56, 189, 248, 0.02) 60%,
          transparent 100%)`,
        filter: 'blur(1px)',
      }}
    />
  </div>
);

// Hobby Card Component
const HobbyCard = ({ hobby, index }: { hobby: Hobby; index: number }) => {
  const [showDetails, setShowDetails] = useState(false);

  const getHobbyIcon = (id: number) => {
    switch (id) {
      case 1: return '🎵';
      case 2: return '🎨';
      case 3: return '🛹';
      case 4: return '🎮';
      default: return '⭐';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      viewport={{ once: true, margin: '-50px' }}
      className="group bg-neutral-800 border border-neutral-700 hover:border-sky-400/50 transition-all duration-300 rounded-xl"
    >
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 bg-neutral-700 rounded-lg flex items-center justify-center text-xl">
              {getHobbyIcon(hobby.id)}
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-white group-hover:text-sky-200 transition-colors mb-1">
                {hobby.name}
              </h4>
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2 py-1 bg-sky-600/80 text-white font-medium rounded-full">{hobby.category}</span>
                <span className="text-neutral-400 font-medium">{hobby.experience}</span>
              </div>
            </div>
          </div>
          <div className="text-right ml-3">
            <div className="text-lg font-bold text-sky-400 mb-1">{hobby.proficiency}%</div>
            <div className="w-10 bg-neutral-700 h-1 rounded-full overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-sky-400 to-sky-500 h-1 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${hobby.proficiency}%` }}
                transition={{ duration: 1.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-neutral-300 text-sm leading-relaxed mb-3">{hobby.description}</p>

        {/* Main Features */}
        <div className="mb-3">
          <div className="flex flex-wrap gap-1 mb-2">
            {hobby.features.slice(0, 4).map((feature, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs bg-neutral-700 text-neutral-300 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
          
          {/* Achievements Preview */}
          <div className="flex flex-wrap gap-1">
            {hobby.achievements.slice(0, 2).map((achievement, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs bg-sky-600/20 text-sky-300 border border-sky-500/30 rounded-full"
              >
                {achievement}
              </span>
            ))}
            {hobby.achievements.length > 2 && (
              <span className="px-2 py-1 text-xs bg-sky-600/10 text-sky-400 rounded-full">
                +{hobby.achievements.length - 2} achievements
              </span>
            )}
          </div>
        </div>

        {/* Fun Fact Preview */}
        <div className="mb-3 p-2 bg-neutral-800/50 rounded-lg border-l-2 border-sky-400/30">
          <p className="text-xs text-neutral-400 italic">
            💡 {hobby.curiosities[0]}
          </p>
        </div>

        {/* Toggle Details */}
        <motion.button
          onClick={() => setShowDetails(!showDetails)}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="flex items-center justify-center w-full p-2 bg-neutral-700/40 rounded-lg hover:bg-neutral-600/40 transition-all duration-200 text-xs text-neutral-300"
        >
          <span>{showDetails ? 'Show Less Details' : 'Explore More'}</span>
          <motion.svg
            animate={{ rotate: showDetails ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-3 h-3 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </motion.button>

        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3 space-y-3 overflow-hidden"
            >
              {/* Complete Features */}
              <div>
                <h5 className="text-xs font-semibold text-white mb-2 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
                  All Features & Skills
                </h5>
                <div className="flex flex-wrap gap-1">
                  {hobby.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-neutral-700 text-neutral-300 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Complete Achievements */}
              <div>
                <h5 className="text-xs font-semibold text-white mb-2 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-sky-500 rounded-full" />
                  Achievements & Milestones
                </h5>
                <div className="flex flex-wrap gap-1">
                  {hobby.achievements.map((achievement, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-sky-600/20 text-sky-300 border border-sky-500/30 rounded-full"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>

              {/* All Fun Facts */}
              <div>
                <h5 className="text-xs font-semibold text-white mb-2 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-sky-600 rounded-full" />
                  Fun Facts & Stories
                </h5>
                <div className="space-y-2">
                  {hobby.curiosities.map((curiosity, idx) => (
                    <div key={idx} className="p-2 bg-neutral-800 rounded-lg border-l-2 border-sky-400/20">
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        <span className="text-sky-400 font-medium">#{idx + 1}</span> {curiosity}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// Hobby Category Section
const HobbyCategorySection = ({ category, index }: { category: HobbyCategory; index: number }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    viewport={{ once: true, margin: '-100px' }}
    className="mb-10"
  >
    <div className="text-center mb-6">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
        viewport={{ once: true }}
        className={`inline-block px-6 py-3 bg-gradient-to-r ${category.color} text-white font-semibold mb-3 rounded-xl shadow-lg`}
      >
        {category.name}
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-neutral-400 max-w-2xl mx-auto mb-2 text-base"
      >
        {category.description}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-neutral-500 max-w-xl mx-auto text-sm italic"
      >
        {category.subtitle}
      </motion.p>
    </div>

    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {category.hobbies.map((hobby, hobbyIndex) => (
        <HobbyCard key={hobby.id} hobby={hobby} index={hobbyIndex} />
      ))}
    </div>
  </motion.section>
);

// Hero Section
const HeroSection = ({ t }: { t: Translations }) => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center max-w-6xl mx-auto"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extralight mb-6 text-neutral-100 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          style={{
            textShadow: `0 0 30px rgba(56, 189, 248, 0.15)`,
          }}
        >
          {t.lifeInMotion}
        </motion.h1>

        <motion.p
          className="text-lg text-neutral-400 font-light leading-relaxed mb-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {t.lifeInMotionSubtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {[t.creativeSoul, t.streetExplorer, t.digitalWanderer].map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2 bg-neutral-800/50 text-neutral-300 rounded-full border border-neutral-700/50 font-light backdrop-blur-xl hover:bg-neutral-700/50 hover:border-sky-400/30 hover:text-sky-200 transition-all duration-300 cursor-pointer text-sm"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Additional intro text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-neutral-500 text-sm leading-relaxed">
            Explore my creative universe where music meets art, streets become playgrounds, 
            and digital worlds offer endless adventures. Each hobby tells a story of passion, 
            dedication, and the pursuit of creative expression.
          </p>
        </motion.div>
      </motion.div>
    </div>

    {/* Compact Scroll Indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        className="w-5 h-8 border border-neutral-600 rounded-full flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          className="w-0.5 h-2 bg-gradient-to-b from-sky-400 to-sky-500 rounded-full mt-1.5"
        />
      </motion.div>
    </motion.div>
  </section>
);

// Main Hobbies Page Component
export default function HobbiesPage() {
  const { t } = useLanguage();

  // Hobbies Data with translations
  const hobbiesData: HobbyCategory[] = [
    {
      name: t.creativeFlow,
      description: t.creativeFlowDesc,
      subtitle: "Where artistic expression meets technical skill, creating harmony between different forms of creative output.",
      color: 'from-sky-500 to-sky-600',
      hobbies: [
        {
          id: 1,
          name: t.guitarMusic,
          category: t.musicalExpression,
          proficiency: 85,
          experience: t.guitarExperience,
          description: t.guitarDescription,
          features: [t.heavyMetalRiffs, t.acousticFingerpicking, t.originalCompositions, t.jamSessions, "Rhythm Guitar", "Lead Guitar"],
          achievements: [t.myCompositions, t.soloSessions, t.creativeFlowArtist, "Live Performances", "Recording Experience"],
          curiosities: [t.guitarCuriosity1, t.guitarCuriosity2, t.guitarCuriosity3],
        },
        {
          id: 2,
          name: t.digitalArt,
          category: t.visualStorytelling,
          proficiency: 80,
          experience: t.lifetimeCompanion,
          description: t.artDescription,
          features: [t.characterDesign, t.digitalIllustration, t.conceptArt, t.storytellingThroughArt, "Color Theory", "Composition"],
          achievements: [t.digitalPainting, t.conceptSketching, t.colorTheory, "Portfolio Building", "Style Development"],
          curiosities: [t.artCuriosity1, t.artCuriosity2, t.artCuriosity3],
        },
      ],
    },
    {
      name: t.urbanAdventures,
      description: t.urbanAdventuresDesc,
      subtitle: "Transforming city landscapes into personal playgrounds, where every street tells a story and every obstacle becomes an opportunity.",
      color: 'from-sky-600 to-sky-700',
      hobbies: [
        {
          id: 3,
          name: t.skateboarding,
          category: t.streetCulture,
          proficiency: 90,
          experience: t.skateExperience,
          description: t.skateDescription,
          features: [t.streetSkating, t.technicalTricks, t.urbanExploration, t.skateCulture, "Obstacle Navigation", "Flow Riding"],
          achievements: [t.ledges, t.rails, t.stairs, "Consistent Kickflips", "Manual Pads", "Transition Riding"],
          curiosities: [t.skateCuriosity1, t.skateCuriosity2, t.skateCuriosity3],
        },
      ],
    },
    {
      name: t.digitalRealms,
      description: t.digitalRealmsDesc,
      subtitle: "Immersive journeys through carefully crafted worlds where strategy, skill, and storytelling converge in interactive experiences.",
      color: 'from-sky-700 to-sky-800',
      hobbies: [
        {
          id: 4,
          name: t.gamingUniverse,
          category: t.interactiveEntertainment,
          proficiency: 95,
          experience: t.lifetimeExplorer,
          description: t.gamingDescription,
          features: [t.eldenRingMastery, t.soulslikeChallenges, t.openWorldExploration, t.strategicGaming, "Boss Mastery", "Speedrunning"],
          achievements: [t.eldenLord, t.allBosses, t.platinumTrophy, "Multiple Playthroughs", "Challenge Runs", "Community Recognition"],
          curiosities: [t.gamingCuriosity1, t.gamingCuriosity2, t.gamingCuriosity3],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-900 text-white relative overflow-hidden">
      <PlanetBackground />
      <BackButton />
      <PlanetNavigation />

      <HeroSection t={t} />

      <div className="relative z-10">
        <main className="container mx-auto px-6 pb-16">
          {hobbiesData.map((category, index) => (
            <HobbyCategorySection key={category.name} category={category} index={index} />
          ))}
        </main>
      </div>
    </div>
  );
}