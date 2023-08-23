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

            //console.log(radio.id)

            // cards.forEach((value) => {
            //     //console.log(value.dataset.season);
            //
            //     if(radio.id === value.dataset.season){
            //         value.classList.remove('hidden');
            //         setTimeout(function () {
            //             value.classList.remove('visuallyhidden');
            //         }, 400);
            //
            //         console.log('remove',value.dataset.season,radio.id);
            //     } else {
            //             value.classList.add('visuallyhidden');
            //             setTimeout(function () {
            //                 value.classList.add('hidden');
            //             }, 600);
            //
            //         // value.addEventListener('transitionend', function(e) {
            //         //     value.classList.add('hidden');
            //         // }, {
            //         //     capture: false,
            //         //     once: true,
            //         //     passive: false
            //         // });
            //     }
            // })

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
                        }, 1000);
                    }
                });
            })();






        }, false);
    })


}

filterSeason();



