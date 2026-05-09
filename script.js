(function () {
  'use strict';

  /* ── Prevent browser scroll restoration from jumping to a hash anchor on reload ── */
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);

  /* ── Navbar scroll state ── */
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* ── Hamburger menu ── */
  const hamburger = document.getElementById('hamburger');

  hamburger.addEventListener('click', function () {
    const isOpen = navbar.classList.toggle('nav-open');
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      navbar.classList.remove('nav-open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  /* ── Active nav link + scroll-nav dots on scroll ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const scrollNavDots = document.querySelectorAll('.scroll-nav-dot');

  const activeObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(function (link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
        scrollNavDots.forEach(function (dot) {
          dot.classList.toggle('active', dot.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { threshold: 0.35, rootMargin: '-60px 0px 0px 0px' });

  sections.forEach(function (s) { activeObserver.observe(s); });

  /* ── Scroll-reveal animations ── */
  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ── Data grid (hero visual) ── */
  const grid = document.getElementById('dataGrid');
  if (grid) {
    const pattern = [
      0,1,0,2,0,1,0,
      1,2,1,0,1,2,1,
      0,1,2,1,2,1,0,
      2,0,1,2,1,0,2,
      0,2,1,0,1,2,0,
      1,0,2,1,2,0,1,
      0,1,0,2,0,1,0,
    ];
    const classes = ['', 'active', 'mid', 'accent'];
    pattern.forEach(function (v) {
      const cell = document.createElement('div');
      cell.className = 'cell ' + (classes[v] || '');
      grid.appendChild(cell);
    });

    /* Animate cells in on load */
    const cells = grid.querySelectorAll('.cell');
    cells.forEach(function (cell, i) {
      cell.style.opacity = '0';
      cell.style.transform = 'scale(0.5)';
      cell.style.transition = 'opacity 0.4s ease ' + (i * 18) + 'ms, transform 0.4s ease ' + (i * 18) + 'ms';
      setTimeout(function () {
        cell.style.opacity = '1';
        cell.style.transform = 'scale(1)';
      }, 200 + i * 18);
    });
  }

  /* ── Looker Studio iframe loading ── */
  const frame   = document.getElementById('lookerFrame');
  const loading = document.getElementById('embedLoading');
  const fallback = document.getElementById('embedFallback');
  const container = document.getElementById('embedContainer');

  if (frame) {
    frame.addEventListener('load', function () {
      frame.classList.add('loaded');
      if (loading) loading.style.display = 'none';
    });

    /* Show fallback if iframe has not loaded after 8 seconds */
    setTimeout(function () {
      if (!frame.classList.contains('loaded')) {
        if (container) container.style.display = 'none';
        if (fallback) fallback.style.display = 'block';
      }
    }, 8000);
  }

  /* ── Sentiment bar chart animation ── */
  const chartSection = document.getElementById('review-intelligence');
  if (chartSection) {
    const barObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          document.querySelectorAll('.bar-fill').forEach(function (bar) {
            bar.classList.add('animated');
          });
          barObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    barObserver.observe(chartSection);
  }


  /* ── Dashboard preview tabs + Chart.js ── */
  const dashTabBtns = document.querySelectorAll('.dash-tab-btn');
  const dashPanels  = document.querySelectorAll('.dash-panel');
  const dashReady   = {};

  function dashC() {
    return {
      teal:      '#0F5757', tealMid:  '#1A8080', tealLight: '#4AABAB',
      amber:     '#C17F3A', amberMid: '#D4A55A', slate:     '#6B9E9E',
      rose:      '#B85C5C', blue:     '#4A7AAB',
      tick:      '#8A8A8A', grid:     'rgba(0,0,0,0.06)',
      font:      "'Inter', system-ui, sans-serif",
    };
  }

  function fmtK(v) {
    return Math.abs(v) >= 1000 ? '€' + (v / 1000).toFixed(0) + 'k' : '€' + v;
  }

  function initDashTab(tab) {
    if (typeof Chart === 'undefined') return;
    const co = dashC();
    const tk = { color: co.tick, font: { family: co.font, size: 11 } };
    const gr = { color: co.grid };

    if (tab === 'overview') {
      const elCat = document.getElementById('chartCategory');
      const elDay = document.getElementById('chartDayOfWeek');
      if (!elCat || !elDay) return;
      new Chart(elCat, {
        type: 'bar',
        data: {
          labels: ['Food Menu', 'Set Menus', 'Wines & Cava', 'Beverages', 'Cafeteria', 'Spirits'],
          datasets: [{ data: [185200, 47300, 32100, 18400, 12000, 8180], backgroundColor: [co.teal, co.tealMid, co.tealLight, co.amber, co.amberMid, co.slate], borderRadius: 3 }]
        },
        options: { indexAxis: 'y', maintainAspectRatio: false, plugins: { legend: { display: false } },
          scales: { x: { grid: gr, ticks: Object.assign({}, tk, { callback: fmtK }) }, y: { grid: { display: false }, ticks: tk } } }
      });
      new Chart(elDay, {
        type: 'bar',
        data: {
          labels: ['Sunday', 'Saturday', 'Monday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday'],
          datasets: [{ data: [71400, 68900, 44180, 42100, 34800, 31200, 18900], backgroundColor: [co.teal, co.teal, co.tealMid, co.tealMid, co.tealLight, co.tealLight, co.amber], borderRadius: 3 }]
        },
        options: { indexAxis: 'y', maintainAspectRatio: false, plugins: { legend: { display: false } },
          scales: { x: { grid: gr, ticks: Object.assign({}, tk, { callback: fmtK }) }, y: { grid: { display: false }, ticks: tk } } }
      });
    }

    if (tab === 'menu') {
      const elDonut = document.getElementById('chartMenuDonut');
      const elLine  = document.getElementById('chartMonthly');
      if (!elDonut || !elLine) return;
      new Chart(elDonut, {
        type: 'doughnut',
        data: {
          labels: ['Tapas', 'Rice Dishes', 'Fish', 'Meat', 'Daily Special', 'Starters', 'Desserts', 'Other'],
          datasets: [{ data: [20.6, 20.5, 14.7, 11.9, 10.3, 8.0, 6.9, 7.1], backgroundColor: [co.teal, co.tealMid, co.tealLight, co.amber, co.amberMid, co.slate, co.rose, co.blue], borderWidth: 2, borderColor: '#fff' }]
        },
        options: { maintainAspectRatio: false, cutout: '60%',
          plugins: { legend: { position: 'right', labels: { font: { family: co.font, size: 11 }, color: co.tick, boxWidth: 12, padding: 8 } } } }
      });
      new Chart(elLine, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr'],
          datasets: [
            { label: 'Food Menu',    data: [34800, 42100, 52400, 55900], borderColor: co.teal,      backgroundColor: 'rgba(15,87,87,0.08)', fill: true,  tension: 0.4, pointRadius: 4, borderWidth: 2 },
            { label: 'Set Menus',    data: [9200,  11400, 13800, 12900], borderColor: co.amber,     backgroundColor: 'transparent',          fill: false, tension: 0.4, pointRadius: 4, borderWidth: 2 },
            { label: 'Wines & Cava', data: [6400,  7800,  9200,  8700],  borderColor: co.tealLight, backgroundColor: 'transparent',          fill: false, tension: 0.4, pointRadius: 4, borderWidth: 2 }
          ]
        },
        options: { maintainAspectRatio: false,
          plugins: { legend: { labels: { font: { family: co.font, size: 11 }, color: co.tick, boxWidth: 12, usePointStyle: true, pointStyleWidth: 8 } } },
          scales: { x: { grid: gr, ticks: tk }, y: { grid: gr, ticks: Object.assign({}, tk, { callback: fmtK }) } } }
      });
    }

    if (tab === 'wine') {
      const elWine = document.getElementById('chartWineDonut');
      const elTop  = document.getElementById('chartTopWines');
      if (!elWine || !elTop) return;
      new Chart(elWine, {
        type: 'doughnut',
        data: {
          labels: ['White Wine', 'Red Wine', 'Sangria', 'Cava', 'Rosé'],
          datasets: [{ data: [42.5, 23.7, 21.8, 9.2, 2.8], backgroundColor: [co.teal, co.rose, co.amber, co.tealLight, co.amberMid], borderWidth: 2, borderColor: '#fff' }]
        },
        options: { maintainAspectRatio: false, cutout: '60%',
          plugins: { legend: { position: 'right', labels: { font: { family: co.font, size: 11 }, color: co.tick, boxWidth: 12, padding: 8 } } } }
      });
      new Chart(elTop, {
        type: 'bar',
        data: {
          labels: ['Sangria Brut', 'White Reserva', 'Albaríño', 'Verdejo', 'Grenache Blanc'],
          datasets: [{ data: [3820, 3651, 2565, 2014, 1948], backgroundColor: [co.teal, co.tealMid, co.tealLight, co.amber, co.amberMid], borderRadius: 3 }]
        },
        options: { indexAxis: 'y', maintainAspectRatio: false, plugins: { legend: { display: false } },
          scales: { x: { grid: gr, ticks: Object.assign({}, tk, { callback: function(v) { return '€' + Number(v).toLocaleString('en'); } }) }, y: { grid: { display: false }, ticks: tk } } }
      });
    }

    if (tab === 'beverages') {
      const elBev = document.getElementById('chartBevDonut');
      const elMo  = document.getElementById('chartBevMonthly');
      if (!elBev || !elMo) return;
      new Chart(elBev, {
        type: 'doughnut',
        data: {
          labels: ['Soft Drinks', 'Beer', 'Aperitifs'],
          datasets: [{ data: [52.5, 42.0, 5.5], backgroundColor: [co.teal, co.tealMid, co.amber], borderWidth: 2, borderColor: '#fff' }]
        },
        options: { maintainAspectRatio: false, cutout: '60%',
          plugins: { legend: { position: 'right', labels: { font: { family: co.font, size: 11 }, color: co.tick, boxWidth: 12, padding: 8 } } } }
      });
      new Chart(elMo, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr'],
          datasets: [
            { label: 'Soft Drinks', data: [2100, 3400, 4800, 6500], borderColor: co.teal,      backgroundColor: 'rgba(15,87,87,0.08)', fill: true,  tension: 0.4, pointRadius: 4, borderWidth: 2 },
            { label: 'Beer',        data: [1800, 2900, 3600, 5200], borderColor: co.amber,     backgroundColor: 'transparent',          fill: false, tension: 0.4, pointRadius: 4, borderWidth: 2 },
            { label: 'Aperitifs',   data: [380,  560,  620,  840],  borderColor: co.tealLight, backgroundColor: 'transparent',          fill: false, tension: 0.4, pointRadius: 4, borderWidth: 2 }
          ]
        },
        options: { maintainAspectRatio: false,
          plugins: { legend: { labels: { font: { family: co.font, size: 11 }, color: co.tick, boxWidth: 12, usePointStyle: true, pointStyleWidth: 8 } } },
          scales: { x: { grid: gr, ticks: tk }, y: { grid: gr, ticks: Object.assign({}, tk, { callback: fmtK }) } } }
      });
    }
  }

  if (dashTabBtns.length) {
    dashTabBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const tab = btn.getAttribute('data-tab');
        dashTabBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        dashPanels.forEach(function (p) { p.classList.add('hidden'); });
        const panel = document.getElementById('dash-' + tab);
        if (panel) {
          panel.classList.remove('hidden');
          if (!dashReady[tab]) { initDashTab(tab); dashReady[tab] = true; }
        }
      });
    });
    initDashTab('overview');
    dashReady['overview'] = true;
  }

})();
