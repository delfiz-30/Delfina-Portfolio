import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 bg-white/90 backdrop-blur-md hover:bg-white text-gray-800 hover:text-gray-900 rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl border border-white/50 group"
      aria-label={`Switch to ${language === 'es' ? 'English' : 'Spanish'}`}
    >
      <div className="flex items-center gap-2">
        <Globe size={20} className="text-blue-600 group-hover:text-purple-600 group-hover:rotate-12 transition-all duration-300" />
        <span className="text-sm font-semibold">
          {language === 'es' ? 'EN' : 'ES'}
        </span>
      </div>
    </button>
  );
};

export default LanguageToggle;