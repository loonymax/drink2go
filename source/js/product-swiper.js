const swiper = new Swiper('.product', {
  direction: 'horizontal',
  loop: true,
  autoHeight: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
