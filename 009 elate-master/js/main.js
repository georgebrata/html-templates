(function($) {
    "use strict";
     $(document).on('ready', function() {
	
        jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 200) {
				$('#header .header-inner').addClass("sticky");
			} else {
				$('#header .header-inner').removeClass("sticky");
			}
		});
		
		
		// Mobile Menu JS  //
		$(function(){
			$('#nav').slicknav({
				'label' : '',
				'prependTo': '.mobile-menu',
				
			});
		});

		// Testimonial JS  //
		$('.testimonial-slider').owlCarousel({
			items:1,
			autoplay:false,
			autoplayTimeout:4500,
			smartSpeed: 1000,
			autoplayHoverPause:true,
			animateIn:'bounceInRight',
			animateOut:'bounceOutRight',
			loop:true,
			merge:true,
			nav:false,
			dots:true,
		});
		
		
		// Clients JS  //
		$('.clients-slider').owlCarousel({
			autoplay:true,
			autoplayTimeout:4500,
			margin:15,
			smartSpeed: 1000,
			autoplayHoverPause:true,
			loop:true,
			nav:true,
			dots:false,
			responsive:{
				300: {
					items:1,
				},
				480: {
					items:2,
				},
				768: {
					items:3,
					nav:false,
				},
				1170: {
					items:5,
					nav:true,
				}
			}
		});
		
		// Porgress Bar JS  //
		$('.progress.two .progress-bar').each(function () {
			var $this = $(this);
			var width = $(this).data('percent');
			$this.css({
				'transition': 'width 3s'
			});
			setTimeout(function () {
				$this.appear(function () {
					$this.css('width', width + '%');
				});
			}, 500);
		});
	
		
		if ($.fn.onePageNav) {
			$('#nav').onePageNav({
				currentClass: 'current',
				scrollSpeed: 1000,
				easing: 'easeInOutQuart'
			});
		}
		
		

		// Video Popup  //
		$('.video-popup').magnificPopup({
			type: 'video',	
		});
		
		// Wow JS //
		var wow = new WOW(
		{
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true,       // act on asynchronously loaded content (default is true)
			callback:     function(box) {
			  // the callback is fired every time an animation is started
			  // the argument that is passed in is the DOM node being animated
			},
			scrollContainer: null // optional scroll container selector, otherwise use window
		  }
		);
		wow.init();
		
		// Isotop JS //
		$(window).on('load', function() {
			
			if ($.fn.isotope) {
                $(".isotop-active").isotope({
                    filter: '*',
                });

					$('.works-menu ul li').on('click', function() {
                    $(".works-menu ul li").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr('data-filter');
                    $(".isotop-active").isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 750,
                            easing: 'easeOutCirc',
                            queue: false,
                        }
                    });
                    return false;
                });
            }
		});
		
		/*======================================
			Animate Scroll JS
		======================================*/ 
		$('a').on('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top -0 
			}, 1000, 'easeInOutQuart');
			event.preventDefault();
		});
		

		// ScrollUp JS //
		$.scrollUp({
			scrollName: 'scrollUp',      // Element ID
			scrollDistance: 300,         // Distance from top/bottom before showing element (px)
			scrollFrom: 'top',           // 'top' or 'bottom'
			scrollSpeed: 1000,            // Speed back to top (ms)
			easingType: 'easeInOutQuart',        // Scroll to top easing (see http://easings.net/)
			animationSpeed: 200,         // Animation speed (ms)
			scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
			scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
			scrollText: ["<i class='fa fa-angle-up'></i>"], // Text for element, can contain HTML
			scrollTitle: false,          // Set a custom <a> title if required.
			scrollImg: false,            // Set true to use image
			activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
			zIndex: 2147483647           // Z-Index for the overlay
		});
	});
	
})(jQuery);
