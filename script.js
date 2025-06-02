const noticias = [
  {
    titulo: "Toluca se corona campeón del Clausura 2025",
    fecha: "25 de mayo de 2025",
    contenido: "Toluca venció al América 2-0 en la final del Clausura 2025, impidiendo el tetracampeonato de las Águilas. Goles de Luan García y Alexis Vega sellaron el título."
  },
  {
    titulo: "LAFC elimina al América y va al Mundial de Clubes",
    fecha: "31 de mayo de 2025",
    contenido: "Los Angeles FC venció 2-1 al Club América en el partido de repechaje y aseguró su lugar en el Mundial de Clubes 2025."
  },
  {
    titulo: "Cruz Azul gana la Concachampions",
    fecha: "28 de mayo de 2025",
    contenido: "Cruz Azul goleó a Vancouver Whitecaps y conquistó su séptima Liga de Campeones de la Concacaf, empatando con América en títulos."
  },
  {
    titulo: "Gabriel Milito es nuevo DT de Chivas",
    fecha: "27 de mayo de 2025",
    contenido: "El argentino Gabriel Milito fue anunciado como nuevo técnico del Guadalajara para el Apertura 2025 y la Leagues Cup."
  },
  {
    titulo: "Guillermo Abascal dirigirá al Atlético de San Luis",
    fecha: "30 de mayo de 2025",
    contenido: "El técnico español Guillermo Abascal llega como nuevo entrenador del San Luis, tras la salida de Domènec Torrent."
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
