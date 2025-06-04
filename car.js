let index = 0;

function moverCarrusel(direccion) {
  const carrusel = document.querySelector(".carrusel");
  const totalSlides = carrusel.children.length;

  index = (index + direccion + totalSlides) % totalSlides;

  carrusel.style.transform = translateX(-${index * 100}%);
}
