"use strict";

//~> Rutinas para la interfaz */
import { navBarBuilder } from "./elementsBuilder.mjs";
import { navbarFixedBehavior } from "./elementsBuilder.mjs";
import { activePage } from "./elementsBuilder.mjs";
import { backgroundBuilder } from "./elementsBuilder.mjs";
import { footerBuilder } from "./elementsBuilder.mjs";

//~> Rutinas para las galerias */
import { CodePenCardBuilder } from "./postBuilder.mjs";
import { DesingCardBuilder } from "./postBuilder.mjs";
import { galeryLinkCard } from "./postBuilder.mjs";
import { postGridFiller } from "./postBuilder.mjs";
import { galeryImageElement } from "./postBuilder.mjs";
import { resourcesImageBuilder } from "./postBuilder.mjs";

//~> Rutinas para el modal visor de imagenes de galeria de diseños */
import { modalGalery } from "./modal_galery.mjs";
import { modalGaleryResources } from "./modal_galery.mjs";

const title = document.getElementById("title");

navBarBuilder();
window.addEventListener('resize', navbarFixedBehavior);
navbarFixedBehavior();
activePage();
backgroundBuilder();
footerBuilder();

//~> Pagina de inicio */  
if (title.innerHTML == "RMB Portafolio") {

}

//~> Sobre RMB */  
if (title.innerHTML == "Sobre RMB") {

}

//~> Galeria RMB */ 
if (title.innerHTML == "Galeria RMB") {
  postGridFiller("codepenGrid");
  postGridFiller("desingGrid");
  modalGalery();
}

//~> Mi Codepen */ 
if (title.innerHTML == "Mi Codepen") {
  postGridFiller("codepenGrid", "full");
}

//~> Mis Diseños */ 
if (title.innerHTML == "Mis Diseños") {
  postGridFiller("desingGrid", "full");
  modalGalery();
}

//~> Tarjeta De Presentación */ 
if (title.innerHTML == "Tarjeta De Presentación") {

}

//~> Tarjeta De Presentación */ 
if (title.innerHTML == "Recursos") {
  resourcesImageBuilder();
  modalGaleryResources();

}



