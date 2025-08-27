import React from 'react';
import { Folder, Clock, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Proyectos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className={`flex flex-col items-center justify-center min-h-[400px] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-2xl p-12 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 border border-gray-200 text-center max-w-2xl group">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-full p-6 w-24 h-24 mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
              <Folder className="text-blue-600 w-full h-full group-hover:text-purple-600 transition-colors duration-300" />
            </div>
            
            <h3 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
              Próximamente
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Estoy trabajando en proyectos emocionantes que combinan análisis de datos, 
              inteligencia artificial y optimización de procesos. ¡Pronto compartiré mis trabajos más destacados!
            </p>
            
            <div className="flex items-center justify-center gap-3 text-blue-600 font-semibold group-hover:text-purple-600 transition-colors duration-300">
              <Clock size={20} className="animate-pulse" />
              <span>En desarrollo...</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </div>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 mt-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-100 group">
            <div className="bg-blue-100 rounded-lg p-4 mb-4 group-hover:bg-blue-200 transition-colors duration-300">
              <h4 className="font-bold text-blue-800 mb-2">Análisis de Datos</h4>
              <p className="text-sm text-blue-600">Proyectos con Python, SQL y Power BI</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-100 group">
            <div className="bg-purple-100 rounded-lg p-4 mb-4 group-hover:bg-purple-200 transition-colors duration-300">
              <h4 className="font-bold text-purple-800 mb-2">Inteligencia Artificial</h4>
              <p className="text-sm text-purple-600">Implementaciones con IA y Machine Learning</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-100 group">
            <div className="bg-green-100 rounded-lg p-4 mb-4 group-hover:bg-green-200 transition-colors duration-300">
              <h4 className="font-bold text-green-800 mb-2">Optimización</h4>
              <p className="text-sm text-green-600">Mejora de procesos industriales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;