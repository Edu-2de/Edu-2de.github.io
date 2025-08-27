'use client';
import { useState as useStateReact, useEffect as useEffectReact } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

// Planetas fictícios, degradê, órbitas e velocidades diferentes (bem lentos e maiores)
const ORBIT_PLANETS = [
  {
    name: 'Aurelia',
    color: 'radial-gradient(circle at 60% 40%, #fffbe7 0%, #fbbf24 60%, #f59e42 100%)',
    shadow: 'rgba(251,191,36,0.3)',
    size: 80,
    orbit: 400,
    speed: 0.0088,
    opacity: 0.55,
    border: '2px solid #fffbe7',
  },
  {
    name: 'Nebula',
    color: 'radial-gradient(circle at 40% 60%, #a7f3f3 0%, #38bdf8 60%, #6366f1 100%)',
    shadow: 'rgba(99,102,241,0.3)',
    size: 70,
    orbit: 540,
    speed: 0.0055,
    opacity: 0.5,
    border: '2px solid #38bdf8',
  },
  {
    name: 'Pyra',
    // Laranja/rosa com centro quente e transparência
    color: 'radial-gradient(circle at 50% 50%, #fbb6ce 0%, #f97316 60%, #ec4899 100%)',
    shadow: 'rgba(249,115,22,0.3)',
    size: 64,
    orbit: 700,
    speed: 0.0033,
    opacity: 0.45,
    border: '2px solid #ec4899',
  },
  {
    name: 'Verdan',
    color: 'radial-gradient(circle at 60% 40%, #a7f3d0 0%, #22d3ee 60%, #0ea5e9 100%)',
    shadow: 'rgba(34,211,238,0.3)',
    size: 68,
    orbit: 860,
    speed: 0.0022,
    opacity: 0.4,
    border: '2px solid #22d3ee',
  },
];

