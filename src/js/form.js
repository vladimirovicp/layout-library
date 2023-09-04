import { openLogin, closeLogin, openSignUp, closeSignUp } from './helper.js';

const signUpPopUp = document.querySelector('.modal__form-register');

const register = document.querySelector('.form__register');
const registerBtn = register.querySelector('.btn');

const registerName = register.querySelector('#register-name');
const registerLastName = register.querySelector('#register-l-name');
const registerMail = register.querySelector('#register-mail');
const registerPassword = register.querySelector('#register-password');

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;


const profileAnonym = document.querySelector('.profile__anonym');
const profileAuth = document.querySelector('.profile__auth');
const profileLink  = document.querySelector('.header__profile-link');
const profileNameSpan = profileLink.querySelector('span');


const logOutBtn = profileAuth.querySelector('open-modal-log-out');


let users = [];
let currentUser = {};

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}

registerBtn.addEventListener('click',(e)=>{
    let isValid = true;

    const registerNameValue = registerName.value;
    const registerLastNameValue = registerLastName.value;
    const registerMailValue = registerMail.value;
    const registerPasswordValue = registerPassword.value;


    if (registerNameValue === '') {
        isValid = false;
        console.log('Name пусто!');
    }
    if (registerLastNameValue === '') {
        isValid = false;
        console.log('Last Name пусто!');
    }
    if (!isEmailValid(registerMailValue)) {
        isValid = false;
        console.log('Email не прошла проверку!');
    }

    if (registerPasswordValue.length < 8) {
        isValid = false;
        console.log('Password меньше 8');
    }

    if(!isValid){
        console.log('Валидация не пройдена.');
    } else{
        e.preventDefault();

        userRegister(registerNameValue,registerLastNameValue,registerPasswordValue,registerMailValue);
        //localStorage.setItem('users',userRegister); //сохраняем данные users в localStorage
        //console.log(users);
    }

})

// logOutBtn.addEventListener('click',(e) => {
//     localStorage.removeItem('currentUser');
//
//     profileAnonym.classList.add('active');
//     profileAuth.classList.remove('active');
//     profileLink.classList.remove('auth');
//
//     //profileNameSpan.textContent = currentUser.name[0].toUpperCase() + currentUser.lastName[0].toUpperCase();
//
// });



function getLocalStorage() {
    if(localStorage.getItem('users') !== null){
        users = JSON.parse(localStorage.getItem('users'));
        console.log('Пользователи из localStorage',users);
    }

    if(localStorage.getItem('currentUser') !== null){
        currentUser = JSON.parse(localStorage.getItem('currentUser'));

        profileAnonym.classList.remove('active');
        profileAuth.classList.add('active');
        profileLink.classList.add('auth');
        profileNameSpan.textContent = currentUser.name[0].toUpperCase() + currentUser.lastName[0].toUpperCase();

        console.log('Пользователь localStorage', currentUser);
    }
}


function userRegister(name,lastName,password,mail){

    // console.log('name',name)
    // console.log('lastName',lastName)
    // console.log('password',password)
    // console.log('mail',mail)

    let newUser = true;

    console.log(users)

    if(users === undefined || users.length === 0){
        addUser();
    } else{
        users.forEach(function(user) {
            if (mail === user.mail){
                newUser = false;
            }
        });

        if(newUser){
            addUser();
            authUser()
        } else {
            console.log('Пользователь с такой почтой зарегистрирован!');
        }
    }

    function addUser(){
        users.push({
            'name': name,
            'lastName': lastName,
            'password': password,
            'mail': mail
        });
        authUser();

        localStorage.setItem('users', JSON.stringify(users)); //сохраняем данные users в localStorage
        localStorage.setItem('currentUser', JSON.stringify(currentUser)); //сохраняем данные users в localStorage


        profileAnonym.classList.remove('active');
        profileAuth.classList.add('active');
        profileLink.classList.add('auth');
        profileNameSpan.textContent = name[0].toUpperCase() + lastName[0].toUpperCase();
        closeSignUp(signUpPopUp);
    }

    function authUser(){
        currentUser = {
            'name': name,
            'lastName': lastName,
            'password': password,
            'mail': mail
        };
    }
}




// localStorage.setItem - метод сохраняющий данные в localStorage. Два параметра метода: имя значения, которое сохраняется и само значение, которое сохраняется
// localStorage.getItem - метод получающий данные из localStorage. Параметр метода - имя, под которым сохраняется значение.


window.addEventListener('load', getLocalStorage);
