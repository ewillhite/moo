(function(e){e(function(){e('<li><a href="#" data-filter="*">#All</a></li>').prependTo(".filter");var t=e(".isotope");t.isotope();e(".filter a").click(function(){var n=e(this).attr("data-filter");e(".filter a").removeClass("active");e(this).addClass("active");t.isotope({filter:n},function(){alert("hello")});return!1});e(".isotope-item").hover(function(){e(this).children(".views-field-nothing").fadeIn("fast")},function(){e(this).children(".views-field-nothing").fadeOut("fast")})})})(jQuery);