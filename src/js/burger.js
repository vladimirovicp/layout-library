//Header menu

const header = document.querySelector('.header');
const menu = header.querySelector('.menu')
const iconMenu = menu.querySelector('.menu__icon');
const menuWrapper = menu.querySelector('.menu__wrapper');

if(iconMenu){
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        menuWrapper.classList.toggle('open');
        iconMenu.classList.toggle('open');

        document.onclick = function (e) {
            if(e.target.className == "_lock"){
                menuWrapper.classList.toggle('open');
                iconMenu.classList.toggle('open');
                document.body.classList.remove('_lock');
            }
        };
    });
}

const menuLinks = menuWrapper.querySelectorAll('.menu__item');

if (menuLinks.length > 0){

    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e){
        //menuWrapper.classList.remove('_active');
        //menuWrapper.classList.remove('open');
        menuWrapper.classList.toggle('open');
        iconMenu.classList.toggle('open');
        document.body.classList.remove('_lock');
    }

}


