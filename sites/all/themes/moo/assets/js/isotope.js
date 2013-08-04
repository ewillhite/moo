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
    var selector = $(this).attr('data-filter');
    $('.filter a').removeClass('active');
    $(this).addClass('active');
    $container.isotope({ filter: selector });
    $.autopager({
      load: function() {
        $('div#views_infinite_scroll-ajax-loader').remove();
        Drupal.attachBehaviors(this);
        $new_elements = $(".isotope-element:not(.isotope-item)");
        $(content_selector).imagesLoaded(function(){
          $(content_selector).isotope('appended', $new_elements, function() {
            $('.isotope-item').hover(function() {
              $(this).children('.views-field-nothing').fadeIn('fast');
            }, function() {
              $(this).children('.views-field-nothing').fadeOut('fast');
            });
          });
        });
      }
    }, 'load');
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
