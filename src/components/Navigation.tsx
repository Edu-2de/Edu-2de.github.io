'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [navStars, setNavStars] = useState<Array<{ left: number; top: number; id: number }>>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 100], [0, -10]);

  useEffect(() => {
    // Só roda no cliente!
    const arr = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: 20 + Math.random() * 60,
      top: 10 + Math.random() * 80,
    }));
    setNavStars(arr);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detectar seção ativa
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

   

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      style={{ y }}
      className={`fixed top-1/2 left-12 -translate-y-1/2 z-50 flex flex-col items-center py-12 px-6 transition-all duration-500 select-none  
        ${
          isScrolled
            ? 'bg-black/30 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-3xl'
            : 'bg-black/10 backdrop-blur-xl border border-white/5 shadow-xl rounded-3xl'
        }`}
    >
      {/* Glow espacial */}
      <div className="absolute inset-0 pointer-events-none rounded-3xl z-0">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
            filter: 'blur(8px)',
            zIndex: 0,
          }}
        />
      </div>

      {/* Estrelas de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl z-0">
        {navStars.map(star => (
          <motion.div
            key={star.id}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.09, 0.18, 0.09],
              scale: [0.8, 1.2, 0.8],
              x: [0, Math.random() * 30 - 15, 0],
              y: [0, Math.random() * 40 - 20, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 2,
              repeat: Infinity,
              delay: star.id * 0.7,
              ease: 'easeInOut',
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              filter: 'blur(0.8px)',
              boxShadow: '0 0 6px rgba(255,255,255,0.3)',
            }}
          />
        ))}
      </div>

      {/* Navigation Links - vertical, centralizados */}
      <div className="flex flex-col items-center gap-10 mt-8 mb-8 relative z-10">
        {navItems.map((item, index) => {
          const isActive =
            (item.href === '#home' && activeSection === 'home') ||
            (item.href === '#about' && activeSection === 'about') ||
            (item.href === '#projects' && activeSection === 'projects') ||
            (item.href === '#contact' && activeSection === 'contact');

          return (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, x: -30 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.15 * index + 0.3,
                  type: 'spring',
                  stiffness: 100,
                  damping: 10,
                },
              }}
              whileHover={{
                x: 8,
                scale: 1.14,
                filter: 'brightness(1.4) drop-shadow(0 0 8px #6366f1)',
                transition: {
                  type: 'spring',
                  stiffness: 400,
                  damping: 12,
                  duration: 0.2,
                },
              }}
              whileTap={{
                scale: 0.97,
                transition: {
                  type: 'spring',
                  stiffness: 400,
                  damping: 12,
                },
              }}
              className={`relative group cursor-pointer text-xl font-light tracking-wider transition-all duration-300 px-6 py-3 rounded-xl
                ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-900 shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-indigo-900/30'
                }`}
              style={{
                textShadow: isActive ? '0 0 16px #6366f1' : '0 0 6px #6366f1',
                backdropFilter: isActive ? 'blur(2px)' : undefined,
                letterSpacing: '0.08em',
                position: 'relative',
              }}
            >
              {item.name}

              {/* Indicador ativo - glow orbital clean */}
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute left-1/2 -translate-x-1/2 bottom-[-14px]"
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 30,
                  }}
                >
                  <motion.div
                    animate={{
                      opacity: [0.7, 1, 0.7],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="w-6 h-2 rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, #6366f1 50%, transparent 100%)',
                      boxShadow: '0 0 16px 4px #6366f1',
                      opacity: 0.7,
                    }}
                  />
                </motion.div>
              )}

              {/* Linha de hover */}
              <motion.div
                className="absolute left-0 right-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileHover={{
                  scaleX: 1,
                  opacity: 1,
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
              />

              {/* Efeito de partículas no hover - mais sutil */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(2)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{
                      opacity: [0, 0.4, 0],
                      scale: [0, 1, 0],
                      x: [0, (Math.random() - 0.5) * 18, 0],
                      y: [0, (Math.random() - 0.5) * 18, 0],
                    }}
                    transition={{
                      duration: 1.2,
                      delay: i * 0.15,
                      ease: 'easeOut',
                    }}
                    className="absolute w-1 h-1 bg-indigo-300 rounded-full"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      filter: 'blur(0.5px)',
                      boxShadow: '0 0 6px #6366f1',
                    }}
                  />
                ))}
              </div>
            </motion.a>
          );
        })}
      </div>

      {/* Linha vertical de energia */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{
          scaleY: 1,
          opacity: 1,
        }}
        transition={{
          delay: 0.8,
          duration: 2,
          ease: 'easeOut',
        }}
        className="absolute left-1/2 -translate-x-1/2 bottom-0 top-0 w-px bg-gradient-to-b from-transparent via-indigo-400/20 to-transparent rounded-2xl"
      />
    </motion.nav>
  );
}
