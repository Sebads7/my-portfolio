



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


// var containerEl = document.querySelector(".portfolio-item");
// // 2. Passing the configuration object inline
// //https://www.kunkalabs.com/mixitup/docs/configuration-object/
// var mixer = mixitup(containerEl, {
//   animation: {
//     effects: "fade translateZ(-100px)",
//     effectsIn: "fade translateY(-100%)",
//     easing: "cubic-bezier(0.645, 0.045, 0.355, 1)"
//   }
// });





const setSubmit = () => {
    const nameInp1 = document.getElementById("input1");
    const nameInp2 = document.getElementById("input2");
    const nameInp3 = document.getElementById("input3");

    const submitBtn = document.querySelector(".form-botton");
  
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
  
      if (!nameInp1.value) {
        nameInp1.classList.add("error");
        nameInp1.parentElement.classList.add("error_message1");
      } else {
        nameInp1.classList.remove("error");
        nameInp1.parentElement.classList.remove("error_message1");
      }
      if (!nameInp2.value) {
        nameInp2.classList.add("error");
        nameInp2.parentElement.classList.add("error_message2");
      } else {
        nameInp2.classList.remove("error");
        nameInp2.parentElement.classList.remove("error_message2");
      }
      if (!nameInp3.value) {
        nameInp3.classList.add("error");
        nameInp3.parentElement.classList.add("error_message3");
      } else {
        nameInp3.classList.remove("error");
        nameInp3.parentElement.classList.remove("error_message3");
      }
    });
  
  }
  setSubmit();


  // const forms = document.forms;
  // if (forms.length){
  //   for (const form of forms){
  //     const file = form.querySelector('input[type="file"]');
  //     file ? file.addEventListener('change', formAddFile) : null;
  //   }
  // }

  // function formAddFile(e){
  //   const formInputFile = e.target;
  //   const formFiles = formInputFile.files;
  //   const fileNames = formFiles.length ? Object.keys(formFiles).map(key => formFiles[key].name) : null;
  // }
