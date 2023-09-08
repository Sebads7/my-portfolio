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



// var setWaypoints = function() {

//     // white background
//     $('.waypoint__white').waypoint(function(direction) {
//         if (direction == 'down') {
//             $('.brand').addClass('now--black');
//             $('.nav-link.white').addClass('now--black');
//             $('.nav-menu.v2').addClass('is--white');
//             $('.hamburger-line.white').addClass('is--black');
//         } else {
//             $('.brand').removeClass('now--black');
//             $('.nav-link.white').removeClass('now--black');
//             $('.nav-menu.v2').removeClass('is--white');
//             $('.hamburger-line.white').removeClass('is--black');
//         }
//     }, {
//         offset: '60px'
//     });

//     // black background
//     $('.waypoint__black').waypoint(function(direction) {
//         if (direction == 'down') {
//             $('.brand').removeClass('now--black');
//             $('.nav-link.white').removeClass('now--black');
//             $('.nav-menu.v2').removeClass('is--white');
//             $('.hamburger-line.white').removeClass('is--black');
//         } else {
//             $('.brand').addClass('now--black');
//             $('.nav-link.white').addClass('now--black');
//             $('.nav-menu.v2').addClass('is--white');
//             $('.hamburger-line.white').addClass('is--black');
//         }
//     }, {
//         offset: '60px'
//     });

// };


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
