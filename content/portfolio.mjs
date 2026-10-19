// Fuente de verdad: CV entregado por Carlos, revisado el 16 de octubre de 2026.
// La traducción al inglés se mantiene en portfolio.en.mjs y comparte datos de identidad y enlaces.
// Los enlaces opcionales vacíos se omiten automáticamente de la interfaz.
export default {
  locale: 'es',
  name: 'Carlos Alberto Rubio Gallego',
  shortName: 'Carlos Rubio',
  title: 'Analista QA | QA Automation',
  location: 'Colombia',
  email: 'rubiogallegoc@gmail.com',
  linkedin: 'https://www.linkedin.com/in/carlos-alberto-rubio-gallego-bb91b6176/',
  github: '',
  siteUrl: 'https://carlos-rubio-qa-portfolio.cosmichen64.chatgpt.site',
  cv: { url: '/assets/carlos-rubio-cv.pdf', filename: 'Carlos-Rubio-CV-QA.pdf', label: 'Descargar CV', format: 'PDF' },
  seo: {
    title: 'Carlos Rubio · Analista QA | QA Automation',
    description: 'Carlos Alberto Rubio Gallego. QA manual y automatización con Cypress, pruebas de API e IA aplicada a la calidad. Experiencia en Travel Tech y telecomunicaciones.'
  },
  hero: {
    eyebrow: 'Analista QA | QA Automation',
    headline: ['La calidad empieza', 'antes del', 'primer clic.'],
    summary: 'Conecto requisitos, pruebas y automatización para cuidar la calidad del software. Experiencia en Travel Tech, telecomunicaciones e inteligencia artificial aplicada a QA.',
    primaryCta: 'Explorar mi experiencia',
    secondaryCta: 'Hablemos',
    sectors: ['Travel Tech', 'Telecomunicaciones', 'Requisitos bancarios']
  },
  about: {
    heading: 'Entender el negocio.\nCuidar la experiencia.',
    paragraphs: [
      'Soy Carlos Alberto Rubio Gallego, analista QA con formación en Sistemas de Información. He trabajado en proyectos de telecomunicaciones y Travel Tech, y participado en el levantamiento de requisitos para el sector bancario.',
      'Mi trabajo conecta el análisis de requisitos con la estrategia, el diseño y la ejecución de pruebas. He liderado el ciclo de calidad de células de desarrollo, colaborando con el equipo para identificar defectos y hacer seguimiento a cada hallazgo durante el sprint.'
    ],
    principles: [
      { label: 'Contexto antes que casos', text: 'Comprender requisitos y reglas de negocio para definir qué validar.' },
      { label: 'Calidad durante el sprint', text: 'Acompañar al equipo desde la planificación hasta el seguimiento de defectos.' },
      { label: 'Herramientas con propósito', text: 'Aplicar automatización e IA a tareas concretas del proceso de pruebas.' }
    ]
  },
  experience: [
    {
      company: 'Linex Travel | UltraGroup', role: 'Analista QA - QA Automation',
      start: '2023-12', end: '2026-10', period: 'Dic 2023 — Oct 2026', sector: 'Travel Tech · Programas de lealtad',
      summary: 'Lideré el ciclo de calidad de la célula asignada en proyectos de Travel Tech orientados a programas de lealtad.',
      responsibilities: ['Diseño y ejecución de pruebas funcionales y de API, validación de datos en MongoDB y análisis de peticiones Fetch y comunicaciones WebSocket.', 'Desarrollo y mantenimiento de pruebas automatizadas con Cypress y Page Object Model; registro y seguimiento de defectos durante cada sprint.'],
      contributions: ['Creé una extensión para diligenciar formularios recurrentes y reducir el tiempo de ejecución de pruebas manuales.', 'Implementé agentes de IA conectados a Azure mediante MCP para centralizar documentación funcional y reglas de negocio.'],
      tools: ['Cypress', 'POM', 'Postman', 'MongoDB', 'Claude', 'Azure', 'MCP']
    },
    {
      company: 'Indra Company', role: 'Analista QA',
      start: '2021-07', end: '2023-08', period: 'Jul 2021 — Ago 2023', sector: 'Telecomunicaciones · Servicios móviles',
      summary: 'Lideré la gestión del ciclo de calidad de una célula en un proyecto de telecomunicaciones: portabilidad, compra de paquetes, recargas y roaming.',
      responsibilities: ['Análisis de requisitos, definición del alcance y elaboración del plan y la estrategia de pruebas por sprint.', 'Diseño y ejecución de pruebas end-to-end, de humo y de regresión; análisis de resultados y seguimiento a hallazgos.'],
      contributions: ['Automaticé el alistamiento de los recursos necesarios para ejecutar las pruebas.'],
      tools: ['Selenium WebDriver', 'SoapUI', 'Postman', 'Jira', 'MySQL Developer', 'PL/SQL', 'Groovy', 'All Pairs', 'EPOS', 'CBS', 'Portal CRM']
    },
    {
      company: 'Q-Vision Technologies', role: 'Analista QA',
      start: '2020-06', end: '2021-07', period: 'Jun 2020 — Jul 2021', sector: 'Telecomunicaciones · Requisitos bancarios',
      summary: 'Participé en el aseguramiento de calidad de proyectos de telecomunicaciones, desde el análisis de requisitos hasta la ejecución y el seguimiento de resultados.',
      responsibilities: ['Definición del alcance y la estrategia de pruebas; diseño y ejecución de escenarios funcionales, end-to-end, de humo y de regresión.', 'Análisis de hallazgos y gestión de herramientas para registrar, monitorear y dar seguimiento a incidentes.'],
      contributions: ['Recopilé requisitos para proyectos del sector bancario.'],
      tools: ['MySQL Developer', 'SoapUI', 'Postman', 'Mantis', 'TestLink']
    }
  ],
  skills: [
    { number: '01', title: 'QA manual', icon: 'scan', description: 'Del requisito al hallazgo, con trazabilidad.', tools: ['Análisis de requisitos', 'Planificación y estrategia', 'Diseño de casos', 'Pruebas funcionales', 'End-to-end', 'Humo y regresión', 'Gestión de defectos'], example: 'Planes, escenarios y seguimiento de resultados a lo largo del ciclo de calidad.' },
    { number: '02', title: 'Automatización', icon: 'code', description: 'Pruebas que acompañan la evolución del producto.', tools: ['Cypress', 'Page Object Model', 'Selenium WebDriver'], example: 'Desarrollo y mantenimiento de pruebas con Cypress y POM en Travel Tech.' },
    { number: '03', title: 'API y datos', icon: 'database', description: 'Validación más allá de la interfaz.', tools: ['Postman', 'SoapUI', 'SQL', 'PL/SQL', 'MySQL Developer', 'MongoDB', 'Fetch', 'WebSocket'], example: 'Pruebas de API, validación de datos y análisis de comunicaciones.' },
    { number: '04', title: 'Gestión de calidad', icon: 'layers', description: 'Hallazgos visibles y seguimiento continuo.', tools: ['Jira', 'Mantis', 'TestLink'], example: 'Registro, monitoreo y seguimiento de defectos e incidentes durante las pruebas.' },
    { number: '05', title: 'IA aplicada', icon: 'spark', description: 'El conocimiento del negocio, más accesible.', tools: ['Agentes de IA', 'Claude', 'MCP', 'Azure'], example: 'Agentes conectados a Azure para consultar documentación funcional y reglas de negocio.' },
    { number: '06', title: 'Desarrollo y apoyo', icon: 'terminal', description: 'Herramientas para resolver tareas del día a día.', tools: ['JavaScript', 'Git', 'GitHub', 'Groovy', 'Desarrollo frontend'], example: 'Formación en desarrollo con JavaScript y creación de una extensión de apoyo a las pruebas.' }
  ],
  cases: [
    { number: '01', category: 'Automatización de pruebas', title: 'Una base mantenible\npara probar.', problem: 'Validar funcionalidades del producto y mantener las pruebas automatizadas a medida que evoluciona.', contribution: 'Desarrollé y mantuve pruebas con Cypress, organizadas mediante el patrón Page Object Model.', benefit: 'Pruebas automatizadas con una estructura que separa las interacciones con las páginas de los escenarios de validación.', tools: ['Cypress', 'POM'], visual: 'automation' },
    { number: '02', category: 'Herramientas para QA', title: 'Menos repetición.\nMás foco en probar.', problem: 'Diligenciar los mismos formularios de manera recurrente durante la ejecución de pruebas manuales.', contribution: 'Creé una extensión para automatizar el diligenciamiento de esos formularios.', benefit: 'Reducción del tiempo dedicado a completar formularios durante las pruebas manuales, según la experiencia documentada en el CV.', tools: ['Extensión de formularios', 'Automatización de tareas'], visual: 'forms' },
    { number: '03', category: 'Inteligencia artificial aplicada', title: 'Reglas de negocio\na una consulta.', problem: 'Facilitar al equipo el acceso a la documentación funcional y a las reglas de negocio.', contribution: 'Implementé agentes de IA conectados a Azure mediante MCP para centralizar ese conocimiento.', benefit: 'Consulta de reglas de negocio y documentación por cualquier miembro del equipo.', tools: ['Agentes de IA', 'Azure', 'MCP'], visual: 'agents' }
  ],
  education: { degree: 'Tecnología en Sistemas de Información', institution: 'Universidad del Valle', qualification: 'Tecnólogo', start: '2017-06', end: '2020-07', period: 'Jun 2017 — Jul 2020' },
  courses: [
    { title: 'Cypress', institution: 'Platzi', date: '2023-01', period: 'Ene 2023', type: 'Curso', url: 'https://platzi.com/p/carlosrubiogallego/curso/4760-cypress-avanzado/diploma/detalle/' },
    { title: 'FullStack Developer con JavaScript', institution: 'Platzi', date: '2022-10', period: 'Oct 2022', type: 'Ruta de formación', url: 'https://platzi.com/p/carlosrubiogallego/ruta/100-javascript-full-stack/diploma/detalle/' },
    { title: 'Curso profesional de Git y GitHub', institution: 'Platzi', date: '2022-01', period: 'Ene 2022', type: 'Curso', url: 'https://platzi.com/p/carlosrubiogallego/curso/1557-git-github/diploma/detalle/' },
    { title: 'Front End Developer', institution: 'Platzi', date: '2020-05', period: 'May 2020', type: 'Curso', url: 'https://platzi.com/p/carlosrubiogallego/curso/2467-frontend-developer/diploma/detalle/' }
  ],
  certification: { title: 'EF SET Certificate', issuer: 'EF SET', level: 'Inglés B1 · Intermedio', date: '2023-10', period: 'Oct 2023', url: 'https://www.efset.org/cert/c6yEvN' },
  languages: [{ name: 'Español', level: 'Lengua materna' }, { name: 'Inglés', level: 'B1 · Intermedio' }],
  contact: { heading: 'Hablemos de\ncalidad.', description: 'Si buscas un perfil que conecte el negocio con las pruebas manuales, la automatización y la IA aplicada, conversemos.', emailLabel: 'Escríbeme', linkedinLabel: 'Conectar en LinkedIn' },
  pending: ['Añadir GitHub solo si se proporciona y verifica un perfil público.', 'Añadir un dominio propio cuando esté definido y actualizar siteUrl.']
};
