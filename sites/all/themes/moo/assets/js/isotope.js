(function ($) {

$(function() {

  /* ----- Isotope Script ----- */
  // cache container
  var $container = $('.isotope');
  // initialize isotope
  $container.isotope({
    // options...
  });

  // filter items when filter link is clicked
  $('.filter a').click(function(){
    var selector = $(this).attr('data-filter');
    $container.isotope({ filter: selector });
    $('.filter a').removeClass('active');
    $(this).addClass('active');
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
