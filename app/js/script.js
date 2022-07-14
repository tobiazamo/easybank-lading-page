const buttonHamburger = document.querySelector('#buttonHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

buttonHamburger.addEventListener('click', function () {
   console.log('clicked hamburger');

   if(header.classList.contains('open')) { // close hamburger
       body.classList.remove('noscroll');
       header.classList.remove('open');
       fadeElems.forEach(function (element) {
           element.classList.remove('fade-in');
           element.classList.add('fade-out');
       });
   } else {
       body.classList.add('noscroll');
       header.classList.add('open');
       fadeElems.forEach(function (element) {
           element.classList.remove('fade-out');
           element.classList.add('fade-in');
       });
   }
});