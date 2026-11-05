// Keep the page quiet and readable when a visitor prefers reduced motion.
const ticker = document.querySelector('.ticker-track');
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches && ticker) {
  ticker.style.animation = 'none';
}
