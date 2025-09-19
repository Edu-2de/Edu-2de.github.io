'use client';

import React, { useState, useEffect, JSX } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/SpaceNavigation/SpaceNavigation';

// Types
interface HobbyData {
  id: number;
  title: string;
  description: string;
  icon: string;
  category: string;
  details: string[];
  bgColor: string;
  textColor: string;
  accentColor: string;
  buttonText: string;
  buttonAction: string;
}

interface CodeFile {
  name: string;
  language: string;
  content: JSX.Element;
}

const codeFiles: CodeFile[] = [
  {
    name: "about.js",
    language: "javascript",
    content: (
      <div className="flex">
        <div className="select-none text-[#495162] text-sm mr-6 text-right w-8 leading-6">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
          <div>13</div>
          <div>14</div>
          <div>15</div>
        </div>
        <div className="leading-6">
          <div><span className="text-[#7F848E]">Eduardo Programming Journey</span></div>
          <div><span className="text-[#C678DD]">const</span> <span className="text-[#E06C75]">developer</span> <span className="text-[#56B6C2]">=</span> <span className="text-[#E5C07B]">{'{'}</span></div>
          <div>&nbsp;&nbsp;<span className="text-[#E06C75]">name</span><span className="text-[#ABB2BF]">:</span> <span className="text-[#98C379]">&quot;Eduardo&quot;</span><span className="text-[#ABB2BF]">,</span></div>
          <div>&nbsp;&nbsp;<span className="text-[#E06C75]">passion</span><span className="text-[#ABB2BF]">:</span> <span className="text-[#98C379]">&quot;Full-Stack Development&quot;</span><span className="text-[#ABB2BF]">,</span></div>
          <div>&nbsp;&nbsp;<span className="text-[#E06C75]">skills</span><span className="text-[#ABB2BF]">:</span> <span className="text-[#E5C07B]">{'{'}</span></div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#E06C75]">frontend</span><span className="text-[#ABB2BF]">:</span> <span className="text-[#E5C07B]">[</span><span className="text-[#98C379]">&quot;React&quot;</span><span className="text-[#ABB2BF]">,</span> <span className="text-[#98C379]">&quot;Next.js&quot;</span><span className="text-[#ABB2BF]">,</span> <span className="text-[#98C379]">&quot;TypeScript&quot;</span><span className="text-[#E5C07B]">]</span><span className="text-[#ABB2BF]">,</span></div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#E06C75]">backend</span><span className="text-[#ABB2BF]">:</span> <span className="text-[#E5C07B]">[</span><span className="text-[#98C379]">&quot;Node.js&quot;</span><span className="text-[#ABB2BF]">,</span> <span className="text-[#98C379]">&quot;Python&quot;</span><span className="text-[#ABB2BF]">,</span> <span className="text-[#98C379]">&quot;PostgreSQL&quot;</span><span className="text-[#E5C07B]">]</span><span className="text-[#ABB2BF]">,</span></div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#E06C75]">tools</span><span className="text-[#ABB2BF]">:</span> <span className="text-[#E5C07B]">[</span><span className="text-[#98C379]">&quot;Git&quot;</span><span className="text-[#ABB2BF]">,</span> <span className="text-[#98C379]">&quot;Docker&quot;</span><span className="text-[#ABB2BF]">,</span> <span className="text-[#98C379]">&quot;VS Code&quot;</span><span className="text-[#E5C07B]">]</span></div>
          <div>&nbsp;&nbsp;<span className="text-[#E5C07B]">{'}'}</span><span className="text-[#ABB2BF]">,</span></div>
          <div>&nbsp;&nbsp;<span className="text-[#E06C75]">motivation</span><span className="text-[#ABB2BF]">:</span> <span className="text-[#98C379]">&quot;Building solutions that make a difference&quot;</span><span className="text-[#ABB2BF]">,</span></div>
          <div>&nbsp;&nbsp;<span className="text-[#E06C75]">goal</span><span className="text-[#ABB2BF]">:</span> <span className="text-[#98C379]">&quot;Transform hobby into professional career&quot;</span></div>
          <div><span className="text-[#E5C07B]">{'}'}</span><span className="text-[#ABB2BF]">;</span></div>
          <div></div>
          <div><span className="text-[#7F848E]">From curiosity to career</span></div>
          <div><span className="text-[#E06C75]">console</span><span className="text-[#ABB2BF]">.</span><span className="text-[#61AFEF]">log</span><span className="text-[#E5C07B]">(</span><span className="text-[#98C379]">&quot;Ready to code the future!&quot;</span><span className="text-[#E5C07B]">)</span><span className="text-[#ABB2BF]">;</span></div>
        </div>
      </div>
    )
  }
];

