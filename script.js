const noticias = [
  {
    titulo: "Final del Clausura 2025: América vs. Toluca",
    fecha: "18 de mayo de 2025",
    contenido: "América eliminó a Cruz Azul con un global de 2-2 (por mejor posición en la tabla) y enfrentará a Toluca en la gran final, que venció 4-1 a Tigres."
  },
  {
    titulo: "Pachuca, campeón de la Liga MX Femenil",
    fecha: "17 de mayo de 2025",
    contenido: "Las Tuzas conquistaron su primer título al derrotar al Club América con un marcador global de 3-2. Charlyn Corral fue clave en la victoria."
  },
  {
    titulo: "América jugará por un boleto al Mundial de Clubes",
    fecha: "16 de mayo de 2025",
    contenido: "Tras la descalificación de León, América enfrentará a LAFC el 31 de mayo en Los Ángeles por un lugar en el Mundial de Clubes 2025."
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
