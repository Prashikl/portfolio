// ========================================
// THEME
// Dark/light toggle + system preference
// ========================================

(function () {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
})();
