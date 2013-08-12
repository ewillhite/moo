(function ($) {

$(function() {

  /* ----- Isotope Script ----- */
  $('<li><a href="#" data-filter="*">#All</a></li>').prependTo('.filter');

  // cache container
  var iso_container = $('.isotope');
  // initialize isotope
  iso_container.isotope();

  // filter items when filter link is clicked
  $('.filter a').click(function(){
    // $.autopager('load');
    var selector = $(this).attr('data-filter');
    $('.filter a').removeClass('active');
    $(this).addClass('active');
    // setTimeout(function () {
      iso_container.isotope({ filter: selector });
    // }, 350);
    //, function() {
    //   var last = $('.isotope li').not('.isotope-hidden').filter(':last');
    //   if(last.offset().top + last.height() < $(document).scrollTop() + $(window).height()) {
    //     $.autopager('load');
    //   }
    // }
    return false;
  });

  /* end isotope */
  $('.isotope-item').hover(function() {
    $(this).children('.views-field-nothing').fadeIn('fast');
  }, function() {
    $(this).children('.views-field-nothing').fadeOut('fast');
  });

});

})(jQuery);
