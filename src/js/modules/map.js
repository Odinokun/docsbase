module.exports = function () {

  $('#map path').on('click', function (e) {
    e.preventDefault();

    ClosePopup();

    let targetCountry = $(this);
    let targetPopup = '#country-popup-' + $(this).data('country');

    $(targetPopup + ', #country-popup__layer').fadeIn();
    $(targetCountry).addClass('active');
  })

  // begin popup close
  $('.country-popup__close').on('click', function () {
    ClosePopup();
  });

  // end popup close

  function ClosePopup() {
    $('.country-popup, #country-popup__layer').fadeOut();
    $('#map path').removeClass('active');
  }

};