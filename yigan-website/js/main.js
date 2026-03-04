/* ========== 一感智能科技 交互脚本 ========== */

document.addEventListener('DOMContentLoaded', function () {

  /* -- Header scroll effect -- */
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 10);
    });
  }

  /* -- Mobile menu toggle -- */
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      menuToggle.classList.toggle('active');
      nav.classList.toggle('active');
    });
    // Close menu on nav link click
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
      });
    });
  }

  /* -- Mobile dropdown toggle -- */
  if (window.innerWidth <= 768) {
    document.querySelectorAll('.nav-item').forEach(function (item) {
      if (item.querySelector('.dropdown')) {
        item.addEventListener('click', function (e) {
          if (e.target.closest('.dropdown')) return;
          e.preventDefault();
          item.classList.toggle('open');
        });
      }
    });
  }

  /* -- Fade-in on scroll (Intersection Observer) -- */
  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    fadeEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: show all
    fadeEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* -- Counter animation for stats -- */
  const statNums = document.querySelectorAll('.stat-num[data-count]');
  if (statNums.length && 'IntersectionObserver' in window) {
    const countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    statNums.forEach(function (el) { countObserver.observe(el); });
  }

  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 1500;
    var start = 0;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      var current = Math.floor(eased * target);
      el.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(step);
  }

  /* -- Smooth scroll for anchor links -- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
