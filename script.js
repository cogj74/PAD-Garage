const toggle = document.getElementById('menuToggle');
const mobileBar = document.querySelector('.mobile-bar');

toggle.addEventListener('click', () => {
  let nav = document.querySelector('.mobile-menu');
  if (!nav) {
    nav = document.createElement('nav');
    nav.className = 'mobile-menu';
    nav.innerHTML = `
      <a href="#inicio">Inicio</a>
      <a href="#servicios">Servicios</a>
      <a href="#metodo">Método</a>
      <a href="#empresas">Empresas</a>
      <a href="#catalogo">Catálogo</a>
      <a href="#contacto">Contacto</a>`;
    nav.style.gap = '16px';
    nav.style.display = 'none';
    nav.querySelectorAll('a').forEach(a => {
      a.style.textDecoration = 'none';
      a.style.fontWeight = '800';
      a.addEventListener('click', () => {
        nav.remove();
        toggle.setAttribute('aria-expanded','false');
      });
    });
    mobileBar.after(nav);
  } else {
    nav.remove();
  }
  toggle.setAttribute('aria-expanded', String(!document.querySelector('.mobile-menu')));
});
