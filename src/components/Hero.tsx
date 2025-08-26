'use client';

import { motion, useAnimation, Variants } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Code } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  const controls = useAnimation();
  const nameRef = useRef<HTMLDivElement>(null);
  const [nameHover, setNameHover] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let rafId: number;
    
    const updateMousePosition = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      });
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    if (!nameRef.current) return;

    const nameContainer = nameRef.current;
    let particles: HTMLDivElement[] = [];

    const createParticle = (x: number, y: number) => {
      if (particles.length > 20) return; // Limit particles

      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: rgba(255,255,255,0.8);
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        box-shadow: 0 0 6px rgba(255,255,255,0.5);
        z-index: 10;
      `;

      nameContainer.appendChild(particle);
      particles.push(particle);

      let opacity = 0.8;
      let scale = 1;
      let yPos = y;

      const animate = () => {
        opacity -= 0.03;
        scale *= 0.97;
        yPos -= 1.5;

        particle.style.opacity = opacity.toString();
        particle.style.transform = `scale(${scale})`;
        particle.style.top = yPos + 'px';

        if (opacity > 0) {
          requestAnimationFrame(animate);
        } else {
          particle.remove();
          particles = particles.filter(p => p !== particle);
        }
      };

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!nameHover || Math.random() > 0.8) return;

      const rect = nameContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      createParticle(x, y);
    };

    nameContainer.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      nameContainer.removeEventListener('mousemove', handleMouseMove);
      particles.forEach(particle => particle.remove());
    };
  }, [nameHover]);

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 1.2, ease: 'easeOut' },
      });
    };
    sequence();
  }, [controls]);

  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };

  const nameVariants: Variants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 1.2,
        ease: [0.6, -0.05, 0.01, 0.99],
        type: 'spring',
        stiffness: 100,
      },
    }),
  };

  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ['Full Stack Developer', 'Problem Solver', 'Clean Code Advocate', 'Tech Enthusiast'];

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentText) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentTextIndex(prev => (prev + 1) % texts.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(current => {
            if (isDeleting) {
              return current.slice(0, -1);
            } else {
              return currentText.slice(0, current.length + 1);
            }
          });
        },
        isDeleting ? 50 : 100
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex, texts]);

  return (
    <section
      id="home"
      className="h-[100vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-950 to-slate-900 select-none"
    >
      <div className="absolute inset-0">
        {/* Nebulosa central */}
        <motion.div
          animate={{
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-blue-500/15 via-purple-400/20 to-cyan-300/12 rounded-full blur-[150px]"
        />

        {/* Estrelas de fundo - reduzidas */}
        <div className="absolute inset-0 opacity-15">
          {[...Array(80)].map((_, i) => {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const duration = Math.random() * 10 + 8;
            const delay = Math.random() * 8;
            const size = Math.random() * 2 + 1;
            
            return (
              <motion.div
                key={`bg-star-${i}`}
                initial={{ opacity: 0 }}
                animate={{
                  x: [0, Math.random() * 30 - 15, 0],
                  y: [0, Math.random() * 30 - 15, 0],
                  opacity: [0, 0.8, 0],
                  scale: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: delay,
                }}
                className={`absolute rounded-full will-change-transform ${
                  Math.random() > 0.7 ? 'bg-blue-300' : 
                  Math.random() > 0.5 ? 'bg-purple-200' : 
                  Math.random() > 0.3 ? 'bg-cyan-300' : 'bg-white'
                }`}
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  filter: 'blur(0.5px)',
                  boxShadow: `0 0 ${Math.random() * 6 + 3}px rgba(147, 197, 253, 0.4)`,
                }}
              />
            );
          })}
        </div>

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-3"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(147, 197, 253, 0.2) 1px, transparent 0)`,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Mouse light effect */}
        <div
          className="absolute inset-0 pointer-events-none z-20 will-change-transform"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(147, 197, 253, 0.12) 0%, 
              rgba(147, 197, 253, 0.06) 40%, 
              transparent 80%)`,
            mixBlendMode: 'screen',
          }}
        />

        {/* Revealed stars - muito reduzidas */}
        <div 
          className="absolute inset-0 z-15 will-change-transform"
          style={{
            mask: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(255,255,255,1) 0%, 
              rgba(255,255,255,0.6) 40%, 
              transparent 100%)`,
            WebkitMask: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(255,255,255,1) 0%, 
              rgba(255,255,255,0.6) 40%, 
              transparent 100%)`,
          }}
        >
          {[...Array(50)].map((_, i) => {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const duration = Math.random() * 8 + 6;
            const delay = Math.random() * 4;
            const size = Math.random() * 3 + 1;
            
            return (
              <motion.div
                key={`reveal-star-${i}`}
                initial={{ opacity: 0.2 }}
                animate={{
                  x: [0, Math.random() * 15 - 7.5, 0],
                  y: [0, Math.random() * 15 - 7.5, 0],
                  opacity: [0.2, 1, 0.2],
                  scale: [0.6, 1.3, 0.6],
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: delay,
                }}
                className={`absolute rounded-full will-change-transform ${
                  Math.random() > 0.6 ? 'bg-blue-400' : 
                  Math.random() > 0.4 ? 'bg-purple-300' : 
                  Math.random() > 0.2 ? 'bg-cyan-400' : 'bg-white'
                }`}
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  filter: 'blur(0.3px)',
                  boxShadow: `0 0 ${Math.random() * 8 + 4}px rgba(147, 197, 253, 0.7)`,
                }}
              />
            );
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={controls}
        className="max-w-4xl mx-auto px-8 text-center relative z-30 flex flex-col justify-center items-center gap-6"
      >
        <motion.div
          ref={nameRef}
          initial="hidden"
          animate="visible"
          className="flex-shrink-0 relative"
          onMouseEnter={() => setNameHover(true)}
          onMouseLeave={() => setNameHover(false)}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 relative z-10">
            <motion.h1
              custom={0}
              variants={nameVariants}
              className={`text-4xl md:text-6xl lg:text-7xl font-extralight text-white tracking-tight leading-none transition-all duration-500 cursor-default ${
                nameHover
                  ? 'drop-shadow-[0_0_25px_rgba(147,197,253,0.4)] brightness-110'
                  : 'drop-shadow-[0_0_15px_rgba(147,197,253,0.1)]'
              }`}
            >
              Eduardo
            </motion.h1>

            <motion.h1
              custom={1}
              variants={nameVariants}
              className={`text-4xl md:text-6xl lg:text-7xl font-light leading-none transition-all duration-500 cursor-default ${
                nameHover
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 drop-shadow-[0_0_25px_rgba(147,197,253,0.4)] brightness-110'
                  : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 drop-shadow-[0_0_15px_rgba(147,197,253,0.1)]'
              }`}
            >
              Paim
            </motion.h1>
          </div>
        </motion.div>

        <motion.div custom={2} initial="hidden" animate="visible" variants={textVariants} className="flex-shrink-0">
          <div className="text-lg md:text-xl text-gray-400 font-mono flex items-center justify-center gap-3">
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { repeat: Infinity, duration: 8, ease: 'linear' },
                scale: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
              }}
            >
              <Code size={20} className="text-gray-500" />
            </motion.div>
            <span className="text-gray-300">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="ml-1 text-blue-300"
              >
                |
              </motion.span>
            </span>
          </div>
        </motion.div>

        <motion.div custom={3} initial="hidden" animate="visible" variants={textVariants} className="flex-shrink-0">
          <motion.div
            whileHover={{
              scale: 1.02,
              filter: 'brightness(1.1)',
              transition: {
                type: 'spring',
                stiffness: 300,
                damping: 20,
                duration: 0.3,
              },
            }}
            className="relative group cursor-default max-w-2xl mx-auto"
          >
            <p className="text-base md:text-lg text-gray-500 leading-relaxed tracking-wide font-light relative z-10 group-hover:text-gray-400 transition-colors duration-500">
              Building modern web experiences with{' '}
              <span className="text-gray-400 font-normal group-hover:text-gray-300 transition-colors duration-500">
                clean code
              </span>{' '}
              and innovative solutions.
            </p>
          </motion.div>
        </motion.div>

        <motion.div custom={4} initial="hidden" animate="visible" variants={textVariants} className="flex-shrink-0">
          <div className="flex justify-center space-x-8 gap-3">
            {[
              { icon: Github, href: 'https://github.com/Edu-2de', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:contato@eduardosilva.dev', label: 'Email' },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.15,
                    y: -8,
                    backgroundColor: 'rgba(147,197,253,0.15)',
                    borderColor: 'rgba(147,197,253,0.6)',
                    boxShadow: '0 8px 25px rgba(147,197,253,0.2)',
                    transition: {
                      type: 'spring',
                      stiffness: 400,
                      damping: 10,
                      duration: 0.2,
                    },
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 2 + index * 0.1,
                      type: 'spring',
                      stiffness: 100,
                      damping: 10,
                    },
                  }}
                  className="w-14 h-14 border-2 border-gray-700 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 backdrop-blur-sm cursor-pointer group"
                >
                  <motion.div
                    whileHover={{
                      rotate: 360,
                      transition: {
                        type: 'spring',
                        stiffness: 200,
                        damping: 10,
                        duration: 0.6,
                      },
                    }}
                  >
                    <Icon size={20} className="group-hover:text-blue-300 transition-colors duration-300" />
                  </motion.div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 2.5 },
          }}
          className="flex-shrink-0"
        >
          <motion.button
            onClick={scrollToNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-500 hover:text-blue-300 transition-colors duration-300 group flex flex-col items-center cursor-pointer"
          >
            <span className="text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
              Explore More
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              whileHover={{ scale: 1.2 }}
            >
              <ArrowDown size={20} className="group-hover:text-blue-300 transition-colors" />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}