'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { Language } from '@/lib/translations';
import Image from 'next/image';

const GlobalLanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  const languages = [
    { code: 'en' as Language, label: 'EN', name: 'English', flag: '/flags/us.svg' },
    { code: 'pt' as Language, label: 'PT', name: 'Português', flag: '/flags/br.svg' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleLanguageToggle}
        className="w-14 h-14 bg-slate-800 border border-slate-700 rounded-full hover:bg-slate-700 hover:border-slate-600 transition-colors duration-200 shadow-lg backdrop-blur-sm flex items-center justify-center p-2"
        title={`Switch to ${language === 'en' ? 'Português' : 'English'}`}
      >
        <div className="w-8 h-6 relative overflow-hidden rounded">
          <Image
            src={currentLanguage?.flag || '/flags/us.svg'}
            alt={currentLanguage?.name || 'English'}
            width={32}
            height={24}
            className="w-full h-full object-cover"
          />
        </div>
      </button>
    </div>
  );
};

export default GlobalLanguageSwitcher;
