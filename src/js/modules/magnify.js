module.exports = function () {

  $.fn.lightzoom = function(options) {

    let settings = $.extend({
      zoomPower   : 3,
      glassSize   : 175,
    }, options);

    let halfSize= settings.glassSize /2;
    let quarterSize = settings.glassSize/4;

    let zoomPower = settings.zoomPower;

    $("body").append('<div id="glass"></div>');
    $('html > head').append($('<style> #glass{width: '+settings.glassSize+'px; height: '+settings.glassSize+'px;}</style>'));


    let faker;
    let obj=this;

    $("#glass").mousemove(function(event) {
      let obj=this.targ;
      event.target=obj;
      faker(event,obj);
    });

    this.mousemove(function(event) {
      faker(event,this);
    });
    faker=function(event,obj) {
      //console.log(obj);
      document.getElementById('glass').targ=obj;
      let mx = event.pageX;
      let my = event.pageY;
      let bounding = obj.getBoundingClientRect();
      let w = bounding.width;
      let h = bounding.height;
      let objOffset  = $(obj).offset();
      let ol = objOffset.left;
      let ot = objOffset.top;
      if(mx > ol &&  mx < ol + w  && ot < my  &&  ot+h > my ) {
        offsetXfixer = ((mx-ol - w/2)/(w/2))*quarterSize;
        offsetYfixer = ((my-ot - h/2)/(h/2))*quarterSize;
        let cx = (((mx - ol + offsetXfixer ) / w)) * 100;
        let cy = (((my - ot + offsetYfixer ) / h)) * 100;
        my -= halfSize;
        mx -= halfSize;
        $("#glass").css({
          "top": (my),
          "left": (mx),
          "background-image" : " url('" + obj.src + "')",
          "background-size" : (w * zoomPower) + "px " + (h * zoomPower) + "px",
          "background-position": cx + "% " + cy + "%",
          "display" : "inline-block"
        });
        $("body").css("cursor","none");
      }else {
        $("#glass").css("display", "none");
        $("body").css("cursor","default");
      }
    };
    return this;
  };


  $(document).ready(function () {
    $('img.light-zoom').lightzoom({
      zoomPower   : 3,    //Default
      glassSize   : 180,  //Default
    });
  });
};