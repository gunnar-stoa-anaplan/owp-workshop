// OWP Workshop — Navigation, Sidebar Injection, Language Switcher
//
// Shares the canonical design-system behaviors with rpm-apps-workshop
// (sidebar injection, collapsible sections, hamburger, language switcher).
// The SIDEBAR_SECTIONS below are OWP-specific — this file is seeded from
// the canonical js/nav.js but carries its own sidebar data, the same way
// ifp-delivery-workshop does. When re-syncing the design system, re-apply
// the OWP SIDEBAR_SECTIONS + titles after copying the canonical file.

// ── Sidebar structure (single source of truth) ───────────────────────────────
// All hrefs are filenames only. Path prefix is computed at injection time
// based on whether the current page is at the site root or inside /docs/.
const SIDEBAR_SECTIONS = [
  {
    title: 'Getting Started',
    links: [
      { href: '00-overview.html',        text: 'Workshop Overview' },
      { href: '00-case-study.html',      text: 'Case Study: Northwind Global' },
      { href: '00-tenant-access.html',   text: 'Tenant Access & Prerequisites' },
      { href: '01-owp-overview.html',    text: 'What OWP Is' },
    ],
  },
  {
    title: 'Delivering OWP',
    links: [
      { href: '02-app-led-delivery.html',        text: 'App-Led Delivery' },
      { href: '03-delivery-lifecycle.html',      text: 'The Delivery Lifecycle' },
      { href: '04-data-templates.html',          text: 'Data Templates & Readiness' },
      { href: '04-lab-data-readiness.html',      text: 'Lab: Data Readiness Assessment' },
      { href: '04-lab-template-mapping.html',    text: 'Lab: Map the HR Extract' },
      { href: '05-extensions-vs-core.html',      text: 'Extensions vs. Core Changes' },
      { href: '06-delivery-timeline.html',       text: 'Delivery Timeline' },
      { href: '07-integration-architecture.html', text: 'Integration & Architecture' },
    ],
  },
  {
    title: 'Workforce Budgeting (WFB)',
    links: [
      { href: 'wfb-01-overview.html',    text: 'WFB Overview' },
    ],
  },
  {
    title: 'Continuous Position Plan (CPP)',
    links: [
      { href: 'cpp-01-overview.html',        text: 'CPP Overview' },
      { href: 'cpp-02-wfb-bridge.html',      text: 'WFB → CPP Bridge' },
      { href: 'cpp-03-workspace.html',       text: 'The CPP Workspace' },
      { href: 'cpp-07-lab.html',             text: 'Lab: Explore the CPP' },
      { href: 'cpp-04-positions.html',       text: 'Create & Edit Positions' },
      { href: 'cpp-lab-positions.html',      text: 'Lab: Create & Cost a Position' },
      { href: 'cpp-05-transfers.html',       text: 'Position & Worker Transfers' },
      { href: 'cpp-lab-position-transfer.html', text: 'Lab: Transfer a Position' },
      { href: 'cpp-lab-worker-transfer.html', text: 'Lab: Transfer a Worker' },
      { href: 'cpp-06-skills-matching.html', text: 'Skills Matching' },
      { href: 'cpp-lab-skills.html',         text: 'Lab: Skills Matching' },
      { href: 'cpp-08-org-modeling.html',    text: 'Org Modeling, RIF & Hiring Freeze' },
    ],
  },
  {
    title: 'Security & Access',
    links: [
      { href: 'sec-01-roles.html',            text: 'User Roles & Security Model' },
      { href: 'sec-02-selective-access.html',  text: 'Selective Access' },
      { href: 'sec-03-lab.html',              text: 'Lab: Configure Selective Access' },
    ],
  },
  {
    title: 'Looking Ahead & Reference',
    links: [
      { href: '90-optimizer.html',   text: 'Optimizer & Future Use Cases' },
      { href: '91-foundation.html',  text: 'OWP as a Foundation' },
      { href: '92-qanda.html',       text: 'Q&A from Sessions' },
      { href: '93-resources.html',   text: 'Resources & Downloads' },
      { href: '94-wrap-up.html',     text: 'Workshop Wrap-up' },
    ],
  },
];

