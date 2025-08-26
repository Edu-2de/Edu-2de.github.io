'use client';

import { motion, useAnimation, Variants } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Code } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const nameRef = useRef<HTMLDivElement>(null);
  const [nameHover, setNameHover] = useState(false);

  // Efeito de mouse paralax corrigido
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 100;
      const y = (e.clientY / window.innerHeight - 0.5) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Efeito de partículas no hover do nome
  useEffect(() => {
    if (!nameRef.current) return;

    const nameContainer = nameRef.current;
    let particles: HTMLDivElement[] = [];

    const createParticle = (x: number, y: number) => {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = '2px';
      particle.style.height = '2px';
      particle.style.backgroundColor = 'rgba(255,255,255,0.8)';
      particle.style.borderRadius = '50%';
      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
      particle.style.pointerEvents = 'none';
      particle.style.boxShadow = '0 0 6px rgba(255,255,255,0.5)';
      particle.style.zIndex = '10';

      nameContainer.appendChild(particle);
      particles.push(particle);

      // Animação da partícula
      let opacity = 0.8;
      let scale = 1;
      let yPos = y;

      const animate = () => {
        opacity -= 0.02;
        scale *= 0.98;
        yPos -= 1;

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
      if (!nameHover) return;

      const rect = nameContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Cria partículas ocasionalmente
      if (Math.random() > 0.7) {
        createParticle(x, y);
      }
    };

    nameContainer.addEventListener('mousemove', handleMouseMove);

    return () => {
      nameContainer.removeEventListener('mousemove', handleMouseMove);
      particles.forEach(particle => particle.remove());
    };
  }, [nameHover]);

  // Animação de entrada
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

  // Animações de texto corrigidas
  const textVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
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

  // Variante especial para o nome
  const nameVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.8,
    },
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

  // Efeito de typing com múltiplas frases
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const texts = ['Full Stack Developer', 'Problem Solver', 'Clean Code Advocate', 'Tech Enthusiast'];

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let timeout: string | number | NodeJS.Timeout | undefined;

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
      className="h-[100vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800 select-none"
    >
      {/* Background Effects com efeito de mouse melhorado */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: mousePosition.x * 0.5,
            y: mousePosition.y * 0.5,
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 30 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-white/8 to-gray-300/12 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: mousePosition.x * -0.3,
            y: mousePosition.y * -0.3,
          }}
          transition={{ type: 'spring', stiffness: 80, damping: 25 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-gray-400/8 to-white/8 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            x: mousePosition.x * 0.1,
            y: mousePosition.y * 0.1,
          }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={controls}
        className="max-w-4xl mx-auto px-8 text-center relative z-10 flex flex-col justify-center items-center gap-8"
      >
        {/* Main Title Section - Nome com efeito clean */}
        <motion.div
          ref={nameRef}
          initial="hidden"
          animate="visible"
          className="flex-shrink-0 relative"
          onMouseEnter={() => setNameHover(true)}
          onMouseLeave={() => setNameHover(false)}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 relative z-10">
            <motion.h1
              custom={0}
              variants={nameVariants}
              className={`text-5xl md:text-7xl lg:text-8xl font-extralight text-white tracking-tight leading-none transition-all duration-500 cursor-default ${
                nameHover
                  ? 'drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] brightness-110'
                  : 'drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]'
              }`}
            >
              Eduardo
            </motion.h1>

            <motion.h1
              custom={1}
              variants={nameVariants}
              className={`text-5xl md:text-7xl lg:text-8xl font-light leading-none transition-all duration-500 cursor-default ${
                nameHover
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-300 drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] brightness-110'
                  : 'text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]'
              }`}
            >
              Paim
            </motion.h1>
          </div>
        </motion.div>

        {/* Typing Effect - div separada */}
        <motion.div custom={2} initial="hidden" animate="visible" variants={textVariants} className="flex-shrink-0">
          <div className="text-xl md:text-2xl text-gray-400 font-mono flex items-center justify-center gap-3">
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
              <Code size={24} className="text-gray-500" />
            </motion.div>
            <span className="text-gray-300">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="ml-1 text-white"
              >
                |
              </motion.span>
            </span>
          </div>
        </motion.div>

        {/* Subtitle */}
       

        {/* Social Links com animações melhoradas */}
        <motion.div custom={4} initial="hidden" animate="visible" variants={textVariants} className="flex-shrink-0">
          <div className="flex justify-center space-x-10 gap-4">
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
                    y: -10,
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    borderColor: 'rgba(255,255,255,0.6)',
                    boxShadow: '0 10px 30px rgba(255,255,255,0.2)',
                    transition: {
                      type: 'spring',
                      stiffness: 400,
                      damping: 10,
                      duration: 0.2,
                    },
                  }}
                  whileTap={{
                    scale: 0.95,
                    transition: {
                      type: 'spring',
                      stiffness: 400,
                      damping: 10,
                      duration: 0.1,
                    },
                  }}
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
                  className="w-16 h-16 border-2 border-gray-700 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 backdrop-blur-sm cursor-pointer group"
                  style={{
                    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  }}
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
                    <Icon size={22} className="group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Scroll Indicator com cursor pointer */}
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
            whileHover={{
              scale: 1.1,
              transition: {
                type: 'spring',
                stiffness: 400,
                damping: 10,
                duration: 0.2,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: 'spring',
                stiffness: 400,
                damping: 10,
                duration: 0.1,
              },
            }}
            className="text-gray-500 hover:text-white transition-colors duration-300 group flex flex-col items-center cursor-pointer"
          >
            <span className="text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
              Explore More
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              whileHover={{
                scale: 1.2,
                transition: {
                  type: 'spring',
                  stiffness: 400,
                  damping: 10,
                  duration: 0.2,
                },
              }}
            >
              <ArrowDown size={24} className="group-hover:text-gray-300 transition-colors" />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
