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
        mood: 'Energetic & Expressive',
        intensity: 95,
        themeColor: '#1db954',
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
        mood: 'Imaginative & Dreamy',
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
        mood: 'Rebellious & Determined',
        intensity: 92,
        themeColor: '#f97316',
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
        mood: 'Focused & Adventurous',
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
    <div className="flex items-center gap-3 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-full border border-neutral-600 hover:border-cyan-400 transition-all duration-300 shadow-lg">
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
            className="group flex items-center gap-3 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-full border border-neutral-600 hover:border-cyan-400 transition-all duration-300 shadow-lg cursor-pointer"
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
            className="flex flex-col gap-2 p-4 bg-neutral-800 rounded-2xl border border-neutral-600 shadow-2xl"
          >
            <div className="text-xs text-neutral-400 font-medium mb-2 px-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
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
                      ? 'bg-neutral-700 text-cyan-300 cursor-default border border-cyan-500' 
                      : 'hover:bg-neutral-700 text-neutral-400 border border-transparent hover:border-neutral-500'
                  }`}
                  whileHover={!isCurrent ? { scale: 1.02, x: 2 } : {}}
                  whileTap={!isCurrent ? { scale: 0.98 } : {}}
                >
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: planet.color }}
                  />
                  <span className="text-sm font-medium whitespace-nowrap">
                    {planet.name}
                  </span>
                  {isCurrent && (
                    <div className="flex items-center gap-1 ml-auto">
                      <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                      <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                      <div className="w-1 h-1 bg-cyan-400 rounded-full" />
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
      transition={{ duration: 2.5, ease: "easeOut" }}
      className="absolute -top-1/3 -left-1/4 w-[130vh] h-[130vh] rounded-full"
      style={{
        background: `radial-gradient(circle at 70% 70%, 
          rgba(56, 189, 248, 0.08) 0%,
          rgba(14, 165, 233, 0.06) 25%,
          rgba(2, 132, 199, 0.04) 50%,
          rgba(3, 105, 161, 0.02) 75%,
          transparent 100%)`,
      }}
    />
  </div>
);

// Spotify-like Music Player Component
const MusicPlayerCard = ({ hobby, index }: { hobby: Hobby; index: number }) => {
  const [selectedTrack, setSelectedTrack] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const tracks = [
    { id: 1, name: 'Heavy Metal Riffs', artist: 'My Compositions', duration: '3:24', genre: 'Metal' },
    { id: 2, name: 'Acoustic Fingerpicking', artist: 'Solo Sessions', duration: '2:48', genre: 'Acoustic' },
    { id: 3, name: 'Original Compositions', artist: 'Creative Flow', duration: '4:12', genre: 'Original' },
    { id: 4, name: 'Jam Sessions', artist: 'With Friends', duration: '5:33', genre: 'Collaborative' }
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
      viewport={{ once: true, margin: "-100px" }}
      className="bg-neutral-800 rounded-3xl overflow-hidden shadow-xl border border-neutral-700"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 p-8 text-white">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-green-700 rounded-2xl flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full"></div>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">{hobby.name}</h3>
            <p className="text-green-100 text-lg mb-2">{hobby.category}</p>
            <div className="flex items-center gap-4 text-green-200">
              <span>{hobby.experience}</span>
              <span>•</span>
              <span>{tracks.length} tracks</span>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="px-8 py-6 bg-neutral-750">
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-400 transition-colors"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-white"></div>
                <div className="w-1 h-4 bg-white"></div>
              </div>
            ) : (
              <div className="w-0 h-0 border-l-4 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
            )}
          </motion.button>
          <div className="text-neutral-300">
            <p className="font-medium">{selectedTrack ? tracks.find(t => t.id === selectedTrack)?.name : 'Select a track'}</p>
            <p className="text-sm text-neutral-400">{selectedTrack ? tracks.find(t => t.id === selectedTrack)?.artist : 'Ready to play'}</p>
          </div>
        </div>
      </div>

      {/* Track List */}
      <div className="px-8 pb-8">
        <div className="space-y-2">
          {tracks.map((track, idx) => (
            <motion.div
              key={track.id}
              whileHover={{ backgroundColor: 'rgba(75, 85, 99, 0.3)' }}
              className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                selectedTrack === track.id ? 'bg-green-500/20 border-l-4 border-green-500' : 'hover:bg-neutral-700'
              }`}
              onClick={() => handleTrackClick(track.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-neutral-400 w-6 text-center">{idx + 1}</span>
                  <div>
                    <p className={`font-medium ${selectedTrack === track.id ? 'text-green-400' : 'text-white'}`}>
                      {track.name}
                    </p>
                    <p className="text-sm text-neutral-400">{track.artist}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-neutral-700 rounded-full text-xs text-neutral-300">
                    {track.genre}
                  </span>
                  <span className="text-neutral-400 text-sm">{track.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedTrack && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8 p-6 bg-neutral-750 rounded-2xl border border-neutral-600"
            >
              <h4 className="text-lg font-semibold text-white mb-4">About This Style</h4>
              <p className="text-neutral-300 leading-relaxed mb-4">
                {hobby.personalStory}
              </p>
              <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                <p className="text-green-400 font-medium">{hobby.favoriteAspect}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// Urban Skate Spot Explorer Component
const SkateSpotCard = ({ hobby, index }: { hobby: Hobby; index: number }) => {
  const [selectedSpot, setSelectedSpot] = useState<number | null>(null);

  const spots = [
    { id: 1, name: 'Downtown Plaza', difficulty: 'Beginner', features: ['Ledges', 'Rails', 'Stairs'], status: 'Active' },
    { id: 2, name: 'Tech Street', difficulty: 'Advanced', features: ['Manual Pads', 'Gaps', 'Banks'], status: 'Active' },
    { id: 3, name: 'Urban Park', difficulty: 'Intermediate', features: ['Bowl', 'Quarters', 'Spine'], status: 'Crowded' },
    { id: 4, name: 'Hidden Gem', difficulty: 'Expert', features: ['Vert Wall', 'Hip', 'Pool'], status: 'Secret' }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return '#22c55e';
      case 'Intermediate': return '#eab308';
      case 'Advanced': return '#f97316';
      case 'Expert': return '#dc2626';
      default: return '#6b7280';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: index * 0.3 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-neutral-800 rounded-3xl overflow-hidden shadow-xl border border-neutral-700"
    >
      {/* Urban Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 p-8 text-white">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-20 h-20 bg-orange-800 rounded-2xl flex items-center justify-center">
            <div className="w-8 h-1 bg-white rounded-full"></div>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">{hobby.name}</h3>
            <p className="text-orange-100">{hobby.category}</p>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-black/20 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">{hobby.intensity}%</div>
            <div className="text-orange-200 text-sm">Street Cred</div>
          </div>
          <div className="bg-black/20 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">{spots.length}</div>
            <div className="text-orange-200 text-sm">Spots</div>
          </div>
          <div className="bg-black/20 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">8+</div>
            <div className="text-orange-200 text-sm">Years</div>
          </div>
        </div>
      </div>

      {/* Spot Explorer */}
      <div className="p-8">
        <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          Favorite Spots
        </h4>

        <div className="space-y-4">
          {spots.map((spot) => (
            <motion.div
              key={spot.id}
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-xl cursor-pointer transition-all duration-200 border-2 ${
                selectedSpot === spot.id 
                  ? 'bg-orange-500/10 border-orange-500' 
                  : 'bg-neutral-750 border-neutral-600 hover:border-orange-500/50'
              }`}
              onClick={() => setSelectedSpot(selectedSpot === spot.id ? null : spot.id)}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h5 className="text-lg font-semibold text-white mb-2">{spot.name}</h5>
                  <div className="flex items-center gap-3">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: getDifficultyColor(spot.difficulty) }}
                    >
                      {spot.difficulty}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      spot.status === 'Active' ? 'bg-green-600 text-white' :
                      spot.status === 'Crowded' ? 'bg-yellow-600 text-white' :
                      'bg-purple-600 text-white'
                    }`}>
                      {spot.status}
                    </span>
                  </div>
                </div>
                <motion.div
                  className="w-6 h-6 text-orange-400"
                  animate={{ rotate: selectedSpot === spot.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {spot.features.map((feature, idx) => (
                  <span key={idx} className="px-3 py-1 bg-neutral-700 rounded-full text-sm text-neutral-300">
                    {feature}
                  </span>
                ))}
              </div>

              <AnimatePresence>
                {selectedSpot === spot.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 pt-4 border-t border-neutral-600"
                  >
                    <p className="text-neutral-300 mb-4">{hobby.personalStory}</p>
                    <div className="p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                      <p className="text-orange-300 font-medium">{hobby.favoriteAspect}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Gaming Achievement Dashboard Component
const GamingDashboard = ({ hobby, index }: { hobby: Hobby; index: number }) => {
  const [selectedGame, setSelectedGame] = useState<number | null>(null);

  const games = [
    { 
      id: 1, 
      name: 'Elden Ring', 
      progress: 95, 
      status: 'Mastered',
      achievements: ['Elden Lord', 'All Bosses', 'Platinum Trophy'],
      playtime: '200+ hours'
    },
    { 
      id: 2, 
      name: 'Dark Souls III', 
      progress: 88, 
      status: 'Completed',
      achievements: ['Soul of Cinder', 'All Endings', 'NG+7'],
      playtime: '150+ hours'
    },
    { 
      id: 3, 
      name: 'Bloodborne', 
      progress: 92, 
      status: 'Mastered',
      achievements: ['Good Hunter', 'Old Hunters', 'Chalice Dungeons'],
      playtime: '180+ hours'
    },
    { 
      id: 4, 
      name: 'Sekiro', 
      progress: 85, 
      status: 'Completed',
      achievements: ['Dragon\'s Return', 'All Skills', 'Boss Rush'],
      playtime: '120+ hours'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Mastered': return '#dc2626';
      case 'Completed': return '#eab308';
      case 'Playing': return '#22c55e';
      default: return '#6b7280';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: index * 0.3 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-neutral-800 rounded-3xl overflow-hidden shadow-xl border border-neutral-700"
    >
      {/* Gaming Header */}
      <div className="bg-gradient-to-r from-red-600 to-purple-600 p-8 text-white">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-20 h-20 bg-red-800 rounded-2xl flex items-center justify-center">
            <div className="grid grid-cols-2 gap-1">
              <div className="w-2 h-2 bg-white rounded-sm"></div>
              <div className="w-2 h-2 bg-white rounded-sm"></div>
              <div className="w-2 h-2 bg-white rounded-sm"></div>
              <div className="w-2 h-2 bg-white rounded-sm"></div>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">{hobby.name}</h3>
            <p className="text-red-100">{hobby.category}</p>
          </div>
        </div>

        {/* Gaming Stats */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-black/20 rounded-lg p-3 text-center">
            <div className="text-xl font-bold">{hobby.intensity}%</div>
            <div className="text-red-200 text-xs">Skill Level</div>
          </div>
          <div className="bg-black/20 rounded-lg p-3 text-center">
            <div className="text-xl font-bold">{games.length}</div>
            <div className="text-red-200 text-xs">Games</div>
          </div>
          <div className="bg-black/20 rounded-lg p-3 text-center">
            <div className="text-xl font-bold">600+</div>
            <div className="text-red-200 text-xs">Hours</div>
          </div>
          <div className="bg-black/20 rounded-lg p-3 text-center">
            <div className="text-xl font-bold">∞</div>
            <div className="text-red-200 text-xs">Passion</div>
          </div>
        </div>
      </div>

      {/* Game Library */}
      <div className="p-8">
        <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          Trophy Collection
        </h4>

        <div className="space-y-4">
          {games.map((game) => (
            <motion.div
              key={game.id}
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-xl cursor-pointer transition-all duration-200 border-2 ${
                selectedGame === game.id 
                  ? 'bg-red-500/10 border-red-500' 
                  : 'bg-neutral-750 border-neutral-600 hover:border-red-500/50'
              }`}
              onClick={() => setSelectedGame(selectedGame === game.id ? null : game.id)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-700 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-white">{game.name}</h5>
                    <div className="flex items-center gap-3 mt-1">
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: getStatusColor(game.status) }}
                      >
                        {game.status}
                      </span>
                      <span className="text-neutral-400 text-sm">{game.playtime}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{game.progress}%</div>
                  <div className="w-20 h-2 bg-neutral-700 rounded-full mt-1">
                    <motion.div
                      className="h-full bg-gradient-to-r from-red-500 to-purple-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${game.progress}%` }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {game.achievements.map((achievement, idx) => (
                  <span key={idx} className="px-3 py-1 bg-yellow-600 text-white rounded-full text-sm font-medium">
                    {achievement}
                  </span>
                ))}
              </div>

              <AnimatePresence>
                {selectedGame === game.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 pt-4 border-t border-neutral-600"
                  >
                    <p className="text-neutral-300 mb-4">{hobby.personalStory}</p>
                    <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                      <p className="text-red-300 font-medium">{hobby.favoriteAspect}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Art Gallery Component
const ArtGalleryCard = ({ hobby, index }: { hobby: Hobby; index: number }) => {
  const [selectedPiece, setSelectedPiece] = useState<number | null>(null);

  const artPieces = [
    { id: 1, title: 'Character Design', medium: 'Digital', year: '2024', style: 'Anime/Manga' },
    { id: 2, title: 'Concept Art', medium: 'Digital Paint', year: '2024', style: 'Fantasy' },
    { id: 3, title: 'Digital Illustration', medium: 'Photoshop', year: '2023', style: 'Realism' },
    { id: 4, title: 'Storytelling Art', medium: 'Mixed Media', year: '2023', style: 'Narrative' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: index * 0.3 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-neutral-800 rounded-3xl overflow-hidden shadow-xl border border-neutral-700"
    >
      {/* Gallery Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-20 h-20 bg-purple-800 rounded-2xl flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-white rounded"></div>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">{hobby.name}</h3>
            <p className="text-purple-100">{hobby.category}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-black/20 rounded-lg p-3 text-center">
            <div className="text-xl font-bold">{hobby.intensity}%</div>
            <div className="text-purple-200 text-xs">Creativity</div>
          </div>
          <div className="bg-black/20 rounded-lg p-3 text-center">
            <div className="text-xl font-bold">{artPieces.length}</div>
            <div className="text-purple-200 text-xs">Pieces</div>
          </div>
          <div className="bg-black/20 rounded-lg p-3 text-center">
            <div className="text-xl font-bold">∞</div>
            <div className="text-purple-200 text-xs">Ideas</div>
          </div>
        </div>
      </div>

      {/* Art Portfolio */}
      <div className="p-8">
        <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          Portfolio Gallery
        </h4>

        <div className="grid grid-cols-2 gap-6">
          {artPieces.map((piece) => (
            <motion.div
              key={piece.id}
              whileHover={{ scale: 1.05 }}
              className={`aspect-square rounded-xl cursor-pointer transition-all duration-200 border-2 ${
                selectedPiece === piece.id 
                  ? 'border-purple-500' 
                  : 'border-neutral-600 hover:border-purple-500/50'
              }`}
              style={{
                background: `linear-gradient(135deg, 
                  ${hobby.themeColor}20 0%, 
                  ${hobby.themeColor}10 50%, 
                  transparent 100%)`
              }}
              onClick={() => setSelectedPiece(selectedPiece === piece.id ? null : piece.id)}
            >
              <div className="w-full h-full p-6 flex flex-col justify-end bg-gradient-to-t from-neutral-800 to-transparent rounded-xl">
                <h5 className="text-white font-semibold mb-2">{piece.title}</h5>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-purple-300">{piece.medium}</span>
                  <span className="text-neutral-400">{piece.year}</span>
                </div>
                <span className="text-xs text-purple-200 mt-1">{piece.style}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedPiece && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-8 p-6 bg-purple-500/10 rounded-2xl border border-purple-500/20"
            >
              <h5 className="text-lg font-semibold text-white mb-4">Artist's Vision</h5>
              <p className="text-neutral-300 mb-4">{hobby.personalStory}</p>
              <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <p className="text-purple-300 font-medium">{hobby.favoriteAspect}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// Story Card Component
const StoryCard = ({ hobby, index }: { hobby: Hobby; index: number }) => {
  switch (hobby.bgPattern) {
    case 'musical':
      return <MusicPlayerCard hobby={hobby} index={index} />;
    case 'urban':
      return <SkateSpotCard hobby={hobby} index={index} />;
    case 'digital':
      return <GamingDashboard hobby={hobby} index={index} />;
    case 'artistic':
      return <ArtGalleryCard hobby={hobby} index={index} />;
    default:
      return <MusicPlayerCard hobby={hobby} index={index} />;
  }
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
    <div className="container mx-auto px-6 mb-20">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: index * 0.4 + 0.3 }}
          viewport={{ once: true }}
          className={`inline-block px-8 py-4 bg-gradient-to-r ${category.color} text-white text-lg font-bold mb-6 rounded-2xl shadow-lg`}
        >
          {category.name}
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
          className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 rounded-full text-sm text-neutral-400 border border-neutral-600"
        >
          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
          {category.vibe}
        </motion.div>
      </div>
    </div>

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
            { name: 'Creative Soul', color: '#8b5cf6' },
            { name: 'Street Explorer', color: '#10b981' },
            { name: 'Digital Wanderer', color: '#dc2626' }
          ].map((tag, index) => (
            <motion.div
              key={tag.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.1 + index * 0.2, duration: 0.9 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center gap-3 px-6 py-3 bg-neutral-800 rounded-2xl text-neutral-300 hover:text-white transition-all duration-300 cursor-pointer border border-neutral-600 hover:border-cyan-400"
            >
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: tag.color }}
              />
              <span className="font-medium">{tag.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
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
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 rounded-2xl text-lg cursor-pointer shadow-lg"
            onClick={() => window.location.href = '/contact'}
          >
            Let's Connect
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-5 border-2 border-neutral-600 text-neutral-300 font-bold hover:bg-neutral-700 hover:border-cyan-400 hover:text-cyan-200 transition-all duration-300 rounded-2xl text-lg cursor-pointer"
            onClick={() => window.location.href = '/projects'}
          >
            See My Creations
          </motion.button>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

// Main Component
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
    </div>
  );
}