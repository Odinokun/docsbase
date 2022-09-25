module.exports = function () {

  const targetInput = $('.payment-options__form-row-input').find('input');
  const targetPriceInput = $('.payment-options__form-row-input--price').find('input');

  $(targetInput).on('keyup', function () {
    const targetSpan = $(this).next('span');

    if (this.value.length > 0) {
      $(targetSpan).fadeIn();
    } else {
      $(targetSpan).fadeOut();
    }
  })

  // $(targetPriceInput).blur(function() {
  //   if (this.value.length > 0) {
  //     $(this).val($(this).val() + ' €');
  //   }
  // });

};