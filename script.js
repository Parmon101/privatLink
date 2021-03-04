"use strict"
// ----- следующий слайд -----

let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let buttonArrow = document.querySelector('#arrowRight');

function nextSlide(){
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'showing';
}


buttonArrow.addEventListener('click', nextSlide)




// ----- модальное окно формы -----
let buttonOpenModals = document.querySelectorAll('.open-modal')

for (let buttonOpenModal of buttonOpenModals) {
  buttonOpenModal.addEventListener('click', function(){
    document.querySelector('.modal-bg').style.display="block"
    document.documentElement.classList.add('no-scroll');

    

    buttonPushForm.addEventListener('click', function(e){
      e.preventDefault()
      document.querySelector('.modal-bg').style.display="none"
    
    
      // alert( `Выбран тур - ${buttonOpenModal.getAttribute('data-id-tour')}, имя: ${formName.value}, телефон: ${formTel.value}`);


      console.log(objvalidator);
      console.log(objData);


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


// отправить форму
let buttonPushForm = document.querySelector('#buttonPushForm')
let formName = document.querySelector('#formName')
let formTel = document.querySelector('#formTel')


// проверка на кол-во симв в имя
formName.addEventListener('keyup', function(e){
  e.preventDefault()

  formName.value = formName.value.replace(/[^A-Za-z]/ig, '').substr(0,15)

  if (formName.value.length >=3 && formName.value.length <=15) {
    document.querySelector('#formName').style.borderColor="green"
  } else {document.querySelector('#formName').style.borderColor="red";}

})

// проверка на кол-во симв в тел
formTel.addEventListener('keyup', function(e){
  e.preventDefault()

  formTel.value = formTel.value.replace(/\D/g,'').substr(0,11)

  if (formTel.value.length == 11) {
    document.querySelector('#formTel').style.borderColor="green"
  } else {document.querySelector('#formTel').style.borderColor="red";}

})


// объект с данными инпутов
const objvalidator = new Object();
const objData = new Object();

// следим за клавишами name
document.querySelector('#formName').addEventListener('keyup', () => {
  let name = document.querySelector('.name').value;

  objData.nameData = name

  // console.log(name.textContent);
  console.log(validateName(name));
});


// проверка, что в имени прис симв a-z A-Z и длину от 3 до 15
function validateName(str) {

  if (str.search(/[a-z]/) === -1) {
      return objvalidator.nameValid = false;
}
  if (str.search(/[A-Z]/) === -1) {
      return objvalidator.nameValid = false;
  }
  if (formName.value.length <3){
    return objvalidator.nameValid = false;
  }

  return objvalidator.nameValid = true;
} ;


// следим за клавишами tel
document.querySelector('#formTel').addEventListener('keyup', () => {
  let tel = document.querySelector('.tel').value;

  objData.telData = tel

  console.log(validateTel(tel));
});

// проверка, что в тел только цифры и длина 11
function validateTel(str) {
  if (str.search(/[0123456789]/) === -1) {
      return objvalidator.telValid = false;
  }
  if (formTel.value.length !== 11) {
    return objvalidator.telValid = false;
  } else

  return objvalidator.telValid = true;
} 



// проверка, что name и tel в obj = true
let modal = document.addEventListener('mouseover', function(e){
  
  let checkTrue = Object.getOwnPropertyDescriptors(objvalidator)

  if (checkTrue.nameValid.value == true && checkTrue.telValid.value == true){
    buttonPushForm.style.pointerEvents="auto"
  } else {buttonPushForm.style.pointerEvents="none"}
})