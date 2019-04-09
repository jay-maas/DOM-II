//mouseover
let number1 = document.querySelector(".main-navigation");
number1.addEventListener("mouseover", function( event ) {   
    // highlight the mouseover target
    event.target.style.color = "orange";
setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);

  