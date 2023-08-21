const favorites = document.querySelector('.favorites');
const formBlock = favorites.querySelector('.favorites__form');
const form = formBlock.querySelector('.favorites__form-book');
const groupBtns = form.querySelectorAll('.favorites__group');

const cardsBlock = favorites.querySelector('.favorites__cards');
const cards = cardsBlock.querySelectorAll('.favorites__card');




function filterSeason(){

    groupBtns.forEach(btn =>{
        const radio = btn.querySelector('input[type="radio"]');
        radio.addEventListener('click', event =>{

            console.log(radio.id)

            cards.forEach((value) => {
                console.log(value.dataset.season);

                if(radio.id === value.dataset.season){
                    value.classList.remove('hidden');
                    setTimeout(function () {
                        value.classList.remove('visuallyhidden');
                    }, 40);
                } else {
                        value.classList.add('visuallyhidden');
                        // setTimeout(function () {
                        //     value.classList.add('hidden');
                        // }, 600);

                        value.addEventListener('transitionend', function(e) {
                            value.classList.add('hidden');
                        }, {
                            capture: false,
                            once: true,
                            passive: false
                        });


                    // value.addEventListener('transitionend', function(e) {
                    //     value.classList.add('hidden');
                    // }, {
                    //     capture: false,
                    //     once: true,
                    //     passive: false
                    // });
                }
                // console.log(value.dataset.season)
            })



        })
    })


}

filterSeason();



