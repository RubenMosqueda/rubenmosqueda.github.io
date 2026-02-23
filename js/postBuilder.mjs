"use strict";

import { articlesCodePenDB } from "./postGaleryDB.mjs";
import { articlesDesingDB } from "./postGaleryDB.mjs";
import { logo } from "./postGaleryDB.mjs";

//TODO: Crear la funcion que genere la structura HTML para cada post de la seccion de CodePen
//**Codepen post generator */

/* hmtl Codepen post
  <div class="swiper-slide">
    <a class="codepenCard" href="https://codepen.io/rubenmosqueda/pen/zYWPoVQ" target="_blank">
      <div class="codepenImg cpImage1"></div>
      <div class="codepenBackground"></div>
      <div class="codepenDescription">
        <div class="codepenProfileImage"></div>
        <div class="codepenInfo">
          <h2>CSS Sprite Animation</h2>
          <h3>Rubén Mosqueda Bautista</h3>
        </div>
      </div>
    </a>
  </div>
*/

export function CodePenSlideBuilder(indexPost, mySwiper){
  /*creamos el div que contendra el post que queremos crear */
  const codePenslide = document.createElement("div");
  /*Le asignamos la clase slide*/
  codePenslide.className += ("swiper-slide");
  /*Colocamos todo el HTML que ira dentro de este bloque*/
  /*Esta slide en particular contendra 5 variables que seran leidas de la base de datos de postGaleryDB.jms*/
  /*
  ${articlesCodePenDB[indexPost].codePenLink}
  ${articlesCodePenDB[indexPost].image}
  ${logo}
  ${articlesCodePenDB[indexPost].title}
  ${articlesCodePenDB[indexPost].autor}
  */
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
  mySwiper.appendChild(codePenslide);
}

/*Funcion que rellena la seccion  Swiper-wrapper con los post creados por CodePenSlideBuilder() */
export function codePenSlideFiller() {
  const mySwiper = document.getElementById("swiper-wrapper");
  for (var indexPost = 0; indexPost < articlesCodePenDB.length; indexPost++) {
    CodePenSlideBuilder(indexPost, mySwiper);
  }
}

/*Llamamos a la funcion para que rellene el swiper con todos los post de CodePen */
codePenSlideFiller();


//TODO: Crear la funcion que genere la structura HTML para cada post de la seccion de Diseños
//**Diseños post generator */

/* html Diseñós post
  <div class="swiper-slide">
    <button id="myBtn" class="designCard designImg_6">
      <div class="designInfo">
        <h2>Pusheen Skin Twitch Panels</h2> 
        <h3>Rubén Mosqueda</h3>
      </div>
    </button> 
  </div>
*/
