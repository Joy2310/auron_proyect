"use strict";

(() => {
  // Selección del contenedor raíz
  const container = document;

  // Elementos del DOM
  const header = container.querySelector(".Header");
  const mouse = container.querySelector(".Mouse");
  const headerLiModo = container.querySelector(".Header-li--modo");
  const cambio = container.querySelector(".Cambio");
  const headerNav = container.querySelector(".Header-nav");
  const headerMenuTaco = container.querySelector(".Header-menu-taco");
  const headerCerrar = container.querySelector(".Header-cerrar");
  const wrapperSection = container.querySelector(".Wrapper-section");
  const buttonsA = container.querySelectorAll(".Button-a");
  const paragraphsA = container.querySelectorAll(".p-a");
  const footer = container.querySelector(".Footer");

  // Cursor personalizado con requestAnimationFrame
  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  const animateMouse = () => {
    // Interpolación suave para un movimiento fluido
    currentX += (mouseX - currentX) * 0.2;
    currentY += (mouseY - currentY) * 0.2;

    mouse.style.transform = `translate(${currentX}px, ${currentY}px)`;

    requestAnimationFrame(animateMouse);
  };

  const handleMouseMove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };

  // Mostrar/Ocultar cursor personalizado
  const handleSectionHover = () => mouse.classList.add("isNone");
  const handleSectionLeave = () => mouse.classList.remove("isNone");

  // Modo toggle
  const handleToggleModo = () => {
    headerLiModo.classList.toggle("isActive");
    cambio.classList.toggle("isActive");
    headerNav.classList.toggle("isActive");
  };

  // Menú móvil
  const handleOpenMenu = () => headerNav.classList.add("isVisible");
  const handleCloseMenu = () => headerNav.classList.remove("isVisible");

  // Activar contenido relacionado a botones
  const handleButtonClick = (i) => {
    paragraphsA.forEach((p) => p.classList.remove("isActive"));
    paragraphsA[i].classList.add("isActive");
  };

  // Asignación de eventos
  window.addEventListener("mousemove", handleMouseMove);
  wrapperSection.addEventListener("mouseover", handleSectionHover);
  wrapperSection.addEventListener("mouseout", handleSectionLeave);
  footer.addEventListener("mouseover", handleSectionHover);
  footer.addEventListener("mouseout", handleSectionLeave);
  headerLiModo.addEventListener("click", handleToggleModo);
  headerMenuTaco.addEventListener("click", handleOpenMenu);
  headerCerrar.addEventListener("click", handleCloseMenu);

  buttonsA.forEach((btn, i) => {
    btn.addEventListener("click", () => handleButtonClick(i));
  });

  // Iniciar animación del cursor
  requestAnimationFrame(animateMouse);
})();
