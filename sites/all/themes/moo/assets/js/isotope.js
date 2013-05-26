(function ($) {

$(function() {

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
    return false;
  });

});

})(jQuery);
