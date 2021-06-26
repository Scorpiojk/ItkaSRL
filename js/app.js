const track = document.querySelector(".container_track");
const slides = Array.from(track.children);
const nextBtn = document.querySelector(".carrousel_btn--right");
const prevBtn = document.querySelector(".carrousel_btn--left");
const dotsNav = document.querySelector(".carrousel_nav");
const dots = Array.from(dotsNav.children);

// SELECT THE PICTURES AND PUT IT NEXT TO ONE OTHER
const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide,index) => {
    slide.style.left = slideWidth * index + "px"; 
}
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) =>{
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove("current-slide");
    targetDot.classList.add("current-slide");
}

const hideShowArrows = (slides, prevBtn, nextBtn ,targetIndex) =>{
    if (targetIndex === 0){
        prevBtn.classList.add("is-hidden");
        nextBtn.classList.remove("is-hidden");
    }   else if (targetIndex === slides.length - 1){
        prevBtn.classList.remove("is-hidden");
        nextBtn.classList.add("is-hidden");
    }   else {
        prevBtn.classList.remove("is-hidden");
        nextBtn.classList.remove("is-hidden");
    }
}

// WHEN I CLICK LEFT BTN, GO PREV PIC

prevBtn.addEventListener("click", e =>{
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;

    const currentDot = dotsNav.querySelector(".current-slide")
    const prevDot = currentDot.previousElementSibling

    const prevIndex = slides.findIndex(slide => slide === prevSlide)
    
    moveToSlide(track, currentSlide, prevSlide);

    updateDots(currentDot, prevDot);

    hideShowArrows(slides, prevBtn, nextBtn, prevIndex);
})
// WHEN I CLICK RIGHT BTN, GO NEXT PIC

nextBtn.addEventListener("click", e =>{
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;

    const currentDot = dotsNav.querySelector(".current-slide");
    const nextDot = currentDot.nextElementSibling;

    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    
    moveToSlide(track, currentSlide, nextSlide);

    updateDots(currentDot, nextDot);

    hideShowArrows(slides, prevBtn, nextBtn, nextIndex);
})

// SELECT A PIC FROM THE BUTTONS

dotsNav.addEventListener("click", e =>{
    
    const targetDot = e.target.closest ("button");

    if (!targetDot) return;

    const currentSlide = track.querySelector(".current-slide");
    const currentDot = dotsNav.querySelector(".current-slide ");
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);

    updateDots(currentDot, targetDot);

    hideShowArrows(slides, prevBtn, nextBtn, targetIndex);
})


/*----------------------------------------------------*/ 

