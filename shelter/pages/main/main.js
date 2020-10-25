'use strict';
//показ и закрытие бургерного меню
const mainNav = document.querySelector('.main-nav');
const mainNavToggle = document.querySelector('.main-nav__toggle');
const logo = document.querySelector('.page-header__logo');
let overlay;
let mainNnavLinkActive = document.querySelector('.main-nav__link--active');


function toggleMenuMobile() {
  if (mainNav.classList.contains('main-nav--closed')) {
    openMenu();
    overlay = createOverlay();
    document.body.appendChild(overlay);
  } else {
    closeMenu();

  }
  overlay.addEventListener('click', closeMenu);
}

function openMenu() {
  mainNav.classList.remove('main-nav--closed');
  mainNav.classList.add('main-nav--opened');
  logo.style.opacity = '0';
  mainNavToggle.style.transform = 'rotate(90deg)';
  mainNavToggle.style.transition = 'all .3s ease-out';
  document.body.style.overflowY = 'hidden';
  createOverlay();
}

function closeMenu() {
  mainNav.classList.add('main-nav--closed');
  mainNav.classList.remove('main-nav--opened');
  logo.style.opacity = '1';
  mainNavToggle.style.transform = 'rotate(180deg)';
  document.body.style.overflowY = 'visible';
  removeOverlay();
}


mainNavToggle.addEventListener('click', toggleMenuMobile);
mainNnavLinkActive.addEventListener('click', closeMenu);


// создаем динамический оверлей
function createOverlay() {
  let overlayElement = document.createElement('div');
  overlayElement.style.position = 'fixed';
  overlayElement.style.backgroundColor = 'rgba(41,41,41,0.6)';
  overlayElement.style.left = 0;
  overlayElement.style.right = 0;
  overlayElement.style.top = 0;
  overlayElement.style.bottom = 0;
  overlayElement.style.zIndex = '999';
  overlayElement.style.display = 'flex';
  return overlayElement;
}


function removeOverlay() {
  overlay.remove();
  overlay.removeEventListener('click', createOverlay);

}