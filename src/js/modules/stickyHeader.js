module.exports = function () {

  let position = 0;

  function handleScroll() {
    let $element = $('.sticky-header');
    let scrollTop = $(this).scrollTop();

    if (scrollTop <= 0) {
      $element.removeClass('hide').removeClass('scrolling');
    } else if (scrollTop < position) {
      $element.removeClass('hide');
    } else if (scrollTop > position) {
      $element.addClass('scrolling');
      if (scrollTop + $(window).height() >= $(document).height() - $element.height()) {
        $element.removeClass('hide');
      } else if (Math.abs($element.position().top) < $element.height()) {
        $element.addClass('hide');
      }
    }
    position = scrollTop;
  }

  function debounce(method, delay) {
    clearTimeout(method._tId);
    method._tId = setTimeout(function () {
      method();
    }, delay);
  }

  $(window).scroll(function () {
    debounce(handleScroll, 50);
  });

};