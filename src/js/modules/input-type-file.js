module.exports = function() {

  // for article
  $('input[type="file"]').on('change', function () {
    const wrap = $(this).parent('.article-sec__download');
    const place = $(wrap).find('.article-sec__download-placeholder');
    const fileName = $(wrap).find('.article-sec__download-filename');

    if( this.value ){
      $(wrap).addClass('active');
      let fileNameVal = $(this).val().split('/').pop().split('\\').pop();
      $(place).fadeOut(0);
      $(fileName).text(fileNameVal).fadeIn();
    }
  })


  $('.quote-form__tabs-body-item input[type="file"]').on('change', function () {
    const wrap = $(this).parent('.quote-form__tabs-body-item');
    const place = $(wrap).find('.quote-form__tabs-body-item-placeholder');
    const fileName = $(wrap).find('.quote-form__tabs-body-item-filename');

    if( this.value ){
      let fileNameVal = $(this).val().split('/').pop().split('\\').pop();
      $(place).fadeOut(0);
      $(fileName).text(fileNameVal).fadeIn();
    }
  })

};