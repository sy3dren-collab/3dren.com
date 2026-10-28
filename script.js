const gallery = document.querySelector('#gallery');
if (gallery) {
  const controls = document.querySelector('.gallery-controls');
  const status = document.querySelector('.gallery-status');
  const buttons = [...controls.querySelectorAll('button')];
  const count = gallery.children.length;
  const currentIndex = () => Math.round(gallery.scrollLeft / gallery.clientWidth);
  const update = () => {
    const index = currentIndex();
    status.textContent = `作品 ${index + 1} / ${count} · 點擊圖片查看原圖`;
    buttons[0].disabled = index === 0;
    buttons[1].disabled = index === count - 1;
  };
  buttons.forEach(button => button.addEventListener('click', () => {
    const index = Math.max(0, Math.min(count - 1, currentIndex() + Number(button.dataset.direction)));
    gallery.scrollTo({left: index * gallery.clientWidth, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  }));
  controls.hidden = false;
  gallery.addEventListener('scroll', update, {passive: true});
  window.addEventListener('resize', update);
  update();
}
// Only report inquiry intent; a link click does not mean an inquiry was completed.
document.querySelectorAll('a[href^="https://line.me/"], a[href^="tel:"], a[href^="mailto:"]').forEach(link => {
  link.addEventListener('click', () => {
    if (typeof window.gtag === 'function') {
      const method = link.href.startsWith('tel:') ? 'phone' : link.href.startsWith('mailto:') ? 'email' : 'line';
      window.gtag('event', 'contact_click', {contact_method: method});
    }
  });
});
