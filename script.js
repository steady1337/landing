(() => {
  const containers = document.querySelectorAll('.fireflies');
  containers.forEach((container) => {
    if (container.children.length) return;
    const count = container.classList.contains('mobile-fireflies') ? 18 : 34;
    for (let i = 0; i < count; i++) {
      const f = document.createElement('span');
      f.className = 'firefly' + (i > count * 0.65 ? ' distant' : '');
      f.style.left = `${4 + Math.random() * 92}%`;
      f.style.top = `${8 + Math.random() * 84}%`;
      f.style.animationDuration = `${4.5 + Math.random() * 4}s, ${9 + Math.random() * 10}s`;
      f.style.animationDelay = `${-Math.random() * 8}s, ${-Math.random() * 12}s`;
      container.appendChild(f);
    }
  });
})();
