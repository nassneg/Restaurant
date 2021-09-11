
// const slider = document.querySelector(".reviews__slider")
// const carousel = document.querySelector(".reviews__carousel")
// const dots = document.querySelectorAll(".reviews__dot")

// const maxSlides = 3
// const positionsDesktop = [0, 600, 1200]
// const positionsTablet = [0, 400, 800]
// const positionsMobile = [0, 250, 500]
// currentSlide = 0

// const selectSlide = (index) => {
//     if (window.screen.width >= 640) {
//         carousel.style.transform = `translateX(-${positionsDesktop[index]}px)`
//         currentSlide = index
//       } else if (window.screen.width >= 440) {
//         carousel.style.transform = `translateX(-${positionsTablet[index]}px)`
//         currentSlide = index
//       } else {
//         carousel.style.transform = `translateX(-${positionsMobile[index]}px)`
//         currentSlide = index
//       }

// }

// const selectDot = (index) => {
//     dots.forEach((dot) => {
//         dot.checked = false
//     })
//     dots[index].checked = true
//     selectSlide(index)
// }

// dots.forEach((dot) => {
//     dot.addEventListener("click", () => {
//         selectDot(dot.id)
//     })
// })

// setInterval(() => {
//     if (currentSlide >= 0 && currentSlide != 2) {
//         selectDot(currentSlide + 1)
//     } else{
//         selectDot(0)
//     }
// }, 5000)

$(document).ready(function(){
    $('.reviews__carousel').slick({
        infinite: true,
        autoplay: true,
        dots: true,
        autoplaySpeed: 4000
    });
  });


const burger = document.querySelector(".header__burger")
const mobileMenu = document.querySelector(".mobile__menu")
burger.addEventListener("click", () => {
    burger.classList.toggle("open")
    mobileMenu.classList.toggle("open")
})

window.addEventListener("resize", () => {
    burger.classList.remove("open")
    mobileMenu.classList.remove("open")
});