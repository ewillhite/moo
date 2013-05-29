(function ($) {

$(function() {

  $('.media-vimeo-video').fitVids();

  if ($('body:after').css('content' == 'desktop')) {
    alert('hello');
  }

});

})(jQuery);
