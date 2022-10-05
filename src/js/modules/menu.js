module.exports = function () {

  $('#burger').on('click', function () {
    $("#menu").toggleClass('active');
    $("#header").toggleClass('fixed');
    CloseAll();
  })

  //  LEVEL 1
  $('.menu__item').on('click', function (e) {
    e.stopPropagation();

    if ($(this).hasClass('active')) {
      CloseAll();
    } else {
      $('.menu__item').removeClass('active');
      $('.menu__list-2').slideUp();

      $(this).addClass('active');
      $(this).find('.menu__list-2').slideDown();
    }
  })

  //  LEVEL 2
  $('.menu__item-2').on('click', function (e) {
    e.stopPropagation();

    if ($(this).hasClass('active')) {
      $('.menu__item-2').removeClass('active');
      $('.menu__list-3').fadeOut();
    } else {
      $('.menu__item-2').removeClass('active');
      $('.menu__list-3').fadeOut();

      $(this).addClass('active');
      $(this).find('.menu__list-3').fadeIn();
    }
  })

  function CloseAll() {
    $('.menu__list-3').fadeOut();
    $('.menu__item-2').removeClass('active');
    $('.menu__list-2').slideUp();
    $('.menu__item').removeClass('active');
  }

};