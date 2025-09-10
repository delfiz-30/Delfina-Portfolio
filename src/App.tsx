import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import LanguageToggle from './components/LanguageToggle';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <LanguageToggle />
        <Header />
        <main className="relative">
          <About />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;