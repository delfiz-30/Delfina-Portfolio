import React from 'react';
import { 
  Code, 
  Database, 
  BarChart3, 
  Users, 
  MessageSquare, 
  Target,
  Globe,
  Monitor
} from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [hoveredSkill, setHoveredSkill] = React.useState<string | null>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    { name: "Python", icon: Code, category: "Programación" },
    { name: "JavaScript", icon: Code, category: "Programación" },
    { name: "SQL", icon: Database, category: "Base de Datos" },
    { name: "Power BI", icon: BarChart3, category: "Análisis" },
    { name: "Excel", icon: BarChart3, category: "Análisis" },
    { name: "Tableau", icon: BarChart3, category: "Visualización" },
    { name: "Databricks", icon: Database, category: "Big Data" },
    { name: "PowerApps", icon: Monitor, category: "Desarrollo" }
  ];

  const interpersonalSkills = [
    { name: "Trabajo en Equipo", icon: Users },
    { name: "Comunicación Efectiva", icon: MessageSquare },
    { name: "Resolución de Problemas", icon: Target },
    { name: "Adaptabilidad", icon: Target },
    { name: "Liderazgo", icon: Users },
    { name: "Pensamiento Analítico", icon: BarChart3 }
  ];

  const tools = [
    "Microsoft Teams",
    "Outlook", 
    "PowerPoint",
    "Word",
    "Slack"
  ];

  const languages = [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "A2" }
  ];

  const getSkillColor = (category: string) => {
    const colors = {
      "Programación": "bg-blue-500 text-blue-100",
      "Base de Datos": "bg-green-500 text-green-100", 
      "Análisis": "bg-purple-500 text-purple-100",
      "Visualización": "bg-orange-500 text-orange-100",
      "Big Data": "bg-red-500 text-red-100",
      "Desarrollo": "bg-indigo-500 text-indigo-100"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500 text-gray-100";
  };

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Habilidades & Competencias
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Technical Skills */}
          <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="flex items-center gap-3 mb-8">
              <Code className={`text-blue-600 transition-all duration-1000 ${isVisible ? 'rotate-0 scale-100' : 'rotate-180 scale-0'}`} size={28} />
              <h3 className="text-2xl font-bold text-gray-800">Habilidades Técnicas</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {technicalSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                const colorClasses = getSkillColor(skill.category);
                const isHovered = hoveredSkill === skill.name;
                
                return (
                  <div 
                    key={index} 
                    className={`p-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 cursor-pointer group ${isHovered ? 'scale-105 shadow-lg' : ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                    style={{transitionDelay: `${index * 100}ms`}}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent size={24} className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                      <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{skill.name}</span>
                    </div>
                    <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${colorClasses} group-hover:scale-110 transition-transform duration-300`}>
                      {skill.category}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interpersonal Skills */}
          <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="flex items-center gap-3 mb-8">
              <Users className={`text-purple-600 transition-all duration-1000 delay-300 ${isVisible ? 'rotate-0 scale-100' : 'rotate-180 scale-0'}`} size={28} />
              <h3 className="text-2xl font-bold text-gray-800">Habilidades Interpersonales</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {interpersonalSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={index} className={`bg-purple-50 rounded-xl p-4 border border-purple-100 hover:bg-purple-100 hover:scale-105 transition-all duration-300 cursor-pointer group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{transitionDelay: `${index * 100 + 300}ms`}}>
                    <div className="flex items-center gap-3">
                      <IconComponent size={20} className="text-purple-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-medium text-gray-800 text-sm group-hover:text-purple-600 transition-colors duration-300">{skill.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Tools & Software */}
          <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-3 mb-8">
              <Monitor className={`text-green-600 transition-all duration-1000 delay-700 ${isVisible ? 'rotate-0 scale-100' : 'rotate-180 scale-0'}`} size={28} />
              <h3 className="text-2xl font-bold text-gray-800">Herramientas Informáticas</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <span 
                  key={index}
                  className={`bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium hover:bg-green-200 hover:scale-110 transition-all duration-300 cursor-pointer ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                  style={{transitionDelay: `${index * 100 + 700}ms`}}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-3 mb-8">
              <Globe className={`text-orange-600 transition-all duration-1000 delay-900 ${isVisible ? 'rotate-0 scale-100' : 'rotate-180 scale-0'}`} size={28} />
              <h3 className="text-2xl font-bold text-gray-800">Idiomas</h3>
            </div>
            
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className={`flex items-center justify-between p-4 bg-orange-50 rounded-xl border border-orange-100 hover:bg-orange-100 hover:scale-105 transition-all duration-300 cursor-pointer ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`} style={{transitionDelay: `${index * 200 + 900}ms`}}>
                  <span className="font-semibold text-gray-800">{lang.name}</span>
                  <span className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;