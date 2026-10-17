const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
function closeMenu() {
  menu?.setAttribute('aria-expanded', 'false');
  menu?.setAttribute('aria-label', 'Abrir menú');
  nav?.classList.remove('is-open');
}
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  nav.classList.toggle('is-open', open);
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.header-inner')) closeMenu();
});
const wideViewport = matchMedia('(min-width: 901px)');
wideViewport.addEventListener('change', closeMenu);

const sections = document.querySelectorAll('main section[id]');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      nav?.querySelectorAll('a').forEach(link => {
        const active = link.hash === '#' + entry.target.id;
        link.classList.toggle('is-active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}

const copyButton = document.querySelector('.copy-email');
copyButton?.addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(copyButton.dataset.email);
    copyButton.querySelector('span').textContent = 'Correo copiado';
    status.textContent = 'Correo copiado al portapapeles';
    setTimeout(() => { copyButton.querySelector('span').textContent = 'Copiar correo'; }, 2500);
  } catch {
    status.textContent = 'No se pudo copiar automáticamente. Puedes seleccionar el correo o pulsarlo para escribir.';
    copyButton.querySelector('span').textContent = 'Selecciona el correo para copiar';
  }
});
document.querySelectorAll('[data-year]').forEach(node => { node.textContent = String(new Date().getFullYear()); });
