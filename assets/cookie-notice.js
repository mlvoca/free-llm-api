/* Cookie notice: shown once per browser, on whichever mlvoca.github.io page is visited first.
   It counts as seen as soon as it is shown; "OK" only closes it.
   The site sets no cookies; the only thing stored is this localStorage entry,
   which remembers that the notice was shown (strictly necessary, see privacy.html#cookies).
   mlvoca.github.io has a copy (assets/cookie-notice.js) with the same key, so the notice appears once across both. */
(function () {
  var KEY = 'mlvoca-cookie-notice';
  var PRIVACY = (document.currentScript && document.currentScript.dataset.privacy) || 'privacy.html#cookies';

  function seen() {
    try { return localStorage.getItem(KEY) !== null; } catch (e) { return false; }
  }
  function remember() {
    try { localStorage.setItem(KEY, new Date().toISOString().slice(0, 10)); } catch (e) { /* storage blocked: show again next time */ }
  }
  if (seen()) return;

  var style = document.createElement('style');
  style.textContent =
    '.cookie-notice{position:fixed;left:16px;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:50;' +
      'max-width:700px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;gap:12px 20px;' +
      'padding:14px 18px;border-radius:12px;background:#ffffff;color:#5a4f68;' +
      'border:1px solid #e6e0ee;box-shadow:0 12px 40px rgba(15,12,29,.35);' +
      'font:14px/1.5 ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}' +
    '.cookie-notice p{margin:0;flex:1 1 300px}' +
    '.cookie-notice strong{color:#1b1426}' +
    '.cookie-notice a{color:#a3157a;text-decoration:underline}' +
    '.cookie-notice button{flex:none;cursor:pointer;font:inherit;font-weight:650;padding:7px 22px;border-radius:8px;' +
      'background:#ffffff;color:#1b1426;border:1px solid #1b1426}' +
    '.cookie-notice button:hover{background:#1b1426;color:#ffffff}' +
    '.cookie-notice button:focus-visible{outline:3px solid #a3157a;outline-offset:2px}' +
    '@media (prefers-color-scheme:dark){' +
      '.cookie-notice{background:#241d42;color:#cfc6e0;border-color:rgba(240,140,203,.35);box-shadow:0 12px 40px rgba(0,0,0,.5)}' +
      '.cookie-notice strong{color:#ffffff}' +
      '.cookie-notice a{color:#f6b0dc}' +
      '.cookie-notice button{background:transparent;color:#ffffff;border-color:rgba(255,255,255,.6)}' +
      '.cookie-notice button:hover{background:rgba(255,255,255,.12);color:#ffffff}' +
      '.cookie-notice button:focus-visible{outline-color:#f6b0dc}}';
  document.head.appendChild(style);

  var notice = document.createElement('div');
  notice.className = 'cookie-notice';
  notice.setAttribute('role', 'region');
  notice.setAttribute('aria-label', 'Cookie notice');
  notice.innerHTML =
    '<p><strong>No cookies, no tracking.</strong> This website uses no cookies and no analytics. ' +
    'Your browser only remembers that you have seen this notice. ' +
    '<a href="' + PRIVACY + '">Privacy policy</a></p>' +
    '<button type="button">OK</button>';
  notice.querySelector('button').addEventListener('click', function () {
    notice.remove();
  });

  function show() {
    document.body.appendChild(notice);
    remember();
  }
  if (document.body) show(); else document.addEventListener('DOMContentLoaded', show);
})();