// Matrix Rain Background Component
const MatrixRain = () => {
  const [columns, setColumns] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const codeSnippets = [
      'const', 'function', 'return', 'import', 'export', 'class', 'extends',
      'if', 'else', 'for', 'while', 'try', 'catch', 'async', 'await',
      'React', 'useState', 'useEffect', 'props', 'state', 'component',
      'map', 'filter', 'reduce', 'forEach', 'push', 'pop', 'splice',
      '{}', '[]', '()', '=>', '&&', '||', '===', '!==', '++', '--',
      'true', 'false', 'null', 'undefined', 'let', 'var', 'new'
    ];

    const generateColumns = () => {
      const newColumns = [];
      const numberOfColumns = Math.floor(window.innerWidth / 40);

      for (let i = 0; i < numberOfColumns; i++) {
        const drops = Math.floor(Math.random() * 20) + 10;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 15;

        newColumns.push(
          <div
            key={i}
            className="absolute font-mono text-xs opacity-10"
            style={{ left: `${i * 40}px` }}
          >
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: window.innerHeight + 100 }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex flex-col gap-2"
            >
              {Array.from({ length: drops }, (_, j) => (
                <div key={j} className="text-green-400/20">
                  {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
                </div>
              ))}
            </motion.div>
          </div>
        );
      }
      setColumns(newColumns);
    };

    generateColumns();
    const handleResize = () => generateColumns();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {columns}
    </div>
  );
};

