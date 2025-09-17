import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Education = () => {
  const { t } = useLanguage();
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
      institution: t("education.uba.institution"),
      degree: t("education.uba.degree"),
      period: t("education.uba.period"),
      type: t("education.uba.type"),
      description: t("education.uba.description"),
      color: "blue"
    },
    {
      institution: t("education.eest.institution"),
      degree: t("education.eest.degree"),
      period: t("education.eest.period"),
      type: t("education.eest.type"),
      description: t("education.eest.description"),
      color: "green"
    }
  ];

  const certifications = [
    {
      title: t("certifications.kpmg.title"),
      period: t("certifications.kmpg.period"),
      description: t("certifications.kmpg.description"),
      skills: t("certifications.kmpg.skills")
    },
    {
      title: t("certifications.data.title"),
      provider: t("certifications.data.provider"),
      period: t("certifications.data.period"),
      description: t("certifications.data.description"),
      skills: t("certifications.data.skills")
    },
    {
      title: t("certifications.js.title"),
      provider: t("certifications.js.provider"),
      period: t("certifications.js.period"),
      description: t("certifications.js.description"),
      skills: t("certifications.js.skills")
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-relaxed pb-2">
            {t('education.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className={`text-blue-600 transition-all duration-1000 ${isVisible ? 'rotate-0 scale-100' : 'rotate-180 scale-0'}`} size={32} />
            <h3 className="text-2xl font-bold text-gray-800">{t('education.formal')}</h3>
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
            <h3 className="text-2xl font-bold text-gray-800">{t('education.certifications')}</h3>
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