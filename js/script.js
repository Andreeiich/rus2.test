
let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselInner = document.querySelector('.carousel-inner');
const carouselItemWidth = carouselItems[0].offsetWidth; 

function goToSlide(index) {
  index = (index % carouselItems.length + carouselItems.length) % carouselItems.length;
  currentIndex = index;
  carouselInner.style.transform = `translateX(-${currentIndex * carouselItemWidth}px)`;
}

function goToNextSlide() {
  if (currentIndex === 3) {
     goToSlide(currentIndex - 1);
    currentIndex = -1;
  } else if (currentIndex === 0) {
    goToSlide(currentIndex + 1);
  } else {
    goToSlide(currentIndex + 1);
  }
}

function goToPrevSlide() {
  goToSlide(currentIndex - 1);
}

setInterval(goToNextSlide, 2000); 



let currentIndex2 = 10;
const carouselItems2 = document.querySelectorAll('.carousel-item_2');
const carouselInner2 = document.querySelector('.carousel-inner_2');
const carouselItemWidth2 = carouselItems2[10].offsetWidth; 

function goToSlide2(index) {
  index = (index % carouselItems2.length + carouselItems2.length) % carouselItems2.length;
  currentIndex2 = index;
  carouselInner2.style.transform = `translateX(-${currentIndex2 * carouselItemWidth2}px)`;
}

function goToNextSlide2() {
  if (currentIndex2 === 3) {
     goToSlide2(currentIndex2 - 1);
    currentIndex2 = -1;
  } else if (currentIndex2 === 0) {
    goToSlide2(currentIndex2 + 1);
  } else {
    goToSlide2(currentIndex2 + 1);
  }
}

function goToPrevSlide2() {
  goToSlide2(currentIndex2 - 1);
}

setInterval(goToNextSlide2, 2000); 