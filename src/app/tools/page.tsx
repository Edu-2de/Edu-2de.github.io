'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Figma, Github, FileText, Zap, ChevronDown } from 'lucide-react';

const toolsCategories = [
  {
    title: 'Development Environment',
    icon: <Code className="w-12 h-12" />,
    color: '#007acc',
    description: 'Where the magic happens - my coding sanctuary',
    tools: [
      { name: 'Visual Studio Code', usage: '95%', reason: 'Perfect balance of simplicity and power' },
      { name: 'Windows Terminal', usage: '90%', reason: 'Modern terminal with custom themes' },
      { name: 'Git Bash', usage: '85%', reason: 'Unix commands on Windows' },
      { name: 'Postman', usage: '80%', reason: 'API testing and documentation' },
      { name: 'Docker Desktop', usage: '70%', reason: 'Containerization for consistent environments' },
    ],
  },
  {
    title: 'Design & Prototyping',
    icon: <Figma className="w-12 h-12" />,
    color: '#f24e1e',
    description: 'Bringing ideas to life through visual design',
    tools: [
      { name: 'Figma', usage: '95%', reason: 'Collaborative design and prototyping' },
      { name: 'Adobe Photoshop', usage: '80%', reason: 'Advanced image editing and manipulation' },
      { name: 'Adobe Illustrator', usage: '75%', reason: 'Vector graphics and logo design' },
      { name: 'Canva', usage: '70%', reason: 'Quick graphics and social media content' },
      { name: 'Framer', usage: '65%', reason: 'Interactive prototypes and animations' },
    ],
  },
  {
    title: 'Version Control & Collaboration',
    icon: <Github className="w-12 h-12" />,
    color: '#6cc644',
    description: 'Managing code and collaborating with teams',
    tools: [
      { name: 'GitHub', usage: '98%', reason: 'Primary repository hosting and collaboration' },
      { name: 'Git', usage: '95%', reason: 'Essential version control system' },
      { name: 'GitHub Desktop', usage: '70%', reason: 'Visual Git interface for complex merges' },
      { name: 'GitKraken', usage: '60%', reason: 'Advanced Git visualization' },
      { name: 'Sourcetree', usage: '55%', reason: 'Alternative Git GUI for complex workflows' },
    ],
  },
  {
    title: 'Documentation & Planning',
    icon: <FileText className="w-12 h-12" />,
    color: '#ff6b35',
    description: 'Organizing thoughts and planning projects',
    tools: [
      { name: 'Notion', usage: '90%', reason: 'All-in-one workspace for notes and planning' },
      { name: 'Obsidian', usage: '75%', reason: 'Knowledge management and note linking' },
      { name: 'Trello', usage: '70%', reason: 'Kanban boards for project management' },
      { name: 'Markdown', usage: '85%', reason: 'Simple and efficient documentation' },
      { name: 'Confluence', usage: '65%', reason: 'Team documentation and wikis' },
    ],
  },
  {
    title: 'Animation & Motion',
    icon: <Zap className="w-12 h-12" />,
    color: '#9333ea',
    description: 'Creating engaging animations and interactions',
    tools: [
      { name: 'Framer Motion', usage: '92%', reason: 'React animation library excellence' },
      { name: 'After Effects', usage: '75%', reason: 'Professional motion graphics' },
      { name: 'Lottie', usage: '70%', reason: 'Lightweight animations for web' },
      { name: 'CSS Animations', usage: '88%', reason: 'Native web animations' },
      { name: 'GSAP', usage: '65%', reason: 'High-performance animations' },
    ],
  },
];

export default function ToolsPage() {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    if (!isAutoScrolling) return;

    const timer = setInterval(() => {
      setCurrentCategory(prev => {
        if (prev >= toolsCategories.length - 1) {
          setIsAutoScrolling(false);
          return prev;
        }
        return prev + 1;
      });
    }, 4500);

    return () => clearInterval(timer);
  }, [isAutoScrolling]);

  const handleCategoryClick = (index: number) => {
    setIsAutoScrolling(false);
    setCurrentCategory(index);
  };

  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] opacity-70" />

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
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-[#007acc] via-[#f24e1e] to-[#9333ea] bg-clip-text text-transparent">
              TOOLS
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The arsenal of tools that power my development workflow and creative process
            </p>
          </motion.div>

          {isAutoScrolling && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="mt-12 flex flex-col items-center"
            >
              <span className="text-gray-400 mb-4">Auto-exploring toolkit</span>
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <ChevronDown className="w-8 h-8 text-[#007acc]" />
              </motion.div>
            </motion.div>
          )}
        </motion.header>

        <div className="flex-1 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
              {toolsCategories.map((category, index) => (
                <motion.button
                  key={category.title}
                  onClick={() => handleCategoryClick(index)}
                  className={`p-6 rounded-3xl border-2 transition-all duration-300 text-center relative overflow-hidden ${
                    currentCategory === index
                      ? 'border-white bg-white/10 scale-105'
                      : 'border-gray-600 bg-gray-800/40 hover:border-gray-400'
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.div
                    className="flex justify-center mb-4 relative z-10"
                    style={{ color: category.color }}
                    animate={{
                      scale: currentCategory === index ? [1, 1.1, 1] : 1,
                    }}
                    transition={{ duration: 2, repeat: currentCategory === index ? Infinity : 0 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="font-bold text-sm text-white mb-2 relative z-10">{category.title}</h3>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden relative z-10">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: category.color }}
                      initial={{ width: '0%' }}
                      animate={{
                        width: currentCategory === index ? '100%' : '0%',
                      }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                    />
                  </div>
                  {currentCategory === index && (
                    <motion.div
                      className="absolute inset-0 opacity-10 rounded-3xl"
                      style={{ backgroundColor: category.color }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentCategory}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.95 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-600"
              >
                <div className="flex items-center gap-6 mb-8">
                  <motion.div
                    style={{ color: toolsCategories[currentCategory].color }}
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {toolsCategories[currentCategory].icon}
                  </motion.div>
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-2">{toolsCategories[currentCategory].title}</h2>
                    <p className="text-xl text-gray-300">{toolsCategories[currentCategory].description}</p>
                  </div>
                </div>

                <div className="grid gap-6">
                  {toolsCategories[currentCategory].tools.map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-gray-700/40 rounded-xl p-6 border border-gray-600 hover:border-gray-500 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                          <span className="text-lg font-bold" style={{ color: toolsCategories[currentCategory].color }}>
                            {tool.usage}
                          </span>
                        </div>
                      </div>

                      <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden mb-4">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: toolsCategories[currentCategory].color }}
                          initial={{ width: '0%' }}
                          animate={{ width: tool.usage }}
                          transition={{ duration: 1.5, delay: 0.3 + index * 0.1 }}
                        />
                      </div>

                      <p className="text-gray-300 italic">{tool.reason}</p>
                    </motion.div>
                  ))}
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
            className="px-8 py-4 bg-gradient-to-r from-[#007acc] to-[#9333ea] text-white font-bold rounded-full hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Portfolio
          </motion.button>
        </motion.footer>
      </motion.div>
    </div>
  );
}
