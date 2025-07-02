"use strict";

(function () {
  const container = document; // Contenedor base

  const header = container.querySelector(".Header");
  const mouse = container.querySelector(".Mouse");
  const headerlimodo = container.querySelector(".Header-li--modo");
  const cambio = container.querySelector(".Cambio");
  const headernav = container.querySelector(".Header-nav");
  const headermenutaco = container.querySelector(".Header-menu-taco");
  const headercerrar = container.querySelector(".Header-cerrar");
  const wrappersection = container.querySelector(".Wrapper-section");
  const buttona = container.querySelectorAll(".Button-a");
  const pa = container.querySelectorAll(".p-a");
  const websul = container.querySelectorAll(".Webs-ul");
  const infop = container.querySelectorAll(".Info-p");
  const footerwebs = container.querySelector(".Footer-webs");
  const footerinfo = container.querySelector(".Footer-info");
  const footer = container.querySelector(".Footer");

  const galeria = container.querySelector(".Galeria");
  const imgs = container.querySelectorAll(".Img");
  const lightbox = container.querySelector(".Lightbox");
  const lightboxbtn = container.querySelector(".Lightbox-btn");
  const imgg = container.querySelector(".Img-g");
  const peques = container.querySelectorAll(".Peque");
  const lightboxs = container.querySelector(".Lightboxs");
  const lightboxbtns = container.querySelector(".Lightbox-btns");
  const grande = container.querySelector(".Grande");
  const imges = container.querySelectorAll(".Imge");
  const lightboxx = container.querySelector(".Lightboxx");
  const lightboxxbtns = container.querySelector(".Lightboxx-btn");
  const imggrand = container.querySelector(".Img-grand");

  // Handlers
  function handleToggleModo() {
    headerlimodo.classList.toggle("isActive");
    cambio.classList.toggle("isActive");
    headernav.classList.toggle("isActive");
  }

  function handleMenuOpen() {
    headernav.classList.add("isVisible");
  }

  function handleMenuClose() {
    headernav.classList.remove("isVisible");
  }

  function handleImgClick(index) {
    return () => {
      lightbox.classList.add("isActive");
      imgg.src = imgs[index].src;
    };
  }

  function handleLightboxClose() {
    lightbox.classList.remove("isActive");
  }

  function handlePequeClick(index) {
    return () => {
      lightboxs.classList.add("isActive");
      grande.src = peques[index].src;
    };
  }

  function handleLightboxsClose() {
    lightboxs.classList.remove("isActive");
  }

  function handleImgeClick(index) {
    return () => {
      lightboxx.classList.add("isActive");
      imggrand.src = imges[index].src;
    };
  }

  function handleLightboxxClose() {
    lightboxx.classList.remove("isActive");
  }

  // EventListeners
  headerlimodo.addEventListener("click", handleToggleModo);
  headermenutaco.addEventListener("click", handleMenuOpen);
  headercerrar.addEventListener("click", handleMenuClose);

  imgs.forEach((_, i) => {
    imgs[i].addEventListener("click", handleImgClick(i));
  });

  lightboxbtn.addEventListener("click", handleLightboxClose);

  peques.forEach((_, i) => {
    peques[i].addEventListener("click", handlePequeClick(i));
  });

  lightboxbtns.addEventListener("click", handleLightboxsClose);

  imges.forEach((_, i) => {
    imges[i].addEventListener("click", handleImgeClick(i));
  });

  lightboxxbtns.addEventListener("click", handleLightboxxClose);
})();
