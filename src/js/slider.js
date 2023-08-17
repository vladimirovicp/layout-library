const slider = document.querySelector('.slider');
if(slider){
    const arrowPrev = slider.querySelector('.slider__button-prev');
    const arrowNext = slider.querySelector('.slider__button-next');

    const arrows = slider.querySelectorAll('.slider__arrow');
    const wrapper = slider.querySelector('.slider__wrapper');

    const firstImg = wrapper.querySelectorAll("img")[0];
    const slides_max = wrapper.querySelectorAll("img").length;
    let currentBullet = 1;
    const pagination = slider.querySelector('.slider__pagination');
    const bullets = pagination.querySelectorAll('.slider__bullet');


    arrows.forEach(arrow => {
        arrow.addEventListener("click", () => {

            // if( (currentBullet < slides_max ) && (currentBullet > 0) ){
            //
            // }


            //disable


                let firstImgWidth = firstImg.clientWidth + 25;
                wrapper.scrollLeft += arrow.classList.contains('slider__button-prev') ? -firstImgWidth : firstImgWidth;

                let nextBullet = arrow.classList.contains('slider__button-prev') ?  currentBullet - 1 :  currentBullet + 1;

                bullets.forEach(bullet => {
                    if(Number(bullet.dataset.bullet) === currentBullet ){
                        bullet.classList.remove('active')
                    }
                    if(Number(bullet.dataset.bullet) === nextBullet ){
                        bullet.classList.add('active');
                    }
                })
                currentBullet = nextBullet;

            arrowPrev.classList.remove('disable')
            arrowNext.classList.remove('disable')

                if(currentBullet === 1 ){
                    arrowPrev.classList.remove('.disable')
                    arrowNext.classList.add('disable')
                }
                if(currentBullet === 5 ){
                    arrowPrev.classList.remove('disable')
                    arrowNext.classList.add('disable')
                }


        });
    });


    bullets.forEach(bullet => {
            bullet.addEventListener("click", (event) => {
                let nextBullet = bullet.dataset.bullet;

                bullets.forEach(item => {
                    if(item.classList.contains('active')) {
                        item.classList.remove('active')
                    };
                })

                if(currentBullet < nextBullet){
                    let firstImgWidth = (firstImg.clientWidth + 25) * (nextBullet - 1);
                    wrapper.scrollLeft += firstImgWidth;

                } else {
                    let firstImgWidth = (firstImg.clientWidth + 25) * (currentBullet - nextBullet);
                    wrapper.scrollLeft -= firstImgWidth;
                }

                currentBullet = nextBullet;
                bullet.classList.add('active');
            });
    });

    window.addEventListener('resize', function(event) {
        wrapper.scrollLeft = 0;
    }, true);

}








