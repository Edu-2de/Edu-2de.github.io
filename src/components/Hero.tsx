'use client';

import { motion, useAnimation, Variants } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Code } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  const controls = useAnimation();
  const nameRef = useRef<HTMLDivElement>(null);
  const [nameHover, setNameHover] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stars, setStars] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      originalX: number;
      originalY: number;
      size: number;
      opacity: number;
    }>
  >([]);

  // Inicializar estrelas
  useEffect(() => {
    const initialStars = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      originalX: Math.random() * window.innerWidth,
      originalY: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setStars(initialStars);
  }, []);

  // Mouse tracking otimizado
  useEffect(() => {
    let rafId: number;

    const updateMousePosition = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const newMousePos = { x: e.clientX, y: e.clientY };
        setMousePosition(newMousePos);

        // Empurrar estrelas
        setStars(prevStars =>
          prevStars.map(star => {
            const dx = star.x - newMousePos.x;
            const dy = star.y - newMousePos.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 100;

            if (distance < maxDistance && distance > 0) {
              const force = (maxDistance - distance) / maxDistance;
              const pushX = (dx / distance) * force * 50;
              const pushY = (dy / distance) * force * 50;

              return {
                ...star,
                x: Math.max(0, Math.min(window.innerWidth, star.originalX + pushX)),
                y: Math.max(0, Math.min(window.innerHeight, star.originalY + pushY)),
              };
            } else {
              return {
                ...star,
                x: star.x + (star.originalX - star.x) * 0.04,
                y: star.y + (star.originalY - star.y) * 0.04,
              };
            }
          })
        );
      });
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Partículas do nome
  useEffect(() => {
    if (!nameRef.current) return;

    const nameContainer = nameRef.current;
    let particles: HTMLDivElement[] = [];

    const createParticle = (x: number, y: number) => {
      if (particles.length > 8) return;

      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: rgba(148, 163, 184, 0.8);
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        box-shadow: 0 0 4px rgba(148, 163, 184, 0.4);
        z-index: 10;
      `;

      nameContainer.appendChild(particle);
      particles.push(particle);

      let opacity = 0.8;
      let yPos = y;

      const animate = () => {
        opacity -= 0.04;
        yPos -= 2;

        particle.style.opacity = opacity.toString();
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
      if (!nameHover || Math.random() > 0.85) return;

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
    controls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut' },
    });
  }, [controls]);

  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  const nameVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };

  const planetVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (delay: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay,
        duration: 1.5,
        ease: 'easeOut',
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

  // --- Função para orbitar o planeta laranja ---
  const [orangeAngle, setOrangeAngle] = useState(0);

  useEffect(() => {
    let raf: number;
    const animate = () => {
      setOrangeAngle(prev => (prev + 0.2) % 360); // Mais devagar
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  // Calcula a posição do planeta roxo (fixo)
  const purpleRef = useRef<HTMLDivElement>(null);

  // Calcula a posição do planeta laranja orbitando o roxo
  const getOrangePosition = () => {
    const purple = purpleRef.current;
    if (!purple) return { x: 0, y: 0, zIndex: 11 };

    const purpleRect = purple.getBoundingClientRect();
    const centerX = purpleRect.left + purpleRect.width / 2;
    // Move os planetas mais para baixo
    const centerY = purpleRect.top + purpleRect.height / 2 + 120;

    const radius = purpleRect.width * 0.9; // Mais visível (maior raio)
    const rad = (orangeAngle * Math.PI) / 180;
    const x = centerX + radius * Math.cos(rad) - purpleRect.width / 2;
    const y = centerY + radius * Math.sin(rad) - purpleRect.height / 2;

    // Se o ângulo está entre 90 e 270, está atrás do roxo
    const zIndex = orangeAngle > 90 && orangeAngle < 270 ? 9 : 11;
    return { x, y, zIndex };
  };

  const [orangePos, setOrangePos] = useState({ x: 0, y: 0, zIndex: 11 });
  useEffect(() => {
    if (purpleRef.current) {
      setOrangePos(getOrangePosition());
    }
    // eslint-disable-next-line
  }, [orangeAngle, purpleRef.current]);

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-slate-950 to-gray-900 select-none"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Estrelas passando */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`shooting-star-${i}`}
              initial={{
                x: -10,
                y: `${Math.random() * 100}%`,
                opacity: 0,
              }}
              animate={{
                x: '110vw',
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                delay: i * 4,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute w-1 h-1 bg-slate-400 rounded-full"
              style={{
                boxShadow: '0 0 4px rgba(148, 163, 184, 0.5)',
              }}
            />
          ))}
        </div>

        {/* Estrelas empurráveis */}
        <div className="absolute inset-0">
          {stars.map(star => (
            <motion.div
              key={star.id}
              className="absolute rounded-full bg-slate-300"
              animate={{
                x: star.x,
                y: star.y,
              }}
              transition={{
                type: 'spring',
                stiffness: 50,
                damping: 15,
              }}
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                boxShadow: `0 0 ${star.size * 2}px rgba(148, 163, 184, 0.3)`,
              }}
            />
          ))}
        </div>

        {/* Luz do mouse */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(148, 163, 184, 0.03) 0%, 
              transparent 70%)`,
          }}
        />
      </div>

      {/* Planetas de fundo */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Planeta esquerdo - Azul/Roxo */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.3}
          variants={planetVariants}
          className="absolute top-[1%] left-[-10%] transform -translate-y-1/2"
          ref={purpleRef}
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: { duration: 60, repeat: Infinity, ease: 'linear' },
              scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="w-96 h-96 md:w-96 md:h-96 lg:w-[50rem] lg:h-[50rem] rounded-full opacity-80"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #3b82f6, #8b5cf6, #1e293b)',
              boxShadow: '0 0 100px rgba(59, 130, 246, 0.3), inset 0 0 100px rgba(0, 0, 0, 0.3)',
              filter: 'blur(1px)',
            }}
          />
        </motion.div>

        {/* Planeta direito - Laranja/Rosa orbitando */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.6}
          variants={planetVariants}
          className="absolute"
          style={{
            top: orangePos.y,
            left: orangePos.x,
            zIndex: orangePos.zIndex,
          }}
        >
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              rotate: { duration: 80, repeat: Infinity, ease: 'linear' },
              scale: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="w-64 h-64 md:w-80 md:h-80 lg:w-36 lg:h-36 rounded-full opacity-90"
            style={{
              background: 'radial-gradient(circle at 70% 20%, #f97316, #ec4899, #7c2d12)',
              boxShadow: '0 0 80px 20px rgba(249, 115, 22, 0.6), inset 0 0 80px rgba(0, 0, 0, 0.4)',
              filter: 'blur(0.5px)',
            }}
          />
        </motion.div>

        {/* Órbita do planeta laranja mais visível */}
        {purpleRef.current && (
          <motion.div
            animate={{ rotate: [0, 400] }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute"
            style={{
              top: purpleRef.current.getBoundingClientRect().top + purpleRef.current.getBoundingClientRect().height / 2 + 120 - purpleRef.current.getBoundingClientRect().width * 0.9,
              left: purpleRef.current.getBoundingClientRect().left + purpleRef.current.getBoundingClientRect().width / 2 - purpleRef.current.getBoundingClientRect().width * 0.9,
              pointerEvents: 'none',
              zIndex: 8,
            }}
          >
            <div
              style={{
                width: `${purpleRef.current.getBoundingClientRect().width * 0.4}px`,
                height: `${purpleRef.current.getBoundingClientRect().width * 0.4}px`,
                borderRadius: '50%',
                position: 'absolute',
                left: 0,
                top: 0,
                border: "2px solid orange",
              }}
            />
          </motion.div>
        )}

        {/* Órbitas decorativas fixas */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-[20%] transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-[32rem] h-[32rem] border border-slate-400/10 rounded-full" />
        </motion.div>

        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 right-[15%] transform translate-x-1/-translatete-y-1/2"
        >
          <div className="w-[28rem] h-[28rem] border border-slate-400/10 rounded-full" />
        </motion.div>
      </div>

      {/* Typing Effect no fundo superior */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ delay: 1.5, duration: 2 }}
        className="absolute top-16 left-1/2 transform -translate-x-1/2 pointer-events-none z-20 select-none"
      >
        <div className="text-2xl md:text-3xl lg:text-4xl font-mono text-white/60 text-center">
          {displayText}
          <motion.span
            animate={{ opacity: [0.6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="ml-1 text-white/40"
          >
            |
          </motion.span>
        </div>
      </motion.div>

      {/* Conteúdo Principal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={controls}
        className="relative z-30 flex flex-col items-center text-center px-8"
      >
        {/* Nome Principal no Centro */}
        <motion.div
          ref={nameRef}
          initial="hidden"
          animate="visible"
          className="relative mb-12"
          onMouseEnter={() => setNameHover(true)}
          onMouseLeave={() => setNameHover(false)}
        >
          <motion.h1
            custom={0}
            variants={nameVariants}
            className={`text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-white transition-all duration-300 cursor-default mb-4 ${
              nameHover
                ? 'drop-shadow-[0_0_30px_rgba(148,163,184,0.6)]'
                : 'drop-shadow-[0_0_20px_rgba(148,163,184,0.4)]'
            }`}
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #cbd5e1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            EDUARDO
          </motion.h1>

          <motion.h2
            custom={0}
            variants={nameVariants}
            className={`text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-white transition-all duration-300 cursor-default mb-4 ${
              nameHover
                ? 'drop-shadow-[0_0_30px_rgba(148,163,184,0.6)]'
                : 'drop-shadow-[0_0_20px_rgba(148,163,184,0.4)]'
            }`}
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #cbd5e1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            PAIM
          </motion.h2>
        </motion.div>

        {/* Description */}
        <motion.div custom={2} initial="hidden" animate="visible" variants={textVariants} className="mb-12">
          <p className="text-slate-400 text-xl md:text-2xl max-w-3xl leading-relaxed font-light">
            Crafting digital experiences in the <span className="text-slate-300 font-medium">cosmic web</span> of modern
            technology.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div custom={3} initial="hidden" animate="visible" variants={textVariants} className="mb-16">
          <div className="flex justify-center gap-8">
            {[
              { icon: Github, href: 'https://github.com/Edu-2de', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:contato@eduardosilva.dev', label: 'Email' },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.div key={social.label} className="relative group">
                  <motion.a
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -3,
                      scale: 1.05,
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 2 + index * 0.1 },
                    }}
                    className="w-16 h-16 border-2 border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-all duration-200 backdrop-blur-sm hover:bg-slate-800/30"
                  >
                    <Icon size={24} />
                  </motion.a>

                  <motion.span
                    initial={{ opacity: 0, y: 5 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute top-18 left-1/2 transform -translate-x-1/2 text-sm text-slate-500 font-medium whitespace-nowrap pointer-events-none bg-slate-900/90 px-3 py-1 rounded backdrop-blur-sm"
                  >
                    {social.label}
                  </motion.span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Scroll Arrow */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.5 }}>
          <motion.button
            onClick={scrollToNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-slate-500 hover:text-slate-400 transition-colors duration-200 group flex flex-col items-center"
          >
            <span className="text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Explore
            </span>
            <motion.div animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
              <ArrowDown size={20} />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}