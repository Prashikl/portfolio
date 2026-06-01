(function () {
  var KEY = 'portfolio-version';
  var FILES = { v1: 'index-v1.html', v2: 'index-v2.html', v3: 'index.html' };
  var LABELS = { v1: 'Classic', v2: 'Vibrant', v3: 'Edition III' };
  var IS_PROD = /\.github\.io$/i.test(location.hostname);

  function currentVersion() {
    var path = location.pathname.split('/').pop() || '';
    if (path === FILES.v1) return 'v1';
    if (path === FILES.v2) return 'v2';
    if (path === FILES.v3 || path === '' || path === '/' || path === 'index-v3.html') return 'v3';
    return null;
  }

  function go(version) {
    if (version === currentVersion()) return;
    localStorage.setItem(KEY, version);
    var base = location.pathname.replace(/[^/]*$/, '');
    location.href = base + FILES[version];
  }

  function hideFooterSwitcher() {
    var nodes = document.querySelectorAll('a[href="index-v1.html"], a[href="index-v2.html"]');
    nodes.forEach(function (a) {
      var span = a.closest('span');
      (span || a).style.display = 'none';
    });
  }

  function mount() {
    if (IS_PROD) { hideFooterSwitcher(); return; }

    var here = currentVersion();
    if (!here) return;

    var el = document.createElement('div');
    el.className = 'vtoggle';
    el.setAttribute('role', 'group');
    el.setAttribute('aria-label', 'Portfolio version');

    var html = '<span class="vtoggle__label">VER</span>';
    ['v1', 'v2', 'v3'].forEach(function (v) {
      html += '<button class="vtoggle__btn" data-v="' + v + '" aria-pressed="' + (here === v) + '">' + LABELS[v] + '</button>';
    });
    el.innerHTML = html;
    document.body.appendChild(el);

    el.addEventListener('click', function (e) {
      var b = e.target.closest('.vtoggle__btn');
      if (!b) return;
      go(b.getAttribute('data-v'));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
