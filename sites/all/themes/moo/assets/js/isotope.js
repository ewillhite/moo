(function ($) {

$(function() {

  /* ----- Isotope Script ----- */
  $('<li><a href="#" data-filter="*">#All</a></li>').prependTo('.filter');
  // cache container
  var $container = $('.isotope');
  // initialize isotope
  $container.isotope();

  // filter items when filter link is clicked
  $('.filter a').click(function(){
    var filter = $(this);
    var selector = $(this).attr('data-filter');
    $.autopager.load(function() {
      $container.isotope({ filter: selector });
      $('.filter a').removeClass('active');
      $(filter).addClass('active');
    });
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
