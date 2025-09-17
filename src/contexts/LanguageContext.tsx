import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Header
    'header.title': 'Delfina Agustina',
    'header.subtitle': 'Zapata Peres',
    'header.description': 'Estudiante de Ingeniería Industrial | Pasante en SAP e IA',
    'header.location': 'Buenos Aires, Argentina',
    
    // About
    'about.title': 'Sobre Mí',
    'about.description1': 'Soy estudiante de <strong>Ingeniería Industrial</strong> con formación técnica en Química y una pasión por el <strong>análisis de datos</strong> y la mejora de procesos. Mi experiencia combina conocimientos técnicos sólidos con habilidades interpersonales desarrolladas.',
    'about.description2': 'Actualmente me desempeño como <strong>Pasante en SAP, Análisis de Datos e IA</strong> en ARTECH, donde aplico tecnologías como Python, SQL, ABAP, Fiori, SAP BTP para resolver problemas complejos. Mi objetivo es contribuir a través del análisis estratégico de datos.',
    'about.description3': 'Tengo un fuerte compromiso con el aprendizaje continuo y la excelencia, con particular interés en roles que me permitan desarrollar mis competencias técnicas y analíticas en entornos desafiantes.',
    'about.analytical.title': 'Pensamiento Analítico',
    'about.analytical.description': 'Enfoque sistemático para identificar patrones y optimizar procesos mediante análisis de datos.',
    'about.results.title': 'Orientación a Resultados',
    'about.results.description': 'Compromiso con la entrega de soluciones eficientes y mejoras medibles en los procesos.',
    'about.teamwork.title': 'Trabajo en Equipo',
    'about.teamwork.description': 'Habilidades interpersonales sólidas para colaborar efectivamente en proyectos multidisciplinarios.',
    
    // Experience
    'experience.title': 'Experiencia Profesional',
    'experience.artech.position': 'Pasante de SAP e IA',
    'experience.artech.company': 'ARTECH | FUNDACIÓN PESCAR',
    'experience.artech.period': 'Jul 2025 - Presente',
    'experience.artech.location': 'Buenos Aires, Argentina',
    'experience.artech.description': 'Programa de formación intensiva para el empleo, enfocado en tecnologías y habilidades socioemocionales.',
    'experience.artech.achievement1': 'Formación técnica (237 hs): Introdución a SQL, ABAP, Fiori, JavaScript y SAP BTP',
    'experience.artech.achievement2': 'Desarrollo de habilidades interpersonales (180 hs): comunicación efectiva, trabajo en equipo, liderazgo',
    'experience.artech.achievement3': 'Aplicación práctica de herramientas de IA y análisis de datos',
    'experience.artech.achievement4': 'Carga horaria total: 318 horas',
    
    'experience.chatcenter.position': 'Asesora Comercial',
    'experience.chatcenter.company': 'CHATCENTER',
    'experience.chatcenter.period': 'Oct 2024 - Presente',
    'experience.chatcenter.location': 'Buenos Aires, Argentina',
    'experience.chatcenter.description': 'Asesoramiento especializado a clientes sobre asistencias para viajeros.',
    'experience.chatcenter.achievement1': 'Asesoramiento a clientes sobre productos y servicios de asistencia al viajero',
    'experience.chatcenter.achievement2': 'Gestión de interacciones a través de chat en vivo',
    'experience.chatcenter.achievement3': 'Atención personalizada y eficiente',
    'experience.chatcenter.achievement4': 'Manejo de consultas complejas y resolución de problemas',
    
    'experience.uba.position': 'Docente (Ad Honorem)',
    'experience.uba.company': 'UNIVERSIDAD DE BUENOS AIRES (UBA), FACULTAD DE MEDICINA',
    'experience.uba.period': 'Feb 2023 - Jul 2023',
    'experience.uba.location': 'Buenos Aires, Argentina',
    'experience.uba.description': 'Colaboración voluntaria en la Cátedra 2 de Embriología, como Ayudante de Cátedra.',
    'experience.uba.achievement1': 'Preparación de materiales educativos para estudiantes de medicina',
    'experience.uba.achievement2': 'Asistencia en la tutoría y orientación académica de estudiantes',
    'experience.uba.achievement3': 'Colaboración en la evaluación y seguimiento del progreso estudiantil',
    'experience.responsibilities': 'Responsabilidades y Logros:',
    
    // Education
    'education.title': 'Educación & Certificaciones',
    'education.formal': 'Educación Formal',
    'education.certifications': 'Cursos & Certificaciones',
    'education.uba.degree': 'Ingeniería Industrial',
    'education.uba.institution': 'Universidad de Buenos Aires (UBA)',
    'education.uba.period': '2025 - Presente',
    'education.uba.type': 'Carrera Universitaria',
    'education.uba.description': 'Formación integral en optimización de procesos, gestión de operaciones y análisis cuantitativo.',
    'education.eest.degree': 'Técnica Química',
    'education.eest.institution': 'EEST Nª2: "República de Venezuela" Merlo',
    'education.eest.period': '2015 - 2021',
    'education.eest.type': 'Formación Técnica',
    'education.eest.description': 'Formación técnica especializada en procesos químicos y análisis de laboratorio.',
    
    // Certifications
    'certifications.kpmg.title': 'KPMG - Programa Construyendo tu futuro',
    'certifications.kmpg.period': 'Abr 2025 - Jun 2025',
    'certifications.kmpg.description': 'Curso de Asistente Administrativo',
    'certifications.kmpg.skills': ['Microsoft Teams', 'Outlook', 'Excel', 'Gestión del tiempo', 'Comunicación', 'Procesos internos'],
    'certifications.data.title': 'Introducción a Data Analytics',
    'certifications.data.provider': 'Chicas en Tecnología',
    'certifications.data.period': 'Mar 2025',
    'certifications.data.description': 'Análisis y visualización de datos',
    'certifications.data.skills': ['Excel', 'Tableau', 'Proyecto en equipo', 'Problemática social'],
    'certifications.js.title': 'Introducción a la Programación con JavaScript',
    'certifications.js.provider': 'ADA ITW',
    'certifications.js.period': 'Oct 2024 - Dic 2024',
    'certifications.js.description': 'Fundamentos de programación',
    'certifications.js.skills': ['JavaScript', 'Lógica de programación', 'Desarrollo de programas'],
    
    // Projects
    'projects.title': 'Proyectos',
    'projects.database.title': 'Base de datos para portal de empleos',
    'projects.database.subtitle': 'Pasantía en Artech (2025)',
    'projects.database.period': '2025',
    'projects.database.company': 'ARTECH',
    'projects.database.shortDescription': 'Diseño e implementación de una base de datos en SQL Server para un portal de empleos, incluyendo modelado ER y validación de datos.',
    'projects.database.fullDescription': 'Durante mi pasantía en Artech, participé en el diseño e implementación de una base de datos en SQL Server para un portal de empleos. El proyecto incluyó modelado en dbdiagram.io, creación de tablas y relaciones en SSMS, carga de datos de prueba y consultas SQL de validación.',
    'projects.database.contribution1': 'Diseño del diagrama entidad–relación',
    'projects.database.contribution2': 'Creación del script SQL con tablas, constraints y relaciones',
    'projects.database.contribution3': 'Inserción de datos de prueba (empresas, ofertas, usuarios y postulaciones)',
    'projects.database.contribution4': 'Consultas SQL de validación para asegurar integridad',
    'projects.database.result1': 'Base de datos funcional y escalable para un portal de empleos',
    'projects.database.result2': 'Datos cargados y validados',
    'projects.database.result3': 'Consultas implementadas para empresas y postulantes',
    'projects.viewDetails': 'Ver detalles',
    'projects.hideDetails': 'Ocultar detalles',
    'projects.toolsUsed': 'Herramientas Utilizadas',
    'projects.diagrams': 'Diagramas del Proyecto',
    'projects.repository': 'Repositorio del Proyecto',
    'projects.viewScript': 'Ver Script SQL en GitHub',
    'projects.myContribution': 'Mi Aporte',
    'projects.results': 'Resultados',
    'projects.diagram1.title': 'Diagrama SSMS - Estructura de Base de Datos',
    'projects.diagram2.title': 'Diagrama ER - Modelado Conceptual',
    
    // Skills
    'skills.title': 'Habilidades & Competencias',
    'skills.technical': 'Habilidades Técnicas',
    'skills.interpersonal': 'Habilidades Interpersonales',
    'skills.tools': 'Herramientas Informáticas',
    'skills.languages': 'Idiomas',
    'skills.teamwork': 'Trabajo en Equipo',
    'skills.communication': 'Comunicación Efectiva',
    'skills.problemSolving': 'Resolución de Problemas',
    'skills.adaptability': 'Adaptabilidad',
    'skills.leadership': 'Liderazgo',
    'skills.analyticalThinking': 'Pensamiento Analítico',
    'skills.spanish': 'Español',
    'skills.english': 'Inglés',
    'skills.native': 'Nativo',
    'skills.a2': 'A2',
    
    // Contact
    'contact.title': 'Contacto',
    'contact.description': '¿Interesado en colaborar o conocer más sobre mi trabajo? ¡Me encantaría escuchar de ti!',
    'contact.info': 'Información de Contacto',
    'contact.email': 'Email',
    'contact.location': 'Ubicación',
    'contact.workTogether': '¡Trabajemos Juntos!',
    'contact.opportunity': '¿Tienes una oportunidad laboral o proyecto interesante? Me encantaría conocer más detalles.',
    'contact.emailButton': 'Contactar por Email',
    'contact.footer': '© 2025 Delfina Agustina Zapata Peres. Todos los derechos reservados.',
  },
  en: {
    // Header
    'header.title': 'Delfina Agustina',
    'header.subtitle': 'Zapata Peres',
    'header.description': 'Industrial Engineering Student | SAP & AI Intern',
    'header.location': 'Buenos Aires, Argentina',
    
    // About
    'about.title': 'About Me',
    'about.description1': 'I am an <strong>Industrial Engineering</strong> student with technical training in Chemistry and a passion for <strong>data analysis</strong> and process improvement. My experience combines solid technical knowledge with developed interpersonal skills.',
    'about.description2': 'I currently work as an <strong>SAP, Data Analysis and AI Intern</strong> at ARTECH, where I apply technologies such as Python, SQL, ABAP, Fiori, SAP BTP to solve complex problems. My goal is to contribute through strategic data analysis.',
    'about.description3': 'I have a strong commitment to continuous learning and excellence, with particular interest in roles that allow me to develop my technical and analytical competencies in challenging environments.',
    'about.analytical.title': 'Analytical Thinking',
    'about.analytical.description': 'Systematic approach to identify patterns and optimize processes through data analysis.',
    'about.results.title': 'Results Oriented',
    'about.results.description': 'Commitment to delivering efficient solutions and measurable process improvements.',
    'about.teamwork.title': 'Teamwork',
    'about.teamwork.description': 'Strong interpersonal skills to collaborate effectively on multidisciplinary projects.',
    
    // Experience
    'experience.title': 'Professional Experience',
    'experience.artech.position': 'SAP & AI Intern',
    'experience.artech.company': 'ARTECH | FUNDACIÓN PESCAR',
    'experience.artech.period': 'Jul 2025 - Present',
    'experience.artech.location': 'Buenos Aires, Argentina',
    'experience.artech.description': 'Intensive employment training program, focused on technologies and socio-emotional skills.',
    'experience.artech.achievement1': 'Technical training (237 hrs): Introduction to SQL, ABAP, Fiori, JavaScript and SAP BTP',
    'experience.artech.achievement2': 'Interpersonal skills development (180 hrs): effective communication, teamwork, leadership',
    'experience.artech.achievement3': 'Practical application of AI tools and data analysis',
    'experience.artech.achievement4': 'Total workload: 318 hours',
    
    'experience.chatcenter.position': 'Commercial Advisor',
    'experience.chatcenter.company': 'CHATCENTER',
    'experience.chatcenter.period': 'Oct 2024 - Present',
    'experience.chatcenter.location': 'Buenos Aires, Argentina',
    'experience.chatcenter.description': 'Specialized consulting to clients about travel assistance.',
    'experience.chatcenter.achievement1': 'Client consulting on travel assistance products and services',
    'experience.chatcenter.achievement2': 'Managing interactions through live chat',
    'experience.chatcenter.achievement3': 'Personalized and efficient service',
    'experience.chatcenter.achievement4': 'Handling complex queries and problem resolution',
    
    'experience.uba.position': 'Teacher (Ad Honorem)',
    'experience.uba.company': 'UNIVERSITY OF BUENOS AIRES (UBA), FACULTY OF MEDICINE',
    'experience.uba.period': 'Feb 2023 - Jul 2023',
    'experience.uba.location': 'Buenos Aires, Argentina',
    'experience.uba.description': 'Voluntary collaboration in Embryology Chair 2, as Teaching Assistant.',
    'experience.uba.achievement1': 'Preparation of educational materials for medical students',
    'experience.uba.achievement2': 'Assistance in tutoring and academic guidance of students',
    'experience.uba.achievement3': 'Collaboration in evaluation and monitoring of student progress',
    'experience.responsibilities': 'Responsibilities and Achievements:',
    
    // Education
    'education.title': 'Education & Certifications',
    'education.formal': 'Formal Education',
    'education.certifications': 'Courses & Certifications',
    'education.uba.degree': 'Industrial Engineering',
    'education.uba.institution': 'University of Buenos Aires (UBA)',
    'education.uba.period': '2025 - Present',
    'education.uba.type': 'University Degree',
    'education.uba.description': 'Comprehensive training in process optimization, operations management and quantitative analysis.',
    'education.eest.degree': 'Chemical Technician',
    'education.eest.institution': 'EEST Nª2: "República de Venezuela" Merlo',
    'education.eest.period': '2015 - 2021',
    'education.eest.type': 'Technical Training',
    'education.eest.description': 'Specialized technical training in chemical processes and laboratory analysis.',
    
    // Certifications
    'certifications.kpmg.title': 'KPMG - Building Your Future Program',
    'certifications.kmpg.period': 'Apr 2025 - Jun 2025',
    'certifications.kmpg.description': 'Administrative Assistant Course',
    'certifications.kmpg.skills': ['Microsoft Teams', 'Outlook', 'Excel', 'Time management', 'Communication', 'Internal processes'],
    'certifications.data.title': 'Introduction to Data Analytics',
    'certifications.data.provider': 'Chicas en Tecnología',
    'certifications.data.period': 'Mar 2025',
    'certifications.data.description': 'Data analysis and visualization',
    'certifications.data.skills': ['Excel', 'Tableau', 'Team project', 'Social issues'],
    'certifications.js.title': 'Introduction to Programming with JavaScript',
    'certifications.js.provider': 'ADA ITW',
    'certifications.js.period': 'Oct 2024 - Dec 2024',
    'certifications.js.description': 'Programming fundamentals',
    'certifications.js.skills': ['JavaScript', 'Programming logic', 'Program development'],
    
    // Projects
    'projects.title': 'Projects',
    'projects.database.title': 'Database for job portal',
    'projects.database.subtitle': 'Internship at Artech (2025)',
    'projects.database.period': '2025',
    'projects.database.company': 'ARTECH',
    'projects.database.shortDescription': 'Design and implementation of a SQL Server database for a job portal, including ER modeling and data validation.',
    'projects.database.fullDescription': 'During my internship at Artech, I participated in the design and implementation of a SQL Server database for a job portal. The project included modeling in dbdiagram.io, creating tables and relationships in SSMS, loading test data and SQL validation queries.',
    'projects.database.contribution1': 'Entity-relationship diagram design',
    'projects.database.contribution2': 'SQL script creation with tables, constraints and relationships',
    'projects.database.contribution3': 'Test data insertion (companies, offers, users and applications)',
    'projects.database.contribution4': 'SQL validation queries to ensure integrity',
    'projects.database.result1': 'Functional and scalable database for a job portal',
    'projects.database.result2': 'Data loaded and validated',
    'projects.database.result3': 'Queries implemented for companies and applicants',
    'projects.viewDetails': 'View details',
    'projects.hideDetails': 'Hide details',
    'projects.toolsUsed': 'Tools Used',
    'projects.diagrams': 'Project Diagrams',
    'projects.repository': 'Project Repository',
    'projects.viewScript': 'View SQL Script on GitHub',
    'projects.myContribution': 'My Contribution',
    'projects.results': 'Results',
    'projects.diagram1.title': 'SSMS Diagram - Database Structure',
    'projects.diagram2.title': 'ER Diagram - Conceptual Modeling',
    
    // Skills
    'skills.title': 'Skills & Competencies',
    'skills.technical': 'Technical Skills',
    'skills.interpersonal': 'Interpersonal Skills',
    'skills.tools': 'Computer Tools',
    'skills.languages': 'Languages',
    'skills.teamwork': 'Teamwork',
    'skills.communication': 'Effective Communication',
    'skills.problemSolving': 'Problem Solving',
    'skills.adaptability': 'Adaptability',
    'skills.leadership': 'Leadership',
    'skills.analyticalThinking': 'Analytical Thinking',
    'skills.spanish': 'Spanish',
    'skills.english': 'English',
    'skills.native': 'Native',
    'skills.a2': 'A2',
    
    // Contact
    'contact.title': 'Contact',
    'contact.description': 'Interested in collaborating or learning more about my work? I would love to hear from you!',
    'contact.info': 'Contact Information',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.workTogether': "Let's Work Together!",
    'contact.opportunity': 'Do you have a job opportunity or interesting project? I would love to know more details.',
    'contact.emailButton': 'Contact by Email',
    'contact.footer': '© 2025 Delfina Agustina Zapata Peres. All rights reserved.',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};