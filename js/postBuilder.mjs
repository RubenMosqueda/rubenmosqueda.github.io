"use strict";

import { articlesCodePenDB } from "./postGaleryDB.mjs";
import { articlesDesingDB } from "./postGaleryDB.mjs";
import { logo } from "./postGaleryDB.mjs";
import { modalGalery } from "./modal_galery.mjs";


//*<--------------------Codepen Slide Builder ---------------------->*/
/* hmtl Codepen post
    <a class="codepenCard" href="Set Link" target="_blank">
      <div class="codepenImg" style="background-image: url('Set Image URL');"></div>
      <div class="codepenBackground"></div>
      <div class="codepenDescription">
        <div class="codepenProfileImage" style="background-image: url('Set Logo URL);"></div>
        <div class="codepenInfo">
          <h2>"Set Title"</h2>
          <h3>"Set Author"</h3>
        </div>
      </div>
    </a>
*/

//*? Input parameters: Slide number, Swiper where the Slide will go*/
export function CodePenCardBuilder(indexSlide, myGrid){
  //*? Create the element will contain the Slide*/
  const  codepenElement = document.createElement("a");
  codepenElement.className += ("codepenCard");
  codepenElement.href = articlesCodePenDB[indexSlide].codePenLink;
  codepenElement.target += ("_blank");
  codepenElement.innerHTML = `
      <div class="codepenImg" style="background-image: url('${articlesCodePenDB[indexSlide].image}');"></div>
      <div class="codepenBackground"></div>
      <div class="codepenDescription">
        <div class="codepenProfileImage" style="background-image: url('${logo}');"></div>
        <div class="codepenInfo">
          <h2>${articlesCodePenDB[indexSlide].title}</h2>
          <h3>${articlesCodePenDB[indexSlide].author}</h3>
        </div>
      </div>
  `;
  //*? We add the created slide to the desired swiper block (codepenSwiper)*/
  myGrid.appendChild(codepenElement);
}

//*<---------------------Design Slide Builder ---------------------->*/

/* html Diseños post
    <button id="myBtn" class="designCard designImg_6">
      <div class="designInfo">
        <h2>Pusheen Skin Twitch Panels</h2> 
        <h3>Rubén Mosqueda</h3>
      </div>
    </button> 

    <button id="btn_2" class="designCard btn" style="background-image: url('../imagenes/diseño_pusheen_panels.JPG');">
      <div class="designInfo">
        <h2>Pusheen Skin Twitch Panels</h2> 
        <h3>Rubén Mosqueda</h3>
      </div>
    </button>
*/

//*? Input parameters: Slide number, Swiper where the Slide will go*/
export function DesingCardBuilder(indexSlide, mySwiper){
  //*? Create the element will contain the Slide*/
  const desingSlide = document.createElement("button");
  //*? Assign the class slide*/
  desingSlide.className += ("designCard btn");
  desingSlide.id += ("btn_" + indexSlide); 
  desingSlide.style.backgroundImage += "url('" + articlesDesingDB[indexSlide].miniature + "')";
  /* This slide will contain 3 variables that will be read from the database postGaleryDB.jms 
   1- ${articlesDesingDB[indexPost].image}
   2- ${articlesDesingDB[indexPost].title}
   3- ${articlesDesingDB[indexPost].author}*/
  //*? We place all the HTML that will go inside this block*/
  desingSlide.innerHTML = `
      <div class="designInfo">
        <h2>${articlesDesingDB[indexSlide].title}</h2> 
        <h3>${articlesDesingDB[indexSlide].author}</h3>
      </div>
  `;
  //*? We add the created slide to the desired swiper block (designSwiper)*/
  mySwiper.appendChild(desingSlide);
}

/* hmtl Codepen post
    <a class="galeryLinkCard" href="../index3.html">
      <h3>"Mi galeria de ________"</h3>
    </a>
*/

//*? Input parameters: Slide number, Swiper where the Slide will go*/
export function galeryLinkCard(myGrid, myGalery){
  const  galeryLinkCard = document.createElement("a");
  galeryLinkCard.className += ("galeryLinkCard");
  galeryLinkCard.innerHTML = `<h3>+ ${myGalery}</h3>`;
  if(myGalery=="Codepen"){galeryLinkCard.href = "../pages/galeriaCodepen.html";}
  if(myGalery=="Diseños"){galeryLinkCard.href = "../pages/galeriaDisenos.html";}
  //*? We add the created slide to the desired swiper block (codepenSwiper)*/
  myGrid.appendChild(galeryLinkCard);
}

//*<--------------------Function Swiper Filler --------------------->*/

//*? Parametros de entrada: Swiper a rellenar*/
export function postGridFiller(gridSection) {
  
  //*? Seleccionamos el swiper segun el Id del swiper de entrada (swiperWeapper)*/
  const myGrid = document.getElementById(gridSection);
  //*? Selector de tipo de Slide a rellenar */
  if(gridSection == "codepenGrid"){
    //**? Ciclo para rellenar el Swiper tipo CODEPEN */
    for (var indexPost = 0; indexPost < 5; indexPost++) {
    CodePenCardBuilder(indexPost, myGrid);
    }
    galeryLinkCard(myGrid, "Codepen");
  }
  if(gridSection == "desingGrid"){
    //**? Ciclo para rellenar el Swiper tipo DISEÑOS */
    for (var indexPost = 0; indexPost < 5; indexPost++) {
    DesingCardBuilder(indexPost, myGrid);
    } 
    galeryLinkCard(myGrid, "Diseños");
  } 
}