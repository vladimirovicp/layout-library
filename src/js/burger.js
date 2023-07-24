//Header menu

const header = document.querySelector('.header');
const menu = header.querySelector('.menu')
const iconMenu = menu.querySelector('.menu__icon');
const menuWrapper = menu.querySelector('.menu__wrapper');

if(iconMenu){
    iconMenu.addEventListener("click", function(e){
        menuWrapper.classList.toggle('open');
        iconMenu.classList.toggle('open');
    });
}
