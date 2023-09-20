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


const setSubmit = () => {
  const nameInp1 = document.getElementById("input1");
  const nameInp2 = document.getElementById("input2");
  const nameInp3 = document.getElementById("input3");

  if (!nameInp1.value) {
    document.querySelector(".error-text-1").style.display = "block";
  } else {
    document.querySelector(".error-text-1").style.display = "none";
  }
  if (!nameInp2.value) {
    document.querySelector(".error-text-2").style.display = "block";
  } else {
    document.querySelector(".error-text-2").style.display = "none";
  }
  if (!nameInp3.value) {
    document.querySelector(".error-text-3").style.display = "block";
  } else {
    document.querySelector(".error-text-3").style.display = "none";
  }
}
