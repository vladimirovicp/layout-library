const slider4 = document.querySelector('.slider4')

if(slider4){
    const carousel = slider4.querySelector(".carousel"),
        firstImg = carousel.querySelectorAll("img")[0],
        arrowPrev = document.querySelector('.slider4__button-prev'),
        arrowNext = document.querySelector('.slider4__button-next');
        //arrowIcons = document.querySelectorAll(".wrapper i");


    let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

    const showHideIcons = () => {
        // showing and hiding prev/next icon according to carousel scroll left value
        let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width

        //arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
        //arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";

        arrowPrev.style.display = carousel.scrollLeft == 0 ? "none" : "block";
        arrowNext.style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
    }

    // arrowIcons.forEach(icon => {
    //     icon.addEventListener("click", () => {
    //         let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
    //         // if clicked icon is left, reduce width value from the carousel scroll left else add to it
    //         carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    //         setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    //     });
    // });

    arrowPrev.addEventListener("click", () => {
        //console.log(firstImg.clientWidth)
        //let firstImgWidth = firstImg.clientWidth + 25; // getting first img width & adding 14 margin value
        let firstImgWidth = firstImg.clientWidth + 2.5 * parseInt(getComputedStyle(document.documentElement).fontSize);
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it



        //console.log(firstImg.clientWidth)

        //console.log(parseInt(getComputedStyle(document.documentElement).fontSize)) //rem to px



        //carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;


        console.log(carousel.scrollLeft)
        carousel.scrollLeft += -firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms


    })

    arrowNext.addEventListener("click", () => {
        //let firstImgWidth = firstImg.clientWidth + 25; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it

        let firstImgWidth = firstImg.clientWidth + 2.5 * parseInt(getComputedStyle(document.documentElement).fontSize);

        //carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        carousel.scrollLeft += firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    })



    // const autoSlide = () => {
    //     // if there is no image left to scroll then return from here
    //
    //
    //     if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
    //
    //     positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    //     //let firstImgWidth = firstImg.clientWidth + 25;
    //     let firstImgWidth = firstImg.clientWidth + 2.5 * parseInt(getComputedStyle(document.documentElement).fontSize);
    //     // getting difference value that needs to add or reduce from carousel left to take middle img center
    //     let valDifference = firstImgWidth - positionDiff;
    //
    //     if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
    //         return carousel.scrollLeft += positionDiff > (firstImgWidth / 3)- 1.7 * parseInt(getComputedStyle(document.documentElement).fontSize) ? valDifference : -positionDiff;
    //     }
    //     // if user is scrolling to the left
    //     carousel.scrollLeft -= positionDiff > (firstImgWidth / 3) - 1.7 * parseInt(getComputedStyle(document.documentElement).fontSize) ? valDifference : -positionDiff;
    // }

    // const dragStart = (e) => {
    //     // updatating global variables value on mouse down event
    //
    //     //console.log(carousel.scrollLeft)
    //     isDragStart = true;
    //     prevPageX = e.pageX || e.touches[0].pageX;
    //     prevScrollLeft = carousel.scrollLeft;
    // }
    //
    // const dragging = (e) => {
    //     // scrolling images/carousel to left according to mouse pointer
    //     if(!isDragStart) return;
    //     e.preventDefault();
    //     isDragging = true;
    //     carousel.classList.add("dragging");
    //     positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    //     carousel.scrollLeft = prevScrollLeft - positionDiff;
    //     showHideIcons();
    // }
    //
    // const dragStop = () => {
    //     isDragStart = false;
    //     carousel.classList.remove("dragging");
    //
    //     if(!isDragging) return;
    //     isDragging = false;
    //     autoSlide();
    // }

    // carousel.addEventListener("mousedown", dragStart);
    // carousel.addEventListener("touchstart", dragStart);
    //
    // document.addEventListener("mousemove", dragging);
    // carousel.addEventListener("touchmove", dragging);
    //
    // document.addEventListener("mouseup", dragStop);
    // carousel.addEventListener("touchend", dragStop);
}

