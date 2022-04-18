let btnMenu = document.querySelector('.menu-icon');
let btnMenuMobile = document.querySelector('.menu-icon-mobile');
let menuContainer = document.querySelector('.menu-mobile-container');

btnMenu.addEventListener('click', (e) => {
    console.log("click btn menu");
    menuContainer.classList.add("visibleDisplay");
});
btnMenuMobile.addEventListener('click', (e) => {
    console.log("click btn mobile");

    menuContainer.classList.remove("visibleDisplay");

    console.log(window.innerWidth);
});