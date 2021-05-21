function dibujarpeliculas(peliculas) {
    let resultadosHtml = ``;
    peliculas.forEach(element => {
        resultadosHtml += `
        <article class="item-peliculas">
          <img src="${element.cover}" alt="${element.title}"/>
          <span> ${element.title} </span>
        </article>`
        });
  document.getElementById("resultados").innerHTML = resultadosHtml;
}
dibujarpeliculas(datos);

 function BuscarPeliculas(){
    const titulo = document.getElementById("Buscar").Value;
    const PeliculasFiltradas = [];

    for (let i = 0; i < datos.length; i++) {
        if (datos[i].title.includes(titulo)) { //busca parte del titulo 
            PeliculasFiltradas.push(datos[i]);
             }
        }

    dibujarpeliculas(PeliculasFiltradas);

    }     


function ordenarPeliculas() {
    
} 