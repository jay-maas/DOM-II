//mouseover
let over1 = document.querySelector(".logo-heading"); 
over1.addEventListener("mouseover", function( event ) {   
    event.target.style.color = "orange";
setTimeout(function() {
      event.target.style.color = "";
    }, 500);
}, false);

let over2 = document.querySelector(".nav"); 
over2.addEventListener("mouseover", function( event ) {   
    event.target.style.color = "orange";
setTimeout(function() {
    event.target.style.color = "";
    }, 500);
}, false);
  //keydown
  alert("If you push keys on my page it will do stuff! Have FUN with FUNBUS!!!");
