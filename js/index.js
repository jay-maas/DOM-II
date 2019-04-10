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
let bus = document.querySelector(".bus");
let container = document.querySelector(".bus-container");

let busLeft = 0;
let busDown = 100;


document.addEventListener('keydown', function move(e) {
    if (e.keyCode === 68) {
        busLeft +=20;
        bus.style.left = busLeft + "px";
        if(busLeft >= 600) {
            busLeft -=20;
        } 
    }
    if (e.keyCode === 65) {
        busLeft -=20;
        bus.style.left = busLeft + "px";
        if(busLeft <=0){
            busLeft +=20;
        }
    }
    if (e.keyCode === 83) {
        busDown +=20;
        bus.style.top = busDown + "px";
        if(busDown >= 1700) {
            busDown -=20;
        }
    }
    if (e.keyCode === 87) {
        busDown -=20;
        bus.style.top = busDown + "px";
        if(busDown <= 100) {
            busDown +=20;
        }
    }

    
    });

    //Load
    window.addEventListener('load', (event) => {
        alert('Enjoy the Fun Bus. Use WASD to drive the BUS!');
    });


