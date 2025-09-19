'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Home, GitBranch, Brain, ChevronDown, Star } from 'lucide-react';

const dreamsData = [
  {
    title: 'Space Exploration',
    icon: <Rocket className="w-12 h-12" />,
    color: '#60a5fa',
    description: 'Dream of witnessing the universe beyond Earth',
    goals: [
      'Visit a space center and meet astronauts',
      'Experience zero gravity simulation',
      'Watch a rocket launch live',
      'Contribute to space technology through code',
      'Maybe one day take a suborbital flight',
    ],
    timeline: 'Lifetime Goal',
    inspiration: 'The infinite possibilities beyond our planet',
  },
  {
    title: 'Remote Work Mastery',
    icon: <Home className="w-12 h-12" />,
    color: '#34d399',
    description: 'Perfect the art of remote collaboration and productivity',
    goals: [
      'Build a dream home office setup',
      'Master async communication tools',
      'Work with teams across different time zones',
      'Contribute to remote work culture',
      'Share knowledge about remote productivity',
    ],
    timeline: '2-3 Years',
    inspiration: 'Freedom to work from anywhere while staying productive',
  },
  {
    title: 'Open Source Impact',
    icon: <GitBranch className="w-12 h-12" />,
    color: '#f59e0b',
    description: 'Make meaningful contributions to the developer community',
    goals: [
      'Maintain a popular open source library',
      'Contribute to major frameworks like React',
      'Mentor new developers in open source',
      'Speak at developer conferences',
      'Build tools that solve real problems',
    ],
    timeline: '5 Years',
    inspiration: 'Giving back to the community that taught me everything',
  },
  {
    title: 'AI & Innovation',
    icon: <Brain className="w-12 h-12" />,
    color: '#e879f9',
    description: 'Explore the frontiers of artificial intelligence',
    goals: [
      'Build AI-powered applications',
      'Learn machine learning and neural networks',
      'Experiment with creative AI projects',
      'Understand ethical AI development',
      'Combine AI with web development',
    ],
    timeline: '3-5 Years',
    inspiration: 'The potential to create intelligent, helpful systems',
  },
];

const floatingElements = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 10 + Math.random() * 10,
}));

