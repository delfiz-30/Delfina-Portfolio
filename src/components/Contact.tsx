import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:Delfiagustina30@gmail.com?subject=Contacto desde Portfolio&body=Hola Delfina,%0D%0A%0D%0AMe gustaría ponerme en contacto contigo.%0D%0A%0D%0ASaludos,';
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contacto
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-blue-200 mx-auto mb-8"></div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            ¿Interesado en colaborar o conocer más sobre mi trabajo? ¡Me encantaría escuchar de ti!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className={`space-y-8 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <a 
                  href="mailto:Delfiagustina30@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 block group"
                >
                  <div className="bg-green-500 rounded-full p-3 group-hover:bg-green-400 transition-colors duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm">Email</p>
                    <p className="font-semibold">Delfiagustina30@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <div className="bg-purple-500 rounded-full p-3 group-hover:bg-purple-400 transition-colors duration-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm">Ubicación</p>
                    <p className="font-semibold">Buenos Aires, Argentina</p>
                  </div>
                </div>

                <a 
                  href="https://linkedin.com/in/delfinaagustinazapata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 block group"
                >
                  <div className="bg-blue-600 rounded-full p-3 group-hover:bg-blue-500 transition-colors duration-300">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm">LinkedIn</p>
                    <p className="font-semibold">delfinaagustinazapata</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Email Call to Action */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 max-w-2xl mx-auto hover:bg-white/15 transition-all duration-500">
            <h3 className="text-3xl font-bold mb-6">¡Trabajemos Juntos!</h3>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              ¿Tienes una oportunidad laboral o proyecto interesante? Me encantaría conocer más detalles.
            </p>
            
            <button
              onClick={handleEmailClick}
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 hover:scale-110 text-white font-bold py-6 px-12 rounded-2xl transition-all duration-300 flex items-center gap-4 shadow-2xl hover:shadow-green-500/25 group text-xl mx-auto"
            >
              <Send size={28} className="group-hover:translate-x-2 group-hover:rotate-12 transition-transform duration-300" />
              <span>Contactar por Email</span>
            </button>
            
            <p className="text-sm text-blue-200 mt-4">
  
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="text-blue-200">
            © 2025 Delfina Agustina Zapata Peres. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;