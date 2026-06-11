"use strict";

//~> Importa la base de datos de imagenes de diseños /
import { articlesDesingDB } from "./postGaleryDB.mjs";
import { resourcesDB } from "./postGaleryDB.mjs";

//~> Funcion que crea el modal cuando se da clic sobre un post de Diseños de la pagina galeria.html /
export function modalGalery(){
  
  //*? Obtain myModal and modal-galery blocks from HTML*/
  const modal = document.getElementById("myModal");
  const modal_galery = document.getElementById("modal-galery");
  
  //*? Select all buttons with class 'btn'*/
  const btnsArray = document.querySelectorAll(".btn");
  //console.log(btnsArray);
  //*? Function that iterates through the array of buttons*/
  btnsArray.forEach((button, index) => {
    //*? set an EventListener click to each button*/
    button.addEventListener("click", function(evento) {
      //*? When the user clicks on the button:
      //*? 1- get the id from the button*/
      var btn_id = evento.target.id;
      var index_id = btn_id.replace("btn_","");
      //*? 2- Add the image that will be displayed in the modal*/
      modal_galery.innerHTML=`<img src="${articlesDesingDB[index_id].image}" alt=""></img>`;
      //*? 3- Display the modal by changing the property .diplay to grid*/
      modal.style.display = "grid";
    });
  });

  //*? When the user clicks on modal_galery or modal, the modal y closet changing .diplay to none*/
  window.onclick = function(event) {
    if (event.target == modal_galery ||event.target == modal) 
      { modal.style.display = "none";};
  };
};

//~> Funcion que crea el modal cuando se da clic sobre un post de Diseños de la pagina galeria.html /
export function modalGaleryResources(){
  
  //*? Obtain myModal and modal-galery blocks from HTML*/
  const modal = document.getElementById("myModal");
  const modal_galery = document.getElementById("modal-galery");
  
  //*? Select all buttons with class 'btn'*/
  const imgsArray = document.querySelectorAll(".imgElement");
  //*? Function that iterates through the array of buttons*/
  imgsArray.forEach((imgElment, index) => {
    //*? set an EventListener click to each button*/
    imgElment.addEventListener("click", function(evento) {
      //*? When the user clicks on the button:
      //*? 1- get the id from the button*/
      var imgElement_id = evento.target.id;
      var index_id = imgElement_id.replace("img_id_","");
      //*? 2- Add the image that will be displayed in the modal*/
      modal_galery.innerHTML=`
      <img src="${resourcesDB[index_id].shareLink}" alt=""></img>
      <button class="copyButton" id="copyButton"><i class="fa-solid fa-copy"></i></button>
      `;
      //*? 3- Display the modal by changing the property .diplay to grid*/
      modal.style.display = "grid";
      //*? 4-. Function to image button to coppy image adrress to clipboard*/
      const linkCopyButton = document.getElementById("copyButton");
      linkCopyButton.addEventListener("click", function(copyToClipboard){
        var imageLink = resourcesDB[index_id].shareLink;
        navigator.clipboard.writeText(imageLink);
        window.alert("Direccion de imagen copiada al porta papeles");
      });

    });
  });

  //*? When the user clicks on modal_galery or modal, the modal y closet changing .diplay to none*/
  window.onclick = function(event) {
    if (event.target == modal_galery ||event.target == modal) 
      { modal.style.display = "none";};
  };
};