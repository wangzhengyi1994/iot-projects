/* ============================================
   YIGAN Homepage - JavaScript
   Scroll fade-in animation + Header scroll
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
  // Scroll fade-in animation
  const fadeElements = document.querySelectorAll('.fade-in');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(function (el) {
    observer.observe(el);
  });

  // Hardware tab switching
  const tabBtns = document.querySelectorAll('.hw-tab-btn');
  const tabPanels = document.querySelectorAll('.hw-tab-panel');
  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var tab = btn.getAttribute('data-tab');
      tabBtns.forEach(function (b) { b.classList.remove('active'); });
      tabPanels.forEach(function (p) { p.classList.remove('active'); });
      btn.classList.add('active');
      document.getElementById('tab-' + tab).classList.add('active');
    });
  });

  // Header shadow on scroll
  const header = document.querySelector('.header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.08)';
    } else {
      header.style.boxShadow = '0 1px 4px rgba(0, 0, 0, 0.06)';
    }
  });
});
