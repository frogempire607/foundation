// Progressive-enhancement flag: enables the scroll-reveal animation only when
// JS runs (see .js .reveal in styles.css). Without it, content stays visible.
document.documentElement.classList.add('js');

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  const setOpen = (open) => {
    links.classList.toggle('open', open);
    toggle.textContent = open ? '✕' : '☰';
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  };
  toggle.addEventListener('click', () => setOpen(!links.classList.contains('open')));
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => setOpen(false));
  });
}

// Nav elevation on scroll
const navEl = document.querySelector('.nav');
if (navEl) {
  const onScroll = () => navEl.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// Scroll reveals
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
