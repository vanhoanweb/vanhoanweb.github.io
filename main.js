( function( $ ) {
	/* Responsive Menu */
	$(".responsive-menu-icon").click(function() {
		$(this).next(".nav-primary .menu").toggle();
		$(this).toggleClass("btn-close");
		$('.overlay-bg').toggleClass('show');
	});

	$(window).resize(function() {
		if(window.innerWidth > 767) {
			$(".nav-primary .menu, nav .sub-menu").removeAttr("style");
			$(".responsive-menu > .menu-item").removeClass("menu-open");
		}
	});

	var isMobile = window.matchMedia("only screen and (max-width: 767px)");	
	if (isMobile.matches) {
		$(".site-header").addClass("fixed");
	}

	$(".responsive-menu > .menu-item").click(function(event) {
		if (event.target !== this) return;
		$(this).find(".sub-menu:first").slideToggle(function() {
			$(this).parent().toggleClass("menu-open");
		});
	});
	
	/* Page scrolling feature - requires jQuery Easing plugin */
	$('nav a, #home a').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 75
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
		if (isMobile.matches) {
			$('.overlay-bg').removeClass('show');
			$('.responsive-menu').hide();
			$(".responsive-menu-icon").toggleClass("btn-close");
		}
	});

	/* Menu bar fixed on top when scrolled */
	var isLaptop = window.matchMedia("only screen and (min-width: 1000px)");
	if (isLaptop.matches) {
		$(window).bind('scroll', function(event) {
			if ($(window).scrollTop() > 50) {
				$('.site-header').addClass('fixed');
			} else {
				$('.site-header').removeClass('fixed');
			}
		});
	}	
}( jQuery ) );
