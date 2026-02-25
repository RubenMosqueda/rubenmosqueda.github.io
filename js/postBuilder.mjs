"use strict";

import { articlesCodePenDB } from "./postGaleryDB.mjs";
import { articlesDesingDB } from "./postGaleryDB.mjs";
import { logo } from "./postGaleryDB.mjs";
import { loadModalDesign } from "./modal_galery.mjs";


//*<--------------------Codepen Slide Builder ---------------------->*/
/* hmtl Codepen post
  <div class="swiper-slide">
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
  </div>
*/

//*? Parametros de entrada: numero de post, Swiper donde ira la slide*/
export function CodePenSlideBuilder(indexPost, mySwiper){
  //*? Creamos el elemento que contendra el post/
  const codePenslide = document.createElement("div");
  //*? Le asignamos la clase slide*/
  codePenslide.className += ("swiper-slide");
  /* Esta slide contendra 5 variables que seran leidas de la base de datos de postGaleryDB.jms 
   1- ${articlesCodePenDB[indexPost].codePenLink} 
   2- ${articlesCodePenDB[indexPost].image} 
   3- ${logo} 
   4- ${articlesCodePenDB[indexPost].title} 
   5- ${articlesCodePenDB[indexPost].autor} */
  //*? Colocamos todo el HTML que ira dentro de este bloque*/
  codePenslide.innerHTML = `
    <a class="codepenCard" href="${articlesCodePenDB[indexPost].codePenLink}" target="_blank">
      <div class="codepenImg" style="background-image: url('${articlesCodePenDB[indexPost].image}');"></div>
      <div class="codepenBackground"></div>
      <div class="codepenDescription">
        <div class="codepenProfileImage" style="background-image: url('${logo}');"></div>
        <div class="codepenInfo">
          <h2>${articlesCodePenDB[indexPost].title}</h2>
          <h3>${articlesCodePenDB[indexPost].autor}</h3>
        </div>
      </div>
    </a>
  `;
  //*? Agregamos el post creado al bloque swiper deseado (codepenSwiper)*/
  mySwiper.appendChild(codePenslide);
}

//*<---------------------Design Slide Builder ---------------------->*/

/* html Diseños post
  <div class="swiper-slide">
    <button id="myBtn" class="designCard designImg_6">
      <div class="designInfo">
        <h2>Pusheen Skin Twitch Panels</h2> 
        <h3>Rubén Mosqueda</h3>
      </div>
    </button> 
  </div>
*/

//*? Parametros de entrada: numero de post, Swiper donde ira la slide*/
export function DesingSlideBuilder(indexPost, mySwiper){
  //*? Creamos el elemento que contendra el post/
  const desingSlide = document.createElement("div");
  //*? Le asignamos la clase slide*/
  desingSlide.className += ("swiper-slide");
  /* Esta slide contendra 3 variables que seran leidas de la base de datos de postGaleryDB.jms 
   1- ${articlesDesingDB[indexPost].image}
   2- ${articlesDesingDB[indexPost].title}
   3- ${articlesDesingDB[indexPost].autor}*/
  //*? Colocamos todo el HTML que ira dentro de este bloque*/
  desingSlide.innerHTML = `
    <button id="btn_${indexPost}" class="designCard btn" style="background-image: url('${articlesDesingDB[indexPost].minature}');">
      <div class="designInfo">
        <h2>${articlesDesingDB[indexPost].title}</h2> 
        <h3>${articlesDesingDB[indexPost].autor}</h3>
      </div>
    </button> 
  `;
  //*? Agregamos el post creado al bloque swiper deseado (designSwiper)*/
  mySwiper.appendChild(desingSlide);
}

//*<--------------------Function Swiper Filler --------------------->*/

//*? Parametros de entrada: Swiper a rellenar*/
export function postSlideFiller(swiperWeapper) {
  
  //*? Seleccionamos el swiper segun el Id del swiper de entrada (swiperWeapper)*/
  const mySwiper = document.getElementById(swiperWeapper);
  //*? Selector de tipo de Slide a rellenar */
  if(swiperWeapper == "swiper-wrapper-cp"){
    //**? Ciclo para rellenar el Swiper tipo CODEPEN */
    for (var indexPost = 0; indexPost < articlesCodePenDB.length; indexPost++) {
    CodePenSlideBuilder(indexPost, mySwiper);
    }
  }
  if(swiperWeapper == "swiper-wrapper-dsg"){
    //**? Ciclo para rellenar el Swiper tipo DISEÑOS */
    for (var indexPost = 0; indexPost < articlesDesingDB.length; indexPost++) {
    DesingSlideBuilder(indexPost, mySwiper);
    } 
  } 
}



/*Llamamos a la funcion para que rellene el swiper con todos los post de CodePen */
postSlideFiller("swiper-wrapper-cp");
/*Llamamos a la funcion para que rellene el swiper con todos los post de Diseño */
postSlideFiller("swiper-wrapper-dsg");

loadModalDesign();



