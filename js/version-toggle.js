(function () {
  var KEY = 'portfolio-version';
  var PASSWORD = 'trust';
  var EVIDENCE_ACCESS_KEY = 'portfolio-evidence-access';
  var FILES = { v1: 'index-v1.html', v2: 'index-v2.html', v3: 'index-v3.html', v4: 'index-v4.html' };
  var LABELS = { v1: 'V1', v2: 'V2', v3: 'V3', v4: 'V4' };
  var IS_PROD = /\.github\.io$/i.test(location.hostname);

  function currentVersion() {
    var path = location.pathname.split('/').pop() || '';
    if (path === FILES.v1) return 'v1';
    if (path === FILES.v2) return 'v2';
    if (path === FILES.v3) return 'v3';
    if (path === FILES.v4 || path === '' || path === 'index.html') return 'v4';
    return null;
  }

  function navigate(version) {
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
    if (IS_PROD) hideFooterSwitcher();

    var here = currentVersion();

    var el = document.createElement('div');
    el.className = 'vdrop';
    el.setAttribute('data-open', 'false');

    var style = document.createElement('style');
    style.textContent =
      '.vlock[hidden]{display:none!important}.vlock{position:fixed;inset:0;z-index:10050;display:grid;place-items:center;padding:1rem;background:rgba(21,21,21,.72);font-family:Arial,sans-serif}' +
      '.vlock__panel{width:min(100%,24rem);padding:1.5rem;background:#fff8ee;color:#151515;box-shadow:8px 8px 0 #151515}' +
      '.vlock__eyebrow{margin:0 0 .5rem;font-size:.7rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase}' +
      '.vlock h2{margin:0 0 1.25rem;font-size:1.8rem;line-height:1.05;letter-spacing:0}' +
      '.vlock label{display:block;margin-bottom:.4rem;font-size:.78rem;font-weight:700}' +
      '.vlock input{width:100%;height:3rem;padding:.65rem .75rem;border:2px solid #151515;border-radius:0;background:#fff;color:#151515;font:1rem Arial,sans-serif}' +
      '.vlock input:focus{outline:3px solid #3255ff;outline-offset:2px}' +
      '.vlock__error{min-height:1.25rem;margin:.45rem 0;color:#b42318;font-size:.78rem;font-weight:700}' +
      '.vlock__actions{display:flex;justify-content:flex-end;gap:.65rem;margin-top:.5rem}' +
      '.vlock button{min-height:2.75rem;padding:.65rem 1rem;border:2px solid #151515;border-radius:0;font:700 .82rem Arial,sans-serif;cursor:pointer}' +
      '.vlock__cancel{background:transparent;color:#151515}.vlock__submit{background:#151515;color:#fff}';
    document.head.appendChild(style);

    var opts = '';
    ['v1', 'v2', 'v3', 'v4'].forEach(function (v) {
      opts += '<li class="vdrop__opt" role="option" data-v="' + v + '" aria-selected="' + (here === v) + '">' + LABELS[v] + '</li>';
    });

    el.innerHTML =
      '<button type="button" class="vdrop__trigger" aria-haspopup="listbox" aria-expanded="false">' +
        '<span class="vdrop__label">' + (LABELS[here] || '') + '</span>' +
        '<span class="vdrop__caret" aria-hidden="true"></span>' +
      '</button>' +
      '<ul class="vdrop__list" role="listbox">' + opts + '</ul>';

    if (here) document.body.appendChild(el);

    var lock = document.createElement('div');
    lock.className = 'vlock';
    lock.hidden = true;
    lock.innerHTML =
      '<div class="vlock__panel" role="dialog" aria-modal="true" aria-labelledby="vlock-title">' +
        '<form class="vlock__form">' +
          '<p class="vlock__eyebrow">Protected preview</p>' +
          '<h2 id="vlock-title">Switch version</h2>' +
          '<label for="vlock-password">Password</label>' +
          '<input id="vlock-password" type="password" autocomplete="current-password" required>' +
          '<p class="vlock__error" role="alert" aria-live="polite"></p>' +
          '<div class="vlock__actions">' +
            '<button class="vlock__cancel" type="button">Cancel</button>' +
            '<button class="vlock__submit" type="submit">Unlock</button>' +
          '</div>' +
        '</form>' +
      '</div>';
    document.body.appendChild(lock);

    var trigger = el.querySelector('.vdrop__trigger');
    var list = el.querySelector('.vdrop__list');
    var form = lock.querySelector('.vlock__form');
    var title = lock.querySelector('#vlock-title');
    var password = lock.querySelector('#vlock-password');
    var error = lock.querySelector('.vlock__error');
    var cancel = lock.querySelector('.vlock__cancel');
    var targetVersion = null;
    var targetHref = null;
    var returnFocus = trigger;

    function setOpen(open) {
      el.setAttribute('data-open', open ? 'true' : 'false');
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    function closePasswordDialog() {
      lock.hidden = true;
      form.reset();
      error.textContent = '';
      targetVersion = null;
      targetHref = null;
      returnFocus.focus();
    }

    function openPasswordDialog(version) {
      if (version === currentVersion()) return;
      targetVersion = version;
      targetHref = null;
      returnFocus = trigger;
      title.textContent = 'Open ' + LABELS[version] + '?';
      lock.hidden = false;
      window.setTimeout(function () { password.focus(); }, 0);
    }

    function openProtectedLink(link) {
      targetVersion = null;
      targetHref = link.href;
      returnFocus = link;
      title.textContent = 'Open ' + (link.getAttribute('data-password-label') || 'protected page') + '?';
      lock.hidden = false;
      window.setTimeout(function () { password.focus(); }, 0);
    }

    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      setOpen(el.getAttribute('data-open') !== 'true');
    });

    list.addEventListener('click', function (e) {
      var li = e.target.closest('.vdrop__opt');
      if (!li) return;
      setOpen(false);
      openPasswordDialog(li.getAttribute('data-v'));
    });

    document.addEventListener('click', function (e) {
      var link = e.target.closest('a[data-password-protected]');
      if (!link) return;
      e.preventDefault();
      openProtectedLink(link);
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (password.value !== PASSWORD) {
        error.textContent = 'Incorrect password. Try again.';
        password.select();
        return;
      }
      if (targetVersion) navigate(targetVersion);
      else {
        if (/v4-evidence\.html(?:[?#]|$)/.test(targetHref)) {
          sessionStorage.setItem(EVIDENCE_ACCESS_KEY, 'granted');
        }
        location.href = targetHref;
      }
    });

    cancel.addEventListener('click', closePasswordDialog);
    lock.addEventListener('click', function (e) {
      if (e.target === lock) closePasswordDialog();
    });

    document.addEventListener('click', function (e) {
      if (!el.contains(e.target)) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      if (!lock.hidden) closePasswordDialog();
      else setOpen(false);
    });

    if (new URLSearchParams(location.search).get('unlock') === 'evidence') {
      var evidenceLink = document.querySelector('a[data-password-protected][href^="v4-evidence.html"]');
      if (evidenceLink) {
        history.replaceState(null, '', location.pathname + location.hash);
        openProtectedLink(evidenceLink);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
