'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { Language } from '@/lib/translations';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const GlobalLanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  const languages = [
    { code: 'en' as Language, label: 'EN', name: 'English', flag: '/flags/us.svg' },
    { code: 'pt' as Language, label: 'PT', name: 'Português', flag: '/flags/br.svg' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full mb-2 right-0 bg-slate-800 border border-slate-700 rounded-xl p-2 shadow-xl backdrop-blur-sm min-w-[100px]"
          >
            {languages.map(lang => (
              <motion.button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  w-full text-left px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium flex items-center gap-3
                  ${
                    language === lang.code
                      ? 'bg-slate-700 text-white border border-slate-600'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }
                `}
              >
                <div className="w-6 h-4 relative overflow-hidden rounded">
                  <Image
                    src={lang.flag}
                    alt={lang.name}
                    width={24}
                    height={16}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{lang.name}</span>
                    {language === lang.code && <div className="w-2 h-2 bg-green-400 rounded-full"></div>}
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-slate-800 border border-slate-700 rounded-full hover:bg-slate-700 hover:border-slate-600 transition-all duration-300 shadow-lg backdrop-blur-sm flex items-center justify-center relative overflow-hidden"
      >
        <div className="w-8 h-6 relative">
          <Image
            src={currentLanguage?.flag || '/flags/us.svg'}
            alt={currentLanguage?.name || 'English'}
            width={32}
            height={24}
            className="w-full h-full object-cover rounded"
          />
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-1 right-1 text-[8px] text-slate-300 bg-slate-900 rounded-full w-3 h-3 flex items-center justify-center"
        >
          ▼
        </motion.div>
      </motion.button>
    </div>
  );
};

export default GlobalLanguageSwitcher;
