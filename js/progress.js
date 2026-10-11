// OWP Workshop — client-side lab progress (localStorage; no backend).
//
// This is the static-site equivalent of the ifp-delivery-workshop "My Progress"
// feature (which is driven by a workshop backend when served at /w/<slug>/...).
// Here there is no backend, so completion is stored per-browser in localStorage:
//   - a lab is marked complete when its "Check my work" button is clicked,
//   - completed labs get a ✓ next to them in the sidebar,
//   - a "📊 My Progress" link is injected at the top of the sidebar,
//   - the My Progress page (docs/progress.html) renders a completion summary.
// Include this on every page, after js/nav.js.

(function () {
  var KEY = 'owp-progress-v1';

  // The workshop's hands-on labs, in workshop order.
  var LABS = [
    { file: '04-lab-data-readiness.html',     title: 'Data Readiness Assessment', section: 'Delivering OWP' },
    { file: '04-lab-template-mapping.html',    title: 'Map the HR Extract',         section: 'Delivering OWP' },
    { file: 'cpp-07-lab.html',                 title: 'Explore the CPP',            section: 'Continuous Position Plan' },
    { file: 'cpp-lab-positions.html',          title: 'Create & Cost a Position',   section: 'Continuous Position Plan' },
    { file: 'cpp-lab-position-transfer.html',  title: 'Transfer a Position',        section: 'Continuous Position Plan' },
    { file: 'cpp-lab-worker-transfer.html',    title: 'Transfer a Worker',          section: 'Continuous Position Plan' },
    { file: 'cpp-lab-skills.html',             title: 'Skills Matching',            section: 'Continuous Position Plan' },
    { file: 'sec-03-lab.html',                 title: 'Configure Selective Access', section: 'Security & Access' }
  ];
  var LAB_FILES = {};
  LABS.forEach(function (l) { LAB_FILES[l.file] = l; });

  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(o) { try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) {} }
  function isDone(file) { return !!load()[file]; }
  function markDone(file) { var o = load(); if (!o[file]) { o[file] = { done: true, ts: Date.now() }; save(o); } }
  function reset() { save({}); }

  function docPrefix() { return window.location.pathname.includes('/docs/') ? './' : './docs/'; }
  function currentFile() { return (window.location.pathname.split('/').pop() || 'index.html'); }

  document.addEventListener('DOMContentLoaded', function () {
    var cur = currentFile();

    // Record completion when this lab's "Check my work" button is clicked.
    if (LAB_FILES[cur]) {
      document.querySelectorAll('.lab-check-button').forEach(function (btn) {
        btn.addEventListener('click', function () { markDone(cur); addSidebarDots(); });
      });
    }

    injectProgressLink();
    addSidebarDots();
    renderProgressPage();

    var rb = document.getElementById('progress-reset');
    if (rb) rb.addEventListener('click', function () { reset(); renderProgressPage(); refreshSidebarDots(); });
  });

  // Inject a "My Progress" link at the top of the sidebar (mirrors IFP).
  function injectProgressLink() {
    var header = document.querySelector('nav.sidebar .sidebar-header');
    if (!header || document.getElementById('nav-my-progress')) return;
    var a = document.createElement('a');
    a.id = 'nav-my-progress';
    a.href = docPrefix() + 'progress.html';
    a.textContent = '📊 My Progress';
    a.style.cssText = 'display:block;margin:0.5rem 1rem 0;padding:0.5rem 0.75rem;background:rgba(255,255,255,0.10);border-radius:6px;color:#fff;text-decoration:none;font-weight:600;font-size:0.9rem;';
    if (currentFile() === 'progress.html') { a.style.background = 'rgba(255,255,255,0.22)'; }
    header.insertAdjacentElement('afterend', a);
  }

  // Append a ✓ to completed lab links in the sidebar.
  function addSidebarDots() {
    document.querySelectorAll('.nav-link').forEach(function (link) {
      var file = (link.getAttribute('href') || '').split('/').pop();
      if (LAB_FILES[file] && isDone(file) && !link.querySelector('.lab-done-dot')) {
        var dot = document.createElement('span');
        dot.className = 'lab-done-dot';
        dot.textContent = ' ✓';
        dot.style.cssText = 'color:#4ade80;font-weight:700;';
        link.appendChild(dot);
      }
    });
  }

  // Remove any dots then re-add (used after a reset).
  function refreshSidebarDots() {
    document.querySelectorAll('.lab-done-dot').forEach(function (d) { d.remove(); });
    addSidebarDots();
  }

  // Render the My Progress page if #progress-root is present.
  function renderProgressPage() {
    var root = document.getElementById('progress-root');
    if (!root) return;
    var state = load();
    var doneCount = LABS.filter(function (l) { return state[l.file]; }).length;
    var pct = Math.round((doneCount / LABS.length) * 100);
    var prefix = docPrefix();

    var sections = [];
    LABS.forEach(function (l) { if (sections.indexOf(l.section) === -1) sections.push(l.section); });

    var html = '';
    html += '<div style="margin:0 0 1.5rem;">';
    html += '<div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:0.4rem;">';
    html += '<strong style="font-size:1.05rem;color:#1e3a5f;">' + doneCount + ' of ' + LABS.length + ' labs complete</strong>';
    html += '<span style="color:#64748b;font-size:0.9rem;">' + pct + '%</span></div>';
    html += '<div style="background:#e2e8f0;border-radius:999px;height:12px;overflow:hidden;">';
    html += '<div style="background:#16a34a;height:100%;width:' + pct + '%;transition:width .3s;"></div></div></div>';

    sections.forEach(function (sec) {
      html += '<h3 style="margin:1.25rem 0 0.5rem;color:#1e3a5f;">' + sec + '</h3>';
      html += '<div style="display:flex;flex-direction:column;gap:0.4rem;">';
      LABS.filter(function (l) { return l.section === sec; }).forEach(function (l) {
        var done = !!state[l.file];
        html += '<a href="' + prefix + l.file + '" style="display:flex;align-items:center;gap:0.6rem;padding:0.6rem 0.85rem;border:1px solid #e2e8f0;border-radius:6px;text-decoration:none;color:#0f172a;background:' + (done ? '#f0fdf4' : '#fff') + ';">';
        html += '<span style="flex:0 0 1.5rem;height:1.5rem;line-height:1.5rem;text-align:center;border-radius:999px;background:' + (done ? '#16a34a' : '#e2e8f0') + ';color:' + (done ? '#fff' : '#94a3b8') + ';font-weight:700;">' + (done ? '✓' : '•') + '</span>';
        html += '<span style="font-weight:600;">' + l.title + '</span>';
        html += '<span style="margin-left:auto;font-size:0.8rem;color:' + (done ? '#16a34a' : '#94a3b8') + ';">' + (done ? 'Complete' : 'Not started') + '</span>';
        html += '</a>';
      });
      html += '</div>';
    });

    root.innerHTML = html;
  }
})();
