// NAV scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile menu toggle
const toggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav__links');
toggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Intersection Observer — animate cards on scroll
const cards = document.querySelectorAll('.card, .skill, .cert-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeUp 0.5s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

cards.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.animationDelay = `${(i % 10) * 0.05}s`;
  observer.observe(el);
});