const LANG_OPTIONS = [
  { value: 'en', label: '🇺🇸 English' },
  { value: 'ja', label: '🇯🇵 日本語' },
  { value: 'es', label: '🇪🇸 Español' },
  { value: 'fr', label: '🇫🇷 Français' },
  { value: 'de', label: '🇩🇪 Deutsch' },
  { value: 'pt', label: '🇧🇷 Português' },
  { value: 'ko', label: '🇰🇷 한국어' },
  { value: 'zh', label: '🇨🇳 中文' },
];

function getLinkPrefix() {
  // Sibling-relative for pages inside /docs/, otherwise prefix with ./docs/
  return window.location.pathname.includes('/docs/') ? './' : './docs/';
}

function buildSidebarHTML() {
  const prefix = getLinkPrefix();
  const sectionsHTML = SIDEBAR_SECTIONS.map(section => {
    const linksHTML = section.links.map(link =>
      `<li><a class="nav-link" href="${prefix}${link.href}">${link.text}</a></li>`
    ).join('');
    return `<li class="nav-section-title">${section.title}</li>
      <ul class="nav-submenu">${linksHTML}</ul>`;
  }).join('');

  const langOptionsHTML = LANG_OPTIONS.map(opt =>
    `<option value="${opt.value}">${opt.label}</option>`
  ).join('');

  return `
    <div class="sidebar-header">
      <div class="sidebar-title">OWP Lab Guide</div>
    </div>
    <ul class="nav-list">${sectionsHTML}</ul>
    <div class="lang-switcher">
      <span class="lang-switcher-label">🌐 Language</span>
      <select id="lang-select" class="lang-select">${langOptionsHTML}</select>
    </div>`;
}

document.addEventListener('DOMContentLoaded', function () {

  // ── Inject sidebar into placeholder ────────────────────────────────────────
  // Pages have <nav class="sidebar"></nav> as an empty placeholder.
  // (Skip injection if the nav already has content — supports legacy pages.)
  const sidebarEl = document.querySelector('nav.sidebar');
  if (sidebarEl && sidebarEl.children.length === 0) {
    sidebarEl.innerHTML = buildSidebarHTML();
  }

  // ── Mark active nav link based on current page filename ────────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  // ── Collapsible nav sections ───────────────────────────────────────────────
  // Section titles act as toggles; their submenu is the following <ul class="nav-submenu">
  const sectionTitles = document.querySelectorAll('.nav-section-title');

  sectionTitles.forEach(title => {
    const submenu = title.nextElementSibling;
    if (!submenu || !submenu.classList.contains('nav-submenu')) return;

    const hasActive = submenu.querySelector('.nav-link.active');

    if (hasActive) {
      title.classList.add('open');
      submenu.style.display = 'block';
    } else {
      title.classList.remove('open');
      submenu.style.display = 'none';
    }

    title.style.cursor = 'pointer';
    title.addEventListener('click', () => {
      const isOpen = title.classList.toggle('open');
      submenu.style.display = isOpen ? 'block' : 'none';
    });
  });

  // ── Mobile hamburger toggle ────────────────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.querySelector('.sidebar');
  if (hamburger && sidebar) {
    hamburger.addEventListener('click', () => sidebar.classList.toggle('open'));
  }

  // ── Language switcher ──────────────────────────────────────────────────────
  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    const pathParts = window.location.pathname.split('/');
    const langIndex = pathParts.indexOf('docs') + 1;
    const currentLang = (langIndex > 0 && pathParts[langIndex] && pathParts[langIndex].length === 2)
      ? pathParts[langIndex]
      : 'en';
    langSelect.value = currentLang;

    langSelect.addEventListener('change', function () {
      const selectedLang = this.value;
      const currentPath = window.location.pathname;

      let newPath;
      if (selectedLang === 'en') {
        newPath = currentPath.replace(/\/docs\/[a-z]{2}\//, '/docs/');
      } else {
        if (currentPath.includes('/docs/') && !currentPath.match(/\/docs\/[a-z]{2}\//)) {
          newPath = currentPath.replace('/docs/', `/docs/${selectedLang}/`);
        } else {
          newPath = currentPath.replace(/\/docs\/[a-z]{2}\//, `/docs/${selectedLang}/`);
        }
      }
      window.location.href = newPath;
    });
  }

});
