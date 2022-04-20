let btnMenu = document.querySelector('.menu-icon');
let btnMenuMobile = document.querySelector('.menu-icon-mobile');
let menuContainer = document.querySelector('.menu-mobile-container');
let nav = document.querySelector('nav');
let footer = document.querySelector('footer');
// console.log(sections);

btnMenu.addEventListener('click', (e) => {
    console.log("click btn menu");
    menuContainer.classList.add("visibleDisplay");
});
btnMenuMobile.addEventListener('click', (e) => {
    console.log("click btn mobile");

    menuContainer.classList.remove("visibleDisplay");

    console.log(window.innerWidth);
});


window.addEventListener('DOMContentLoaded', (e) => {
});


// Observer 
const options = {
    // root,
    // rootMargin: '0px',
    // threshold: 1.0 
}
const callback = (entries, observer) => {
    console.log("se llamo al callback");
    entries.forEach(e => {
        if (!e.isIntersecting) {

            if (!e.target.classList.contains("nav-not")) {
                e.target.classList.add("nav-not")
            }

            // }else{
            //     
            console.log("intersecting");
        }

        // if (e.isIntersecting) {
        //     if (e.target.classList.contains("nav-not")) {
        //         e.target.classList.remove("nav-not")
        //     }
        // }

    });
}


const observer = new IntersectionObserver(callback, options);
observer.observe(document.querySelector('.navbar'));
