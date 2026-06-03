// Custom cursor
const dot = document.getElementById('dot');
const ring = document.getElementById('ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  dot.style.left = mx + 'px'; dot.style.top = my + 'px';
});
function animRing() {
  rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
  requestAnimationFrame(animRing);
}
animRing();

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 80);
  });
}, { threshold: 0.08 });
reveals.forEach(el => obs.observe(el));

// Active nav
const navLinks = document.querySelectorAll('.nav-links a');
const current = window.location.pathname.split('/').pop() || 'index.html';
navLinks.forEach(a => {
  const href = a.getAttribute('href');
  if (href === current || (current === 'index.html' && href === 'index.html')) {
    a.style.color = 'var(--accent)';
  }
});
