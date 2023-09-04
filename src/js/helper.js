function openLogin(loginPopUp){
    loginPopUp.classList.add('active');
    document.body.classList.add('_lock');
}

function closeLogin(loginPopUp){
    loginPopUp.classList.remove('active');
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
