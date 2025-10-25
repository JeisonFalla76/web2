/* ==============================
   web2.js - GYS IMPORTPLAST
   Interactividad moderna y tecnológica
   ============================== */

// ✅ Esperar a que el DOM cargue completamente
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.querySelector(".nav-links");

  // --- Menú hamburguesa responsivo ---
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      menuBtn.classList.toggle("active");
    });
  }

  // --- Cerrar menú al hacer clic en un enlace ---
  const links = document.querySelectorAll(".nav-links a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      menuBtn.classList.remove("active");
    });
  });

  // --- Animaciones al hacer scroll (fade-in) ---
  const secciones = document.querySelectorAll(".seccion");
  const opciones = { threshold: 0.2 };

  const observador = new IntersectionObserver((entradas, obs) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
        obs.unobserve(entrada.target);
      }
    });
  }, opciones);

  secciones.forEach(seccion => {
    seccion.classList.add("oculto");
    observador.observe(seccion);
  });
});

// --- Efecto del header al hacer scroll ---
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* ==============================
   Animaciones dinámicas con JS puro
   ============================== */

// --- Suavizar aparición de secciones ---
const style = document.createElement("style");
style.innerHTML = `
.oculto {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.9s ease-out;
}
.visible {
  opacity: 1;
  transform: translateY(0);
}
header.scrolled {
  background: rgba(11,19,43,0.98);
  box-shadow: 0 4px 10px rgba(0,0,0,0.4);
  transition: background 0.3s ease, box-shadow 0.3s ease;
}
`;
document.head.appendChild(style);
