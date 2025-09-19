'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Globe , Star, Satellite } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home', icon: <Rocket size={20} /> },
  { name: 'About', href: '#about', icon: <Globe size={20} /> },
  { name: 'Work', href: '#projects', icon: <Star size={20} /> },
  { name: 'Contact', href: '#contact', icon: <Satellite size={20} /> },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');


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
    <motion.nav
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-1/2 left-10 -translate-y-1/2 z-50 flex flex-col gap-8"
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
  );
}
