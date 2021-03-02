
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


let buttonOpenModals = document.querySelectorAll('button')

for (let buttonOpenModal of buttonOpenModals) {
  buttonOpenModal.addEventListener('click', function(){
    document.querySelector('.modal-bg').style.display="block"
    document.documentElement.classList.add('no-scroll');

    

    buttonPushForm.addEventListener('click', function(e){
      e.preventDefault()
      // document.querySelector('.modal-bg').style.display="none"
    
    
      alert( `Выбран тур - ${buttonOpenModal.getAttribute('data-id-tour')}, имя: ${formName.value}, телефон: ${formTel.value}`);

    
      document.documentElement.classList.remove('no-scroll');
    
    })
  }
)}

let buttonCloseModals = document.querySelectorAll('.close-modal')

let modalBg = document.querySelector('.modal-bg')

for (let buttonCloseModal of buttonCloseModals) {
  buttonCloseModal.addEventListener('click', function(e){
  e.preventDefault()
    document.querySelector('.modal-bg').style.display="none"
    document.documentElement.classList.remove('no-scroll');
  }

)}

// закрыть при клике на БГ  -  решить , почему закрывает форму при клике на инпут
// modalBg.addEventListener('click', function(e) {
//   e.preventDefault()
//   document.querySelector('.modal-bg').style.display="none"
//   document.documentElement.classList.remove('no-scroll');
// })

// отправить форму
let buttonPushForm = document.querySelector('#buttonPushForm')
let formName = document.querySelector('#formName')
let formTel = document.querySelector('#formTel')





// проверка на кол-во симв в имя
formName.addEventListener('keyup', function(e){
  e.preventDefault()

  if (formName.value.length >=3 && formName.value.length <=15) {
    document.querySelector('#formName').style.borderColor="green"
  } else {document.querySelector('#formName').style.borderColor="red";}

      //проверка на что бы имя и тел = true
  if (formName.style.borderColor==="green" && formTel.style.borderColor==="green") {
    buttonPushForm.style.pointerEvents="auto";
  } else { console.log('error');}

})

// проверка на кол-во симв в тел
formTel.addEventListener('keyup', function(e){
  e.preventDefault()

  if (formTel.value.length == 11) {
    document.querySelector('#formTel').style.borderColor="green"
  } else {document.querySelector('#formTel').style.borderColor="red";}

      //проверка на что бы имя и тел = true
  if (formName.style.borderColor==="green" && formTel.style.borderColor==="green") {
    buttonPushForm.style.pointerEvents="auto";
  } else { console.log('error');}

})
