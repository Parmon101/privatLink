
// ----- следующий слайд -----

let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let button = document.querySelector('#arrowRight');

function nextSlide(){
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'showing';
}


button.addEventListener('click', nextSlide)


// ----- модальное окно формы -----

let buttonOpenModals = document.querySelectorAll('.open-modal')
let modalBg = document.querySelector('.modal-bg')


for (let buttonOpenModal of buttonOpenModals) {
  buttonOpenModal.addEventListener('click', function(){
    document.querySelector('.modal-bg').style.display="block"
    document.documentElement.classList.add('no-scroll');
  }
)}


let buttonCloseModals = document.querySelectorAll('.close-modal')

for (let buttonCloseModal of buttonCloseModals) {
  buttonCloseModal.addEventListener('click', function(e){
  e.preventDefault()
    document.querySelector('.modal-bg').style.display="none"
    document.documentElement.classList.remove('no-scroll');
  }
)}


// отправить

let buttonPushForm = document.querySelector('#buttonPushForm')
let formName = document.querySelector('#formName')
let formTel = document.querySelector('#formTel')
let nameTour = document.querySelector('#tourName')



buttonPushForm.addEventListener('click', function(e){
  e.preventDefault()
  document.querySelector('.modal-bg').style.display="none"

  if (nameTour.textContent == 5) {
    document.querySelector('.modal').style.width="100px"
  }

  alert( `Выбран тур  << ${nameTour.textContent} >> имя: ${formName.value} телефон: ${formTel.value}`);

  document.documentElement.classList.remove('no-scroll');

})

