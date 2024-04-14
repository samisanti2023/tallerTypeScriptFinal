import { series } from './data.js';
var Tbody = document.getElementById('info'); // Nodo tbody que tiene el id="courses"
var subtabla = document.getElementById('bajoTabla');
var columnaCarta = document.getElementById('carta');
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                            <td><a href=\"#\" id=\"").concat(c.titulo, "\">").concat(c.titulo, "</a></td>\n                           <td>").concat(c.canal, "</td>\n                           <td>").concat(c.temporadas, "</td>");
        Tbody.appendChild(trElement);
        var h = c.titulo;
        console.log(h);
        var enlace = document.getElementById(h);
        if (enlace !== null) {
            console.log("Se encontró el enlace");
            // Realiza aquí las acciones que desees si se encontró el enlace
        }
        else {
            console.log("No se encontró el enlace");
            // Realiza aquí las acciones que desees si no se encontró el enlace
        }
        enlace.addEventListener("click", function (event) {
            // Prevenir el comportamiento predeterminado del enlace (evitar la navegación)
            event.preventDefault();
            // Llamar a la función que deseas ejecutar cuando se hace clic en el enlace
            cargarCartaConDatos(c);
        });
    });
    console.log("hola");
}
function getAverageSeasons(series) {
    var totalseasons = 0;
    series.forEach(function (serie) { return totalseasons = totalseasons + serie.temporadas; });
    var denom = series.length;
    var avgSeasons = totalseasons / denom;
    return avgSeasons;
}
function putAvgSeasons(series) {
    var avgSesons = getAverageSeasons(series);
    subtabla.textContent = "Average seasons: " + avgSesons;
}
renderSeriesInTable(series);
putAvgSeasons(series);
// parte 2
function crearCartaBase() {
    var cartaHTML = "  <div class=\"card\" style=\"width: 18rem;\">\n    <img class=\"card-img-top\" id=\"imagen\" src=\"...\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\" id=\"tituloCarta\">Card title</h5>\n      <p class=\"card-text\" id=\"textoCarta\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n      <a href=\"#\" id=\"enlace\" >Go somewhere</a>\n    </div>\n  </div>";
    columnaCarta.innerHTML = cartaHTML;
}
function cargarCartaConDatos(serie) {
    crearCartaBase();
    var imagen = document.getElementById("imagen");
    var tituloCarta = document.getElementById("tituloCarta");
    var textoCarta = document.getElementById("textoCarta");
    var enlace = document.getElementById("enlace");
    ;
    imagen.src = serie.imagen;
    tituloCarta.textContent = serie.titulo;
    textoCarta.textContent = serie.descripcion;
    enlace.textContent = serie.enlace;
    enlace.href = serie.enlace;
}
