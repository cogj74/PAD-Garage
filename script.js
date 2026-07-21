const button = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

button.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  button.setAttribute('aria-expanded', String(open));
});

menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