// Interactive Terminal Component
const InteractiveTerminal = ({ hobby, onClose }: { hobby: HobbyData; onClose: () => void }) => {
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const getHobbyCommands = (hobby: HobbyData) => {
    switch (hobby.id) {
      case 1: // Programming
        return {
          'ls': () => ['portfolio.js', 'projects/', 'skills.json', 'experience.md', 'README.md'],
          'cat skills.json': () => [
            '{',
            '  "languages": ["JavaScript", "TypeScript", "Python"],',
            '  "frameworks": ["React", "Next.js", "Node.js"],',
            '  "tools": ["Git", "VS Code", "Docker"],',
            '  "learning": ["PostgreSQL", "AWS", "GraphQL"]',
            '}'
          ],
          'git status': () => ['On branch main', 'Your branch is up to date', 'nothing to commit, working tree clean'],
          'npm run dev': () => ['Starting development server...', 'Ready on http://localhost:3000'],
        };
      case 2: // Gaming
        return {
          'ls': () => ['saved_games/', 'screenshots/', 'configs/', 'mods/', 'achievements.txt'],
          'cat achievements.txt': () => [
            '🏆 RPG Master - Completed 50+ RPGs',
            '🎯 Strategy Expert - 1000+ hours in strategy games',
            '📖 Story Lover - Experienced countless narratives',
            '🎮 Retro Gamer - From classics to modern games'
          ],
          'top': () => ['Current favorite: The Witcher 3', 'Playtime: 200+ hours', 'Genre: RPG/Adventure'],
        };
      case 3: // Reading
        return {
          'ls': () => ['library/', 'bookmarks/', 'notes/', 'wishlist.txt', 'reviews/'],
          'cat wishlist.txt': () => [
            '📚 Science Fiction Collection:',
            '- Foundation series by Isaac Asimov',
            '- Dune Chronicles by Frank Herbert',
            '- Hyperion Cantos by Dan Simmons',
            '- The Expanse series by James S.A. Corey'
          ],
          'wc library/*': () => ['Books read this year: 24', 'Pages read: ~8,500', 'Favorite genre: Sci-Fi'],
        };
      case 4: // Music
        return {
          'ls': () => ['playlists/', 'projects/', 'samples/', 'tracks/', 'equipment.txt'],
          'cat playlists/favorites.m3u': () => [
            '🎵 Current Rotation:',
            '♪ Synthwave - Retro vibes and neon dreams',
            '♪ Progressive Rock - Complex compositions',
            '♪ Lofi Hip Hop - Focus and relaxation',
            '♪ Ambient - Background atmospheres'
          ],
          'play random': () => ['🎶 Now playing: Random synthwave track', 'Volume: 75%', 'Mood: Productive'],
        };
      case 5: // Photography
        return {
          'ls': () => ['photos/', 'raw/', 'edited/', 'projects/', 'equipment.txt'],
          'exif recent_photo.jpg': () => [
            'Camera: Canon EOS',
            'Lens: 50mm f/1.8',
            'Settings: ISO 800, f/2.8, 1/60s',
            'Location: Urban landscape',
            'Style: Street photography'
          ],
          'ls projects/': () => ['urban_nights/', 'street_photography/', 'portraits/', 'landscapes/'],
        };
      case 6: // Science
        return {
          'ls': () => ['research/', 'documentaries/', 'articles/', 'experiments/', 'cosmos.txt'],
          'cat cosmos.txt': () => [
            '🌌 Current Interests:',
            '⭐ Quantum mechanics and parallel universes',
            '🚀 Space exploration and colonization',
            '🔬 Latest discoveries in astrophysics',
            '🌍 Climate science and sustainability'
          ],
          'telescope --status': () => ['Next observation: Saturn rings', 'Weather: Clear skies', 'Equipment: Ready'],
        };
      default:
        return {};
    }
  };

  const commands = {
    'pwd': () => [`/home/eduardo/${hobby.title.toLowerCase()}`],
    'whoami': () => ['eduardo'],
    'date': () => [new Date().toString()],
    'clear': () => null,
    'help': () => [
      'Available commands:',
      '  ls        - list files',
      '  pwd       - current directory',
      '  whoami    - current user',
      '  date      - current date',
      '  clear     - clear terminal',
      '  help      - show this help',
      '  exit      - close terminal'
    ],
    'exit': () => {
      onClose();
      return null;
    },
    ...getHobbyCommands(hobby)
  };

  useEffect(() => {
    const initialLines = [
      `eduardo@dev-machine:~/${hobby.title.toLowerCase()}$ `,
      `Welcome to ${hobby.title} terminal!`,
      'Type "help" for available commands or "exit" to close.',
      '',
      `eduardo@dev-machine:~/${hobby.title.toLowerCase()}$ `
    ];
    setTerminalLines(initialLines);
  }, [hobby]);

  const handleCommand = (command: string) => {
    setIsTyping(true);
    
    setTimeout(() => {
      const trimmed = command.trim();
      const newLines = [...terminalLines];
      newLines[newLines.length - 1] += trimmed;
      
      if (trimmed === 'clear') {
        setTerminalLines([`eduardo@dev-machine:~/${hobby.title.toLowerCase()}$ `]);
      } else if (commands[trimmed as keyof typeof commands]) {
        const commandFn = commands[trimmed as keyof typeof commands];
        if (typeof commandFn === 'function') {
          const result = commandFn();
          if (result) {
            newLines.push(...result);
          }
          if (trimmed !== 'exit') {
            newLines.push('', `eduardo@dev-machine:~/${hobby.title.toLowerCase()}$ `);
            setTerminalLines(newLines);
          }
        }
      } else if (trimmed) {
        newLines.push(`bash: ${trimmed}: command not found`, '', `eduardo@dev-machine:~/${hobby.title.toLowerCase()}$ `);
        setTerminalLines(newLines);
      } else {
        newLines.push('', `eduardo@dev-machine:~/${hobby.title.toLowerCase()}$ `);
        setTerminalLines(newLines);
      }
      
      setCurrentInput('');
      setIsTyping(false);
    }, 300);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-[#1E2127] border border-[#3C4043] rounded-lg w-full max-w-4xl h-96 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="bg-[#21252B] px-4 py-2 border-b border-[#3C4043] flex items-center justify-between rounded-t-lg">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-[#FF5F56] rounded-full"></div>
              <div className="w-3 h-3 bg-[#FFBD2E] rounded-full"></div>
              <div className="w-3 h-3 bg-[#27CA3F] rounded-full"></div>
            </div>
            <span className="text-[#ABB2BF] text-sm font-medium">
              {hobby.title} Terminal
            </span>
          </div>
          
          <button 
            onClick={onClose}
            className="text-[#7F848E] hover:text-[#ABB2BF] text-lg"
          >
            ×
          </button>
        </div>

        {/* Terminal Content */}
        <div className="flex-1 p-4 font-mono text-sm text-[#ABB2BF] overflow-auto">
          {terminalLines.slice(0, -1).map((line, index) => (
            <div key={index} className={line.includes('eduardo@') ? 'text-[#98C379]' : ''}>
              {line.includes('eduardo@') ? (
                <>
                  <span className="text-[#98C379]">eduardo@dev-machine</span>
                  <span className="text-[#ABB2BF]">:</span>
                  <span className="text-[#61AFEF]">~/{hobby.title.toLowerCase()}</span>
                  <span className="text-[#ABB2BF]">$ </span>
                  <span className="text-[#E5C07B]">{line.split('$ ')[1] || ''}</span>
                </>
              ) : (
                line
              )}
            </div>
          ))}
          
          <div className="flex items-center">
            <span className="text-[#98C379]">eduardo@dev-machine</span>
            <span className="text-[#ABB2BF]">:</span>
            <span className="text-[#61AFEF]">~/{hobby.title.toLowerCase()}</span>
            <span className="text-[#ABB2BF]">$ </span>
            <input
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="bg-transparent outline-none text-[#E5C07B] flex-1 ml-1"
              disabled={isTyping}
              autoFocus
            />
            <motion.span 
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="bg-[#ABB2BF] w-2 h-4 inline-block ml-1"
            />
          </div>
          
          {isTyping && (
            <div className="text-[#7F848E] mt-2">Processing command...</div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Full-Screen VS Code Editor Component
const FullScreenVSCodeEditor = ({ onClose }: { onClose: () => void }) => {
  const [activeFile, setActiveFile] = useState(codeFiles[0]);
  const [openTabs, setOpenTabs] = useState([codeFiles[0]]);

  const openFile = (file: CodeFile) => {
    setActiveFile(file);
    if (!openTabs.find(tab => tab.name === file.name)) {
      setOpenTabs([...openTabs, file]);
    }
  };

  const closeTab = (file: CodeFile) => {
    const newTabs = openTabs.filter(tab => tab.name !== file.name);
    setOpenTabs(newTabs);
    if (activeFile.name === file.name && newTabs.length > 0) {
      setActiveFile(newTabs[0]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#282C34] z-50 flex flex-col"
    >
      {/* VS Code Header */}
      <div className="bg-[#21252B] px-4 py-2 flex items-center justify-between border-b border-[#181A1F]">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-[#FF5F56] rounded-full hover:brightness-110 transition-all cursor-pointer"></div>
            <div className="w-3 h-3 bg-[#FFBD2E] rounded-full hover:brightness-110 transition-all cursor-pointer"></div>
            <div className="w-3 h-3 bg-[#27CA3F] rounded-full hover:brightness-110 transition-all cursor-pointer" onClick={onClose}></div>
          </div>
          <div className="ml-2 text-[#ABB2BF] text-sm font-medium">
            Visual Studio Code - Programming Journey
          </div>
        </div>
        
        <button 
          onClick={onClose}
          className="text-[#7F848E] hover:text-[#ABB2BF] text-lg"
        >
          ×
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 bg-[#21252B] border-r border-[#181A1F] flex flex-col">
          {/* Explorer Header */}
          <div className="p-3 border-b border-[#181A1F]">
            <div className="text-[#ABB2BF] text-xs font-semibold uppercase tracking-wider">
              Explorer
            </div>
          </div>

          {/* File Explorer */}
          <div className="p-2 flex-1">
            <div className="text-[#ABB2BF] text-xs font-medium mb-2 uppercase tracking-wide">
              programming-journey
            </div>
            {codeFiles.map((file) => (
              <div
                key={file.name}
                className={`flex items-center gap-2 p-2 text-sm cursor-pointer hover:bg-[#2C313C] transition-all duration-200 ${
                  activeFile.name === file.name ? 'bg-[#2C313C] text-[#ABB2BF]' : 'text-[#7F848E]'
                }`}
                onClick={() => openFile(file)}
              >
                <span className="text-[#ABB2BF]">{file.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col">
          {/* Tabs */}
          <div className="bg-[#21252B] border-b border-[#181A1F] flex overflow-x-auto">
            {openTabs.map((tab) => (
              <div
                key={tab.name}
                className={`flex items-center gap-2 px-4 py-2 border-r border-[#181A1F] cursor-pointer transition-all duration-200 min-w-0 ${
                  activeFile.name === tab.name 
                    ? 'bg-[#282C34] text-[#ABB2BF]' 
                    : 'hover:bg-[#2C313C] text-[#7F848E]'
                }`}
                onClick={() => setActiveFile(tab)}
              >
                <span className="text-sm truncate">{tab.name}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeTab(tab);
                  }}
                  className="text-[#7F848E] hover:text-[#ABB2BF] w-4 h-4 flex items-center justify-center text-xs"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Code Content Area */}
          <div className="flex-1 bg-[#282C34] overflow-auto">
            <div className="h-full p-4">
              <div className="text-sm font-mono">
                {activeFile.content}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-[#007ACC] px-4 py-1 flex items-center justify-between text-xs text-white">
        <div className="flex items-center gap-4">
          <span className="capitalize">{activeFile.language}</span>
          <span>UTF-8</span>
          <span>LF</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Programming Journey</span>
        </div>
      </div>
    </motion.div>
  );
};

// Hobbies data with neutral colors
const hobbiesData: HobbyData[] = [
  {
    id: 1,
    title: 'Programming',
    description: 'What started as a hobby out of curiosity is now my main area of study and what I aspire to do professionally.',
    icon: '',
    category: 'Tech',
    details: [
      'Started as hobby and curiosity',
      'Now my main field of study', 
      'Goal: professional career',
      'Personal projects and open-source contributions'
    ],
    bgColor: 'bg-black',
    textColor: 'text-white',
    accentColor: 'bg-gray-500',
    buttonText: 'View More',
    buttonAction: 'special'
  },
  {
    id: 2,
    title: 'Gaming',
    description: 'Strategic games and RPGs that stimulate creativity, problem-solving and provide unique narrative experiences.',
    icon: '🎮',
    category: 'Entertainment',
    details: ['RPGs and adventures', 'Strategic games', 'Occasional e-sports', 'Interactive narratives'],
    bgColor: 'bg-black',
    textColor: 'text-white',
    accentColor: 'bg-gray-500',
    buttonText: 'Game Stats',
    buttonAction: 'terminal'
  },
  {
    id: 3,
    title: 'Reading',
    description: 'Exploring worlds through science fiction books, personal development and technical knowledge.',
    icon: '📚',
    category: 'Learning',
    details: ['Science fiction', 'Technical books', 'Personal development', 'Philosophy and history'],
    bgColor: 'bg-black',
    textColor: 'text-white',
    accentColor: 'bg-gray-500',
    buttonText: 'Library System',
    buttonAction: 'terminal'
  },
  {
    id: 4,
    title: 'Music',
    description: 'Diverse musical appreciation and experimentation with production, exploring from electronic to progressive rock.',
    icon: '🎵',
    category: 'Arts',
    details: ['Electronic and synthwave', 'Progressive rock', 'Lofi and ambient', 'Music production'],
    bgColor: 'bg-black',
    textColor: 'text-white',
    accentColor: 'bg-gray-500',
    buttonText: 'Music Player',
    buttonAction: 'terminal'
  },
  {
    id: 5,
    title: 'Photography',
    description: 'Capturing unique moments, urban landscapes and experimenting with light, shadow and visual composition.',
    icon: '📸',
    category: 'Arts',
    details: ['Urban photography', 'Night landscapes', 'Street photography', 'Digital editing'],
    bgColor: 'bg-black',
    textColor: 'text-white',
    accentColor: 'bg-gray-500',
    buttonText: 'Photo Viewer',
    buttonAction: 'terminal'
  },
  {
    id: 6,
    title: 'Science',
    description: 'Fascination with astronomy, quantum physics and discoveries that expand our understanding of the universe.',
    icon: '🔬',
    category: 'Learning',
    details: ['Astronomy and astrophysics', 'Quantum physics', 'Scientific documentaries', 'Science outreach'],
    bgColor: 'bg-black',
    textColor: 'text-white',
    accentColor: 'bg-gray-500',
    buttonText: 'Research Lab',
    buttonAction: 'terminal'
  },
];

// Clean Apple-style Hobby Content Component
const HobbyContent = ({ hobby, isActive, onButtonClick }: { 
  hobby: HobbyData; 
  isActive: boolean; 
  onButtonClick: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    className="space-y-8"
  >
    {/* Minimal Category Tag */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={isActive ? { opacity: 1 } : { opacity: 0 }}
      transition={{ delay: 0.1, duration: 0.6 }}
      className="inline-block"
    >
      <span className="text-sm font-medium text-gray-400 tracking-wide uppercase">
        {hobby.category}
      </span>
    </motion.div>

    {/* Clean Title */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="text-5xl md:text-6xl font-light text-white leading-none tracking-tight"
    >
      {hobby.title}
    </motion.h2>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="text-lg text-gray-300 leading-relaxed max-w-lg font-light"
    >
      {hobby.description}
    </motion.p>

    {/* Minimal Button */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="pt-4"
    >
      <button
        onClick={onButtonClick}
        className="group inline-flex items-center text-white text-sm font-medium tracking-wide hover:text-gray-300 transition-colors duration-300"
      >
        <span>{hobby.buttonText}</span>
        <motion.svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </motion.svg>
      </button>
    </motion.div>
  </motion.div>
);

// Clean Hero Section
const HeroSection = ({ isActive }: { isActive: boolean }) => (
  <section className={`h-screen flex items-center justify-center bg-black relative ${isActive ? 'block' : 'hidden'}`}>
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.h1
          className="text-7xl md:text-8xl font-extralight mb-8 text-white tracking-tight"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Hobbies
        </motion.h1>

        <motion.p
          className="text-xl text-gray-400 font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Passions that define who I am
        </motion.p>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={isActive ? { opacity: 1 } : { opacity: 0 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="w-6 h-10 border border-gray-600 rounded-full flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-1 h-3 bg-gray-600 rounded-full mt-2"
        />
      </motion.div>
    </motion.div>
  </section>
);

// Programming Section with Matrix Rain
const ProgrammingSection = ({ hobby, isActive, onButtonClick }: { 
  hobby: HobbyData; 
  isActive: boolean; 
  onButtonClick: () => void;
}) => (
  <section className={`h-screen flex items-center justify-center ${hobby.bgColor} ${hobby.textColor} relative ${isActive ? 'block' : 'hidden'}`}>
    {/* Matrix Rain Background */}
    <MatrixRain />
    
    {/* Overlay for better readability */}
    <div className="absolute inset-0 bg-black/70 z-10" />
    
    <div className="container mx-auto px-6 relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center max-w-4xl mx-auto"
      >
        {/* Minimal Category Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="inline-block mb-8"
        >
          <span className="text-sm font-medium text-gray-400 tracking-wide uppercase">
            {hobby.category}
          </span>
        </motion.div>

        {/* Clean Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-6xl md:text-8xl font-extralight text-white leading-none tracking-tight mb-8"
        >
          {hobby.title}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light mb-12"
        >
          {hobby.description}
        </motion.p>

        {/* Minimal Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <button
            onClick={onButtonClick}
            className="group inline-flex items-center text-white text-sm font-medium tracking-wide hover:text-gray-300 transition-colors duration-300"
          >
            <span>{hobby.buttonText}</span>
            <motion.svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// Clean Hobby Section
const HobbySection = ({ hobby, index, isActive }: { hobby: HobbyData; index: number; isActive: boolean }) => {
  const [showTerminal, setShowTerminal] = useState(false);
  const [showVSCode, setShowVSCode] = useState(false);
  const isEven = index % 2 === 0;

  const handleButtonClick = () => {
    if (hobby.buttonAction === 'special') {
      setShowVSCode(true);
    } else {
      setShowTerminal(true);
    }
  };

  // Special layout for Programming hobby
  if (hobby.id === 1) {
    return (
      <>
        <ProgrammingSection hobby={hobby} isActive={isActive} onButtonClick={handleButtonClick} />
        <AnimatePresence>
          {showVSCode && (
            <FullScreenVSCodeEditor onClose={() => setShowVSCode(false)} />
          )}
        </AnimatePresence>
      </>
    );
  }

  return (
    <>
      <section className={`h-screen flex items-center ${hobby.bgColor} ${hobby.textColor} relative ${isActive ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-6">
          <div className={`grid md:grid-cols-2 gap-20 items-center ${isEven ? '' : 'md:grid-flow-col-dense'}`}>
            <div className={`${isEven ? 'md:order-1' : 'md:order-2'}`}>
              <HobbyContent hobby={hobby} isActive={isActive} onButtonClick={handleButtonClick} />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className={`flex justify-center items-center ${isEven ? 'md:order-2' : 'md:order-1'}`}
            >
              <div className="text-[18rem] md:text-[22rem] leading-none opacity-80">
                {hobby.icon}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showTerminal && (
          <InteractiveTerminal hobby={hobby} onClose={() => setShowTerminal(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

// Clean Footer Section
const FooterSection = ({ isActive }: { isActive: boolean }) => (
  <footer className={`h-screen flex items-center justify-center bg-black text-white relative ${isActive ? 'block' : 'hidden'}`}>
    <div className="container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-2xl mx-auto space-y-8"
      >
        <h3 className="text-4xl font-light tracking-tight">Let&apos;s Connect</h3>
        <p className="text-lg text-gray-400 leading-relaxed font-light">
          Share your hobbies and passions with me. I love exchanging experiences about technology, art and science.
        </p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center px-8 py-3 bg-white text-black font-medium text-sm tracking-wide hover:bg-gray-100 transition-colors duration-300"
          onClick={() => (window.location.href = '/')}
        >
          Back to Portfolio
        </motion.button>
      </motion.div>
    </div>
  </footer>
);

// Minimal Navigation
const ArrowNavigation = ({ currentSection, setCurrentSection, totalSections }: { 
  currentSection: number; 
  setCurrentSection: (section: number) => void; 
  totalSections: number; 
}) => (
  <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-3">
    <button
      onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
      disabled={currentSection === 0}
      className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 backdrop-blur-sm"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 15l7-7 7 7" />
      </svg>
    </button>
    
    <div className="flex flex-col gap-2">
      {Array.from({ length: totalSections }).map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSection(index)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            currentSection === index ? 'bg-white' : 'bg-white/30'
          }`}
        />
      ))}
    </div>
    
    <button
      onClick={() => setCurrentSection(Math.min(totalSections - 1, currentSection + 1))}
      disabled={currentSection === totalSections - 1}
      className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 backdrop-blur-sm"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  </div>
);

// Main Component
export default function HobbiesPage() {
  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = hobbiesData.length + 2; // +2 for Hero and Footer

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        setCurrentSection(prev => Math.max(0, prev - 1));
      } else if (e.key === 'ArrowDown') {
        setCurrentSection(prev => Math.min(totalSections - 1, prev + 1));
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [totalSections]);

  const renderCurrentSection = () => {
    if (currentSection === 0) {
      return <HeroSection isActive={true} />;
    } else if (currentSection === totalSections - 1) {
      return <FooterSection isActive={true} />;
    } else {
      const hobbyIndex = currentSection - 1;
      const hobby = hobbiesData[hobbyIndex];
      return <HobbySection hobby={hobby} index={hobbyIndex} isActive={true} />;
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-black">
      <Navigation />
      <ArrowNavigation 
        currentSection={currentSection} 
        setCurrentSection={setCurrentSection} 
        totalSections={totalSections} 
      />
      {renderCurrentSection()}
    </div>
  );
}