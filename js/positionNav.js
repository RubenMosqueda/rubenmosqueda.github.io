fixedBehavior();
window.addEventListener('resize', fixedBehavior);

function fixedBehavior(){

  const windowWidth = window.innerWidth;
  const navbar = document.getElementById("navbar");

  if (windowWidth < 1000){
    navbar.style.right = "0px";
  }

  if(windowWidth > 1000){
    var rightPosition = (windowWidth-1000)/2 - 9;
    navbar.style.right = rightPosition + "px";
  }

}

