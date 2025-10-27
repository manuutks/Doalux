// Permitir scroll horizontal com a roda do mouse
const carrossel = document.querySelector(".carrossel-scroll");

carrossel.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  carrossel.scrollLeft += evt.deltaY; // rola horizontalmente
});
