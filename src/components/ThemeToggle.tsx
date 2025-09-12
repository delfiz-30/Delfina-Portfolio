import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-20 z-50 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-gray-800/30 text-gray-800 dark:text-white rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg group border border-white/20 dark:border-gray-700/20"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="flex items-center justify-center">
        {theme === 'light' ? (
          <Moon size={20} className="group-hover:rotate-12 transition-transform duration-300" />
        ) : (
          <Sun size={20} className="group-hover:rotate-12 transition-transform duration-300" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;