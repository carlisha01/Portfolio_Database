(function () {
  'use strict';

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

})();
