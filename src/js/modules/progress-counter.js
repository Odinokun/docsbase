module.exports = function () {

  let counter = 0;
  let capabilities__counter = $('.capabilities__counter');

  $(window).on('scroll', function () {
    if ($(capabilities__counter).length > 0) {
      let scroll = $(window).scrollTop() + $(window).height();
      let offset = capabilities__counter.offset().top + 150;

      if (scroll > offset && counter === 0) {
        StartProgressBar();
        counter = 1;
      }
    }
  });

  function StartProgressBar() {
    $(".capabilities__counter").each(function () {
      let $this = $(this),
        $dataV = $this.data("percent"),
        $dataDeg = $dataV * 3.6,
        $round = $this.find(".capabilities__counter-round-per");
      $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
      $this.append(
        '<div class="circle_inbox"><span class="percent_text"></span></div>'
      );
      $this.prop("Counter", 0).animate(
        {Counter: $dataV},
        {
          duration: 2000,
          easing: "swing",
          step: function (now) {
            $this.find(".percent_text").text(Math.ceil(now) + "%");
          }
        }
      );
      if ($dataV >= 51) {
        $round.css("transform", "rotate(" + 360 + "deg)");
        setTimeout(function () {
          $this.addClass("percent_more");
        }, 1000);
        setTimeout(function () {
          $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
        }, 1000);
      }
    });
  }

};