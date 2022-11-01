module.exports = function() {
  $(function() {
    window.addEventListener("scroll", function(event){

      let top = this.pageYOffset;
      let layers = $(".index-top__info");

      let speed, yPos;
      layers.each(function() {
        speed = $(this).attr('data-speed');
        let yPos = (top * speed / 100);
        $(this).attr('style','transform: translateY(' + yPos + 'px)');
      });
    });
  });
};