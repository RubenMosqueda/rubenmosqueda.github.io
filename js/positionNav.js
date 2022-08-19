fixedBehavior();
window.addEventListener('resize', fixedBehavior);

function fixedBehavior(){

  const windowWidth = window.innerWidth;
  const contenidoWidth  = document.documentElement.scrollWidth;

  const navbar = document.getElementById("navbar");

  if (windowWidth < 1000){
    navbar.style.right = "0px";
  }

  if(windowWidth > 1000){

    if(contenidoWidth<windowWidth){
      var rightPosition = ((windowWidth-1000)/2) - 9;
      navbar.style.right = rightPosition + "px";
    }
    else{
      var rightPosition = (windowWidth-1000)/2;
      navbar.style.right = rightPosition + "px";
    }
    
  }

}

