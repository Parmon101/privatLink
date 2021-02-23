// ----- слайдер верх ----- 
let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
// let slideInterval = setInterval(nextSlide,2000);
let button = document.querySelector('button')

button.addEventListener('click', function nextSlide(){
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
  })



// ----- слайдер низ -----