"use strict";

//~> Base de datos de posts */
import { articlesCodePenDB } from "./postGaleryDB.mjs";
import { articlesDesingDB } from "./postGaleryDB.mjs";
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
  if(myGalery=="Codepen"){galeryLink.href = "../pages/galeriaCodepen.html";}
  //*? For link Diseños galery*/
  if(myGalery=="Diseños"){galeryLink.href = "../pages/galeriaDisenos.html";}
  //*? We add the created elment to the desired grid*/
  myGrid.appendChild(galeryLink);
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
      for (var indexPost = 0; indexPost < 5; indexPost++) {
      var indexElement = randomIndex(0, articlesDesingDB.length);
      DesingCardBuilder(indexElement, myGrid);
      } 
      //*? Set diseños link galery page as a last element*/
      galeryLinkCard(myGrid, "Diseños");
    } 
  }

}