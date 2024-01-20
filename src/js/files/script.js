// Подключение функционала "Чертогов Фрилансера"
import { bodyUnlock, isMobile } from "./functions.js";
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

// let anchorLink = document.querySelectorAll('[data-anchor]');

// if (anchorLink) {
//   anchorLink.forEach(link => {
//     link.addEventListener('click', function (e) {
//       let idElem = this.dataset.anchor;
//       let elemToScroll = document.getElementById(idElem);

//       let elemPosition = elemToScroll.getBoundingClientRect().top;
//       let headerHeight = document.querySelector('header').clientHeight;

//       let scrollingHeight = elemPosition - headerHeight;

//       window.scrollBy({
//         top: scrollingHeight,
//         left: 0,
//         behavior: 'smooth'
//       })
//     })
//   })
// }


/**
 * submenu открытие и зактырие submenu
 */

const submenuTrigerBtn = document.querySelector('#submenu-show');

if (submenuTrigerBtn) {
  submenuTrigerBtn.addEventListener('click', function (e) {
    this.classList.toggle('_active');
    document.querySelector('.sub-menu').classList.toggle('_show-submenu');
    document.querySelector('.submenu-overlay').classList.toggle('_active');
  })
}

/**
 * Закрытие submenu при нажатие вне его поля
 */

const submenuOverlay = document.querySelector('.submenu-overlay');

if (submenuOverlay) {
  submenuOverlay.addEventListener('click', function (e) {
    this.classList.remove('_active');
    submenuTrigerBtn.classList.remove('_active');
    document.querySelector('.sub-menu').classList.remove('_show-submenu');
  })
}

const submenu = document.querySelector('.submenu');
if (submenu) {
  submenu.addEventListener('click', function (e) {
    console.log(e.target);
  })
}

/**
 * Наведение на submenu-item и присвоение класса, так же показ контента данного submenu-item
 */

const submenuItem = document.querySelectorAll('.sub-menu__item');
const contentSubmenu = document.querySelectorAll('.content-submenu');

if (submenuItem) {
  submenuItem.forEach(item => {
    item.addEventListener('mouseover', function (e) {
      submenuItem.forEach(item => item.classList.remove('_active'));
      this.classList.add('_active');

      let dataAttrValue = this.dataset.id;

      let contentElem = document.querySelector(`.content-submenu[data-id="${dataAttrValue}"]`);

      if (contentElem) {
        contentSubmenu.forEach(item => item.classList.remove('_show'));
        contentElem.classList.add('_show');
      }

    })
  });
}


/**
 * Мобильное меню переключатель между меню и услугами
 */

const menuSwitchers = document.querySelectorAll('.menu-mb__btn');
const contentMenuMb = document.querySelectorAll('.menu-mb__content');

if (menuSwitchers) {
  menuSwitchers.forEach(btn => {
    btn.addEventListener('click', function (e) {
      menuSwitchers.forEach(btn => btn.classList.remove('_active'));
      this.classList.add('_active');

      contentMenuMb.forEach(item => item.classList.remove('_active'));

      let content = document.getElementById(this.dataset.id);
      content.classList.add('_active');
    })
  })
}

/**
 * Закрытие мобильного меню
 */

const menuMobileCloseBtn = document.querySelector('.menu-mb__close');

if (menuMobileCloseBtn) {
  menuMobileCloseBtn.addEventListener('click', function (e) {
    bodyUnlock();
    document.documentElement.classList.remove("menu-open");
    document.querySelector('.menu-mb').classList.remove('_show-menu');
  })
}

const menuMobile = document.querySelector('.menu-mb');
const bodyElement = document.body;

if (bodyElement) {
  bodyElement.addEventListener('click', function (e) {
    if (menuMobile.classList.contains('_show-menu')) {
      if (!e.target.classList.contains('_show-menu') && !e.target.closest('.menu-mb')) {
        bodyUnlock();
        document.documentElement.classList.remove("menu-open");
        document.querySelector('.menu-mb').classList.remove('_show-menu');
      }
    }
  })
}




