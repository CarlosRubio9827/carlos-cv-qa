export const escape = (value = '') => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const e = escape;
const lines = value => value.split('\n').map(e).join('<br>');
const icons = {
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  external: '<path d="M7 17 17 7M7 7h10v10"/>',
  download: '<path d="M12 3v12m-5-5 5 5 5-5M5 16v4h14v-4"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>',
  scan: '<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5M7 12l3 3 7-7"/>',
  code: '<path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18"/>',
  database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0"/>',
  layers: '<path d="m12 3 10 5-10 5L2 8l10-5ZM2 12l10 5 10-5M2 16l10 5 10-5"/>',
  spark: '<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z"/>',
  terminal: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m6 9 3 3-3 3m7 0h5"/>',
  copy: '<rect x="8" y="8" width="12" height="13" rx="2"/><path d="M15 8V3H3v13h5"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  linkedin: '<path d="M5 9v11M5 4v.2M10 20V9h4v2c2-4 7-2 7 2v7M2 9h5"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18Z"/>'
};
const icon = (name, cls = '') => `<svg class="icon ${cls}" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.arrow}</svg>`;
const tags = (items, cls = '') => `<ul class="tags ${cls}" aria-label="Herramientas y conocimientos">${items.map(t => `<li>${e(t)}</li>`).join('')}</ul>`;
const external = (url, text, cls = '') => url ? `<a class="${cls}" href="${e(url)}" target="_blank" rel="noopener noreferrer">${text}${icon('external')}<span class="sr-only"> (se abre en otra pestaña)</span></a>` : '';
const cvLink = (d, cls = '') => d.cv?.url ? `<a class="${cls}" href="${e(d.cv.url)}" download="${e(d.cv.filename)}">${icon('download')}<span>${e(d.cv.label)}</span><span class="file-label">${e(d.cv.format)}</span></a>` : '';
const sectionHeading = (number, label, title, subtitle = '') => `<div class="section-intro"><p class="eyebrow"><span>${number}</span> ${label}</p><h2>${title}</h2>${subtitle ? `<p class="section-description">${subtitle}</p>` : ''}</div>`;

function caseVisual(kind) {
  if (kind === 'automation') return `<div class="case-diagram diagram-code" aria-hidden="true"><div class="diagram-top"><span class="mini-dot"></span><span class="mono">Cypress + Page Object Model</span></div><div class="code-row"><span>01</span><b>Escenarios de prueba</b></div><div class="code-indent">↓</div><div class="code-row"><span>02</span><b class="lime-text">Objetos de página</b></div><div class="code-indent">↓</div><div class="code-row"><span>03</span><b>Interacciones con la interfaz</b></div></div>`;
  if (kind === 'forms') return `<div class="case-diagram diagram-forms" aria-hidden="true"><div class="diagram-top"><span class="mono">Formularios recurrentes</span>${icon('terminal')}</div><div class="mock-input"><span>Campo de formulario</span><i></i></div><div class="mock-input"><span>Campo de formulario</span><i></i></div><div class="mock-input"><span>Campo de formulario</span><i></i></div><div class="diagram-footer">${icon('check')} Diligenciamiento automatizado</div></div>`;
  return `<div class="case-diagram diagram-agents" aria-hidden="true"><div class="agent-sources"><span>Documentación</span><span>Reglas de negocio</span></div><div class="connector-line"></div><div class="mcp-node"><span>Azure</span><span class="node-bridge">MCP</span><span>${icon('spark')} Agente IA</span></div><div class="connector-line"></div><div class="agent-team">${icon('globe')} Consulta para el equipo</div></div>`;
}

