module.exports = function () {

  const blogSlider = new Swiper('.blog-slider', {
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 20,
    slidesPerView: 1.1,
    breakpoints: {
      375: {
        spaceBetween: 20,
        slidesPerView: 1.2,
      },
      769: {
        spaceBetween: 20,
        slidesPerView: 2.3,
      },
      1025: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
      1400: {
        spaceBetween: 30,
        slidesPerView: 4,
      }
    }
  });

};