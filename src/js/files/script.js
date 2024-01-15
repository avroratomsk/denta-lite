// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

let menuItem = document.querySelectorAll('.btn_open-submenu');

if (menuItem) {
  menuItem.forEach(item => {
    item.addEventListener('click', function (e) {
      parent = this.closest('.modile-menu__item');
      parent.classList.toggle('_active')
    })
  })
}

let buttonsEnroll = document.querySelectorAll('.btn_service');

if (buttonsEnroll) {
  buttonsEnroll.forEach(item => {
    item.addEventListener('click', function (e) {

      let dataName = this.dataset.name;
      let inputHideEnrollPopup = document.querySelector('.input__name');

      if (inputHideEnrollPopup) {
        inputHideEnrollPopup.value = dataName;
      } else {
        alert('Нету такого инпута')
      }
    })
  })
}

/**
 * Скролл до элемента на посадочной странице услуги
 */

let anchorLink = document.querySelectorAll('[data-anchor]');

if(anchorLink){
  anchorLink.forEach(link => {
    link.addEventListener('click', function(e){
     let idElem = this.dataset.anchor;
     let elemToScroll = document.getElementById(idElem);

     let elemPosition = elemToScroll.getBoundingClientRect().top;
     let headerHeight = document.querySelector('header').clientHeight;

     let scrollingHeight = elemPosition - headerHeight;
     
     window.scrollBy({
      top: scrollingHeight,
      left: 0,
      behavior: 'smooth'
    })
    })
  })
}

