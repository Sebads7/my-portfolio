



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


var containerEl = document.querySelector(".portfolio-item");
// 2. Passing the configuration object inline
//https://www.kunkalabs.com/mixitup/docs/configuration-object/
var mixer = mixitup(containerEl, {
  animation: {
    effects: "fade translateZ(-100px)",
    effectsIn: "fade translateY(-100%)",
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)"
  }
});
