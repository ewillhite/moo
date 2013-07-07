(function ($) {

$(function() {

	// Date Search
	label = $('.view-private-work .views-exposed-widget > label');
	$('<span class="arrow"></span>').insertAfter(label);
	$(label).addClass('clickable').click(function() {
		widget = $(this).siblings('.views-widget');
		$('.view-private-work .views-widget').not(widget).hide();
		$(widget).toggle();
	});
	
	$('.vbo-views-form legend a').click();
	
	$('.vbo-select').click(function () {
	    $('.vbo-views-form legend a').click();
	});
});

})(jQuery);
