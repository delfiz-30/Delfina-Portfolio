import React from 'react';
import { Database, Calendar, MapPin, ChevronRight, ExternalLink } from 'lucide-react';

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

  const projects = [
    {
      title: "Base de datos para portal de empleos – Pasantía en Artech (2025)",
      period: "2025",
      company: "ARTECH",
      description: "Durante mi pasantía en Artech, participé en el diseño e implementación de una base de datos en SQL Server para un portal de empleos. El proyecto incluyó modelado en dbdiagram.io, creación de tablas y relaciones en SSMS, carga de datos de prueba y consultas SQL de validación.",
      contributions: [
        "Diseño del diagrama entidad–relación",
        "Creación del script SQL con tablas, constraints y relaciones",
        "Inserción de datos de prueba (empresas, ofertas, usuarios y postulaciones)",
        "Consultas SQL de validación para asegurar integridad"
      ],
      tools: ["SQL Server", "dbdiagram.io", "SSMS"],
      results: [
        "Base de datos funcional y escalable para un portal de empleos",
        "Datos cargados y validados",
        "Consultas implementadas para empresas y postulantes"
      ],
      color: "blue"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Proyectos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        {/* Main Project */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 border border-gray-200 group">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Project Header */}
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-blue-100 rounded-full p-3 group-hover:bg-blue-200 transition-colors duration-300">
                      <Database className="text-blue-600 group-hover:scale-110 transition-transform duration-300" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span className="font-medium">{project.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span className="font-medium">{project.company}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Project Images */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-800 mb-4">Diagramas del Proyecto</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-300">
                        <img 
                          src="https://i.postimg.cc/mhnMydR6/DBdiagram-Empresas-Grupo1.jpg"
                          alt="Diagrama entidad-relación en dbdiagram.io"
                          className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                          onClick={() => window.open('https://i.postimg.cc/mhnMydR6/DBdiagram-Empresas-Grupo1.jpg', '_blank')}
                        />
                        <p className="text-sm text-gray-600 mt-2 text-center font-medium">Diagrama ER - dbdiagram.io</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-300">
                        <img 
                          src="https://i.postimg.cc/8jrvKhzk/Diagrama-SSMS-Grupo1.png"
                          alt="Implementación en SQL Server Management Studio"
                          className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                          onClick={() => window.open('https://i.postimg.cc/8jrvKhzk/Diagrama-SSMS-Grupo1.png', '_blank')}
                        />
                        <p className="text-sm text-gray-600 mt-2 text-center font-medium">Implementación - SSMS</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tools Used */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <ExternalLink size={18} className="text-blue-600" />
                    Herramientas Utilizadas
                  </h4>
                  <div className="space-y-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span 
                        key={toolIndex}
                        className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 hover:bg-blue-200 hover:scale-105 transition-all duration-300 cursor-pointer"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contributions */}
              <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-800 mb-4">Mi Aporte</h4>
                  <div className="space-y-3">
                    {project.contributions.map((contribution, contribIndex) => (
                      <div key={contribIndex} className="flex items-start gap-3">
                        <ChevronRight size={16} className="text-blue-600 mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                        <span className="text-gray-600">{contribution}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-4">Resultados</h4>
                  <div className="space-y-3">
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-start gap-3">
                        <ChevronRight size={16} className="text-green-600 mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                        <span className="text-gray-600">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;