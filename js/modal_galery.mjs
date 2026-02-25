"use strict";

import { articlesDesingDB } from "./postGaleryDB.mjs";

export function loadModalDesign(){
  
  //*? Obtenemos el bloque de myModal y modal-galery del HTML*/
  const modal = document.getElementById("myModal");
  const modal_galery = document.getElementById("modal-galery");
  
  //*? Selecciona todos los botones con la clase 'btn'*/
  const botones = document.querySelectorAll(".btn");

  //*? Funcion que recorre el arreglo de botones*/
  botones.forEach((boton, index) => {
    
    //*? Añade un EventListener click a cada boton*/
    boton.addEventListener("click", () => {
      //*? When the user clicks on the button:*/
      //*? 1- Agrega la imagen que sera mostrada en el modal*/
      modal_galery.innerHTML=`<img src="${articlesDesingDB[index].image}" alt=""></img>`;
      //*? 2- Muestra el modal cambiando la propiedad .diplay a grid*/
      modal.style.display = "grid";
    });
  });

  //*? When the user clicks on modal_galery or modal, the modal y closet changing .diplay to none*/
  window.onclick = function(event) {
    if (event.target == modal_galery ||event.target == modal) 
      { modal.style.display = "none";};
  };
};