import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg group"
      aria-label={`Switch to ${language === 'es' ? 'English' : 'Spanish'}`}
    >
      <div className="flex items-center gap-2">
        <Globe size={20} className="group-hover:rotate-12 transition-transform duration-300" />
        <span className="text-sm font-semibold">
          {language === 'es' ? 'EN' : 'ES'}
        </span>
      </div>
    </button>
  );
};

export default LanguageToggle;