export function render(d) {
  const base = d.siteUrl.replace(/\/$/, '');
  const person = { '@context': 'https://schema.org', '@type': 'Person', name: d.name, jobTitle: d.title, description: d.seo.description, ...(base ? { url: base } : {}), ...(d.linkedin ? { sameAs: [d.linkedin] } : {}), knowsLanguage: ['es', 'en'], email: d.email };
  return `<!doctype html>
<html lang="${e(d.locale)}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#101412">
  <title>${e(d.seo.title)}</title>
  <meta name="description" content="${e(d.seo.description)}">
  <meta name="author" content="${e(d.name)}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="es_CO">
  <meta property="og:title" content="${e(d.seo.title)}">
  <meta property="og:description" content="${e(d.seo.description)}">
  ${base ? `<link rel="canonical" href="${e(base)}/"><meta property="og:url" content="${e(base)}/"><meta property="og:image" content="${e(base)}/assets/social-card.png">` : ''}
  <meta property="og:image:alt" content="Carlos Rubio, Analista QA y QA Automation. La calidad empieza antes del primer clic.">
  <meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${e(d.seo.title)}">
  <meta name="twitter:description" content="${e(d.seo.description)}">
  ${base ? `<meta name="twitter:image" content="${e(base)}/assets/social-card.png">` : ''}
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/styles.css">
  <script type="application/ld+json">${JSON.stringify(person).replace(/</g, '\\u003c')}</script>
  <script type="module" src="/app.js"></script>
</head>
<body>
  <a class="skip-link" href="#contenido">Saltar al contenido</a>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="#inicio" aria-label="${e(d.shortName)}, ir al inicio"><span class="brand-mark" aria-hidden="true">cr<span>.</span></span><span class="brand-name">Carlos Rubio<span>QA & AUTOMATION</span></span></a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav" aria-label="Abrir menú"><span></span><span></span></button>
      <nav id="main-nav" aria-label="Navegación principal">
        <a href="#sobre-mi">Sobre mí</a><a href="#experiencia">Experiencia</a><a href="#conocimientos">Conocimientos</a><a href="#aportes">Aportes</a><a href="#contacto" class="nav-contact">Conversemos ${icon('external')}</a>
      </nav>
    </div>
  </header>
  <main id="contenido">
    <section id="inicio" class="hero container" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow hero-eyebrow"><span class="status-dot" aria-hidden="true"></span>${e(d.hero.eyebrow)}</p>
        <h1 id="hero-title">${e(d.hero.headline[0])}<br>${e(d.hero.headline[1])}<br><span>${e(d.hero.headline[2])}</span></h1>
        <p class="hero-name">${e(d.name)}</p>
        <p class="hero-summary">${e(d.hero.summary)}</p>
        <div class="hero-actions"><a href="#experiencia" class="button button-primary">${e(d.hero.primaryCta)}${icon('arrow')}</a>${cvLink(d, 'button button-quiet')}</div>
        <a class="hero-contact" href="#contacto">${e(d.hero.secondaryCta)} ${icon('external')}</a>
      </div>
      <div class="quality-visual" role="img" aria-label="Mi enfoque de calidad: analizar requisitos, diseñar pruebas, automatizar y compartir conocimiento.">
        <div class="visual-coordinate mono" aria-hidden="true">QA / EN CADA ETAPA</div>
        <div class="quality-orbit" aria-hidden="true"><div class="orbit-cross cross-one">+</div><div class="orbit-cross cross-two">+</div><div class="orbit-core"></div></div>
        <div class="flow-card flow-analysis" aria-hidden="true"><span class="flow-symbol">${icon('scan')}</span><div><small>01 / COMPRENDER</small><strong>Analizar requisitos</strong></div><span class="flow-check">${icon('check')}</span></div>
        <div class="flow-card flow-test" aria-hidden="true"><span class="flow-symbol">${icon('layers')}</span><div><small>02 / VALIDAR</small><strong>Diseñar pruebas</strong></div><span class="flow-check">${icon('check')}</span></div>
        <div class="flow-card flow-auto" aria-hidden="true"><span class="flow-symbol">${icon('code')}</span><div><small>03 / OPTIMIZAR</small><strong>Automatizar</strong></div><span class="flow-check">${icon('check')}</span></div>
        <div class="visual-caption mono" aria-hidden="true"><span class="status-dot"></span> Criterio humano. Apoyo de IA.</div>
      </div>
    </section>
    <div class="context-strip"><div class="container context-inner"><span class="mono strip-label">EXPERIENCIA EN</span>${d.hero.sectors.map(s => `<span class="sector">${e(s)}</span>`).join('')}<span class="strip-location">${icon('globe')}${e(d.location)}</span></div></div>
    <section id="sobre-mi" class="section container about" aria-labelledby="about-title">
      <div class="about-main"><p class="eyebrow"><span>01</span> SOBRE MÍ</p><h2 id="about-title">${lines(d.about.heading)}</h2>${d.about.paragraphs.map(t => `<p>${e(t)}</p>`).join('')}</div>
      <div class="principles">${d.about.principles.map((p, i) => `<div class="principle"><span class="principle-number mono">0${i + 1}</span><div><h3>${e(p.label)}</h3><p>${e(p.text)}</p></div></div>`).join('')}</div>
    </section>
    <section id="experiencia" class="section experience-section" aria-labelledby="experience-title"><div class="container">
      <div class="section-heading-row">${sectionHeading('02', 'TRAYECTORIA', '<span id="experience-title">Experiencia que<br>construye criterio.</span>')}<p class="section-aside">Distintos productos y sectores.<br>Un mismo compromiso con la calidad.</p></div>
      <div class="timeline">${d.experience.map((job, i) => `<article class="timeline-item"><div class="timeline-meta"><span class="timeline-index mono">0${i + 1}</span><p class="period"><time datetime="${job.start}">${e(job.period.split(' — ')[0])}</time> — <time datetime="${job.end}">${e(job.period.split(' — ')[1])}</time></p><span class="sector-label">${e(job.sector)}</span></div><div class="timeline-content"><p class="role">${e(job.role)}</p><h3>${e(job.company)}</h3><p class="job-summary">${e(job.summary)}</p><div class="job-detail"><div><h4>Responsabilidades</h4><ul>${job.responsibilities.map(t => `<li>${e(t)}</li>`).join('')}</ul></div><div><h4>Aportes</h4><ul>${job.contributions.map(t => `<li>${e(t)}</li>`).join('')}</ul></div></div>${tags(job.tools)}</div></article>`).join('')}</div>
    </div></section>
    <section id="conocimientos" class="section container" aria-labelledby="skills-title">
      <div class="section-heading-row">${sectionHeading('03', 'CONOCIMIENTOS Y HERRAMIENTAS', '<span id="skills-title">La herramienta correcta.<br>Para cada desafío.</span>')}<p class="section-aside">Conocimientos conectados<br>con su aplicación en el trabajo.</p></div>
      <div class="skills-grid">${d.skills.map(s => `<article class="skill-card"><div class="skill-top">${icon(s.icon)}<span class="mono">${s.number}</span></div><h3>${e(s.title)}</h3><p class="skill-description">${e(s.description)}</p>${tags(s.tools)}<p class="skill-example">${e(s.example)}</p></article>`).join('')}</div>
    </section>
    <section id="aportes" class="section cases-section" aria-labelledby="cases-title"><div class="container">
      <div class="section-heading-row">${sectionHeading('04', 'APORTES DESTACADOS', '<span id="cases-title">De la necesidad<br>a una solución.</span>')}<p class="section-aside">Experiencias en Linex Travel | UltraGroup.<br>Diagramas ilustrativos del enfoque de trabajo.</p></div>
      <div class="case-grid">${d.cases.map(c => `<article class="case-card">${caseVisual(c.visual)}<div class="case-body"><p class="case-category mono">${e(c.number)} / ${e(c.category)}</p><h3>${lines(c.title)}</h3><dl><div><dt>El problema</dt><dd>${e(c.problem)}</dd></div><div><dt>Mi contribución</dt><dd>${e(c.contribution)}</dd></div><div><dt>El aporte</dt><dd>${e(c.benefit)}</dd></div></dl>${tags(c.tools)}</div></article>`).join('')}</div>
      <p class="case-note">${icon('layers')} Descripciones de experiencia profesional. Sin código ni información interna de los proyectos.</p>
    </div></section>
    <section id="formacion" class="section container education-section" aria-labelledby="education-title">
      ${sectionHeading('05', 'FORMACIÓN E IDIOMAS', '<span id="education-title">Aprender también<br>es parte del proceso.</span>')}
      <div class="education-grid"><div class="academic-column"><h3 class="column-label mono">FORMACIÓN ACADÉMICA</h3><article class="academic-card"><span class="university-mark" aria-hidden="true">UV</span><p class="period">${e(d.education.period)}</p><h4>${e(d.education.degree)}</h4><p>${e(d.education.institution)}</p><span class="qualification">${e(d.education.qualification)}</span></article><div class="language-block"><h3 class="column-label mono">IDIOMAS</h3>${d.languages.map(l => `<div class="language"><span>${e(l.name)}</span><span>${e(l.level)}</span></div>`).join('')}</div></div>
      <div class="courses-column"><h3 class="column-label mono">CURSOS Y RUTAS DE FORMACIÓN</h3><ul class="course-list">${d.courses.map(c => `<li><div><span class="course-type mono">${e(c.type)} · ${e(c.institution)}</span><h4>${external(c.url, e(c.title))}</h4></div><time datetime="${c.date}">${e(c.period)}</time></li>`).join('')}</ul><h3 class="column-label certificate-label mono">CERTIFICACIÓN DE IDIOMA</h3><article class="certificate"><div><p class="course-type mono">${e(d.certification.issuer)} · ${e(d.certification.period)}</p><h4>${external(d.certification.url, e(d.certification.title))}</h4><p>${e(d.certification.level)}</p></div><span class="b1-mark" aria-hidden="true">B1</span></article></div></div>
    </section>
    <section id="contacto" class="contact-section" aria-labelledby="contact-title"><div class="container contact-inner"><div><p class="eyebrow"><span>06</span> SIGUIENTE PASO</p><h2 id="contact-title">${lines(d.contact.heading)}</h2><p class="contact-description">${e(d.contact.description)}</p></div><div class="contact-actions">${d.email ? `<a class="contact-email" href="mailto:${e(d.email)}"><span class="mono">${e(d.contact.emailLabel)}</span><span>${e(d.email)}${icon('external')}</span></a><button class="copy-email" type="button" data-email="${e(d.email)}">${icon('copy')}<span>Copiar correo</span></button><span class="sr-only" role="status" id="copy-status"></span>` : ''}<div class="contact-links">${external(d.linkedin, `${icon('linkedin')} ${e(d.contact.linkedinLabel)}`)}${cvLink(d)}${external(d.github, 'GitHub')}</div></div></div></section>
  </main>
  <footer class="site-footer"><div class="container footer-inner"><a class="brand footer-brand" href="#inicio" aria-label="Volver al inicio"><span class="brand-mark" aria-hidden="true">cr<span>.</span></span><span>${e(d.shortName)}<span>${e(d.title)}</span></span></a><p>Hecho con atención al detalle.<br><span>${e(d.location)} · <span data-year>2026</span></span></p><a class="back-top" href="#inicio">Volver arriba ${icon('arrow')}</a></div></footer>
</body>
</html>`;
}
