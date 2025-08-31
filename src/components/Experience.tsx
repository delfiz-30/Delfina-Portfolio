import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const [visibleItems, setVisibleItems] = React.useState<number[]>([]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-index]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      company: "ARTECH | FUNDACIÓN PESCAR",
      position: "Pasante de SAP, Análisis de Datos e IA",
      period: "Jul 2025 - Presente",
      location: "Buenos Aires, Argentina",
      description: "Programa de formación intensiva para el empleo, enfocado en tecnologías y habilidades socioemocionales.",
      achievements: [
        "Formación técnica (237 hs): SQL, Power BI, Python, Databricks y PowerApps, ABAP, Fiori, JavaScript y SAP BTP",
        "Desarrollo de habilidades interpersonales (180 hs): comunicación efectiva, trabajo en equipo, liderazgo",
        "Aplicación práctica de herramientas de IA y análisis de datos",
        "Carga horaria total: 318 horas"
      ],
      color: "blue"
    },
    {
      company: "CHATCENTER",
      position: "Asesora Comercial",
      period: "Oct 2024 - Presente",
      location: "Buenos Aires, Argentina",
      description: "Asesoramiento especializado a clientes sobre asistencias para viajeros.",
      achievements: [
        "Asesoramiento a clientes sobre productos y servicios de asistencia al viajero",
        "Gestión de interacciones a través de chat en vivo",
        "Atención personalizada y eficiente",
        "Manejo de consultas complejas y resolución de problemas"
      ],
      color: "green"
    },
    {
      company: "UNIVERSIDAD DE BUENOS AIRES (UBA), FACULTAD DE MEDICINA",
      position: "Ayudante de Cátedra (Ad Honorem)",
      period: "Feb 2023 - Jul 2023",
      location: "Buenos Aires, Argentina",
      description: "Colaboración voluntaria en la Cátedra 2 de Embriología, como docente.",
      achievements: [
        "Preparación de materiales educativos para estudiantes de medicina",
        "Asistencia en la tutoría y orientación académica de estudiantes",
        "Colaboración en la evaluación y seguimiento del progreso estudiantil"
      ],
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-200",
        accent: "bg-blue-500"
      },
      green: {
        bg: "bg-green-100",
        text: "text-green-600",
        border: "border-green-200",
        accent: "bg-green-500"
      },
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        border: "border-purple-200",
        accent: "bg-purple-500"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="experience" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Experiencia Profesional
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full animate-pulse"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const colorClasses = getColorClasses(exp.color);
              const isVisible = visibleItems.includes(index);
              
              return (
                <div key={index} className="relative" data-index={index}>
                  {/* Timeline Dot */}
                  <div className={`absolute left-2 md:left-6 w-4 h-4 ${colorClasses.accent} rounded-full border-4 border-white shadow-lg transition-all duration-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} hover:scale-125`}></div>
                  
                  <div className="ml-12 md:ml-20">
                    <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 border-l-4 ${colorClasses.border} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} group`}>
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{exp.position}</h3>
                          <h4 className="text-xl font-semibold text-blue-600 mb-3 group-hover:text-purple-600 transition-colors duration-300">{exp.company}</h4>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span className="font-medium">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

                      <div className="space-y-3">
                        <h5 className="font-semibold text-gray-800 mb-3">Responsabilidades y Logros:</h5>
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-start gap-3">
                            <ChevronRight size={16} className={`${colorClasses.text} mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300`} />
                            <span className="text-gray-600">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;