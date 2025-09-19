'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';

// Types
interface Hobby {
  id: number;
  name: string;
  category: string;
  experience: string;
  description: string;
  story: string;
  favorite: string;
  tags: string[];
  personality: string;
  icon: string;
}

interface HobbyCategory {
  name: string;
  description: string;
  vibe: string;
  hobbies: Hobby[];
}

// Back Button Component
const BackButton = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed top-8 left-8 z-40"
    >
      <motion.button
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.history.back()}
        className="flex items-center gap-3 px-6 py-3 bg-slate-800 border border-slate-700 rounded-2xl text-slate-300 hover:text-white hover:border-slate-500 transition-all duration-300 font-medium shadow-lg backdrop-blur-sm"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        {t.returnToBase}
      </motion.button>
    </motion.div>
  );
};

// Planet Navigation Component
const PlanetNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const planets = [
    { name: t.skills, path: '/skills', color: '#8b5cf6' },
    { name: t.hobbies, path: '/hobbies', color: '#64748b', current: true },
    { name: t.tools, path: '/tools', color: '#06b6d4' },
    { name: t.dreams, path: '/dreams', color: '#10b981' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.7 }}
      className="fixed top-8 left-1/2 transform -translate-x-1/2 z-40"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-6 py-3 bg-slate-800 border border-slate-700 rounded-2xl text-slate-300 hover:text-white hover:border-slate-500 transition-all duration-300 font-medium shadow-lg backdrop-blur-sm"
      >
        <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
        {t.solarSystem}
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full mt-3 left-0 bg-slate-800 border border-slate-700 rounded-2xl p-4 min-w-48 shadow-xl backdrop-blur-sm"
          >
            {planets.map((planet, index) => {
              const isCurrent = planet.current;
              return (
                <motion.button
                  key={planet.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => !isCurrent && (window.location.href = planet.path)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer ${
                    isCurrent
                      ? 'bg-slate-700 text-slate-200 cursor-default border border-slate-500'
                      : 'hover:bg-slate-700 text-slate-400 border border-transparent hover:border-slate-500'
                  }`}
                  whileHover={!isCurrent ? { scale: 1.02, x: 2 } : {}}
                  whileTap={!isCurrent ? { scale: 0.98 } : {}}
                >
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: planet.color }} />
                  <span className="text-sm font-medium whitespace-nowrap">{planet.name}</span>
                  {isCurrent && (
                    <div className="flex items-center gap-1 ml-auto">
                      <div className="w-1 h-1 bg-slate-400 rounded-full" />
                      <div className="w-1 h-1 bg-slate-400 rounded-full" />
                      <div className="w-1 h-1 bg-slate-400 rounded-full" />
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
      initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ duration: 2.5, ease: 'easeOut' }}
      className="absolute -top-1/3 -left-1/4 w-[130vh] h-[130vh] rounded-full"
      style={{
        background: `radial-gradient(circle at 70% 70%, 
          rgba(100, 116, 139, 0.08) 0%,
          rgba(71, 85, 105, 0.06) 25%,
          rgba(51, 65, 85, 0.04) 50%,
          rgba(30, 41, 59, 0.02) 75%,
          transparent 100%)`,
      }}
    />
  </div>
);

// Music Player Component
const MusicPlayerCard = ({ hobby, index }: { hobby: Hobby; index: number }) => {
  const [selectedTrack, setSelectedTrack] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showCuriosities, setShowCuriosities] = useState(false);
  const { t } = useLanguage();

  const tracks = [
    { id: 1, name: t.heavyMetalRiffs, artist: t.myCompositions, duration: '3:24', genre: t.metal },
    { id: 2, name: t.acousticFingerpicking, artist: t.soloSessions, duration: '2:48', genre: t.acoustic },
    { id: 3, name: t.originalCompositions, artist: t.creativeFlowArtist, duration: '4:12', genre: t.original },
    { id: 4, name: t.jamSessions, artist: t.withFriends, duration: '5:33', genre: t.collaborative },
  ];

  const curiosities = [
    t.guitarCuriosity1,
    t.guitarCuriosity2,
    t.guitarCuriosity3,
    t.guitarCuriosity4,
    t.guitarCuriosity5,
  ];

  const handleTrackClick = (trackId: number) => {
    if (selectedTrack === trackId) {
      setIsPlaying(!isPlaying);
    } else {
      setSelectedTrack(trackId);
      setIsPlaying(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: index * 0.3 }}
      viewport={{ once: true, margin: '-100px' }}
      className="bg-slate-800 rounded-3xl overflow-hidden shadow-xl border border-slate-700"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-700 to-slate-600 p-8 text-white">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-slate-800 rounded-2xl flex items-center justify-center">
            <span className="text-3xl">🎵</span>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">{t.guitarMusic}</h3>
            <p className="text-slate-200 text-lg mb-2">{t.musicalExpression}</p>
            <div className="flex items-center gap-4 text-slate-300">
              <span>{t.guitarExperience}</span>
              <span>•</span>
              <span>
                {tracks.length} {t.tracks}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="p-8">
        <div className="mb-8">
          <p className="text-slate-300 text-lg leading-relaxed mb-4">{t.guitarDescription}</p>
          <p className="text-slate-400 leading-relaxed">{t.guitarStory}</p>
        </div>

        {/* Track List */}
        <div className="space-y-3 mb-8">
          <h4 className="text-xl font-semibold text-white mb-4">{t.myMusicalJourney}</h4>
          {tracks.map(track => (
            <motion.div
              key={track.id}
              onClick={() => handleTrackClick(track.id)}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className={`p-4 bg-slate-700 rounded-xl cursor-pointer transition-all duration-200 border ${
                selectedTrack === track.id
                  ? 'border-slate-500 bg-slate-600'
                  : 'border-transparent hover:border-slate-600 hover:bg-slate-600'
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    selectedTrack === track.id && isPlaying ? 'bg-slate-500 text-white' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {selectedTrack === track.id && isPlaying ? '⏸' : '▶'}
                </div>
                <div className="flex-1">
                  <h5 className="text-white font-medium">{track.name}</h5>
                  <p className="text-slate-400 text-sm">{track.artist}</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-400 text-sm">{track.duration}</p>
                  <p className="text-slate-500 text-xs">{track.genre}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Status */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-slate-400">{selectedTrack ? t.readyToPlay : t.selectTrack}</div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>{t.energeticExpressive}</span>
          </div>
        </div>

        {/* Curiosities Section */}
        <motion.div
          initial={false}
          animate={{ height: showCuriosities ? 'auto' : 'auto' }}
          className="border-t border-slate-700 pt-6"
        >
          <motion.button
            onClick={() => setShowCuriosities(!showCuriosities)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-between w-full p-4 bg-slate-700 rounded-xl hover:bg-slate-600 transition-all duration-200"
          >
            <span className="text-white font-medium">{t.musicalCuriosities}</span>
            <motion.svg
              animate={{ rotate: showCuriosities ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-5 h-5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </motion.button>

          <AnimatePresence>
            {showCuriosities && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 space-y-3 overflow-hidden"
              >
                {curiosities.map((curiosity, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 bg-slate-800 rounded-lg"
                  >
                    <p className="text-slate-300 text-sm leading-relaxed">{curiosity}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Art Portfolio Component
const ArtPortfolioCard = ({ hobby, index }: { hobby: Hobby; index: number }) => {
  const [showCuriosities, setShowCuriosities] = useState(false);
  const { t } = useLanguage();

  const categories = [
    {
      name: t.characterDesign,
      description: t.characterDesignDesc,
      projects: 15,
      techniques: [t.digitalPainting, t.conceptSketching, t.colorTheory],
    },
    {
      name: t.digitalIllustration,
      description: t.digitalIllustrationDesc,
      projects: 23,
      techniques: [t.photoshopMastery, t.layerManagement, t.lightingEffects],
    },
    {
      name: t.conceptArt,
      description: t.conceptArtDesc,
      projects: 8,
      techniques: [t.environmentDesign, t.moodBoarding, t.perspectiveDrawing],
    },
    {
      name: t.storytellingThroughArt,
      description: t.storytellingArtDesc,
      projects: 12,
      techniques: [t.narrativeComposition, t.sequentialArt, t.emotionCapture],
    },
  ];

  const curiosities = [t.artCuriosity1, t.artCuriosity2, t.artCuriosity3, t.artCuriosity4, t.artCuriosity5];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: index * 0.3 }}
      viewport={{ once: true, margin: '-100px' }}
      className="bg-slate-800 rounded-3xl overflow-hidden shadow-xl border border-slate-700"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-700 to-slate-600 p-8 text-white">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-slate-800 rounded-2xl flex items-center justify-center">
            <span className="text-3xl">🎨</span>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">{t.digitalArt}</h3>
            <p className="text-slate-200 text-lg mb-2">{t.visualStorytelling}</p>
            <div className="flex items-center gap-4 text-slate-300">
              <span>{t.lifetimeCompanion}</span>
              <span>•</span>
              <span>
                {categories.reduce((total, cat) => total + cat.projects, 0)} {t.projects}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="mb-8">
          <p className="text-slate-300 text-lg leading-relaxed mb-4">{t.artDescription}</p>
          <p className="text-slate-400 leading-relaxed">{t.artStory}</p>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-white mb-6">{t.creativePortfolio}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category, idx) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="p-6 bg-slate-700 rounded-xl border border-slate-600 hover:border-slate-500 transition-all duration-200"
              >
                <h5 className="text-white font-semibold mb-2">{category.name}</h5>
                <p className="text-slate-300 text-sm mb-4">{category.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-slate-400 text-sm">
                    {category.projects} {t.projects}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                    <span className="text-slate-500 text-xs">{t.imaginativeDreamy}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.techniques.map(technique => (
                    <span key={technique} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-lg">
                      {technique}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-8 p-4 bg-slate-700 rounded-xl">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">58</div>
            <div className="text-slate-400 text-sm">{t.creativity}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">12</div>
            <div className="text-slate-400 text-sm">{t.pieces}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">∞</div>
            <div className="text-slate-400 text-sm">{t.ideas}</div>
          </div>
        </div>

        {/* Curiosities Section */}
        <motion.div
          initial={false}
          animate={{ height: showCuriosities ? 'auto' : 'auto' }}
          className="border-t border-slate-700 pt-6"
        >
          <motion.button
            onClick={() => setShowCuriosities(!showCuriosities)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-between w-full p-4 bg-slate-700 rounded-xl hover:bg-slate-600 transition-all duration-200"
          >
            <span className="text-white font-medium">{t.artStoriesCreativeProcess}</span>
            <motion.svg
              animate={{ rotate: showCuriosities ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-5 h-5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </motion.button>

          <AnimatePresence>
            {showCuriosities && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 space-y-3 overflow-hidden"
              >
                {curiosities.map((curiosity, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 bg-slate-800 rounded-lg"
                  >
                    <p className="text-slate-300 text-sm leading-relaxed">{curiosity}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Skate Spot Card Component
const SkateSpotCard = ({ hobby, index }: { hobby: Hobby; index: number }) => {
  const [showCuriosities, setShowCuriosities] = useState(false);
  const { t } = useLanguage();

  const spots = [
    {
      name: t.downtownPlaza,
      difficulty: t.intermediate,
      status: t.active,
      features: [t.ledges, t.rails, t.stairs],
    },
    {
      name: t.techStreet,
      difficulty: t.advanced,
      status: t.crowded,
      features: [t.manualPads, t.gaps, t.banks],
    },
    {
      name: t.urbanPark,
      difficulty: t.beginner,
      status: t.active,
      features: [t.bowl, t.quarters, t.spine],
    },
    {
      name: t.hiddenGem,
      difficulty: t.expert,
      status: t.secret,
      features: [t.vertWall, t.hip, t.pool],
    },
  ];

  const curiosities = [t.skateCuriosity1, t.skateCuriosity2, t.skateCuriosity3, t.skateCuriosity4, t.skateCuriosity5];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case t.beginner:
        return 'bg-green-600';
      case t.intermediate:
        return 'bg-yellow-600';
      case t.advanced:
        return 'bg-orange-600';
      case t.expert:
        return 'bg-red-600';
      default:
        return 'bg-slate-600';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case t.active:
        return 'bg-green-500';
      case t.crowded:
        return 'bg-yellow-500';
      case t.secret:
        return 'bg-purple-500';
      default:
        return 'bg-slate-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: index * 0.3 }}
      viewport={{ once: true, margin: '-100px' }}
      className="bg-slate-800 rounded-3xl overflow-hidden shadow-xl border border-slate-700"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-700 to-slate-600 p-8 text-white">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-slate-800 rounded-2xl flex items-center justify-center">
            <span className="text-3xl">🛹</span>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">{t.skateboarding}</h3>
            <p className="text-slate-200 text-lg mb-2">{t.streetCulture}</p>
            <div className="flex items-center gap-4 text-slate-300">
              <span>{t.skateExperience}</span>
              <span>•</span>
              <span>
                {spots.length} {t.spots}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="mb-8">
          <p className="text-slate-300 text-lg leading-relaxed mb-4">{t.skateDescription}</p>
          <p className="text-slate-400 leading-relaxed">{t.skateStory}</p>
        </div>

        {/* Spots Map */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-white mb-6">{t.favoriteSpots}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {spots.map((spot, idx) => (
              <motion.div
                key={spot.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="p-6 bg-slate-700 rounded-xl border border-slate-600 hover:border-slate-500 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-white font-semibold">{spot.name}</h5>
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(spot.status)}`}></div>
                    <span className="text-slate-400 text-xs">{spot.status}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`px-3 py-1 ${getDifficultyColor(
                      spot.difficulty
                    )} text-white text-xs rounded-lg font-medium`}
                  >
                    {spot.difficulty}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {spot.features.map(feature => (
                    <span key={feature} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-8 p-4 bg-slate-700 rounded-xl">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">8+</div>
            <div className="text-slate-400 text-sm">{t.years}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">25</div>
            <div className="text-slate-400 text-sm">{t.spots}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">∞</div>
            <div className="text-slate-400 text-sm">{t.streetCred}</div>
          </div>
        </div>

        {/* Curiosities Section */}
        <motion.div
          initial={false}
          animate={{ height: showCuriosities ? 'auto' : 'auto' }}
          className="border-t border-slate-700 pt-6"
        >
          <motion.button
            onClick={() => setShowCuriosities(!showCuriosities)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-between w-full p-4 bg-slate-700 rounded-xl hover:bg-slate-600 transition-all duration-200"
          >
            <span className="text-white font-medium">{t.skateStoriesFacts}</span>
            <motion.svg
              animate={{ rotate: showCuriosities ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-5 h-5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </motion.button>

          <AnimatePresence>
            {showCuriosities && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 space-y-3 overflow-hidden"
              >
                {curiosities.map((curiosity, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 bg-slate-800 rounded-lg"
                  >
                    <p className="text-slate-300 text-sm leading-relaxed">{curiosity}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Gaming Dashboard Component
const GamingDashboard = ({ hobby, index }: { hobby: Hobby; index: number }) => {
  const [showCuriosities, setShowCuriosities] = useState(false);
  const { t } = useLanguage();

  const games = [
    {
      name: 'Elden Ring',
      status: t.mastered,
      progress: 100,
      achievements: [t.eldenLord, t.allBosses, t.platinumTrophy],
    },
    {
      name: 'Dark Souls III',
      status: t.completed,
      progress: 95,
      achievements: [t.soulOfCinder, t.allEndings],
    },
    {
      name: 'Bloodborne',
      status: t.completed,
      progress: 90,
      achievements: [t.goodHunter, t.oldHunters, t.chaliceDungeons],
    },
    {
      name: 'Sekiro',
      status: t.playing,
      progress: 75,
      achievements: [t.dragonsReturn, t.allSkills, t.bossRush],
    },
  ];

  const curiosities = [
    t.gamingCuriosity1,
    t.gamingCuriosity2,
    t.gamingCuriosity3,
    t.gamingCuriosity4,
    t.gamingCuriosity5,
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case t.mastered:
        return 'text-yellow-400 bg-yellow-400/20';
      case t.completed:
        return 'text-green-400 bg-green-400/20';
      case t.playing:
        return 'text-blue-400 bg-blue-400/20';
      default:
        return 'text-slate-400 bg-slate-400/20';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: index * 0.3 }}
      viewport={{ once: true, margin: '-100px' }}
      className="bg-slate-800 rounded-3xl overflow-hidden shadow-xl border border-slate-700"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-700 to-slate-600 p-8 text-white">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-slate-800 rounded-2xl flex items-center justify-center">
            <span className="text-3xl">🎮</span>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">{t.gamingUniverse}</h3>
            <p className="text-slate-200 text-lg mb-2">{t.interactiveEntertainment}</p>
            <div className="flex items-center gap-4 text-slate-300">
              <span>{t.lifetimeExplorer}</span>
              <span>•</span>
              <span>
                {games.length} {t.games}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="mb-8">
          <p className="text-slate-300 text-lg leading-relaxed mb-4">{t.gamingDescription}</p>
          <p className="text-slate-400 leading-relaxed">{t.gamingStory}</p>
        </div>

        {/* Game Library */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-white mb-6">{t.trophyCollection}</h4>
          <div className="space-y-4">
            {games.map((game, idx) => (
              <motion.div
                key={game.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01, x: 5 }}
                className="p-6 bg-slate-700 rounded-xl border border-slate-600 hover:border-slate-500 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-white font-semibold text-lg">{game.name}</h5>
                  <div className={`px-3 py-1 rounded-lg text-sm font-medium ${getStatusColor(game.status)}`}>
                    {game.status}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">{t.skillLevel}</span>
                    <span className="text-slate-300 text-sm">{game.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${game.progress}%` }}
                      transition={{ duration: 1, delay: idx * 0.2 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-slate-500 to-slate-400 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {game.achievements.map(achievement => (
                    <span
                      key={achievement}
                      className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-lg border border-slate-600"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-8 p-4 bg-slate-700 rounded-xl">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">2000+</div>
            <div className="text-slate-400 text-sm">{t.hours}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">15</div>
            <div className="text-slate-400 text-sm">{t.games}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">∞</div>
            <div className="text-slate-400 text-sm">{t.passion}</div>
          </div>
        </div>

        {/* Curiosities Section */}
        <motion.div
          initial={false}
          animate={{ height: showCuriosities ? 'auto' : 'auto' }}
          className="border-t border-slate-700 pt-6"
        >
          <motion.button
            onClick={() => setShowCuriosities(!showCuriosities)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-between w-full p-4 bg-slate-700 rounded-xl hover:bg-slate-600 transition-all duration-200"
          >
            <span className="text-white font-medium">{t.gamingStoriesFacts}</span>
            <motion.svg
              animate={{ rotate: showCuriosities ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-5 h-5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </motion.button>

          <AnimatePresence>
            {showCuriosities && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 space-y-3 overflow-hidden"
              >
                {curiosities.map((curiosity, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 bg-slate-800 rounded-lg"
                  >
                    <p className="text-slate-300 text-sm leading-relaxed">{curiosity}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Category Section Component
const CategorySection = ({ category, index }: { category: HobbyCategory; index: number }) => {
  const renderHobbyCard = (hobby: Hobby, hobbyIndex: number) => {
    switch (hobby.id) {
      case 1: // Music
        return <MusicPlayerCard key={hobby.id} hobby={hobby} index={hobbyIndex} />;
      case 2: // Art
        return <ArtPortfolioCard key={hobby.id} hobby={hobby} index={hobbyIndex} />;
      case 3: // Skateboarding
        return <SkateSpotCard key={hobby.id} hobby={hobby} index={hobbyIndex} />;
      case 4: // Gaming
        return <GamingDashboard key={hobby.id} hobby={hobby} index={hobbyIndex} />;
      default:
        return null;
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, delay: index * 0.2 }}
      viewport={{ once: true, margin: '-50px' }}
      className="py-24 relative"
    >
      <div className="container mx-auto px-6">
        {/* Category Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">{category.name}</h2>
          <p className="text-xl text-slate-400 mb-4 font-light">{category.description}</p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
            <span className="text-slate-500 font-medium">{category.vibe}</span>
            <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
          </div>
        </motion.div>

        {/* Hobby Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {category.hobbies.map((hobby, hobbyIndex) => renderHobbyCard(hobby, hobbyIndex))}
        </div>
      </div>
    </motion.section>
  );
};

// Hero Section
const HeroSection = () => {
  const { t } = useLanguage();

  return (
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
          >
            {t.lifeInMotion}
          </motion.h1>

          <motion.p
            className="text-2xl text-slate-400 font-light leading-relaxed mb-20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1.4 }}
          >
            {t.lifeInMotionSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1.2 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {[
              { name: t.creativeSoul, color: '#64748b' },
              { name: t.streetExplorer, color: '#475569' },
              { name: t.digitalWanderer, color: '#334155' },
            ].map((tag, index) => (
              <motion.div
                key={tag.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.1 + index * 0.2, duration: 0.9 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center gap-3 px-6 py-3 bg-slate-800 rounded-2xl text-slate-300 hover:text-white transition-all duration-300 cursor-pointer border border-slate-600 hover:border-slate-400"
              >
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: tag.color }} />
                <span className="font-medium">{tag.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Call to Action Section
const CTASection = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8 }}
      viewport={{ once: true, margin: '-120px' }}
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
            {t.shareTheExperience}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-2xl text-slate-400 leading-relaxed mb-16 font-light"
          >
            {t.shareTheExperienceSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-8 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-5 bg-gradient-to-r from-slate-600 to-slate-700 text-white font-bold hover:from-slate-500 hover:to-slate-600 transition-all duration-300 rounded-2xl text-lg cursor-pointer shadow-lg"
              onClick={() => (window.location.href = '/contact')}
            >
              {t.letsConnect}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-5 border-2 border-slate-600 text-slate-300 font-bold hover:bg-slate-700 hover:border-slate-400 hover:text-slate-200 transition-all duration-300 rounded-2xl text-lg cursor-pointer"
              onClick={() => (window.location.href = '/projects')}
            >
              {t.seeMyCreations}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

// Main Component
export default function HobbiesPage() {
  const { t } = useLanguage();

  // Create dynamic hobby data using translations
  const hobbiesData: HobbyCategory[] = [
    {
      name: t.creativeFlow,
      description: t.creativeFlowDesc,
      vibe: t.creativeFlowVibe,
      hobbies: [
        {
          id: 1,
          name: t.guitarMusic,
          category: t.musicalExpression,
          experience: t.guitarExperience,
          description: t.guitarDescription,
          story: t.guitarStory,
          favorite: t.guitarFavorite,
          tags: [t.heavyMetalRiffs, t.acousticFingerpicking, t.originalCompositions, t.jamSessions],
          personality: t.energeticExpressive,
          icon: '🎵',
        },
        {
          id: 2,
          name: t.digitalArt,
          category: t.visualStorytelling,
          experience: t.lifetimeCompanion,
          description: t.artDescription,
          story: t.artStory,
          favorite: t.artFavorite,
          tags: [t.characterDesign, t.digitalIllustration, t.conceptArt, t.storytellingThroughArt],
          personality: t.imaginativeDreamy,
          icon: '🎨',
        },
      ],
    },
    {
      name: t.urbanAdventures,
      description: t.urbanAdventuresDesc,
      vibe: t.urbanAdventuresVibe,
      hobbies: [
        {
          id: 3,
          name: t.skateboarding,
          category: t.streetCulture,
          experience: t.skateExperience,
          description: t.skateDescription,
          story: t.skateStory,
          favorite: t.skateFavorite,
          tags: [t.streetSkating, t.technicalTricks, t.urbanExploration, t.skateCulture],
          personality: t.rebelliousDetermined,
          icon: '🛹',
        },
      ],
    },
    {
      name: t.digitalRealms,
      description: t.digitalRealmsDesc,
      vibe: t.digitalRealmsVibe,
      hobbies: [
        {
          id: 4,
          name: t.gamingUniverse,
          category: t.interactiveEntertainment,
          experience: t.lifetimeExplorer,
          description: t.gamingDescription,
          story: t.gamingStory,
          favorite: t.gamingFavorite,
          tags: [t.eldenRingMastery, t.soulslikeChallenges, t.openWorldExploration, t.strategicGaming],
          personality: t.focusedAdventurous,
          icon: '🎮',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
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
    </div>
  );
}
