(function ($) {

$(function() {

	$('tr').click(function() {
		var row = $(this);
		if ($(this).next().hasClass('reveal')) {
			$(this).next().hide().remove();
		}
		else {
			$('<tr class="reveal"><td></td></tr>').insertAfter(row);
			$(this).find('.hidden').clone().appendTo('.reveal td');
			$('.reveal .hidden').toggleClass('hidden');
		}
	});

});

})(jQuery);
