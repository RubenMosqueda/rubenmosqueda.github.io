"use strict";

import { articlesCodePenDB } from "./postGaleryDB.mjs";
import { articlesDesingDB } from "./postGaleryDB.mjs";
import { logo } from "./postGaleryDB.mjs";
import { modalGalery } from "./modal_galery.mjs";


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

//*? Input parameters: Slide number, Swiper where the Slide will go*/
export function CodePenSlideBuilder(indexSlide, mySwiper){
  //*? Create the element will contain the Slide*/
  const codePenslide = document.createElement("div");
  //*? Assign the class slide*/
  codePenslide.className += ("swiper-slide");
  /* This slide will contain 5 variables that will be read from the database postGaleryDB.jms 
   1- ${articlesCodePenDB[indexPost].codePenLink} 
   2- ${articlesCodePenDB[indexPost].image} 
   3- ${logo} 
   4- ${articlesCodePenDB[indexPost].title} 
   5- ${articlesCodePenDB[indexPost].author} */
  //*? We place all the HTML that will go inside this block*/
  codePenslide.innerHTML = `
    <a class="codepenCard" href="${articlesCodePenDB[indexSlide].codePenLink}" target="_blank">
      <div class="codepenImg" style="background-image: url('${articlesCodePenDB[indexSlide].image}');"></div>
      <div class="codepenBackground"></div>
      <div class="codepenDescription">
        <div class="codepenProfileImage" style="background-image: url('${logo}');"></div>
        <div class="codepenInfo">
          <h2>${articlesCodePenDB[indexSlide].title}</h2>
          <h3>${articlesCodePenDB[indexSlide].author}</h3>
        </div>
      </div>
    </a>
  `;
  //*? We add the created slide to the desired swiper block (codepenSwiper)*/
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

//*? Input parameters: Slide number, Swiper where the Slide will go*/
export function DesingSlideBuilder(indexSlide, mySwiper){
  //*? Create the element will contain the Slide*/
  const desingSlide = document.createElement("div");
  //*? Assign the class slide*/
  desingSlide.className += ("swiper-slide");
  /* This slide will contain 3 variables that will be read from the database postGaleryDB.jms 
   1- ${articlesDesingDB[indexPost].image}
   2- ${articlesDesingDB[indexPost].title}
   3- ${articlesDesingDB[indexPost].author}*/
  //*? We place all the HTML that will go inside this block*/
  desingSlide.innerHTML = `
    <button id="btn_${indexSlide}" class="designCard btn" style="background-image: url('${articlesDesingDB[indexSlide].miniature}');">
      <div class="designInfo">
        <h2>${articlesDesingDB[indexSlide].title}</h2> 
        <h3>${articlesDesingDB[indexSlide].author}</h3>
      </div>
    </button> 
  `;
  //*? We add the created slide to the desired swiper block (designSwiper)*/
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

/*We call the function to fill the swiper with all the CodePen posts*/
postSlideFiller("swiper-wrapper-cp");

/*We call the function to fill the swiper with all the Desing posts*/
postSlideFiller("swiper-wrapper-dsg");

/*Call to modal*/
modalGalery();



