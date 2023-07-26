addEventListener("load", function()
{

    const slider1 = document.querySelector('.slider1');

    if(slider1){

        const slider = slider1;

        const maxSlides = 5;
        const desktopSlidesQuantity = 3;
        let currentSlides = 1;

        const buttonPrev = slider.querySelector('.slider__button-prev');
        const buttonNext = slider.querySelector('.slider__button-next');

        buttonPrev.addEventListener("click", slideButtonPrev);
        buttonNext.addEventListener("click", vp);

        buttonPrev.style.visibility="hidden";

        function slideButtonPrev()
        {
            buttonNext.style.visibility="visible";
            if(currentSlides > 1)
            {
                document.getElementById("i"+(currentSlides -1)).style.transition="left 2s";
                document.getElementById("i"+(currentSlides -1)).style.left="0rem";

                let n=currentSlides;
                document.getElementById("i"+n).style.transition="left 2s";
                document.getElementById("i"+n).style.left="47.5rem";

                n=currentSlides+1;
                document.getElementById("i"+n).style.transition="left 2s";
                document.getElementById("i"+n).style.left="95rem";

                n=currentSlides+2;
                document.getElementById("i"+n).style.transition="left 2s";
                document.getElementById("i"+n).style.left="142.5rem";
                currentSlides --

                if(currentSlides==1)
                    buttonPrev.style.visibility="hidden";
                    //document.getElementById("nz").style.visibility="hidden";

            }
        }

        function vp()
        {
            //document.getElementById("nz").style.visibility="visible";
            buttonPrev.style.visibility="visible";

            if(currentSlides < ( maxSlides - 2))
            {

                document.getElementById("i"+currentSlides).style.transition="left 2s";
                document.getElementById("i"+currentSlides).style.left="-47.5rem";

                document.getElementById("i"+ (currentSlides+1)).style.transition="left 2s";
                document.getElementById("i"+ (currentSlides+1)).style.left="0rem";

                document.getElementById("i"+ (currentSlides+2)).style.transition="left 2s";
                document.getElementById("i"+ (currentSlides+2)).style.left="47.5rem";

                document.getElementById("i"+ (currentSlides+3)).style.transition="left 2s";
                document.getElementById("i"+ (currentSlides+3)).style.left="95rem";

                currentSlides++;
                if(currentSlides == (maxSlides - desktopSlidesQuantity + 1) )
                    buttonPrev.style.visibility="hidden";
            }
        }


    }



    // document.getElementById("nz").addEventListener("click", nz);
    // document.getElementById("vp").addEventListener("click", vp);



    //document.getElementById("nz").style.visibility="hidden";

    // function nz()
    // {
    //     document.getElementById("vp").style.visibility="visible";
    //     if(currentSlides > 1)
    //     {
    //         document.getElementById("i"+(currentSlides -1)).style.transition="left 2s";
    //         document.getElementById("i"+(currentSlides -1)).style.left="0rem";
    //
    //         let n=currentSlides;
    //         document.getElementById("i"+n).style.transition="left 2s";
    //         document.getElementById("i"+n).style.left="47.5rem";
    //
    //         n=currentSlides+1;
    //         document.getElementById("i"+n).style.transition="left 2s";
    //         document.getElementById("i"+n).style.left="95rem";
    //
    //         n=currentSlides+2;
    //         document.getElementById("i"+n).style.transition="left 2s";
    //         document.getElementById("i"+n).style.left="142.5rem";
    //         currentSlides --
    //
    //         if(currentSlides==1)
    //             document.getElementById("nz").style.visibility="hidden";
    //     }
    // }

//     function vp()
//     {
//         document.getElementById("nz").style.visibility="visible";
//         if(currentSlides < ( maxSlides - 2))
//         {
//
//             document.getElementById("i"+currentSlides).style.transition="left 2s";
//             document.getElementById("i"+currentSlides).style.left="-47.5rem";
//
//             document.getElementById("i"+ (currentSlides+1)).style.transition="left 2s";
//             document.getElementById("i"+ (currentSlides+1)).style.left="0rem";
//
//             document.getElementById("i"+ (currentSlides+2)).style.transition="left 2s";
//             document.getElementById("i"+ (currentSlides+2)).style.left="47.5rem";
//
//             document.getElementById("i"+ (currentSlides+3)).style.transition="left 2s";
//             document.getElementById("i"+ (currentSlides+3)).style.left="95rem";
//
//             currentSlides++;
//
//
//             if(currentSlides == (maxSlides - desktopSlidesQuantity + 1) )
//                 document.getElementById("vp").style.visibility="hidden";
//         }
//     }
});
