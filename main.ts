import { Serie } from "./Serie.js";
import { series } from './data.js';
const Tbody: HTMLElement = document.getElementById('info')!; // Nodo tbody que tiene el id="courses"
const subtabla: HTMLElement = document.getElementById('bajoTabla')!;
const columnaCarta:HTMLElement = document.getElementById('carta')!;

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.id}</td>
                            <td><a href="#" id="${c.titulo}">${c.titulo}</a></td>
                           <td>${c.canal}</td>
                           <td>${c.temporadas}</td>`;
    Tbody.appendChild(trElement);
    const h=c.titulo
    console.log(h);
    const enlace=document.getElementById(h)!;

    if (enlace !== null) {
    console.log("Se encontró el enlace");
    // Realiza aquí las acciones que desees si se encontró el enlace
} else {
    console.log("No se encontró el enlace");
    // Realiza aquí las acciones que desees si no se encontró el enlace
}
enlace.addEventListener("click", function(event) {
    // Prevenir el comportamiento predeterminado del enlace (evitar la navegación)
    event.preventDefault();

    // Llamar a la función que deseas ejecutar cuando se hace clic en el enlace
    cargarCartaConDatos(c)
});

  });
  console.log("hola")
}


function getAverageSeasons(series: Serie[]): number {
    let totalseasons: number = 0;
    series.forEach((serie) => totalseasons = totalseasons + serie.temporadas);
    let denom:number=series.length;
    let avgSeasons=totalseasons/denom;
    return avgSeasons;
  }

function putAvgSeasons(series: Serie[]): void {
   let avgSesons: number=getAverageSeasons(series);
   subtabla.textContent = "Average seasons: "+avgSesons;
  }
  
renderSeriesInTable(series)
putAvgSeasons(series)



// parte 2
function crearCartaBase():void{
    const cartaHTML=`  <div class="card" style="width: 18rem;">
    <img class="card-img-top" id="imagen" src="..." alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title" id="tituloCarta">Card title</h5>
      <p class="card-text" id="textoCarta">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" id="enlace" >Go somewhere</a>
    </div>
  </div>`
    columnaCarta.innerHTML=cartaHTML;
}


function cargarCartaConDatos(serie: Serie):void{
    crearCartaBase()
    const imagen = document.getElementById("imagen") as HTMLImageElement;
     const tituloCarta:HTMLElement=document.getElementById("tituloCarta")!;
     const textoCarta:HTMLElement=document.getElementById("textoCarta")!;
     const enlace = document.getElementById("enlace") as HTMLAnchorElement;;

    imagen.src =serie.imagen;
    tituloCarta.textContent=serie.titulo
    textoCarta.textContent=serie.descripcion
    enlace.textContent=serie.enlace
    enlace.href = serie.enlace



}

