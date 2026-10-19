const language = document.documentElement.lang;
const copy = language === 'en' ? {
  menuOpen: 'Open menu', menuClose: 'Close menu', light: 'Light', dark: 'Dark',
  lightMode: 'Switch to light mode', darkMode: 'Switch to dark mode',
  email: 'Copy email', copied: 'Email copied', copiedStatus: 'Email copied to clipboard',
  copyError: 'Could not copy automatically. Select the email or click it to write a message.',
  selectEmail: 'Select the email to copy'
} : {
  menuOpen: 'Abrir menú', menuClose: 'Cerrar menú', light: 'Claro', dark: 'Oscuro',
  lightMode: 'Activar modo claro', darkMode: 'Activar modo oscuro',
  email: 'Copiar correo', copied: 'Correo copiado', copiedStatus: 'Correo copiado al portapapeles',
  copyError: 'No se pudo copiar automáticamente. Puedes seleccionar el correo o pulsarlo para escribir.',
  selectEmail: 'Selecciona el correo para copiar'
};
const themeToggle = document.querySelector('[data-theme-toggle]');
const systemTheme = matchMedia('(prefers-color-scheme: light)');
let explicitTheme = false;
try { explicitTheme = ['light', 'dark'].includes(localStorage.getItem('portfolio-theme')); } catch {}
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#f7f8f2' : '#101412');
  if (themeToggle) {
    themeToggle.hidden = false;
    themeToggle.setAttribute('aria-label', theme === 'dark' ? copy.lightMode : copy.darkMode);
    themeToggle.title = themeToggle.getAttribute('aria-label');
    themeToggle.querySelector('[data-theme-label]').textContent = theme === 'dark' ? copy.light : copy.dark;
  }
}
applyTheme(document.documentElement.dataset.theme || (systemTheme.matches ? 'light' : 'dark'));
themeToggle?.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  explicitTheme = true;
  applyTheme(theme);
  try { localStorage.setItem('portfolio-theme', theme); } catch {}
});
systemTheme.addEventListener('change', event => {
  if (!explicitTheme) applyTheme(event.matches ? 'light' : 'dark');
});
document.querySelectorAll('[data-language]').forEach(link => {
  link.href += location.search + location.hash;
  link.addEventListener('click', () => {
    try { localStorage.setItem('portfolio-language', link.dataset.language); } catch {}
    // Keep the visitor at the same section after changing the language.
    link.href = (link.dataset.language === 'en' ? '/en/' : '/') + location.search + location.hash;
  });
});

const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
function closeMenu() {
  menu?.setAttribute('aria-expanded', 'false');
  menu?.setAttribute('aria-label', copy.menuOpen);
  nav?.classList.remove('is-open');
}
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? copy.menuClose : copy.menuOpen);
  nav.classList.toggle('is-open', open);
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.header-inner')) closeMenu();
});
const wideViewport = matchMedia('(min-width: 1101px)');
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
    copyButton.querySelector('span').textContent = copy.copied;
    status.textContent = copy.copiedStatus;
    setTimeout(() => { copyButton.querySelector('span').textContent = copy.email; }, 2500);
  } catch {
    status.textContent = copy.copyError;
    copyButton.querySelector('span').textContent = copy.selectEmail;
  }
});
document.querySelectorAll('[data-year]').forEach(node => { node.textContent = String(new Date().getFullYear()); });
