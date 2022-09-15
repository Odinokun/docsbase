module.exports = function() {

  $('input[type="file"]').on('change', function () {
    const wrap = $(this).parent('.article-sec__download');
    const place = $(wrap).find('.article-sec__download-placeholder');
    const fileName = $(wrap).find('.article-sec__download-filename');

    if( this.value ){
      $(wrap).addClass('active');
      let fileNameVal = $(this).val().split('/').pop().split('\\').pop();
      $(place).fadeOut(0);
      $(fileName).text(fileNameVal).fadeIn();
    } else {
      // console.log( "Файл не выбран" );
    }
  })

  // $('.form-group__delete-file').on('click', function (){
  //   const wrap = $(this).parent('.form-group');
  //   const input = $(wrap).find('input');
  //
  //   $(wrap).removeClass('active');
  //   $(input).val('');
  // })

};