/* ---------- Mobile nav ---------- */
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ---------- i18n ---------- */
const translations = {
  es: {
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.thesis': 'Tesis',
    'nav.skills': 'Skills',
    'nav.experience': 'Experiencia',
    'nav.contact': 'Contacto',
    'nav.cv': 'Descargar CV',

    'hero.eyebrow': 'Mechatronic Engineer · Robotics Architect',
    'hero.title': 'Construyo sistemas que <span class="highlight">se mueven, ven y deciden</span> por sí mismos.',
    'hero.sub': 'Diseño robots autónomos, pipelines de percepción 3D y backends de alto rendimiento — desde el firmware hasta la nube. Fundador de <strong>Janus</strong>, plataforma robótica comercial.',
    'hero.ctaProjects': 'Ver proyectos',
    'hero.ctaContact': 'Hablemos',
    'hero.stat1': 'años en robótica',
    'hero.stat2': 'mejora en sistemas RFID',
    'hero.stat3': 'personas lideradas (URC)',

    'about.title': 'Sobre mí',
    'about.text': 'Soy Ingeniero Mecatrónico egresado de la <strong>Universidad EIA</strong>, enfocado en la intersección entre robótica, percepción 3D e ingeniería de software. Mi trabajo abarca desde optimizar algoritmos de backend en tiempo real hasta liderar la navegación autónoma de un rover en el desierto de Utah. Actualmente dirijo <strong>Janus</strong>, mi propio emprendimiento de robótica móvil, y sigo construyendo hardware con mis manos — desde una impresora 3D custom hasta pipelines de percepción para campo.',
    'about.fact1': '🎓 Ingeniería Mecatrónica — Universidad EIA (2019–2025)',
    'about.fact2': '🏆 Dos tesis laureadas: Turbofán y Control Ackermann en ROS2',
    'about.fact3': '🛰️ Líder de programación — University Rover Challenge (Utah, USA)',
    'about.fact4': '🚀 Fundador — Janus Robotics (RaaS)',
    'about.fact5': '🌎 Español nativo · Inglés B2 · Francés A2',

    'projects.title': 'Proyectos destacados',
    'project.janus.tag': 'Emprendimiento propio',
    'project.janus.title': 'Janus — Robótica Móvil Comercial',
    'project.janus.desc': 'Plataforma robótica autónoma para publicidad BTL y servicios comerciales. Hardware bajo economía circular (baterías automotrices reacondicionadas), cómputo en ASUS NUC 13 Pro sobre ROS2/Ubuntu, y analítica visual con IA para medir atención del público. MVP funcional, premiado por "Semilla Verde", modelo de negocio RaaS.',
    'project.rover.tag': 'University Rover Challenge',
    'project.rover.title': 'Rover Autónomo "Tatacoa"',
    'project.rover.desc': 'Líder de programación de un equipo de 40 personas. Arquitecté el stack de navegación autónoma (SLAM, planeación de trayectorias, control reactivo) para recorrer +1km de terreno no estructurado sin intervención humana, y los protocolos de teleoperación de largo alcance.',
    'project.manuelita.title': 'Percepción 3D para Estimación de Biomasa',
    'project.manuelita.desc': 'Pipeline completo de percepción 3D con LiDAR y redes neuronales bajo ROS2 para reconstrucción volumétrica y clasificación automática de caña de azúcar, integrado con manipuladores robóticos en línea de producción industrial.',
    'project.manuelita.stack4': 'Robótica industrial',
    'project.tagcontrol.title': 'Backend RFID en Tiempo Real',
    'project.tagcontrol.desc': 'Backend con FastAPI para logística de inventario RFID en tiempo real. Rediseño de la arquitectura hardware-software con +40% de mejora en frecuencia de lectura, y optimización de algoritmos UHF críticos a menos de 1 segundo de procesamiento.',
    'project.printer.tag': 'Hardware propio',
    'project.printer.title': 'Impresora 3D Custom',
    'project.printer.desc': 'Diseño y construcción de una impresora 3D completamente personalizada — ensamble mecánico, integración de electrónica y calibración de firmware. Usada para prototipado rápido de piezas de Janus y otros proyectos de hardware.',
    'project.printer.stack1': 'Diseño mecánico',
    'project.printer.stack2': 'Electrónica',
    'project.printer.stack3': 'Firmware',
    'project.structura.tag': 'Software independiente',
    'project.structura.title': 'STRUCTURA — PWA de Gestión de Obras',
    'project.structura.desc': 'Progressive Web App para gestión de roles, flujos de trabajo y seguimiento de proyectos de construcción. Incluye sistemas automatizados de rastreo y filtrado de ofertas laborales en backend y robótica.',
    'project.structura.stack2': 'Full Stack',
    'project.structura.stack3': 'Automatización',
    'project.epm.tag': 'Hackathon EPM',
    'project.epm.title': 'Predictor de Consumo en Electroválvulas',
    'project.epm.desc': 'Modelo de series temporales para predecir el consumo hídrico en electroválvulas, desarrollado durante la Hackathon de EPM para optimizar el uso del recurso en la red de distribución.',
    'project.epm.stack2': 'Series temporales',
    'project.epm.link': 'Ver repositorio en GitHub →',

    'thesis.title': 'Tesis académicas',
    'thesis.turbofan.tag': 'Tesis laureada · Universidad EIA',
    'thesis.turbofan.title': 'Modelado Dinámico de un Motor Turbofán de un Eje',
    'thesis.turbofan.desc': 'Modelo dinámico no lineal de un motor turbofán, con simulación en tiempo real y una app interactiva construida en MATLAB App Designer para explorar el comportamiento del motor. Distinción por rigor técnico y calidad de simulación.',
    'thesis.turbofan.stack3': 'Simulación en tiempo real',
    'thesis.turbofan.link': 'Ver app en MATLAB File Exchange →',
    'thesis.ackermann.tag': 'Tesis · Universidad EIA',
    'thesis.ackermann.title': 'Guía de Control ROS2 para Dirección Ackermann',
    'thesis.ackermann.desc': 'Guía técnica y framework de referencia para controlar robots con dirección tipo Ackermann (similar a un vehículo) usando ros2_control — cinemática, configuración de controladores y validación en simulación.',
    'thesis.ackermann.link': 'Ver repositorio en GitHub →',

    'skills.title': 'Stack técnico',
    'skill.robotics.title': 'Robótica & Autonomía',
    'skill.robotics.desc': 'ROS / ROS2, SLAM, navegación autónoma, LiDAR, sensor fusion',
    'skill.backend.title': 'Backend & APIs',
    'skill.ai.title': 'IA & Visión',
    'skill.ai.desc': 'PyTorch, redes neuronales, clasificación, series temporales, agentes de IA',
    'skill.hardware.title': 'Hardware & Electrónica',
    'skill.hardware.desc': 'Arduino, IoT, diseño de baterías, prototipado, impresión 3D',
    'skill.languages.title': 'Lenguajes',
    'skill.simulation.title': 'Simulación',
    'skill.simulation.desc': 'MATLAB, Simulink — dos tesis laureadas en modelado y control',

    'experience.title': 'Experiencia',
    'exp.tagcontrol.date': 'Oct 2025 — Presente',
    'exp.tagcontrol.role': 'Backend Developer & Systems Integrator',
    'exp.tagcontrol.company': 'Tag Control · Medellín, Colombia (Híbrido)',
    'exp.manuelita.date': 'Ene — Jun 2025',
    'exp.manuelita.role': '3D Perception Engineer (Freelance)',
    'exp.manuelita.company': 'Manuelita S.A. · Remoto / Campo',
    'exp.eia.date': 'Sep 2023 — Nov 2024',
    'exp.eia.role': 'Research Assistant — Robótica Móvil',
    'exp.eia.company': 'Universidad EIA · Medellín, Colombia',
    'exp.automate.date': 'Ene — Sep 2023',
    'exp.automate.role': 'Robotics Engineer (Prácticas)',
    'exp.automate.company': 'Automate Col · Rionegro, Colombia',

    'contact.title': 'Hablemos',
    'contact.sub': 'Abierto a roles de robótica, backend e ingeniería de sistemas autónomos.',
    'footer.text': 'Diseñado y construido por David Salazar Durante · Medellín, Colombia',
  },
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.thesis': 'Thesis',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'nav.cv': 'Download CV',

    'hero.eyebrow': 'Mechatronic Engineer · Robotics Architect',
    'hero.title': 'I build systems that <span class="highlight">move, see and decide</span> on their own.',
    'hero.sub': 'I design autonomous robots, 3D perception pipelines, and high-performance backends — from firmware to the cloud. Founder of <strong>Janus</strong>, a commercial robotics platform.',
    'hero.ctaProjects': 'View projects',
    'hero.ctaContact': "Let's talk",
    'hero.stat1': 'years in robotics',
    'hero.stat2': 'improvement in RFID systems',
    'hero.stat3': 'people led (URC)',

    'about.title': 'About me',
    'about.text': "I'm a Mechatronic Engineer graduated from <strong>Universidad EIA</strong>, focused on the intersection of robotics, 3D perception, and software engineering. My work spans from optimizing real-time backend algorithms to leading autonomous navigation for a rover in the Utah desert. I currently run <strong>Janus</strong>, my own mobile robotics venture, and keep building hardware with my own hands — from a custom 3D printer to field perception pipelines.",
    'about.fact1': '🎓 Mechatronic Engineering — Universidad EIA (2019–2025)',
    'about.fact2': '🏆 Two honors theses: Turbofan Modeling and ROS2 Ackermann Control',
    'about.fact3': '🛰️ Programming Lead — University Rover Challenge (Utah, USA)',
    'about.fact4': '🚀 Founder — Janus Robotics (RaaS)',
    'about.fact5': '🌎 Spanish native · English B2 · French A2',

    'projects.title': 'Featured projects',
    'project.janus.tag': 'Own venture',
    'project.janus.title': 'Janus — Commercial Mobile Robotics',
    'project.janus.desc': 'Autonomous robotics platform for BTL advertising and commercial services. Hardware built on circular-economy principles (reconditioned automotive batteries), computing on an ASUS NUC 13 Pro running ROS2/Ubuntu, and an AI visual analytics pipeline to measure audience attention. Working MVP, awarded by the "Semilla Verde" grant, structured as a Robotics-as-a-Service (RaaS) business.',
    'project.rover.tag': 'University Rover Challenge',
    'project.rover.title': '"Tatacoa" Autonomous Rover',
    'project.rover.desc': 'Programming Lead for a 40-person team. Architected the autonomous navigation stack (SLAM, path planning, reactive control) to traverse 1km+ of unstructured terrain without human intervention, plus long-range teleoperation protocols.',
    'project.manuelita.title': '3D Perception for Biomass Estimation',
    'project.manuelita.desc': 'End-to-end 3D perception pipeline with LiDAR and neural networks under ROS2 for volumetric reconstruction and automatic classification of sugarcane, integrated with robotic manipulators on an industrial production line.',
    'project.manuelita.stack4': 'Industrial robotics',
    'project.tagcontrol.title': 'Real-Time RFID Backend',
    'project.tagcontrol.desc': 'FastAPI backend for real-time RFID inventory logistics. Redesigned the hardware-software architecture for a +40% improvement in read frequency, and optimized critical UHF algorithms to under 1 second of processing time.',
    'project.printer.tag': 'Own hardware',
    'project.printer.title': 'Custom 3D Printer',
    'project.printer.desc': 'Designed and built a fully custom 3D printer from scratch — mechanical assembly, electronics integration, and firmware calibration. Used for rapid prototyping of Janus parts and other hardware projects.',
    'project.printer.stack1': 'Mechanical design',
    'project.printer.stack2': 'Electronics',
    'project.printer.stack3': 'Firmware',
    'project.structura.tag': 'Independent software',
    'project.structura.title': 'STRUCTURA — Construction Management PWA',
    'project.structura.desc': 'Progressive Web App for role management, workflows, and construction project tracking. Includes automated systems for tracking and filtering backend and robotics job postings.',
    'project.structura.stack2': 'Full Stack',
    'project.structura.stack3': 'Automation',
    'project.epm.tag': 'EPM Hackathon',
    'project.epm.title': 'Solenoid Valve Consumption Predictor',
    'project.epm.desc': 'Time-series model to predict water consumption in solenoid valves, built during the EPM Hackathon to optimize resource usage across the distribution network.',
    'project.epm.stack2': 'Time series',
    'project.epm.link': 'View repository on GitHub →',

    'thesis.title': 'Academic theses',
    'thesis.turbofan.tag': 'Honors thesis · Universidad EIA',
    'thesis.turbofan.title': 'Dynamic Modeling of a Single-Axis Turbofan Engine',
    'thesis.turbofan.desc': 'Non-linear dynamic model of a turbofan engine, with real-time simulation and an interactive app built in MATLAB App Designer to explore engine behavior. Distinction for technical rigor and simulation quality.',
    'thesis.turbofan.stack3': 'Real-time simulation',
    'thesis.turbofan.link': 'View app on MATLAB File Exchange →',
    'thesis.ackermann.tag': 'Thesis · Universidad EIA',
    'thesis.ackermann.title': 'ROS2 Control Guide for Ackermann Steering',
    'thesis.ackermann.desc': 'Technical guide and reference framework for controlling Ackermann-steered (car-like) robots using ros2_control — kinematics, controller configuration, and simulation validation.',
    'thesis.ackermann.link': 'View repository on GitHub →',

    'skills.title': 'Technical stack',
    'skill.robotics.title': 'Robotics & Autonomy',
    'skill.robotics.desc': 'ROS / ROS2, SLAM, autonomous navigation, LiDAR, sensor fusion',
    'skill.backend.title': 'Backend & APIs',
    'skill.ai.title': 'AI & Vision',
    'skill.ai.desc': 'PyTorch, neural networks, classification, time series, AI agents',
    'skill.hardware.title': 'Hardware & Electronics',
    'skill.hardware.desc': 'Arduino, IoT, battery design, prototyping, 3D printing',
    'skill.languages.title': 'Languages',
    'skill.simulation.title': 'Simulation',
    'skill.simulation.desc': 'MATLAB, Simulink — two honors theses in modeling and control',

    'experience.title': 'Experience',
    'exp.tagcontrol.date': 'Oct 2025 — Present',
    'exp.tagcontrol.role': 'Backend Developer & Systems Integrator',
    'exp.tagcontrol.company': 'Tag Control · Medellín, Colombia (Hybrid)',
    'exp.manuelita.date': 'Jan — Jun 2025',
    'exp.manuelita.role': '3D Perception Engineer (Freelance)',
    'exp.manuelita.company': 'Manuelita S.A. · Remote / Field',
    'exp.eia.date': 'Sep 2023 — Nov 2024',
    'exp.eia.role': 'Research Assistant — Mobile Robotics',
    'exp.eia.company': 'Universidad EIA · Medellín, Colombia',
    'exp.automate.date': 'Jan — Sep 2023',
    'exp.automate.role': 'Robotics Engineer (Internship)',
    'exp.automate.company': 'Automate Col · Rionegro, Colombia',

    'contact.title': "Let's talk",
    'contact.sub': 'Open to roles in robotics, backend, and autonomous systems engineering.',
    'footer.text': 'Designed and built by David Salazar Durante · Medellín, Colombia',
  }
};

const LANG_KEY = 'ds_portfolio_lang';

function applyLanguage(lang) {
  const dict = translations[lang] || translations.es;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key]) el.innerHTML = dict[key];
  });

  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
  });

  localStorage.setItem(LANG_KEY, lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang-btn')));
});

const savedLang = localStorage.getItem(LANG_KEY);
const browserLang = (navigator.language || 'es').toLowerCase().startsWith('en') ? 'en' : 'es';
applyLanguage(savedLang || browserLang);

/* ---------- Robot eye tracking ---------- */
const bot = document.querySelector('.hero-bot');
if (bot) {
  const eyes = bot.querySelectorAll('.bot-eye');
  document.addEventListener('mousemove', (e) => {
    const rect = bot.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = Math.max(-1, Math.min(1, (e.clientX - cx) / 300));
    const dy = Math.max(-1, Math.min(1, (e.clientY - cy) / 300));
    eyes.forEach(eye => {
      eye.setAttribute('transform', `translate(${dx * 2.2}, ${dy * 2.2})`);
    });
  });
}

/* ---------- Scroll reveal ---------- */
const revealTargets = document.querySelectorAll('.section, .project-card, .skill-card, .timeline-item');
revealTargets.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach(el => revealObserver.observe(el));
