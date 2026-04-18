// ========================================
// REVEAL
// IntersectionObserver scroll animations
// + Text shuffle hero effect
// ========================================

(function () {
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Scroll Reveal ----
  if (!reducedMotion) {
    var reveals = document.querySelectorAll('.reveal');
    if (reveals.length > 0) {
      var revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
      );
      reveals.forEach(function (el) { revealObserver.observe(el); });
    }

    // ---- Shelf: slide in from right, slide out to left ----
    var shelves = document.querySelectorAll('.experience-item');
    if (shelves.length > 0) {
      var shelfObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              // Entering viewport — slide in from right
              entry.target.classList.remove('shelf-exit');
              entry.target.classList.add('shelf-visible');
            } else {
              // Leaving viewport — check if leaving from the top
              var rect = entry.boundingClientRect;
              if (rect.top < 0) {
                // Scrolled past top — slide out to left
                entry.target.classList.remove('shelf-visible');
                entry.target.classList.add('shelf-exit');
              }
            }
          });
        },
        { threshold: 0.05 }
      );
      shelves.forEach(function (el) { shelfObserver.observe(el); });
    }
  }

  // ---- Text Shuffle ----
  var shuffleEls = document.querySelectorAll('[data-text-shuffle]');
  if (shuffleEls.length === 0 || reducedMotion) return;

  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  shuffleEls.forEach(function (el) {
    var finalText = el.textContent.trim();
    var iterations = 0;
    // Shorter cycle for longer text (paragraphs), full cycle for short text (name)
    var cycleRatio = finalText.length > 40 ? 1.5 : 3;
    var totalIterations = Math.min(finalText.length * cycleRatio, 200);
    var interval = null;
    var delay = parseInt(el.getAttribute('data-shuffle-delay'), 10) || 400;
    // Faster tick for longer text so it doesn't take forever
    var speed = finalText.length > 40 ? 15 : 30;

    setTimeout(function () {
      interval = setInterval(function () {
        el.textContent = finalText
          .split('')
          .map(function (char, index) {
            if (char === ' ' || char === '\n') return char;
            // Punctuation stays as-is once resolved
            if (/[^a-zA-Z0-9]/.test(char)) {
              return index < iterations / cycleRatio ? finalText[index] : char;
            }
            if (index < iterations / cycleRatio) return finalText[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');

        iterations++;
        if (iterations > totalIterations) {
          clearInterval(interval);
          el.textContent = finalText;
        }
      }, speed);
    }, delay);
  });
})();
