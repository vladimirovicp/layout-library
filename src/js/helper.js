function openLogin(loginPopUp){
    loginPopUp.classList.add('active');
    document.body.classList.add('_lock');
}

function closeLogin(){

    const loginPopUp = document.querySelector('.modal__form-login');
    loginPopUp.classList.remove('active');

    const logIn = document.querySelector('.form__login');
    const logInErr  = logIn.querySelector('.form__error');
    if(logInErr.classList.contains('active')){
        logInErr.classList.remove('active');
    }

    document.body.classList.remove('_lock');
}

function openSignUp(signUpPopUp){
    signUpPopUp.classList.add('active');
    document.body.classList.add('_lock');
}

function closeSignUp(signUpPopUp){
    signUpPopUp.classList.remove('active');
    document.body.classList.remove('_lock');
}

export { openLogin, closeLogin, openSignUp, closeSignUp };
