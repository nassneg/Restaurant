const dots = document.querySelectorAll('.reviews__dot');
const track = document.querySelector('.reviews__carousel');

let current = dots[0];
let interval;

const scroll = (i) => {
    track.style.transform = `translateX(-${i*100}%)`;
    current.classList.remove('active');
    current = dots[i];
    current.classList.add('active');
};

const setAutoScroll = (i = 0) => {
    interval = setInterval(() => {
        i = dots.length - 1 > i ? i + 1 : 0;
        scroll(i);
    }, 5000);
};

setAutoScroll();

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', () => {
        if (current !== dots[i]) scroll(i);
        clearInterval(interval);
        setAutoScroll(i);
    });
}

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