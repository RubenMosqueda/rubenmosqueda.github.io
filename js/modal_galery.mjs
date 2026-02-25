"use strict";

export function loadModalDesign(){
    //*? Declaramos un arreglo de botones vacio */
  let btnArray = [];
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


      // When the user clicks anywhere outside of the moda, close it
      window.onclick = function(event) {
        if (event.target == modal_galery ||event.target == modal) {
          modal.style.display = "none";
        }
      }
    });
  });
}