(function () {
  'use strict';

  var nav = document.querySelector('[data-nav]');
  var cursor = document.querySelector('.v4-cursor');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function updateNav() {
    if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 24);
  }
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });

  if (cursor && !reduceMotion) {
    window.addEventListener('pointermove', function (event) {
      cursor.style.left = event.clientX + 'px';
      cursor.style.top = event.clientY + 'px';
    }, { passive: true });
  }

  var revealItems = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: .12, rootMargin: '0px 0px -40px' });
    revealItems.forEach(function (item) { observer.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add('is-visible'); });
  }

  document.querySelectorAll('[data-filter]').forEach(function (button) {
    button.addEventListener('click', function () {
      var filter = button.getAttribute('data-filter');
      document.querySelectorAll('[data-filter]').forEach(function (item) {
        item.classList.toggle('is-active', item === button);
      });
      document.querySelectorAll('[data-category]').forEach(function (project) {
        var categories = project.getAttribute('data-category').split(' ');
        project.classList.toggle('is-hidden', filter !== 'all' && categories.indexOf(filter) === -1);
      });
    });
  });

  if (!reduceMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('[data-tilt]').forEach(function (item) {
      item.addEventListener('pointermove', function (event) {
        var rect = item.getBoundingClientRect();
        var rotateX = ((event.clientY - rect.top) / rect.height - .5) * -4;
        var rotateY = ((event.clientX - rect.left) / rect.width - .5) * 4;
        item.style.transform = 'perspective(900px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
      });
      item.addEventListener('pointerleave', function () {
        item.style.transform = '';
      });
    });
  }
})();