// Typing Effect Component corrigido
function TypingEffect() {
  const phrases = [
    "Front-end Developer & Space UI Explorer",
    "Full Stack Astronaut",
    "Advocate of Clean Code",
    "Cosmic Interface Designer",
    "React Nebula Navigator",
    "Galactic UX Enthusiast",
    "TypeScript Star Mapper"
  ];
  const [displayed, setDisplayed] = useStateReact('');
  const [phraseIdx, setPhraseIdx] = useStateReact(0);
  const [charIdx, setCharIdx] = useStateReact(0);
  const [deleting, setDeleting] = useStateReact(false);

  useEffectReact(() => {
    const currentPhrase = phrases[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < currentPhrase.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentPhrase.slice(0, charIdx + 1));
        setCharIdx(charIdx + 1);
      }, 55);
    } else if (!deleting && charIdx === currentPhrase.length) {
      timeout = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentPhrase.slice(0, charIdx - 1));
        setCharIdx(charIdx - 1);
      }, 35);
    } else if (deleting && charIdx === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setPhraseIdx((phraseIdx + 1) % phrases.length);
      }, 400);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx]);

  return (
    <span
      className="block text-xl md:text-2xl font-mono text-indigo-300 mt-2"
      style={{ letterSpacing: '0.04em', minHeight: '2.5rem' }}
    >
      {displayed}
      <span className="animate-pulse text-indigo-400">|</span>
    </span>
  );
}

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

  // Estrelas
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

  useEffect(() => {
    let rafId: number;
    const updateMousePosition = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const newMousePos = { x: e.clientX, y: e.clientY };
        setMousePosition(newMousePos);
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

  // --- Ângulos dos planetas (animação fluida e extremamente lenta) ---
  const [planetAngles, setPlanetAngles] = useState(ORBIT_PLANETS.map(() => 0));
  useEffect(() => {
    let lastTime = performance.now();
    let raf: number;
    const animate = (now: number) => {
      const delta = now - lastTime;
      lastTime = now;
      setPlanetAngles(prev => prev.map((angle, i) => (angle + ORBIT_PLANETS[i].speed * delta) % 360));
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Posição do centro (nome/texto/botões)
  const centerRef = useRef<HTMLDivElement>(null);
  const [centerPos, setCenterPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (centerRef.current) {
      const rect = centerRef.current.getBoundingClientRect();
      setCenterPos({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (centerRef.current) {
        const rect = centerRef.current.getBoundingClientRect();
        setCenterPos({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

      {/* Órbitas dos planetas */}
      {centerPos.x !== 0 &&
        centerPos.y !== 0 &&
        ORBIT_PLANETS.map((planet, i) => (
          <div
            key={`orbit-${i}`}
            className="absolute"
            style={{
              left: centerPos.x - planet.orbit,
              top: centerPos.y - planet.orbit,
              width: planet.orbit * 2,
              height: planet.orbit * 2,
              pointerEvents: 'none',
              zIndex: 7,
            }}
          >
            <svg width={planet.orbit * 2} height={planet.orbit * 2}>
              <circle
                cx={planet.orbit}
                cy={planet.orbit}
                r={planet.orbit}
                stroke="rgba(255,255,255,0.13)"
                strokeWidth="1.5"
                fill="none"
                style={{ filter: 'blur(0.5px)' }}
              />
            </svg>
          </div>
        ))}

      {/* Planetas orbitando o centro */}
      {centerPos.x !== 0 &&
        centerPos.y !== 0 &&
        ORBIT_PLANETS.map((planet, i) => {
          const rad = (planetAngles[i] * Math.PI) / 180;
          const x = centerPos.x + planet.orbit * Math.cos(rad) - planet.size / 2;
          const y = centerPos.y + planet.orbit * Math.sin(rad) - planet.size / 2;
          return (
            <motion.div
              key={planet.name}
              className="absolute"
              style={{
                top: y,
                left: x,
                zIndex: 8,
                pointerEvents: 'none',
                width: planet.size,
                height: planet.size,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: i * 0.2 }}
            >
              {/* Planeta */}
              <div
                style={{
                  width: planet.size,
                  height: planet.size,
                  borderRadius: '50%',
                  background: planet.color,
                  boxShadow: `0 0 30px ${planet.shadow}`,
                  opacity: planet.opacity,
                  filter: 'blur(0.2px)',
                  border: planet.border,
                  position: 'relative',
                }}
              />
              {/* Anéis para Pyra */}
              {planet.name === 'Pyra' && (
                <svg
                  width={planet.size * 2.2}
                  height={planet.size * 2.2}
                  style={{
                    position: 'absolute',
                    left: `-${planet.size * 0.6}px`,
                    top: `-${planet.size * 0.6}px`,
                    pointerEvents: 'none',
                    zIndex: 1,
                  }}
                >
                  <ellipse
                    cx={planet.size * 1.1}
                    cy={planet.size * 1.1}
                    rx={planet.size * 1.05}
                    ry={planet.size * 0.38}
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="2"
                    opacity="0.45"
                    style={{ filter: 'blur(0.5px)' }}
                  />
                  <ellipse
                    cx={planet.size * 1.1}
                    cy={planet.size * 1.1}
                    rx={planet.size * 0.85}
                    ry={planet.size * 0.28}
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="1.2"
                    opacity="0.32"
                    style={{ filter: 'blur(0.7px)' }}
                  />
                </svg>
              )}
            </motion.div>
          );
        })}

      {/* Conteúdo Principal (centro da órbita) */}
      <motion.div
        ref={centerRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={controls}
        className="relative z-30 flex flex-col items-center text-center px-8"
      >
        {/* Nome Principal no Centro */}
        <motion.div
          ref={nameRef}
          initial="hidden"
          animate="visible"
          className="relative mb-4"
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
            className={`text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-white transition-all duration-300 cursor-default mb-2 ${
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

          {/* Typing Effect logo abaixo do nome */}
          <TypingEffect />
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