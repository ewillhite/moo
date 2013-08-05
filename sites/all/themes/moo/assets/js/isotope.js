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
    var selector = $(this).attr('data-filter');
    $('.filter a').removeClass('active');
    $(this).addClass('active');
    iso_container.isotope({ filter: selector }, function() {
      if ($('.isotope li').length < 3) {
        var last = $('.isotope li').filter(':last');
        if(last.offset().top + last.height() < $(document).scrollTop() + $(window).height()) {
          last = $('.isotope li').filter(':last');
          $.autopager('load');
        }
      }
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

Drupal.behaviors.isotope = {
  attach: function(context) {

  }
};

})(jQuery);
