'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { Language } from '@/lib/translations';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="fixed top-6 right-6 z-50 flex gap-2">
      <button
        onClick={() => handleLanguageChange('en')}
        className={`
          relative w-12 h-8 rounded-lg overflow-hidden border-2 transition-all duration-300 transform
          ${
            language === 'en'
              ? 'border-blue-400 shadow-lg shadow-blue-400/30 scale-110'
              : 'border-slate-600 hover:border-slate-400 hover:scale-105'
          }
        `}
        title="English"
      >
        {/* US Flag */}
        <div className="w-full h-full relative">
          {/* Red stripes */}
          <div className="absolute inset-0 bg-red-600">
            <div className="w-full h-[6.25%] bg-white"></div>
            <div className="w-full h-[6.25%] bg-red-600 mt-[6.25%]"></div>
            <div className="w-full h-[6.25%] bg-white mt-[6.25%]"></div>
            <div className="w-full h-[6.25%] bg-red-600 mt-[6.25%]"></div>
            <div className="w-full h-[6.25%] bg-white mt-[6.25%]"></div>
            <div className="w-full h-[6.25%] bg-red-600 mt-[6.25%]"></div>
            <div className="w-full h-[6.25%] bg-white mt-[6.25%]"></div>
            <div className="w-full h-[6.25%] bg-red-600 mt-[6.25%]"></div>
            <div className="w-full h-[6.25%] bg-white mt-[6.25%]"></div>
            <div className="w-full h-[6.25%] bg-red-600 mt-[6.25%]"></div>
            <div className="w-full h-[6.25%] bg-white mt-[6.25%]"></div>
            <div className="w-full h-[6.25%] bg-red-600 mt-[6.25%]"></div>
            <div className="w-full h-[6.25%] bg-white mt-[6.25%]"></div>
          </div>
          {/* Blue rectangle */}
          <div className="absolute top-0 left-0 w-[40%] h-[53.85%] bg-blue-800"></div>
          {/* Stars representation */}
          <div className="absolute top-1 left-1 grid grid-cols-6 gap-[1px] w-4 h-4">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="w-[2px] h-[2px] bg-white rounded-full"></div>
            ))}
          </div>
        </div>
      </button>

      <button
        onClick={() => handleLanguageChange('pt')}
        className={`
          relative w-12 h-8 rounded-lg overflow-hidden border-2 transition-all duration-300 transform
          ${
            language === 'pt'
              ? 'border-green-400 shadow-lg shadow-green-400/30 scale-110'
              : 'border-slate-600 hover:border-slate-400 hover:scale-105'
          }
        `}
        title="Português"
      >
        {/* Brazilian Flag */}
        <div className="w-full h-full relative bg-green-600">
          {/* Yellow diamond */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-8 h-5 bg-yellow-400 transform rotate-45"
              style={{
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              }}
            ></div>
          </div>
          {/* Blue circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-blue-800 rounded-full"></div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
