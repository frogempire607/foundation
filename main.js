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

// Guard against double submission. Netlify Forms posts the real <form>, so the
// data still goes with it; disabling the button only stops a second POST from a
// double tap on a slow connection. Validation failures never lock the form.
document.querySelectorAll('form[name]').forEach((form) => {
  const button = form.querySelector('[type="submit"]');
  form.addEventListener('submit', (event) => {
    if (form.dataset.submitting === 'true') {
      event.preventDefault();
      return;
    }
    if (typeof form.checkValidity === 'function' && !form.checkValidity()) return;
    form.dataset.submitting = 'true';
    if (button) {
      button.dataset.idleLabel = button.textContent;
      button.textContent = 'Sending…';
      button.setAttribute('aria-busy', 'true');
      // Disable after the event loop turn so the click isn't cancelled mid-submit.
      setTimeout(() => { button.disabled = true; }, 0);
    }
  });

  // Coming back via the back button restores the page from bfcache with the
  // button still disabled. Reset it so the form is usable again.
  window.addEventListener('pageshow', () => {
    delete form.dataset.submitting;
    if (button) {
      button.disabled = false;
      button.removeAttribute('aria-busy');
      if (button.dataset.idleLabel) button.textContent = button.dataset.idleLabel;
    }
  });
});
