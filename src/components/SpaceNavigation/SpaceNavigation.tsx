'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Globe, Star, Satellite } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export default function Navigation() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: t.home, href: '#home', icon: <Rocket size={20} /> },
    { name: t.about, href: '#about', icon: <Globe size={20} /> },
    { name: t.work, href: '#projects', icon: <Star size={20} /> },
    { name: t.contact, href: '#contact', icon: <Satellite size={20} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation - Left Side */}
      <motion.nav
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="hidden md:flex fixed top-1/2 left-10 -translate-y-1/2 z-50 flex-col gap-8"
      >
        {navItems.map((item, index) => {
          const isActive = activeSection === item.href.replace('#', '');

          return (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5, ease: 'easeOut' }}
              className={`relative flex items-center gap-2 text-lg font-medium cursor-pointer transition-colors
                ${isActive ? 'text-[#a2b2fd]' : 'text-gray-300 hover:text-white'}
              `}
              whileHover={{
                scale: 1.1,
                textShadow: '0px 0px 12px rgba(162, 178, 253, 0.9)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              {item.icon}
              {item.name}

              {isActive && (
                <motion.div
                  layoutId="activeLine"
                  className="absolute -bottom-2 left-0 w-full h-[3px] rounded-full"
                  style={{
                    background: '#a2b2fd',
                    boxShadow: '0px 0px 10px #a2b2fd',
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                />
              )}
            </motion.a>
          );
        })}
      </motion.nav>

      {/* Mobile Navigation - Top Menu */}
      <motion.nav
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="md:hidden fixed top-2 left-1/2 -translate-x-1/2 z-50 bg-black/80 backdrop-blur-lg border border-gray-700/50 rounded-2xl px-3 py-1"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(20, 20, 40, 0.9))',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 20px rgba(162, 178, 253, 0.1)',
        }}
      >
        <div className="flex items-center gap-6">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href.replace('#', '');

            return (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5, ease: 'easeOut' }}
                className={`relative flex flex-col items-center gap-1 text-xs font-medium cursor-pointer transition-all duration-300
                  ${isActive ? 'text-[#a2b2fd]' : 'text-gray-400 hover:text-white'}
                `}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`p-2 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-[#a2b2fd]/20 shadow-lg shadow-[#a2b2fd]/20' 
                    : 'hover:bg-white/10'
                }`}>
                  {item.icon}
                </div>
                <span className="text-[10px]">{item.name}</span>

                {isActive && (
                  <motion.div
                    layoutId="activeMobileDot"
                    className="absolute -top-1 w-1 h-1 rounded-full"
                    style={{
                      background: '#a2b2fd',
                      boxShadow: '0px 0px 6px #a2b2fd',
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  />
                )}
              </motion.a>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
}
