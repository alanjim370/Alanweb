const noticias = [
  {
    titulo: "Leon no va al mundial de clubes",
    fecha: "6 de mayo de 2025",
    contenido: "León no va al Mundial, víctima de tres voracidades, la propia, la de FIFA y la del América.."
  },
  {
    titulo: "Se acerca la fiesta grande del futbol mexicano",
    fecha: "4 de mayo de 2025",
    contenido: "Monterrey elimina a pumas con un contundente 2 a 0 para asegurar su pase a la liguilla.."
  }
];

const contenedor = document.getElementById('contenedor-noticias');

noticias.forEach(noticia => {
  const articulo = document.createElement('article');
  articulo.classList.add('noticia');

  articulo.innerHTML = `
    <h2>${noticia.titulo}</h2>
    <p class="fecha">${noticia.fecha}</p>
    <p>${noticia.contenido}</p>
  `;

  contenedor.appendChild(articulo);
});
