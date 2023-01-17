// eslint-disable-next-line no-undef
const carousel = document.querySelector('.carousel');
const carouselItems = carousel.querySelectorAll('.carousel-item');
let currentItem = 0;

setInterval(() => {
  carouselItems[currentItem].style.opacity = 0;
  currentItem = (currentItem + 1) % carouselItems.length;
  carouselItems[currentItem].style.opacity = 1;
}, 3000);
