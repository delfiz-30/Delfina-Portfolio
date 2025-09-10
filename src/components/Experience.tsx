import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();
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
      company: t("experience.artech.company"),
      position: t("experience.artech.position"),
      period: t("experience.artech.period"),
      location: t("experience.artech.location"),
      description: t("experience.artech.description"),
      achievements: [
        t("experience.artech.achievement1"),
        t("experience.artech.achievement2"),
        t("experience.artech.achievement3"),
        t("experience.artech.achievement4")
      ],
      color: "blue"
    },
    {
      company: t("experience.chatcenter.company"),
      position: t("experience.chatcenter.position"),
      period: t("experience.chatcenter.period"),
      location: t("experience.chatcenter.location"),
      description: t("experience.chatcenter.description"),
      achievements: [
        t("experience.chatcenter.achievement1"),
        t("experience.chatcenter.achievement2"),
        t("experience.chatcenter.achievement3"),
        t("experience.chatcenter.achievement4")
      ],
      color: "green"
    },
    {
      company: t("experience.uba.company"),
      position: t("experience.uba.position"),
      period: t("experience.uba.period"),
      location: t("experience.uba.location"),
      description: t("experience.uba.description"),
      achievements: [
        t("experience.uba.achievement1"),
        t("experience.uba.achievement2"),
        t("experience.uba.achievement3")
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
            {t('experience.title')}
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
                        <h5 className="font-semibold text-gray-800 mb-3">{t('experience.responsibilities')}</h5>
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