"use strict";

(() => {
  // Contenedor
  const container = document;

  // Elementos
  const header = container.querySelector(".Header");
  const headerLiModo = container.querySelector(".Header-li--modo");
  const cambio = container.querySelector(".Cambio");
  const headerNav = container.querySelector(".Header-nav");
  const headerMenuTaco = container.querySelector(".Header-menu-taco");
  const headerCerrar = container.querySelector(".Header-cerrar");
  const wrapperSection = container.querySelector(".Wrapper-section");
  const buttonsA = container.querySelectorAll(".Button-a");
  const paragraphsA = container.querySelectorAll(".p-a");
  const websUl = container.querySelectorAll(".Webs-ul");
  const infoP = container.querySelectorAll(".Info-p");
  const footerWebs = container.querySelector(".Footer-webs");
  const footerInfo = container.querySelector(".Footer-info");
  const footer = container.querySelector(".Footer");

  console.log({
    headerLiModo,
    cambio,
    headerNav,
    headerMenuTaco,
    headerCerrar,
    header,
    wrapperSection,
    buttonsA,
    paragraphsA,
    websUl,
    infoP,
    footerWebs,
    footerInfo,
    footer
  });

  // Handlers
  const handleModoToggle = () => {
    headerLiModo.classList.toggle("isActive");
    cambio.classList.toggle("isActive");
    headerNav.classList.toggle("isActive");
  };

  const handleMenuOpen = () => {
    headerNav.classList.add("isVisible");
  };

  const handleMenuClose = () => {
    headerNav.classList.remove("isVisible");
  };

  const handleButtonClick = (index) => {
    paragraphsA.forEach((p) => p.classList.remove("isActive"));
    paragraphsA[index].classList.add("isActive");
  };

  // Event Listeners
  headerLiModo.addEventListener("click", handleModoToggle);
  headerMenuTaco.addEventListener("click", handleMenuOpen);
  headerCerrar.addEventListener("click", handleMenuClose);

  buttonsA.forEach((btn, index) => {
    btn.addEventListener("click", () => handleButtonClick(index));
  });
})();
