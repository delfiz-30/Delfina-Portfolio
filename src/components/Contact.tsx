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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div>
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              
              <div className="space-y-4">
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

            <div className="text-center">
              <h4 className="text-xl font-semibold mb-4">¿Prefieres contacto directo?</h4>
              <button
                onClick={handleEmailClick}
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 hover:scale-110 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-green-500/25 group mx-auto"
              >
                <Send size={20} className="group-hover:translate-x-1 group-hover:rotate-12 transition-transform duration-300" />
                <span>Abrir Email</span>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-bold mb-6">Envía un Mensaje</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle size={64} className="text-green-400 mx-auto mb-4 animate-bounce" />
                <h4 className="text-xl font-bold mb-2">¡Mensaje Enviado!</h4>
                <p className="text-blue-100">Gracias por contactarme. Te responderé pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:border-white focus:bg-white/30 focus:scale-105 transition-all duration-300"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:border-white focus:bg-white/30 focus:scale-105 transition-all duration-300"
                      placeholder="tu.email@ejemplo.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:border-white focus:bg-white/30 focus:scale-105 transition-all duration-300"
                    placeholder="Motivo de tu mensaje"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:border-white focus:bg-white/30 focus:scale-105 transition-all duration-300 resize-none"
                    placeholder="Cuéntame más sobre tu propuesta o consulta..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl group"
                >
                  <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Enviar Mensaje</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Email Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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