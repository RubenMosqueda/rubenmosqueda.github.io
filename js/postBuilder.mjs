"use strict";

//~> Base de datos de posts */
import { articlesCodePenDB } from "./postGaleryDB.mjs";
import { articlesDesingDB } from "./postGaleryDB.mjs";
import { resourcesDB } from "./postGaleryDB.mjs";
import { logo } from "./postGaleryDB.mjs";

//*<--------------------Codepen Card Builder ---------------------->*/
//-> hmtl Codepen Card */
/*   <a class="codepenCard" href="Set Link" target="_blank">
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

//--> Input parameters: Card number, Grid where the Card will go*/
export function CodePenCardBuilder(indexCard, myGrid){
  //*? Create the element link as a card*/
  const  codepenElement = document.createElement("a");
  codepenElement.className += ("codepenCard");
  codepenElement.href = articlesCodePenDB[indexCard].codePenLink;
  codepenElement.target += ("_blank");
  //? Set inner html*/
  codepenElement.innerHTML = `
      <div class="codepenImg" style="background-image: url('${articlesCodePenDB[indexCard].image}');"></div>
      <div class="codepenBackground"></div>
      <div class="codepenDescription">
        <div class="codepenProfileImage" style="background-image: url('${logo}');"></div>
        <div class="codepenInfo">
          <h2>${articlesCodePenDB[indexCard].title}</h2>
          <h3>${articlesCodePenDB[indexCard].author}</h3>
        </div>
      </div>
  `;
  //*? We add the created elment to the desired grid*/
  myGrid.appendChild(codepenElement);
}

//*<---------------------Design Card Builder ---------------------->*/

//-> hmtl Desings Card */
/*  <button id="btn_(set_btn_id)" class="designCard btn" style="background-image: url('Set url miniature');">
      <div class="designInfo">
        <h2>Set title</h2> 
        <h3>Set authot</h3>
      </div>
    </button>

  This card will contain 3 variables that will be read from the database postGaleryDB.jms 
     1- ${articlesDesingDB[indexPost].miniature}
     2- ${articlesDesingDB[indexPost].title}
     3- ${articlesDesingDB[indexPost].author}
*/

//--> Input parameters: Card number, Grid where the Card will go*/
export function DesingCardBuilder(indexCard, myGrid){
  //*? Create the element button as a Card*/
  const desingCard = document.createElement("button");
  desingCard.className += ("designCard btn");
  desingCard.id += ("btn_" + indexCard); 
  desingCard.style.backgroundImage += "url('" + articlesDesingDB[indexCard].miniature + "')";
  //? Set inner html*/
  desingCard.innerHTML = `
      <div class="designInfo">
        <h2>${articlesDesingDB[indexCard].title}</h2> 
        <h3>${articlesDesingDB[indexCard].author}</h3>
      </div>
  `;
  //*? We add the created elment to the desired grid*/
  myGrid.appendChild(desingCard);
}

//*<---------------------Galery link Builder ---------------------->*/

//-> hmtl Galery link */
/*
    <a class="galeryLinkCard" href="set link galery">
      <h3>"+ ________"</h3>
    </a>
*/

//--> Input parameters: Grid, name of galery */
export function galeryLinkCard(myGrid, myGalery){
  //*? Create the element link*/
  const  galeryLink = document.createElement("a");
  galeryLink.className += ("galeryLinkCard");
  galeryLink.innerHTML = `<h3>+ ${myGalery}</h3>`;
  //*? For link to codepen galery*/
  if(myGalery=="Codepen"){
    galeryLink.href = "pages/galeriaCodepen.html";
    //*? We add the created elment to the desired grid*/
    myGrid.appendChild(galeryLink);
  }
  //*? For link Diseños galery*/
  if(myGalery=="Diseños"){
    //*? Create the element link for resources page*/
    const  galeryLink2 = document.createElement("a");
    galeryLink2.className += ("galeryLinkCard");
    galeryLink2.innerHTML = `<h3>+ Recursos</h3>`;
    galeryLink.href = "pages/galeriaDisenos.html";
    galeryLink2.href = "pages/recursos.html";
    //*? We add the created elment to the desired grid*/
    myGrid.appendChild(galeryLink);
    myGrid.appendChild(galeryLink2);
  }

}

//*<------------------- Random Index Generator --------------------->*/
export function randomIndex(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//*<--------------------Function Galery Filler --------------------->*/

//--> Input parameters: Grid name */
export function postGridFiller(gridName, type) {
  const myGrid = document.getElementById(gridName);
  
  if(type == "full"){
    //*? For fill full codepen galery*/
    if(gridName == "codepenGrid"){
      for (var indexPost = 0; indexPost < articlesCodePenDB.length; indexPost++) {
      CodePenCardBuilder(indexPost, myGrid);
      }
    }
    //*? For fill full desings galery*/
    if(gridName == "desingGrid"){
      for (var indexPost = 0; indexPost < articlesDesingDB.length; indexPost++) {
      DesingCardBuilder(indexPost, myGrid);
      } 
    } 
  }

  else{
    //*? For fill random codepen galery*/
    if(gridName == "codepenGrid"){
      for (var indexPost = 0; indexPost < 5; indexPost++) {
      var indexElement = randomIndex(0, articlesCodePenDB.length);
      CodePenCardBuilder(indexElement, myGrid);
      }
      //*? Set codepen link galery page as a last element*/
      galeryLinkCard(myGrid, "Codepen");
    }
    //*? For fill random desings galery*/
    if(gridName == "desingGrid"){
      for (var indexPost = 0; indexPost < 4; indexPost++) {
      var indexElement = randomIndex(0, articlesDesingDB.length);
      DesingCardBuilder(indexElement, myGrid);
      } 
      //*? Set diseños link galery page as a last element*/
      galeryLinkCard(myGrid, "Diseños");
    } 
  }

}

//*<--------- Function Galery Resources Element Builder ------------>*/

//-> hmtl Desings Card */
/*  
<div= class="imgContainer" id="imgContainer">
  <img src="link de la  imagen" alt="">
</div>
*/
//--> Input parameters: index, image galery */
export function galeryImageElement(index, galery){
  const  imageElement = document.createElement("div");
  imageElement.className += ("imgContainer imgElement");
  //*? Every element have a unique ID*/
  imageElement.id += ("imgContainer_"+index);
  imageElement.innerHTML = `<img id="img_id_${index}" src="${resourcesDB[index].shareLink}" alt="">`;
  //*? We add the created elment to the galery*/
  galery.appendChild(imageElement);
}

//*<------------- Function Galery Resources Filler ----------------->*/

export function resourcesImageBuilder(){
  //*? Select galeriaImagenes element from HTML*/
  const myImageGalery= document.getElementById("galeriaImagenes");
  //*? we loop through the database array and create an element for each image in the array */
  for (var indexImage = 0; indexImage < resourcesDB.length; indexImage++) {
    galeryImageElement(indexImage, myImageGalery);
    }
}