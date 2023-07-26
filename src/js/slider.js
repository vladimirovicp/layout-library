addEventListener("load", function(){

    const slider = document.querySelector('.slider');
    if(slider){
        const arrowPrev = slider.querySelector('.slider__button-prev');
        const arrowNext = slider.querySelector('.slider__button-next');

        const wrapper = slider.querySelector('.slider__wrapper');
        const firstImg = wrapper.querySelectorAll("img")[0];



        //console.log(firstImg)


        arrowPrev.addEventListener("click", () => {
            //const indent = 2.5 * Number((getComputedStyle(document.documentElement).fontSize).replace('px', ''));
            //let firstImgWidth = firstImg.clientWidth + indent;
            const indent2 = 5 * (Number((getComputedStyle(document.documentElement).fontSize).replace('px', ''))* 100) / 100 ;
            let firstImgWidth = (Number((getComputedStyle(wrapper).width).replace('px', '')) + indent2) / 3;
            //let firstImgWidth = Number((getComputedStyle(wrapper).width).replace('px', '')) / 3;
            wrapper.scrollLeft = wrapper.scrollLeft - firstImgWidth;

        });

        arrowNext.addEventListener("click", () => {

            const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

            console.log(fontSize)

            //console.log('fontSize',fontSize)

            //const indent = 2.5 * (Number((getComputedStyle(document.documentElement).fontSize).replace('px', '')));

            const indent2 = 5 * (Number((getComputedStyle(document.documentElement).fontSize).replace('px', '')) * 10) / 10;

            const indent = 2.5 * fontSize;

            //const widthIMG = Math.round(Number((getComputedStyle(firstImg).width).replace('px', '')) * 100) / 100;

            const widthIMG = 45 * fontSize;



            //console.log('widthIMG',widthIMG)
            //console.log(getComputedStyle(wrapper).width)


            //console.log(widthIMG)
            //let firstImgWidth = firstImg.clientWidth + indent;

            //let firstImgWidth = widthIMG + indent;

            let firstImgWidth = (Number((getComputedStyle(wrapper).width).replace('px', '')) + indent2) / 3;

            //(firstImgWidth / 3)

            //console.log(firstImgWidth)


            //let firstImgWidth = getComputedStyle(firstImg).width + 25;
            //console.log(firstImgWidth);
           // console.log(getComputedStyle(wrapper).width)
           // console.log(getComputedStyle(document.documentElement).fontSize)
           // console.log(parseInt(getComputedStyle(document.documentElement).fontSize))
            //console.log(Number((getComputedStyle(document.documentElement).fontSize).replace('px', '')));

            wrapper.scrollLeft = wrapper.scrollLeft + firstImgWidth;
        });


    }
});
