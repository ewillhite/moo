(function ($) {

$(function() {

  /* ----- Isotope Script ----- */
  $('<li><a href="#" data-filter="*">#All</a></li>').prependTo('.filter');

  // filter items when filter link is clicked
  // $('.filter a').click(function(){
  //   var selector = $(this).attr('data-filter');
  //   $('.filter a').removeClass('active');
  //   $(this).addClass('active');
  //   $.autopager('load');
  //   Drupal.attachBehaviors('.isotope');
  //   $container.isotope({ filter: selector });
  //   return false;
  // });

  /* end isotope */
  $('.isotope-item').hover(function() {
    $(this).children('.views-field-nothing').fadeIn('fast');
  }, function() {
    $(this).children('.views-field-nothing').fadeOut('fast');
  });

});

Drupal.behaviors.isotope = {
  attach: function(context) {

  // cache container
  var $container = $('.isotope');
  // initialize isotope
  $container.isotope();

  }
};

})(jQuery);
