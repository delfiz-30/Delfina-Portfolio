import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
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

    const element = document.getElementById('education');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      institution: "Universidad de Buenos Aires (UBA)",
      degree: "Ingeniería Industrial",
      period: "2025 - Presente",
      type: "Carrera Universitaria",
      description: "Formación integral en optimización de procesos, gestión de operaciones y análisis cuantitativo.",
      color: "blue"
    },
    {
      institution: "EEST Nª2: \"República de Venezuela\" Merlo",
      degree: "Técnica Química",
      period: "2015 - 2021",
      type: "Formación Técnica",
      description: "Formación técnica especializada en procesos químicos y análisis de laboratorio.",
      color: "green"
    }
  ];

  const certifications = [
    {
      title: "KPMG - Programa Construyendo tu futuro",
      period: "Abril 2025 - Jun 2025",
      description: "Curso de Asistente Administrativo",
      skills: ["Microsoft Teams", "Outlook", "Excel", "Gestión del tiempo", "Comunicación", "Procesos internos"]
    },
    {
      title: "Introducción a Data Analytics",
      provider: "Chicas en Tecnología",
      period: "Mar 2025",
      description: "Análisis y visualización de datos",
      skills: ["Excel", "Tableau", "Proyecto en equipo", "Problemática social"]
    },
    {
      title: "Introducción a la Programación con JavaScript",
      provider: "ADA ITW",
      period: "Oct 2024 - Dic 2024",
      description: "Fundamentos de programación",
      skills: ["JavaScript", "Lógica de programación", "Desarrollo de programas"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-200"
      },
      green: {
        bg: "bg-green-100",
        text: "text-green-600", 
        border: "border-green-200"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Educación & Certificaciones
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className={`text-blue-600 transition-all duration-1000 ${isVisible ? 'rotate-0 scale-100' : 'rotate-180 scale-0'}`} size={32} />
            <h3 className="text-2xl font-bold text-gray-800">Educación Formal</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => {
              const colorClasses = getColorClasses(edu.color);
              
              return (
                <div key={index} className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 border-l-4 ${colorClasses.border} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} group`} style={{transitionDelay: `${index * 200}ms`}}>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${colorClasses.bg} ${colorClasses.text} group-hover:scale-110 transition-transform duration-300`}>
                    {edu.type}
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{edu.degree}</h4>
                  <h5 className="text-lg font-semibold text-blue-600 mb-3 group-hover:text-purple-600 transition-colors duration-300">{edu.institution}</h5>
                  
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Calendar size={16} />
                    <span className="font-medium">{edu.period}</span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className={`text-purple-600 transition-all duration-1000 delay-500 ${isVisible ? 'rotate-0 scale-100' : 'rotate-180 scale-0'}`} size={32} />
            <h3 className="text-2xl font-bold text-gray-800">Cursos & Certificaciones</h3>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 border border-gray-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} group`} style={{transitionDelay: `${(index + 2) * 200}ms`}}>
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-purple-100 rounded-full p-2 flex-shrink-0 group-hover:bg-purple-200 transition-colors duration-300">
                    <BookOpen className="text-purple-600 group-hover:scale-110 transition-transform duration-300" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-purple-600 transition-colors duration-300">{cert.title}</h4>
                    {cert.provider && (
                      <p className="text-blue-600 font-semibold mb-2 group-hover:text-purple-500 transition-colors duration-300">{cert.provider}</p>
                    )}
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <Calendar size={14} />
                      <span>{cert.period}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">{cert.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium hover:bg-purple-100 hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;