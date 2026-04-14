// ========================================
// NAVIGATION
// Fixed nav, full-screen overlay menu
// ========================================

(function () {
  const nav = document.querySelector('.nav');
  const menuToggle = document.getElementById('menu-toggle');
  const menuOverlay = document.getElementById('menu-overlay');

  // Fixed nav background on scroll
  if (nav) {
    let ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          nav.classList.toggle('nav--scrolled', window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // Overlay menu toggle
  if (menuToggle && menuOverlay) {
    function openMenu() {
      menuOverlay.classList.add('menu-overlay--open');
      menuOverlay.setAttribute('aria-hidden', 'false');
      menuToggle.setAttribute('aria-expanded', 'true');
      menuToggle.textContent = 'Close';
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      menuOverlay.classList.remove('menu-overlay--open');
      menuOverlay.setAttribute('aria-hidden', 'true');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = 'Menu';
      document.body.style.overflow = '';
    }

    menuToggle.addEventListener('click', function () {
      var isOpen = menuOverlay.classList.contains('menu-overlay--open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close on link click
    menuOverlay.querySelectorAll('.menu-overlay__link').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menuOverlay.classList.contains('menu-overlay--open')) {
        closeMenu();
        menuToggle.focus();
      }
    });
  }
})();
