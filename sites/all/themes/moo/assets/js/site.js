(function ($) {

// Parallax Effect
function parallax(){
  var scrolled = $(window).scrollTop();
  $('.bg-one, .bg-two').css('top', -(scrolled * 0.4) + 'px');
}

$(function() {

  //FitVids
  $('.media-vimeo-video').fitVids();

  // if 1024 or bigger
  if ($('header figure').css('float') === 'left') {
    $(window).scroll(function(e){
        parallax();
    });
  }

});

})(jQuery);
