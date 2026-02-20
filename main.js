// Daruma Consulting — Interactions

(function () {
  'use strict';

  // --- Mobile nav toggle ---
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('nav__links--open');
      navToggle.classList.toggle('nav__toggle--active');
    });

    // Close nav on link click
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('nav__links--open');
        navToggle.classList.remove('nav__toggle--active');
      });
    });
  }

  // --- Nav shadow on scroll ---
  var nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
    }, { passive: true });
  }

  // --- Smooth reveal on scroll ---
  var revealElements = document.querySelectorAll(
    '.pillar, .service, .collab-card, .about, .client, .filosofia'
  );

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(function (el) {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }

  // Add reveal CSS dynamically
  var style = document.createElement('style');
  style.textContent = [
    '.reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }',
    '.revealed { opacity: 1; transform: translateY(0); }'
  ].join('\n');
  document.head.appendChild(style);
})();
