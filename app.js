const menuBtn = document.querySelector(".open-menu")
const menu = document.querySelector(".menu")

if(menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("show")
    })
}

// carousel

const leftBtn = document.querySelector(".carousel .left")
const rightBtn = document.querySelector(".carousel .right")
const carouselSlides = document.querySelectorAll(".carousel .slide")

if(carouselSlides && leftBtn && rightBtn) {
    let counter = 0;

    leftBtn.addEventListener("click", () => {
        carouselSlides.forEach(slide => {
            slide.classList.remove("show")
        })
        if(counter == 0) {
            counter = carouselSlides.length -1
        }  else {
            counter--
        }
        carouselSlides[counter].classList.add("show")
    })
}