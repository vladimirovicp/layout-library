// Profile
const iconProfile = document.querySelector('.header__profile');
const profileWrapper = iconProfile.querySelector('.profile__wrapper');

//Header menu
const header = document.querySelector('.header');
const menu = header.querySelector('.menu')
const iconMenu = menu.querySelector('.menu__icon');
const menuWrapper = menu.querySelector('.menu__wrapper');

// Profile
iconProfile.addEventListener('click', ()=>{

        if(menuWrapper.classList.contains("open")){
            closeMenu();
        }
        if(profileWrapper.classList.contains("_open")){
            closeProfile();
        } else {
            openProfile();
        }

        document.onclick = function (e) {
            if(e.target.className === "_lock"){
                closeProfile();
            }
        };
});


//Header menu

if(iconMenu){
    iconMenu.addEventListener("click", function(e){

        // if(profileWrapper.classList.contains("_open")){
        //     profileWrapper.classList.toggle('_open');
        //     document.body.classList.toggle('_lock');
        // }

        // menuWrapper.classList.toggle('open');
        // iconMenu.classList.toggle('open');


        // document.onclick = function (e) {
        //     if(e.target.className == "_lock"){
        //         menuWrapper.classList.toggle('open');
        //         iconMenu.classList.toggle('open');
        //         document.body.classList.remove('_lock');
        //     }
        // };


        if(profileWrapper.classList.contains("_open")){
            closeProfile();
        }
        if(menuWrapper.classList.contains("open")){
            closeMenu()
        } else{
            openMenu()
        }

        document.onclick = function (e) {
            if(e.target.className == "_lock"){
                closeMenu();
            }
        };
    });
}


// const menuLinks = menuWrapper.querySelectorAll('.menu__item');
// if (menuLinks.length > 0){
//
//     menuLinks.forEach(menuLink => {
//         menuLink.addEventListener("click", onMenuLinkClick);
//     });
//     function onMenuLinkClick(e){
//         menuWrapper.classList.toggle('open');
//         iconMenu.classList.toggle('open');
//         document.body.classList.toggle('_lock');
//     }
// }


function openMenu(){
    menuWrapper.classList.add('open');
    iconMenu.classList.add('open');
    document.body.classList.add('_lock');
}

function closeMenu(){
    menuWrapper.classList.remove('open');
    iconMenu.classList.remove('open');
    document.body.classList.remove('_lock');
}

function openProfile(){
    profileWrapper.classList.add('_open');
    document.body.classList.add('_lock');
}

function closeProfile(){
    profileWrapper.classList.remove('_open');
    document.body.classList.remove('_lock');
}




