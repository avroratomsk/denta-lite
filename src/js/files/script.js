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


/**
 * submenu открытие и зактырие submenu
 */

const submenuTrigerBtn = document.querySelector('#submenu-show');

if(submenuTrigerBtn){
  submenuTrigerBtn.addEventListener('click', function(e) {
    this.classList.toggle('_active');
    document.querySelector('.sub-menu').classList.toggle('_show-submenu');
  })
}

/**
 * Наведение на submenu-item и присвоение класса, так же показ контента данного submenu-item
 */

const submenuItem = document.querySelectorAll('.sub-menu__item');
const contentSubmenu = document.querySelectorAll('.content-submenu');

if(submenuItem){
  submenuItem.forEach(item => {
    item.addEventListener('mouseover', function(e) {
      submenuItem.forEach(item => item.classList.remove('_active'));
      this.classList.add('_active');
      
      let dataAttrValue = this.dataset.id;

      let contentElem = document.querySelector(`.content-submenu[data-id="${dataAttrValue}"]`);

      if(contentElem){
        contentSubmenu.forEach(item => item.classList.remove('_show'));
        contentElem.classList.add('_show');
      }

    })
  });
}


