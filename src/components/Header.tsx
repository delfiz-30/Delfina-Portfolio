import React from 'react';
import { Mail, Phone, MapPin, Linkedin, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-1000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-500"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className={`relative z-10 text-center max-w-4xl mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Profile Image Placeholder */}
        <div className="w-48 h-48 mx-auto mb-8 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer animate-bounce-slow overflow-hidden border-4 border-white/30">
          <img 
            src="https://i.postimg.cc/Jnyh1N87/foto-de-perfil-de-Linkedin.jpg" 
            alt="Delfina Agustina Zapata Peres"
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
          Delfina Agustina
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-blue-100 hover:text-white transition-colors duration-300">
          Zapata Peres
        </h2>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed hover:text-white transition-colors duration-300">
          Estudiante de Ingeniería Industrial | Especialista en Análisis de Datos & IA
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
            <MapPin size={18} />
            <span>Buenos Aires, Argentina</span>
          </div>
          <a 
            href="mailto:Delfiagustina30@gmail.com"
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 hover:scale-105 transition-all duration-300"
          >
            <Mail size={18} />
            <span>Delfiagustina30@gmail.com</span>
          </a>
          <a 
            href="https://linkedin.com/in/delfinaagustinazapata"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 hover:scale-105 transition-all duration-300"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 hover:scale-110 transition-all duration-300 group"
        >
          <ChevronDown size={24} className="group-hover:animate-pulse" />
        </button>
      </div>
    </header>
  );
};

export default Header;