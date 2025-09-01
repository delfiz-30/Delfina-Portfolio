import React from 'react';
import { Target, TrendingUp, Users } from 'lucide-react';

const About = () => {
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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Sobre Mí
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <p className="text-lg text-gray-600 leading-relaxed">
              Soy estudiante de <strong>Ingeniería Industrial</strong> con formación técnica en Química y una 
              pasión por el <strong>análisis de datos</strong> y la mejora de procesos. Mi experiencia combina 
              conocimientos técnicos sólidos con habilidades interpersonales desarrolladas.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Actualmente me desempeño como <strong>Pasante de Análisis de Datos e IA</strong> en ARTECH, 
              donde aplico tecnologías como Python, SQL y Power BI para resolver problemas complejos. 
              Mi objetivo es contribuir a través del análisis estratégico de datos.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Tengo un fuerte compromiso con el aprendizaje continuo y la excelencia, con particular interés 
              en roles que me permitan desarrollar mis competencias técnicas y analíticas en entornos desafiantes.
            </p>
          </div>

          <div className={`grid gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 group">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-full p-3 group-hover:bg-blue-200 transition-colors duration-300">
                  <Target className="text-blue-600 group-hover:scale-110 transition-transform duration-300" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Pensamiento Analítico</h3>
                  <p className="text-gray-600">
                    Enfoque sistemático para identificar patrones y optimizar procesos mediante análisis de datos.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 group">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-full p-3 group-hover:bg-green-200 transition-colors duration-300">
                  <TrendingUp className="text-green-600 group-hover:scale-110 transition-transform duration-300" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Orientación a Resultados</h3>
                  <p className="text-gray-600">
                    Compromiso con la entrega de soluciones eficientes y mejoras medibles en los procesos.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 group">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 rounded-full p-3 group-hover:bg-purple-200 transition-colors duration-300">
                  <Users className="text-purple-600 group-hover:scale-110 transition-transform duration-300" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Trabajo en Equipo</h3>
                  <p className="text-gray-600">
                    Habilidades interpersonales sólidas para colaborar efectivamente en proyectos multidisciplinarios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;