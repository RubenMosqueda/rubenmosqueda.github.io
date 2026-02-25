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

//TODO: Crear la funcion que genere la structura HTML para cada post de la seccion de Diseños
//**Diseños post generator */

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
export function DesingSlideBuilder(indexPost, mySwiper){
  /*creamos el div que contendra el post que queremos crear */
  const desingSlide = document.createElement("div");
  /*Le asignamos la clase slide*/
  desingSlide.className += ("swiper-slide");
  /*Colocamos todo el HTML que ira dentro de este bloque*/
  /*Esta slide en particular contendra 3 variables que seran leidas de la base de datos de postGaleryDB.jms*/
  /*
  ${articlesDesingDB[indexPost].image}
  ${articlesDesingDB[indexPost].title}
  ${articlesDesingDB[indexPost].autor}
  */
  desingSlide.innerHTML = `
    <button id="btn_${indexPost}" class="designCard btn" style="background-image: url('${articlesDesingDB[indexPost].minature}');">
      <div class="designInfo">
        <h2>${articlesDesingDB[indexPost].title}</h2> 
        <h3>${articlesDesingDB[indexPost].autor}</h3>
      </div>
    </button> 
  `;
  mySwiper.appendChild(desingSlide);
}

/*Funcion que rellena la seccion  Swiper-wrapper con los post creados por CodePenSlideBuilder() */
export function postSlideFiller(swiperWeapper) {
  const mySwiper = document.getElementById(swiperWeapper);
  let btnArray = [];
  if(swiperWeapper == "swiper-wrapper-cp"){
    for (var indexPost = 0; indexPost < articlesCodePenDB.length; indexPost++) {
    CodePenSlideBuilder(indexPost, mySwiper);
    }
  }
  if(swiperWeapper == "swiper-wrapper-dsg"){
    for (var indexPost = 0; indexPost < articlesDesingDB.length; indexPost++) {
    DesingSlideBuilder(indexPost, mySwiper);
    /*btnArray.push( 'btn_' + indexPost );
      console.log(btnArray);*/
    } 
  } 
  // Selecciona todos los botones con la clase 'btn'
  const botones = document.querySelectorAll(".btn");
  console.log(botones);

  // Recorre el arreglo de botones y añade un evento click a cada uno
  botones.forEach((boton, index) => {
    boton.addEventListener("click", () => {
      
      console.log(`Botón ${index + 1} presionado`);

      // Get the modal
      const modal = document.getElementById("myModal");
      const modal_galery = document.getElementById("modal-galery");

      // Get the button that opens the modal
      const btn = document.getElementById("btn_" + index);
      console.log(btn);
      console.log(index);

      // When the user clicks on the button, open the modal

        modal_galery.innerHTML=`<img src="${articlesDesingDB[index].image}" alt=""></img>`;
        modal.style.display = "grid";
        console.log(articlesDesingDB[index].image);


      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal_galery ||event.target == modal) {
          modal.style.display = "none";
        }
      }
    });
  });
}

/*Llamamos a la funcion para que rellene el swiper con todos los post de CodePen */
postSlideFiller("swiper-wrapper-cp");
/*Llamamos a la funcion para que rellene el swiper con todos los post de Diseño */
postSlideFiller("swiper-wrapper-dsg");




