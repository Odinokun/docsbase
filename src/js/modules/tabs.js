module.exports = function () {

  //  tabs all form
  $('.quote-form__header-item').on('click', function () {
    const activeVal = $(this).data('tab');

    $('.quote-form__header-item, .quote-form__body').removeClass('active');
    $('.quote-form__body').fadeOut(0);

    $(this).addClass('active');
    $('#quote-form__body-' + activeVal).fadeIn();

    // обнуляю внутренние вкладки при переключении
    AttachedActive();
  })

  //  tabs private attach/weblink
  $('.quote-form__tabs-header-item').on('click', function () {
    const activeVal = $(this).data('tab');

    if (activeVal === 'attached') {
      AttachedActive();
    } else {
      WeblinkActive();
    }
  })

  function AttachedActive() {
    $('.quote-form__tabs-header-item--weblink').removeClass('active');
    $('.quote-form__tabs-body--weblink').fadeOut(0);

    $('.quote-form__tabs-header-item--attached').addClass('active');
    $('.quote-form__tabs-body--attached').fadeIn(0);
  }

  function WeblinkActive() {
    $('.quote-form__tabs-header-item--attached').removeClass('active');
    $('.quote-form__tabs-body--attached').fadeOut(0);

    $('.quote-form__tabs-header-item--weblink').addClass('active');
    $('.quote-form__tabs-body--weblink').fadeIn(0);
  }


  //  OUR GUARANTEE
  $('.our-guarantee__tabs-item').on('click', function () {
    const activeVal = $(this).data('tab');

    $('.our-guarantee__tabs-item').removeClass('active');
    $(' .our-guarantee__slider-wrap').fadeOut(0);

    $(this).addClass('active');
    $('#our-guarantee__slider-wrap--' + activeVal).fadeIn();
  })

  //  MAGNIFY

  $('.magnify__tab').on('click', function () {
    const activeVal = $(this).data('tab');

    $('.magnify__tab').removeClass('active');
    $('.magnify__item-img').fadeOut(0);

    $(this).addClass('active');
    $('#magnify__item-img--' + activeVal).fadeIn();
  })

};