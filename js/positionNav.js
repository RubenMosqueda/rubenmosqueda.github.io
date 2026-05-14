fixedBehavior();
window.addEventListener('resize', fixedBehavior);

function fixedBehavior(){

  const windowWidth = window.innerWidth;
  const windowHeigth = window.innerHeight;
  const contenidoWidth  = document.documentElement.scrollWidth;

  const navbar = document.getElementById("navbar");
  const navbarHeigth = navbar.offsetHeight;

  const contentBlock = document.getElementById("content");
  const contentHeigth = contentBlock.offsetHeight;

  console.log("altura de nav " + navbarHeigth);
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

