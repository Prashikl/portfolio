// ========================================
// SCROLL STRIP
// Converts vertical scroll into horizontal
// card movement while section is pinned
// ========================================

(function () {
  var section = document.querySelector('.scroll-section');
  var strip = document.querySelector('.scroll-strip');
  var track = document.querySelector('.scroll-strip__track');

  if (!section || !strip || !track) return;

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // How far the track needs to translate horizontally
  var scrollDistance = 0;

  function measure() {
    // Reset transform so we can measure natural width
    track.style.transform = 'translateX(0)';

    scrollDistance = track.scrollWidth - strip.clientWidth;
    if (scrollDistance < 0) scrollDistance = 0;

    // Section height = one viewport (sticky frame) + horizontal travel distance
    section.style.height = (window.innerHeight + scrollDistance) + 'px';
  }

  function onScroll() {
    if (scrollDistance <= 0) return;

    var rect = section.getBoundingClientRect();
    // How far the section top has scrolled past the viewport top
    var scrolled = -rect.top;

    // Clamp progress 0 → 1
    var progress = Math.max(0, Math.min(1, scrolled / scrollDistance));

    if (reducedMotion) {
      track.style.transform = 'translateX(' + (-progress * scrollDistance) + 'px)';
    } else {
      track.style.transform = 'translateX(' + (-progress * scrollDistance) + 'px)';
    }
  }

  // Initial setup
  measure();
  onScroll();

  // Recalculate on resize
  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      measure();
      onScroll();
    }, 100);
  });

  // Drive horizontal movement from vertical scroll
  window.addEventListener('scroll', onScroll, { passive: true });
})();
