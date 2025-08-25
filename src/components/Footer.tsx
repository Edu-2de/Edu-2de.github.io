'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900/50 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-500/30 transition-all duration-300 animate-bounce"
          >
            <ArrowUp size={20} />
          </motion.button>

          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Eduardo Silva</h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            {['Início', 'Sobre', 'Projetos', 'Contato'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase() === 'início' ? 'home' : item.toLowerCase());
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-gray-400 text-sm"
          >
            <p className="flex items-center justify-center space-x-1">
              <span>© {currentYear} Eduardo Silva. Feito com</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>usando Next.js e Tailwind CSS</span>
            </p>
          </motion.div>

          {/* Tech Stack Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 text-xs"
          >
            {['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-white/5 text-gray-400 rounded border border-gray-800"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"></div>
      </div>
    </footer>
  );
}
