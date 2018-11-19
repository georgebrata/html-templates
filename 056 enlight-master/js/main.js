(function() {
	'use strict';

	/*----------------------------------------
		Detect Mobile
	----------------------------------------*/
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	/*----------------------------------------
		Back to top
	----------------------------------------*/
	var backToTop = function() {
		jQuery('.js-backtotop').on('click', function(e){
			e.preventDefault();
			jQuery('html, body').animate({
	        scrollTop: jQuery('body').offset().top
	    }, 700, 'easeInOutExpo');

		});
	}

	/*----------------------------------------
		More
	----------------------------------------*/
	var moreControl = function() {
		jQuery('.js-btn-more').on('click', function(e){
			e.preventDefault();
			jQuery('.probootstrap-header-top').toggleClass('active');
		});
	};

	/*----------------------------------------
		Search
	----------------------------------------*/
	var searchControl = function() {
		jQuery('.js-probootstrap-search').on('click', function(){
			jQuery('#probootstrap-search').addClass('active');
			setTimeout(function(){
				jQuery('#probootstrap-search').find('#search').focus().select();
			}, 500);
		});
		jQuery('.js-probootstrap-close').on('click', function(){
			jQuery('#probootstrap-search').removeClass('active');
		});
	};

	/*----------------------------------------
		Menu Hover
	----------------------------------------*/
	var menuHover = function() {
		if (!isMobile.any()) {
			jQuery('.probootstrap-navbar .navbar-nav li.dropdown').hover(function() {
			  jQuery(this).find('> .dropdown-menu').stop(true, true).delay(200).fadeIn(500).addClass('animated-fast fadeInUp');
			}, function() {
				jQuery(this).find('> .dropdown-menu').stop(true, true).fadeOut(200).removeClass('animated-fast fadeInUp')
			});
		}
	}
	/*----------------------------------------
		Carousel
	----------------------------------------*/
	var owlCarousel = function(){

		var owl = jQuery('.owl-carousel-carousel');
		owl.owlCarousel({
			items: 3,
			loop: true,
			margin: 20,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
			navText: [
		      "<i class='icon-keyboard_arrow_left owl-direction'></i>",
		      "<i class='icon-keyboard_arrow_right owl-direction'></i>"
	     	],
	     	responsive:{
	        0:{
	            items:1
	        },
	        400:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    	}
		});

		var owl = jQuery('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 20,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
			autoplay: true,
			navText: [
		      "<i class='icon-keyboard_arrow_left owl-direction'></i>",
		      "<i class='icon-keyboard_arrow_right owl-direction'></i>"
	     	]
		});

		var owl = jQuery('.owl-work');
		owl.owlCarousel({
			stagePadding: 150,
			loop: true,
			margin: 20,
			nav: true,
			dots: false,
			mouseDrag: false,
			autoWidth: true,
			autoHeight: true,
	    autoplay: true,
	    autoplayTimeout:2000,
	    autoplayHoverPause:true,
			navText: [	
				"<i class='icon-chevron-thin-left'></i>",
				"<i class='icon-chevron-thin-right'></i>"
			],
			responsive:{
			  0:{
		      items:1,
		      stagePadding: 10
			  },
			  500:{
			  	items:2,
		      stagePadding: 20
			  },
			  600:{
		      items:2,
		      stagePadding: 40
			  },
			  800: {
			  	items:2,
			  	stagePadding: 100
			  },
			  1100:{
		      items:3
			  },
			  1400:{
		      items:4
			  },
			}
		});
	};

	var tabsOwl = function() {

		initialize_owl(jQuery('#owl1'));

		jQuery('a[href="#featured-news"]').on('shown.bs.tab', function () {
    	initialize_owl(jQuery('#owl1'));
    	console.log('nice');
		}).on('hide.bs.tab', function () {
	    destroy_owl(jQuery('#owl1'));
		});

		jQuery('a[href="#upcoming-events"]').on('shown.bs.tab', function () {
	    initialize_owl(jQuery('#owl2'));
	    console.log('nice');
		}).on('hide.bs.tab', function () {
	    destroy_owl(jQuery('#owl2'));
		});


		function initialize_owl(el) {
	    el.owlCarousel({
	      items: 3,
				loop: true,
				margin: 20,
				nav: false,
				dots: true,
				smartSpeed: 800,
				autoHeight: true,
				navText: [
			      "<i class='icon-keyboard_arrow_left owl-direction'></i>",
			      "<i class='icon-keyboard_arrow_right owl-direction'></i>"
		     	],
		     	responsive:{
		        0:{
		            items:1
		        },
		        400:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:3
		        }
		    	}
	    });
		}

		function destroy_owl(el) {
		    el.trigger("destroy.owl.carousel");
		    el.find('.owl-stage-outer').children(':eq(0)').unwrap();
		}

	}

	/*----------------------------------------
		Slider
	----------------------------------------*/
	var flexSlider = function() {
	  jQuery('.flexslider').flexslider({
	    animation: "fade",
	    prevText: "",
	    nextText: "",
	    slideshow: true
	  });
	}

	/*----------------------------------------
		Feature Showcase
	----------------------------------------*/
	var showcase = function() {

		jQuery('.probootstrap-showcase-nav ul li a').on('click', function(e){

			var $this = jQuery(this),
					index = $this.closest('li').index();
							
			$this.closest('.probootstrap-feature-showcase').find('.probootstrap-showcase-nav ul li').removeClass('active');
			$this.closest('li').addClass('active');

			$this.closest('.probootstrap-feature-showcase').find('.probootstrap-images-list li').removeClass('active');
			$this.closest('.probootstrap-feature-showcase').find('.probootstrap-images-list li').eq(index).addClass('active');

			e.preventDefault();

		});

	};

	/*----------------------------------------
		Content Animation
	----------------------------------------*/
	var contentWayPoint = function() {
		var i = 0;
		jQuery('.probootstrap-animate').waypoint( function( direction ) {

			if( direction === 'down' && !jQuery(this.element).hasClass('probootstrap-animated') ) {
				
				i++;

				jQuery(this.element).addClass('item-animate');
				setTimeout(function(){

					jQuery('body .probootstrap-animate.item-animate').each(function(k){
						var el = jQuery(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn probootstrap-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft probootstrap-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight probootstrap-animated');
							} else {
								el.addClass('fadeInUp probootstrap-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};

	/*----------------------------------------
		PhotoSwipe
	----------------------------------------*/
	var initPhotoSwipeFromDOM = function(gallerySelector) {

    // parse slide data (url, title, size ...) from DOM elements 
    // (children of gallerySelector)
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for(var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes 
            if(figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element
            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };



            if(figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML; 
            }

            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            } 

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if(!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) { 
                continue; 
            }

            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }



        if(index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};

        if(hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');  
            if(pair.length < 2) {
                continue;
            }           
            params[pair[0]] = pair[1];
        }

        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
		  var pswpElement = document.querySelectorAll('.pswp')[0],
		      gallery,
		      options,
		      items;

		  items = parseThumbnailElements(galleryElement);

		  // define options (if needed)
		  options = {

		      // define gallery index (for URL)
		      galleryUID: galleryElement.getAttribute('data-pswp-uid'),

		      getThumbBoundsFn: function(index) {
		          // See Options -> getThumbBoundsFn section of documentation for more info
		          var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
		              pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
		              rect = thumbnail.getBoundingClientRect(); 

		          return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
		      }

		  };

		  // PhotoSwipe opened from URL
		  if(fromURL) {
		      if(options.galleryPIDs) {
		          // parse real index when custom PIDs are used 
		          // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
		          for(var j = 0; j < items.length; j++) {
		              if(items[j].pid == index) {
		                  options.index = j;
		                  break;
		              }
		          }
		      } else {
		          // in URL indexes start from 1
		          options.index = parseInt(index, 10) - 1;
		      }
		  } else {
		      options.index = parseInt(index, 10);
		  }

		  // exit if index not found
		  if( isNaN(options.index) ) {
		      return;
		  }

		  if(disableAnimation) {
		      options.showAnimationDuration = 0;
		  }

		  // Pass data to PhotoSwipe and initialize it
		  gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
		  gallery.init();
		};

		// loop through all gallery elements and bind events
		var galleryElements = document.querySelectorAll( gallerySelector );

		for(var i = 0, l = galleryElements.length; i < l; i++) {
		  galleryElements[i].setAttribute('data-pswp-uid', i+1);
		  galleryElements[i].onclick = onThumbnailsClick;
		}

		// Parse URL and open gallery if it contains #&pid=3&gid=1
		var hashData = photoswipeParseHash();
		if(hashData.pid && hashData.gid) {
		  openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
		}
	};

	/*----------------------------------------
		Gallery Masonry
	----------------------------------------*/
	var galleryMasonry = function() {
		// isotope 
		if (jQuery('.portfolio-feed').length > 0 ) {
			var $container = jQuery('.portfolio-feed');
			$container.imagesLoaded(function() {
				$container.isotope({
				  itemSelector: '.grid-item',
				  percentPosition: true,
				  masonry: {
				    columnWidth: '.grid-sizer',
				    gutter: '.gutter-sizer'
				  }
				});
			});
		}

	};

	/*----------------------------------------
		Counter Animation
	----------------------------------------*/
	var counter = function() {
		jQuery('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};
	var counterWayPoint = function() {
		if (jQuery('#probootstrap-counter').length > 0 ) {
			jQuery('#probootstrap-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !jQuery(this.element).hasClass('probootstrap-animated') ) {
					setTimeout( counter , 400);					
					jQuery(this.element).addClass('probootstrap-animated');
				}
			} , { offset: '90%' } );
		}
	};

	var magnificPopupControl = function() {


		jQuery('.image-popup').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-with-zoom',
			gallery:{
				enabled:true
			},
			zoom: {
				enabled: true, // By default it's false, so don't forget to enable it

				duration: 300, // duration of the effect, in milliseconds
				easing: 'ease-in-out', // CSS transition easing function

				// The "opener" function should return the element from which popup will be zoomed in
				// and to which popup will be scaled down
				// By defailt it looks for an image tag:
				opener: function(openerElement) {
				// openerElement is the element on which popup was initialized, in this case its <a> tag
				// you don't need to add "opener" option if this code matches your needs, it's defailt one.
				return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});

		jQuery('.with-caption').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			image: {
				verticalFit: true,
				titleSrc: function(item) {
					return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
				}
			},
			zoom: {
				enabled: true
			}
		});


		jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });
	}


	/*----------------------------------------
		Document Ready 
	----------------------------------------*/
	jQuery(document).ready(function(){
		menuHover();
		showcase();
		contentWayPoint();
		if (jQuery('.probootstrap-gallery').length > 0) {
			initPhotoSwipeFromDOM('.probootstrap-gallery');
		}
		galleryMasonry();
		counterWayPoint();
		tabsOwl();
		backToTop();
		searchControl();
		moreControl();
		magnificPopupControl();
	});

	jQuery(window).load(function(){
		owlCarousel();
		flexSlider();
	});

	

})();