"use strict";

export function navBarBuilder(){
  const body = document.getElementById("body");
  const navBar = `
                  <nav id="navbar">
                    <ul>
                      <li> <a href="index3.html" class="link home"> <i class="fa-solid fa-house-chimney active"></i> </a> </li>
                      <li> <a href="pages/galeria2.html" class="link galery"> <i class="fa-regular fa-images"></i> </a> </li>
                      <li> <a href="pages/sobre_mi2.html" class="link background"> <i class="fa-solid fa-address-card"></i> </a> </li>
                      <li> <a href="mailto:developments.rmb@gmail.com?Subject=Me%20gustaría%20trabajar%20contigo" class="link mail"> <i class="fa-regular fa-envelope"></i> </a> </li>
                    </ul>
                  </nav>
  `;
  body.insertAdjacentHTML("afterbegin", navBar);
}

export function navbarFixedBehavior(){

  const windowWidth = window.innerWidth;
  const windowHeigth = window.innerHeight;
  const contenidoWidth  = document.documentElement.scrollWidth;

  const navbar = document.getElementById("navbar");
  const navbarHeigth = navbar.offsetHeight;

  const contentBlock = document.getElementById("content");
  const contentHeigth = contentBlock.offsetHeight;

  //console.log("altura de nav " + navbarHeigth);
  const topPosition =  (contentHeigth / 2) - (navbarHeigth / 2);
  
  navbar.style.top = topPosition + "px";

  if (windowWidth < 1600){
    navbar.style.right = "0.5rem";
  }

  if(windowWidth > 1600){

    if(contenidoWidth<windowWidth){
      var rightPosition = ((windowWidth-1600)/2) - 9;
      navbar.style.right = rightPosition + "px";

    }
    else{
      var rightPosition = ((windowWidth-1600)/2) + 9;
      navbar.style.right = rightPosition + "px";
    }
    
  }

}

export function backgroundBuilder(){
  const body = document.getElementById("body");
  const background = `
                  <div class="backgroundGradientLayer">
                    <div class="textureLayer"></div>
                  </div>
  `;
  body.insertAdjacentHTML("beforeend", background);
}

export function footerBuilder(){
  const content_wrapper = document.getElementById("content-wrapper");
  const footer = `
                  <footer class="footer glass">
                    <div class="canvaAnimated footerAnimation">
                      <div class="animatedContainer">
                        <div class="rearShadow"></div>
                        <div class="frontShadow"></div>
                        <div class="characterContainer">
                          <div class="character"></div>
                        </div>
                      </div>
                      <div class="canvaBackground"></div>
                    </div>
                  </footer>

  `;
  content_wrapper.insertAdjacentHTML("beforeend", footer);
}


