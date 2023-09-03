const register = document.querySelector('.form__register');
const registerBtn = register.querySelector('.btn');

const registerName = register.querySelector('#register-name');
const registerLastName = register.querySelector('#register-l-name');
const registerMail = register.querySelector('#register-mail');
const registerPassword = register.querySelector('#register-password');

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;


let users = [];

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



function getLocalStorage() {
    if(localStorage.getItem('users') !== null){
        users = JSON.parse(localStorage.getItem('users'));
        console.log('Пользователи из localStorage',users);
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
        users.push({
            'name': name,
            'lastName': lastName,
            'password': password,
            'mail': mail
        });

        //console.log(typeof users)
        localStorage.setItem('users', JSON.stringify(users)); //сохраняем данные users в localStorage

    } else{
        users.forEach(function(user) {
            if (mail === user.mail){
                newUser = false;
            }
        });

        if(newUser){
            users.push({
                'name': name,
                'lastName': lastName,
                'password': password,
                'mail': mail
            });
            localStorage.setItem('users', JSON.stringify(users)); //сохраняем данные users в localStorage
        } else {
            console.log('Пользователь с такой почтой зарегистрирован!');
        }
    }

}


// localStorage.setItem - метод сохраняющий данные в localStorage. Два параметра метода: имя значения, которое сохраняется и само значение, которое сохраняется
// localStorage.getItem - метод получающий данные из localStorage. Параметр метода - имя, под которым сохраняется значение.


window.addEventListener('load', getLocalStorage);
