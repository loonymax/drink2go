const headerToggle = document.querySelector('.navigation__menu-button');
console.log('meemcflke');
const navList = document.querySelector('.header__navigation');

navList.classList.remove('header__navigation--nojs');

headerToggle.addEventListener('click', function () {
  if (navList.classList.contains('header__navigation--closed')) {
    navList.classList.remove('header__navigation--closed');
    navList.classList.add('header__navigation--opened');
  } else {
    navList.classList.add('header__navigation--closed');
    navList.classList.remove('header__navigation--opened');
  }
});
