let openButton = document.querySelector(".openButton");
let elementList = document.querySelector(".gradesList");

openButton.addEventListener("click", () =>{
  openButton.classList.toggle("open");
  
    if(openButton.classList.contains("open")){
      elementList.style.height = `${elementList.scrollHeight}px`; //scrollHeight prperty returns the height of an element including padding, but excluding borders, scroolbar or margin
      openButton.querySelector("i").classList.replace("fa-angle-down", "fa-angle-up");
      
     }
    else{
      elementList.style.height = "13rem";
      openButton.querySelector("i").classList.replace("fa-angle-up", "fa-angle-down"); // Replacing up icon to down icon
    }
})