// Apply the preference before the stylesheet paints, including on language changes.
(() => {
  let theme;
  let language;
  try {
    theme = localStorage.getItem('portfolio-theme');
    language = localStorage.getItem('portfolio-language');
  } catch { /* Preferences remain usable when browser storage is unavailable. */ }
  if (theme !== 'light' && theme !== 'dark') {
    theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#f7f8f2' : '#101412');
  if (language === 'en' && /^\/(?:index\.html)?$/.test(location.pathname)) {
    location.replace('/en/' + location.search + location.hash);
  }
})();
