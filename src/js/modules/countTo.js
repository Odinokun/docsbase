module.exports = function () {

    let counter = 0;
    let elements = $('.reviews__counter-number');

    $(window).on('scroll', function () {
      let scroll = $(window).scrollTop() + $(window).height();
      //Если скролл до конца елемента
      // let offset = $element.offset().top + $element.height();
      let offset = elements.offset().top + 300;
      //Если скролл до начала елемента
      // let offset = $element.offset().top

      if (scroll > offset && counter === 0) {
        $(elements).countTo();
        // counter = 1;
      }
    });

  // $('.countTo').countTo();
};