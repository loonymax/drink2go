const headerToggle = document.querySelector('.navigation__menu-button');
const navList = document.querySelector('.navigation');

navList.classList.remove('navigation--nojs');

headerToggle.addEventListener('click', function () {
  if (navList.classList.contains('navigation--closed')) {
    navList.classList.remove('navigation--closed');
    navList.classList.add('navigation--opened');
  } else {
    navList.classList.add('navigation--closed');
    navList.classList.remove('navigation--opened');
  }
});
