if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", (event) => {
    
    let rotateDegrees = Math.round(event.alpha); // alpha: rotation around z-axis 0-360
    let leftToRight = Math.round(event.gamma); // gamma: left to right -90 - 90
    let frontToBack = Math.round(event.beta); // beta: front back motion -180 -  180

    handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
  }, true);
}

const handleOrientationEvent = (frontToBack, leftToRight, rotateDegrees) => {
 // do something amazing  
    // const ejeZ = document.getElementById("alpha");
    // const ejeX = document.getElementById("beta");
    // const ejeY = document.getElementById("gamma");
    // const angleInfo = document.getElementById("angleInfo");
    // const angleLogo = document.getElementById("angleLogo");
    // const correccion = document.getElementById("correccion");

    if (frontToBack < -10){
      frontToBack = -10;
    }

    if (frontToBack > 70){
      frontToBack = 70;
    }

    // ejeZ.value = rotateDegrees;
    // ejeX.value = frontToBack;
    // ejeY.value = leftToRight;
    
    const logo = document.getElementById("logo");
    const infoContainer = document.getElementById("information");


    let correccionValue = Math.round(25 * (1 - (1/80 * (frontToBack + 10))));
    let infoValue = Math.round(-leftToRight);
    let logoValue = Math.round((1/90) * (-leftToRight) * 90 - 45);

    if(infoValue < 20 && infoValue > -20){
      infoValue = 0;
    }

    else{
      if (infoValue > 0){
        infoValue += correccionValue;
        if (infoValue > 80){infoValue = 90;}
      }
      if (infoValue < 0){
        infoValue -= correccionValue;
        if (infoValue < -70){infoValue = -90;}
      }
    }

    if(logoValue < -30 && logoValue > -60){
      logoValue = -45;
    }
    
    else{
      if (logoValue > 0){
        logoValue += correccionValue;
        if (logoValue > 35){logoValue = 45;}
      }
      if (logoValue < 0){
        logoValue -= correccionValue;
        if (logoValue < -125){logoValue = -135;}
      }   
    }

    // angleInfo.value = infoValue;
    // angleLogo.value = logoValue;
    // correccion.value = correccionValue;

    infoContainer.style.transform = "rotate("+ infoValue  +"deg)";
    logo.style.transform = "rotate("+ logoValue  +"deg)";
};
