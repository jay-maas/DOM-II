//mouseover #1
let over1 = document.querySelector(".logo-heading"); 
over1.addEventListener('mouseover', function( event ) {   
    event.target.style.color = "orange";
setTimeout(function() {
      event.target.style.color = "";
    }, 500);
}, false);

let over2 = document.querySelector(".nav"); 
over2.addEventListener('mouseover', function( event ) {   
    event.target.style.color = "orange";
setTimeout(function() {
    event.target.style.color = "";
    }, 500);
}, false);

//keydown #2
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
    
//Load #3
window.addEventListener('load', (event) => {
    alert('Enjoy the Fun Bus. Use WASD to drive the BUS! Scroll to the bottom and click the GSAP hero!');
});


//Submit #4
// const signupForm = document.querySelector('.signup-form')
// signupForm.addEventListener('submit', event => {
//   event.preventDefault()
//   alert("Thank You we will be in touch.")
// })

//hover #5
let form = document.querySelector('.first-name');

form.addEventListener('focus', (event) => {
  event.target.style.background = 'orange'; 
});

let form2 = document.querySelector('.last-name');

form2.addEventListener('focus', (event) => {
  event.target.style.background = 'green'; 
});

//blur #6
form.addEventListener('blur', (event) => {
    event.target.style.background = 'pink'; 
})

form2.addEventListener('blur', (event) => {
    event.target.style.background = 'yellow'; 
})

//click #7
let button = document.querySelector('#btn');
let button2 = document.querySelector('#btn2');
let button3 = document.querySelector('#btn3');

button.addEventListener('click', event => {
  button.innerHTML = `Click count: ${event.detail}`;
  if (event.detail > 9) {
      alert("Don't Break it! THat is alot of clicking")
  }
});

button2.addEventListener('click', event => {
  button2.innerHTML = `Click count: ${event.detail}`;
  if (event.detail > 9) {
    alert("Don't Break it! THat is alot of clicking")
}
});

button3.addEventListener('click', event => {
    button3.innerHTML = `Click count: ${event.detail}`;
    if (event.detail > 9) {
        alert("Don't Break it! THat is alot of clicking")
    }
});
  
// Stop the navigation from items from refreshing the page by using preventDefault()
let cancelNav = document.querySelector('nav');

cancelNav.addEventListener('click', function(event) {
  event.preventDefault();
  alert("You cannot escape!")
});

//Nest two similar events somewhere in the site and prevent the event propagation properly
let formDaddy = document.querySelector(".form-daddy");
let prop2 = document.querySelector(".prop2");

formDaddy.addEventListener('click', (ev)=> {
    alert("Thank you for selecting the right button.")
    alert("Page Notice-event propagation halted");
    ev.preventDefault();
});

prop2.addEventListener('click', (ev)=> {
    prop2.textContent = "Propagation!";
    ev.stopPropagation();
    alert("Hi, you have chosen WRONG! MUAHAHA")
    ev.preventDefault();
});

function load() {
elem = document.querySelector(".form-buttons");
elem.addEventListener("click", stopEvent, false);
}

//Some GSAP

var logo = document.getElementById("logo");

logo.addEventListener('click',  (ev) => {
    TweenMax.from("#logo", 3, {x:800, opacity:0, scale:0.5});
  });