export default function DreamsPage() {
  const [currentDream, setCurrentDream] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    if (!isAutoScrolling) return;

    const timer = setInterval(() => {
      setCurrentDream(prev => {
        if (prev >= dreamsData.length - 1) {
          setIsAutoScrolling(false);
          return prev;
        }
        return prev + 1;
      });
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoScrolling]);

  const handleDreamClick = (index: number) => {
    setIsAutoScrolling(false);
    setCurrentDream(index);
  };

  return (
    <div className="min-h-screen bg-[#0c0a1e] text-white overflow-hidden relative">
      <div className="fixed inset-0 bg-gradient-to-br from-[#0c0a1e] via-[#1a1537] to-[#2d1b69] opacity-80" />

      {floatingElements.map(element => (
        <motion.div
          key={element.id}
          className="absolute w-1 h-1 bg-white rounded-full opacity-30"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 min-h-screen flex flex-col"
      >
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center py-20 px-8"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <motion.div
              className="inline-block mb-6"
              animate={{
                textShadow: [
                  '0 0 20px #60a5fa',
                  '0 0 40px #e879f9',
                  '0 0 20px #34d399',
                  '0 0 40px #f59e0b',
                  '0 0 20px #60a5fa',
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-[#60a5fa] via-[#e879f9] to-[#34d399] bg-clip-text text-transparent">
                DREAMS
              </h1>
            </motion.div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Aspirations that drive me forward - from space exploration to AI innovation
            </p>
          </motion.div>

          {isAutoScrolling && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="mt-12 flex flex-col items-center"
            >
              <span className="text-gray-400 mb-4">Auto-exploring dreams</span>
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <ChevronDown className="w-8 h-8 text-[#60a5fa]" />
              </motion.div>
            </motion.div>
          )}
        </motion.header>

        <div className="flex-1 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {dreamsData.map((dream, index) => (
                <motion.button
                  key={dream.title}
                  onClick={() => handleDreamClick(index)}
                  className={`p-6 rounded-3xl border-2 transition-all duration-300 text-center relative overflow-hidden ${
                    currentDream === index
                      ? 'border-white bg-white/15 scale-105'
                      : 'border-gray-600 bg-gray-800/40 hover:border-gray-400'
                  }`}
                  whileHover={{ scale: 1.02, y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <motion.div
                    className="flex justify-center mb-4 relative z-10"
                    style={{ color: dream.color }}
                    animate={{
                      scale: currentDream === index ? [1, 1.2, 1] : 1,
                      rotate: currentDream === index ? [0, 10, -10, 0] : 0,
                    }}
                    transition={{ duration: 3, repeat: currentDream === index ? Infinity : 0 }}
                  >
                    {dream.icon}
                  </motion.div>
                  <h3 className="font-bold text-lg text-white mb-3 relative z-10">{dream.title}</h3>
                  <div className="text-sm text-gray-400 mb-4 relative z-10">{dream.timeline}</div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden relative z-10">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: dream.color }}
                      initial={{ width: '0%' }}
                      animate={{
                        width: currentDream === index ? '100%' : '0%',
                      }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                  </div>
                  {currentDream === index && (
                    <>
                      <motion.div
                        className="absolute inset-0 opacity-10 rounded-3xl"
                        style={{ backgroundColor: dream.color }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                      {Array.from({ length: 8 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute"
                          style={{
                            top: '50%',
                            left: '50%',
                            width: '4px',
                            height: '4px',
                            backgroundColor: dream.color,
                            borderRadius: '50%',
                          }}
                          animate={{
                            x: Math.cos((i * 45 * Math.PI) / 180) * 60,
                            y: Math.sin((i * 45 * Math.PI) / 180) * 60,
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.1,
                          }}
                        />
                      ))}
                    </>
                  )}
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentDream}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-600 relative overflow-hidden"
              >
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 opacity-5"
                  style={{ color: dreamsData[currentDream].color }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <Star className="w-full h-full" />
                </motion.div>

                <div className="flex items-center gap-6 mb-8 relative z-10">
                  <motion.div
                    style={{ color: dreamsData[currentDream].color }}
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {dreamsData[currentDream].icon}
                  </motion.div>
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-2">{dreamsData[currentDream].title}</h2>
                    <p className="text-xl text-gray-300 mb-2">{dreamsData[currentDream].description}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-400">Timeline:</span>
                      <span className="font-bold" style={{ color: dreamsData[currentDream].color }}>
                        {dreamsData[currentDream].timeline}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-white mb-6">Steps to Achieve</h3>
                    <div className="space-y-4">
                      {dreamsData[currentDream].goals.map((goal, index) => (
                        <motion.div
                          key={goal}
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.15 }}
                          className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-xl border border-gray-600 hover:border-gray-500 transition-colors"
                        >
                          <motion.div
                            className="w-4 h-4 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: dreamsData[currentDream].color }}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                          >
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </motion.div>
                          <span className="text-gray-200 flex-1">{goal}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Inspiration</h3>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="p-6 bg-gray-700/30 rounded-xl border border-gray-600 relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 opacity-5"
                        style={{ backgroundColor: dreamsData[currentDream].color }}
                        animate={{
                          scale: [1, 1.05, 1],
                          opacity: [0.05, 0.1, 0.05],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <p className="text-lg italic relative z-10" style={{ color: dreamsData[currentDream].color }}>
                        &ldquo;{dreamsData[currentDream].inspiration}&rdquo;
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.footer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-center py-16 px-8"
        >
          <motion.button
            onClick={() => window.history.back()}
            className="px-8 py-4 bg-gradient-to-r from-[#60a5fa] to-[#e879f9] text-white font-bold rounded-full hover:scale-105 transition-transform relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#34d399] to-[#f59e0b] opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Back to Portfolio</span>
          </motion.button>
        </motion.footer>
      </motion.div>
    </div>
  );
}
