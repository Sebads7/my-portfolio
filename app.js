
/////// NAVBAR STICKY /////////////////


const sticky = () => {

  const navbar = document.getElementById("main-nav");

  window.addEventListener("scroll", e => {
    let scrollPos = window.scrollY;
    if (scrollPos > 30) {
      navbar.classList.add('sticky');

    } else {
      navbar.classList.remove('sticky');
    }
  });
};


/////// NAVBAR SLIDE /////////////////

const navSlide = () => {

  let sections = document.querySelectorAll('section');
  let links = document.querySelectorAll('nav a');

  window.addEventListener('scroll', () => {
    sections.forEach(section => {
      let top = window.scrollY;
      let offset = section.offsetTop - 60;
      let height = section.offsetHeight;
      let id = section.getAttribute('id');

      if (top >= offset && top < offset + height) {
        links.forEach(link => {
          link.classList.remove('active');
          document.querySelector('nav [href*=' + id + ']').classList.add('active');
        });
      };
    })
  });
};

sticky();
navSlide();

//////////////////// FORM VALIDATION ///////////////////////////////

let nameInp1 = document.getElementById("input1");
let nameInp2 = document.getElementById("input2");
let nameInp3 = document.getElementById("input3");
let form = document.querySelector(".left-contact");

////// FUNCTION TO HIDE OR DISPLAY ERROR-MESSAGE ON KEYUP or PRESS SEND BOTTON /////

const handdleError = () => {

// IF INPUTS ARE EMPTY, ERROR-MESSAGE WILL BE DISPLAYED WHEN SEND BOTTON IS PRESSED
  document.querySelector(".error-text-1").style.display = "block";
  document.querySelector(".error-text-2").style.display = "block";
  document.querySelector(".error-text-3").style.display = "block";
  

  //ADDS KEYUP EVENT LISTENER TO INPUTS TO HIDE OR SHOW ERROR-MESSAGE 

  nameInp1.addEventListener("keyup", () => {
    if (nameInp1.value) {
      document.querySelector(".error-text-1").style.display = "none";
    }else{
      document.querySelector(".error-text-1").style.display = "block";
    }
  });
  nameInp2.addEventListener("keyup", () => {
    if (nameInp2.value) {
      document.querySelector(".error-text-2").style.display = "none";
    }else{
      document.querySelector(".error-text-2").style.display = "block";
    }
  });

  nameInp3.addEventListener("keyup", () => {
    if (nameInp3.value) {
      document.querySelector(".error-text-3").style.display = "none";
    }else{
      document.querySelector(".error-text-3").style.display = "block";
    }
  });
}

  // IF MOUSE-ENTER ON LEFT-SECTION OF CONTACT FORM, ERROR-MESSAGE WILL BE HIDDEN 

form.addEventListener("mouseenter", () => {
  document.querySelector(".error-text-1").style.display = "none";
  document.querySelector(".error-text-2").style.display = "none";
  document.querySelector(".error-text-3").style.display = "none";
});


/////////////////////////////s/////
