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
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 100], [0, -10]);

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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      style={{ y }}
      className={`fixed top-6 left-0 right-0 z-50 transition-all duration-500 select-none ${
        isScrolled
          ? 'bg-black/20 backdrop-blur-2xl border border-white/5 shadow-2xl rounded-2xl mx-8'
          : 'bg-transparent'
      }`}
    >
      {/* Partículas de fundo sutis */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.05, 0.15, 0.05],
              scale: [0.8, 1.2, 0.8],
              x: [0, Math.random() * 60 - 30, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 1.2,
              ease: 'easeInOut',
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${30 + Math.random() * 40}%`,
              filter: 'blur(0.5px)',
              boxShadow: '0 0 3px rgba(255,255,255,0.3)',
            }}
          />
        ))}
      </div>

      {/* Container principal - largura total */}
      <div className="w-full px-8 py-12">
        {/* Navigation Links - centralizados no meio da tela com gap */}
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-24">
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
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: 0.15 * index + 0.3,
                      type: 'spring',
                      stiffness: 100,
                      damping: 10
                    }
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.15,
                    filter: 'brightness(1.3)',
                    transition: {
                      type: 'spring',
                      stiffness: 400,
                      damping: 12,
                      duration: 0.2
                    }
                  }}
                  whileTap={{
                    scale: 0.95,
                    transition: {
                      type: 'spring',
                      stiffness: 400,
                      damping: 12,
                    }
                  }}
                  className={`relative group cursor-pointer text-lg font-light tracking-wider transition-all duration-300 ${
                    isActive 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                  style={{
                    textShadow: isActive ? '0 0 12px rgba(255,255,255,0.4)' : 'none',
                  }}
                >
                  {item.name}
                  
                  {/* Indicador ativo */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    >
                      <motion.div
                        animate={{
                          opacity: [0.7, 1, 0.7],
                          scale: [1, 1.3, 1],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="w-2 h-2 bg-white rounded-full"
                        style={{
                          boxShadow: '0 0 15px rgba(255,255,255,0.9)',
                        }}
                      />
                    </motion.div>
                  )}

                  {/* Linha de hover */}
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ 
                      scaleX: 1, 
                      opacity: 1,
                      transition: { duration: 0.3, ease: 'easeOut' }
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
                        className="absolute w-0.5 h-0.5 bg-white rounded-full"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          filter: 'blur(0.3px)',
                          boxShadow: '0 0 3px rgba(255,255,255,0.5)',
                        }}
                      />
                    ))}
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Linha inferior de energia */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ 
          scaleX: 1, 
          opacity: 1,
        }}
        transition={{ 
          delay: 0.8, 
          duration: 2,
          ease: 'easeOut'
        }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-b-2xl"
      />
    </motion.nav>
  );
}