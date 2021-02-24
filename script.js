// ----- слайдер верх ----- 
let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let button = document.querySelector('button')

function nextSlide(){
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slide showing';
}

button.addEventListener('click', nextSlide)



// ----- слайдер низ -----