/* =====================================
Template Name: Bizpro
Author URL: http://codeglim.com
Description: Bizpro is a complete One Page Business and Corporate HTML Template. You can use this template for your any business & corporate purpose.
Version:	1.1
========================================*/   
/*================================================
[Start Activation Code]
================================================
	+ Mobile Menu
	+ Scroll Sticky
	+ One Page Nav
	+ Main Slider
	+ Team Hover
	+ Testimonial Carousel
	+ Portfolio Carousel
		+ Portfolio Single Slide	
	+ Magnific Popup
	+ Counter JS
	+ Clients Carousel
	+ Progress JS
	+ Social Hover
	+ Typed Js
	+ ScrollUp JS
	+ Animation JS
	+ Extra JS
	+ Google Map
	+ Background Video
	+ Preloader JS
======================================
[End Activation Code]
======================================*/ 
(function ($) {
	"use strict";
    $(document).ready(function(){
	
	/*====================================
	// 	Mobile Menu
	======================================*/ 	
	$('.menu').slicknav({
		prependTo:".mobile-nav",
	});
	
	/*======================================
	// Scrool Sticky
	======================================*/ 
	jQuery(window).on('scroll', function() {
        if ($(this).scrollTop() > 55) {
            $('#header').addClass("sticky animated fadeInDown");
        } else {
            $('#header').removeClass("sticky animated fadeInDown");
        }
    });

	/*======================================
	//  Onepage Nav
	======================================*/ 
	if ($.fn.onePageNav) {
        $('.navbar-nav').onePageNav({
            currentClass: 'active',
            scrollSpeed: 600,
        }); 
		$('.slicknav_nav').onePageNav({
            currentClass: 'active',
            scrollSpeed: 600,
        });     
	
    }

	/*======================================
	// Main Slider
	======================================*/ 
	$(".slide-main").owlCarousel({
		loop:true,
		autoplay:true,
		autoplayHoverPause:true,
		smartSpeed: 1000,
		autoplayTimeout:4000,
		mouseDrag: true,
		items:1,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		nav:true,
		dots:false,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		responsive:{
			300: {
				nav:false,
            },
            480: {
				nav:false,
            },
            768: {
				nav:false,
            },
            1170: {
				nav:true,
            },
		}
	});
	
	/*======================================
	// Team Hover
	======================================*/ 
	$('.single-team').on('mouseenter', function(){
		$('.single-team').removeClass('active');
		$(this).addClass('active');
    });
	$('.single-team').on('mouseenter', function(){
        $('.single-team').removeClass('active');
        $(this).addClass('active');
    });
	
	
	/*======================================
	// Testimonial Carousel
	======================================*/ 
	$(".testimonial-carousel").owlCarousel({
		loop:true,
		autoplay:true,
		smartSpeed: 800,
		center:true,
		nav:true,
		items: 1,
		dots:false,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	});	
	
	/*======================================
	// Portfolio Carousel
	======================================*/ 
	$(".portfolio-carousel").owlCarousel({
		loop:true,
		autoplay:true,
		autoplayHoverPause:true,
		smartSpeed: 500,
		margin:15,
		nav:true,
		dots:false,
		items:3,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		responsive:{
			300: {
                items: 1,
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1170: {
                items: 3,
            },
		}
	});	
	
	/*======================================
	// Portfolio Single Slide
	======================================*/ 
	$(".portfolio-single-slide").owlCarousel({
		loop:true,
		autoplay:true,
		smartSpeed: 500,
		autoplayTimeout:3000,
		margin:0,
		nav:true,
		dots:false,
		items:1,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	});	

	/*====================================
	// Magnific Popup
	======================================*/ 
	$('.video-play').magnificPopup({
        type: 'video',	
    });
	
	// Portfolio Popup
    var magnifPopup = function () {
		// Portfolio Popup
        $('.zoom').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                 enabled: true
            },
            zoom: {
					enabled: true, // By default it's false, so don't forget to enable it
					duration: 300, // duration of the effect, in milliseconds
					easing: 'ease-in-out', // CSS transition easing function
					opener: function (openerElement) {    
						return openerElement.is('img') ? openerElement : openerElement.find('img');
					}
                }
            });			
        };
    magnifPopup();

	/*======================================
	// Counter JS
	======================================*/  
	$('.counter').counterUp({
		time: 1000
	});
	
	
	/*======================================
	// Clients Carousel
	======================================*/ 
	$(".clients-carousel").owlCarousel({
		loop:true,
		autoplay:true,
		autoplayTimeout:2000,
		smartSpeed: 500,
		margin:15,
		nav:false,
		dots:false,
		items:5,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		responsive:{
			300: {
                items: 1,
            },
            480: {
                items: 2,
            },
            768: {
                items: 4,
            },
            1170: {
                items: 5,
            },
		}
	});	
	
	/*====================================
		progress-bar
	======================================*/ 
    $('.progress .progress-bar').each(function () {
        var $this = $(this);
        var width = $(this).data('percent');
        $this.css({
            'transition': 'width 1s'
        });
        setTimeout(function () {
            $this.appear(function () {
                $this.css('width', width + '%');
            });
        }, 500);
    });
	
	/*======================================
	// Social Hover
	======================================*/ 
	$('.footer-top .social li').on('mouseenter', function(){
		$('.social li').removeClass('active');
		$(this).addClass('active');
    });
	$('.footer-top .social li').on('mouseenter', function(){
        $('.social li').removeClass('active');
        $(this).addClass('active');
    });

	
	/*======================================
	// Typed JS
	======================================*/ 
	$(".info").typed({
		strings: ["Perfect Pixel Website", "Amazing Support", "Perfect Guidlines"],
		typeSpeed: 0,
		loop: false
	});

	/*======================================
	// Scrool Up
	======================================*/  	
	$.scrollUp({
        scrollName: 'scrollUp',      // Element ID
        scrollDistance: 300,         // Distance from top/bottom before showing element (px)
        scrollFrom: 'top',           // 'top' or 'bottom'
        scrollSpeed: 1000,            // Speed back to top (ms)
        easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
        animation: 'fade',           // Fade, slide, none
        animationSpeed: 200,         // Animation speed (ms)
        scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
        scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
        scrollText: ["<i class='fa fa-angle-up'></i>"], // Text for element, can contain HTML
        scrollTitle: false,          // Set a custom <a> title if required.
        scrollImg: false,            // Set true to use image
        activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 2147483647           // Z-Index for the overlay
    });

    /*======================================
	//  Wow JS
	======================================*/ 		
	var window_width = $(window).width();   
      if(window_width > 767){
            new WOW().init();
		}

	/*====================================
		Extra JS
	======================================*/	
	$('.button').on("click", function (e) {
		var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 70
		}, 1000);
		e.preventDefault();
	});
	
	/*======================================
	// Google Map
	======================================*/ 
	var map = new GMaps({
			el: '.map',
			lat: 23.810332,
			lng: 90.412518,
			scrollwheel: false,
		});
		map.addMarker({
			lat: 23.810332,
			lng: 90.412518,
			title: 'Marker with InfoWindow',
			infoWindow: {
			content: '<p>Welcome to Codeglim</p>'
		}
	});
	/*====================================
		Background Video
	======================================*/
	$('.player').mb_YTPlayer();	

    });
	
	/*====================================
		Preloader JS
	======================================*/
		$(window).on('load', function() {
				$('.loader').fadeOut('slow', function(){
				$(this).remove();
			});
		});

})(jQuery);	