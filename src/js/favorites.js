const favorites = document.querySelector('.favorites');
const formBlock = favorites.querySelector('.favorites__form');
const form = formBlock.querySelector('.favorites__form-book');
const groupBtns = form.querySelectorAll('.favorites__group');

const cardsBlock = favorites.querySelector('.favorites__cards');
const cards = cardsBlock.querySelectorAll('.favorites__card');




function filterSeason(){

    groupBtns.forEach(btn =>{
        const radio = btn.querySelector('input[type="radio"]');
        radio.addEventListener('click', function (){
            (async () => {
                setTimeout(function () {

                    cards.forEach((value) => {
                        if(radio.id === value.dataset.season){
                            if (value.classList.contains('hidden')){
                                value.classList.remove('hidden');
                                setTimeout(function () {
                                    value.classList.remove('visuallyhidden');
                                }, 500);
                            }
                        }
                    });

                }, 500);


                cards.forEach((value) => {
                    if(radio.id !== value.dataset.season){
                        value.classList.add('visuallyhidden');
                        setTimeout(function () {
                            value.classList.add('hidden');
                        }, 400);


                    }
                });
            })();






        }, false);
    })


}

filterSeason();



