/**
 * KOPPEE — Main Script
 * Handles navigation, reveals, forms, and interactivity.
 */
(function () {
  'use strict';

  /* ── Respect Reduced Motion ── */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Year Stamp ── */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ── Navigation: Scroll Shadow ── */
  const nav = document.querySelector('.nav');
  if (nav) {
    var lastScroll = 0;
    window.addEventListener('scroll', function () {
      var scrollY = window.scrollY;
      if (scrollY > 40) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
      lastScroll = scrollY;
    }, { passive: true });
  }

  /* ── Mobile Burger Toggle ── */
  var burger = document.querySelector('.burger');
  var mobileMenu = document.querySelector('.nav__mobile-menu');
  if (burger && mobileMenu) {
    burger.addEventListener('click', function () {
      var isOpen = burger.classList.toggle('open');
      mobileMenu.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', isOpen);
      mobileMenu.setAttribute('aria-hidden', !isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    /* Close on link click */
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Active Nav Link ── */
  (function setActiveNav() {
    var path = window.location.pathname;
    var filename = path.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav__link').forEach(function (link) {
      var href = link.getAttribute('href') || '';
      var linkFile = href.split('/').pop();
      if (linkFile === filename || (filename === '' && linkFile === 'index.html')) {
        link.classList.add('active');
      }
    });
  })();

  /* ── IntersectionObserver: .reveal ── */
  var revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length && !prefersReducedMotion && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else if (prefersReducedMotion) {
    /* Show all immediately when reduced motion */
    revealElements.forEach(function (el) {
      el.classList.add('reveal--visible');
    });
  }

  /* ── Menu Filter ── */
  var filterBtns = document.querySelectorAll('.menu-filter__btn');
  var menuItems = document.querySelectorAll('.menu-category');
  if (filterBtns.length && menuItems.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        /* Update active state */
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        var filter = btn.getAttribute('data-filter');

        menuItems.forEach(function (cat) {
          if (filter === 'all' || cat.getAttribute('data-category') === filter) {
            cat.style.display = '';
          } else {
            cat.style.display = 'none';
          }
        });
      });
    });
  }

  /* ── Contact Form Handler ── */
  var forms = document.querySelectorAll('[data-form]');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var statusEl = form.querySelector('.form-status');
      if (!statusEl) return;

      var isValid = true;
      var fields = form.querySelectorAll('[required]');
      fields.forEach(function (field) {
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = '#B91C1C';
        } else {
          field.style.borderColor = '';
        }
      });

      /* Basic email check */
      var emailField = form.querySelector('input[type="email"]');
      if (emailField && emailField.value) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value)) {
          isValid = false;
          emailField.style.borderColor = '#B91C1C';
        }
      }

      statusEl.classList.add('show');
      if (isValid) {
        statusEl.classList.remove('form-err');
        statusEl.classList.add('form-ok');
        statusEl.textContent = 'Thank you! Your message has been sent. We\'ll get back to you shortly.';
        form.reset();
      } else {
        statusEl.classList.remove('form-ok');
        statusEl.classList.add('form-err');
        statusEl.textContent = 'Please fill in all required fields correctly.';
      }
    });
  });

  /* ── Smooth Scroll for Anchor Links ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
      }
    });
  });

})();
