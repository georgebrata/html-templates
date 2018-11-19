$(document).on('ready', function(){

		// Header position  //
		jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 200) {
				$('#header .header-inner').addClass("sticky");
			} else {
				$('#header .header-inner').removeClass("sticky");
			}
		});
	
	
		// Mobile Menu  //
		$(function(){
			$('#nav').slicknav({
				'label' : '',
				'prependTo': '.mobile-menu',
				
			});
		});
	
	
		// Testimonial Slider //
		$('.testimonial-slider').owlCarousel({
				items:1,
				autoplay:true,
				autoplayTimeout:3500,
				smartSpeed: 1000,
				autoplayHoverPause:true,
				loop:true,
				merge:true,
				nav:false,
				dots:true,
			});
		
		//  Portfolio //
		$('.single-pf').owlCarousel({
			items:1,
			autoplay:false,
			autoplayTimeout:4500,
			smartSpeed: 1000,
			autoplayHoverPause:true,
			margin:15,
			loop:true,
			merge:true,
			nav:true,
			dots:false,
			navText: ['PREVIOUS', 'NEXT'],
		});
		
		
		//  Client Slider //
		$('.clients-slider').owlCarousel({
			autoplay:true,
			autoplayTimeout:3000,
			margin:15,
			smartSpeed: 1000,
			autoplayHoverPause:true,
			loop:true,
			nav:false,
			dots:false,
			responsive:{
				300: {
					items:2,
				},
				480: {
					items:3,
				},
				768: {
					items:4,
				},
				1170: {
					items:6,
				}
			}
		});
	
		//  Popup JS //
		$('.popup').magnificPopup({
			type: 'image',
			gallery:{
			enabled:true
			}
		});
		
		
		
		// stellar //
			$.stellar({
		  horizontalOffset: 0,
		  verticalOffset: 0
		});

		

		// Wow Animate  //
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
	
	
		/*====================================
			Isotop
		======================================*/ 
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
                            easing: 'linear',
                            queue: true,
                        }
                    });
                    return false;
                });
            }
		});
		
		
		// onePageNav  //
		$('#nav').onePageNav({
			changeHash: false,
			scrollSpeed: 1000,
			filter: '',
		});
		
		// Scroll Up JS  //
		$(function () {
		  $.scrollUp({
			scrollName: 'scrollUp', // Element ID
			topDistance: '300', // Distance from top before showing element (px)
			topSpeed: 300, // Speed back to top (ms)
			animation: 'fade', // Fade, slide, none
			animationInSpeed: 200, // Animation in speed (ms)
			animationOutSpeed: 200, // Animation out speed (ms)
			scrollText: ["<i class='fa fa-rocket'></i>"], // Text for element
			activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
		  });
		});
		
		
		// counterUp //
		$('.counter').counterUp({
			delay: 10,
			time: 2500,
				
		});
		
	
		// GMaps //
		var map = new GMaps({
		  el: '#map',
		  lat: 22.933046,
		  lng: 90.827027
		});
		var map = new GMaps({
				el: '#map',
				lat: 22.933046,
				lng: 90.827027,
				scrollwheel: false,
			});
			map.addMarker({
				lat: 22.933046,
				lng: 90.827027,
				title: 'Welcome to SOHEL',
				infoWindow: {
				content: '<p>Welcome To Clipping Hunt</p>'
			}
		
		});
		
		// Preloader
		$(window).on('load', function() {
				$('.loader').fadeOut('slow', function(){
				$(this).remove();
			});
		});
})(jQuery);