import React from 'react';
import { Database, Calendar, MapPin, ChevronRight, ExternalLink, Github, ChevronDown, ChevronUp, Image } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = React.useState(false);
  const [expandedProject, setExpandedProject] = React.useState<number | null>(null);

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
      title: t("projects.database.title"),
      subtitle: t("projects.database.subtitle"),
      period: t("projects.database.period"),
      company: t("projects.database.company"),
      shortDescription: t("projects.database.shortDescription"),
      fullDescription: t("projects.database.fullDescription"),
      contributions: [
        t("projects.database.contribution1"),
        t("projects.database.contribution2"),
        t("projects.database.contribution3"),
        t("projects.database.contribution4")
      ],
      tools: ["SQL Server", "dbdiagram.io", "SSMS"],
      images: [
        {
          src: "/DiagramaSSMS_Grupo1.png",
          alt: "Diagrama de base de datos implementado en SQL Server Management Studio",
          title: t("projects.diagram1.title")
        },
        {
          src: "/DBdiagram_Empresas_Grupo1.jpg", 
          alt: "Diagrama entidad-relación diseñado en dbdiagram.io",
          title: t("projects.diagram2.title")
        }
      ],
      results: [
        t("projects.database.result1"),
        t("projects.database.result2"),
        t("projects.database.result3")
      ],
      githubUrl: "https://github.com/delfiz-30/ARTECH---Fundaci-n-Pescar.git",
      color: "blue"
    }
  ];

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 transition-colors duration-300">
            {t('projects.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => {
            const isExpanded = expandedProject === index;
            
            return (
              <div key={index} className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 dark:border-gray-700 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Project Preview Card */}
                <div 
                  className="p-8 cursor-pointer group"
                  onClick={() => toggleProject(index)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="bg-blue-100 rounded-full p-3 group-hover:bg-blue-200 transition-colors duration-300">
                        <Database className="text-blue-600 group-hover:scale-110 transition-transform duration-300" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-lg text-blue-600 font-semibold mb-3">{project.subtitle}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span className="font-medium">{project.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span className="font-medium">{project.company}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                          {project.shortDescription}
                        </p>
                      </div>
                    </div>
                    
                    <div className="ml-4 flex items-center gap-2 text-blue-600 group-hover:text-purple-600 transition-colors duration-300">
                      <span className="text-sm font-medium">
                        {isExpanded ? t('projects.hideDetails') : t('projects.viewDetails')}
                      </span>
                      {isExpanded ? (
                        <ChevronUp size={20} className="group-hover:scale-110 transition-transform duration-300" />
                      ) : (
                        <ChevronDown size={20} className="group-hover:scale-110 transition-transform duration-300" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className="px-8 pb-8 border-t border-gray-100 dark:border-gray-700">
                    <div className="pt-8">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-lg transition-colors duration-300">
                        {project.fullDescription}
                      </p>

                      {/* Tools Used */}
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 transition-colors duration-300">
                          <ExternalLink size={18} className="text-blue-600" />
                          {t('projects.toolsUsed')}
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {project.tools.map((tool, toolIndex) => (
                            <span 
                              key={toolIndex}
                              className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800/50 hover:scale-105 transition-all duration-300 cursor-pointer"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Project Diagrams */}
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 transition-colors duration-300">
                          <Image size={18} className="text-purple-600" />
                          {t('projects.diagrams')}
                        </h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          {project.images.map((image, imageIndex) => (
                            <div key={imageIndex} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300 group">
                              <div className="aspect-video bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300 mb-3">
                                <img 
                                  src={image.src}
                                  alt={image.alt}
                                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 cursor-pointer"
                                  onClick={() => window.open(image.src, '_blank')}
                                />
                              </div>
                              <h5 className="font-semibold text-gray-800 dark:text-white text-sm group-hover:text-purple-600 transition-colors duration-300">
                                {image.title}
                              </h5>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* GitHub Repository */}
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 transition-colors duration-300">
                          <Github size={18} className="text-gray-800" />
                          {t('projects.repository')}
                        </h4>
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                          <Github size={20} />
                          <span>{t('projects.viewScript')}</span>
                          <ExternalLink size={16} />
                        </a>
                      </div>

                      {/* Contributions and Results */}
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-300">{t('projects.myContribution')}</h4>
                          <div className="space-y-3">
                            {project.contributions.map((contribution, contribIndex) => (
                              <div key={contribIndex} className="flex items-start gap-3">
                                <ChevronRight size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                                <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{contribution}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-300">{t('projects.results')}</h4>
                          <div className="space-y-3">
                            {project.results.map((result, resultIndex) => (
                              <div key={resultIndex} className="flex items-start gap-3">
                                <ChevronRight size={16} className="text-green-600 mt-1 flex-shrink-0" />
                                <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;