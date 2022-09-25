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

  const docSlider = new Swiper('.doc-slider', {
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

  const shopTop = new Swiper('.shop-top-slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 10,
    slidesPerView: 1.02,
    breakpoints: {
      769: {
    spaceBetween: 10,
        slidesPerView: 2.3,
      },
      1025: {
    spaceBetween: 15,
        slidesPerView: 3,
      },
      1400: {
    spaceBetween: 15,
        slidesPerView: 4,
      }
    }
  });

  const shopProductThumb = new Swiper(".shop-product__slider--thumb", {
    spaceBetween: 8,
    slidesPerView: 4,
    freeMode: true,
    direction: "vertical",
    watchSlidesProgress: true,
  });

  const shopProductMain = new Swiper(".shop-product__slider--main", {
    thumbs: {
      swiper: shopProductThumb,
    },
  });


};