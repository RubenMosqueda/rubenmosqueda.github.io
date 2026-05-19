"use strict";

import { articlesDesingDB } from "./postGaleryDB.mjs";

export function modalGalery(){
  
  //*? Obtain myModal and modal-galery blocks from HTML*/
  const modal = document.getElementById("myModal");
  const modal_galery = document.getElementById("modal-galery");
  
  //*? Select all buttons with class 'btn'*/
  const btnsArray = document.querySelectorAll(".btn");

  //*? Function that iterates through the array of buttons*/
  btnsArray.forEach((button, index) => {
    
    //*? set an EventListener click to each button*/
    button.addEventListener("click", () => {
      //*? When the user clicks on the button:
      //*? 1- Add the image that will be displayed in the modal*/
      modal_galery.innerHTML=`<img src="${articlesDesingDB[index].image}" alt=""></img>`;
      //*? 2- Display the modal by changing the property .diplay to grid*/
      modal.style.display = "grid";
    });
  });

  //*? When the user clicks on modal_galery or modal, the modal y closet changing .diplay to none*/
  window.onclick = function(event) {
    if (event.target == modal_galery ||event.target == modal) 
      { modal.style.display = "none";};
  };
};