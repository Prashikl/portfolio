(function () {
  function fallbackCopy(text) {
    var area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'absolute';
    area.style.left = '-9999px';
    document.body.appendChild(area);
    area.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(area);
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).catch(function () { fallbackCopy(text); });
    }
    fallbackCopy(text);
    return Promise.resolve();
  }

  document.querySelectorAll('[data-copy]').forEach(function (button) {
    var message = button.parentNode.querySelector('.v4-copy__msg');
    var timer;
    button.addEventListener('click', function () {
      copyText(button.getAttribute('data-copy')).then(function () {
        button.setAttribute('data-copied', '');
        if (message) message.textContent = 'Copied';
        clearTimeout(timer);
        timer = setTimeout(function () {
          button.removeAttribute('data-copied');
          if (message) message.textContent = '';
        }, 1800);
      });
    });
  });
})();
