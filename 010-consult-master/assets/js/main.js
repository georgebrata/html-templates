(function($) {
"use strict";

/**
 * [isMobile description]
 * @type {Object}
 */
window.isMobile = {
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
}
window.isIE = /(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
window.windowHeight = window.innerHeight;
window.windowWidth = window.innerWidth;

/**
 * owlCarousel
 */
$('.carousel__element').each(function() {
	var self = $(this),
		optData = eval('(' + self.attr('data-options') + ')'),
		optDefault = {
			items: 1,
			nav: true,
			dot: true,
			loop: true
		},
		options = $.extend(optDefault, optData);

self.owlCarousel(options);
});

var selectors = [
	'iframe[src*="player.vimeo.com"]',
	'iframe[src*="youtube.com"]',
	'iframe[src*="youtube-nocookie.com"]',
	'iframe[src*="kickstarter.com"][src*="video.html"]',
	'object',
	'embed'
];
var $allVideos = $('body').find(selectors.join(','));
$allVideos.each(function() {
	var vid = $(this),
		vidWidth = vid.outerWidth(),
		vidHeight = vid.outerHeight(),
		ratio = (vidHeight / vidWidth) * 100;
	$allVideos
		.addClass('embed-responsive-item');
	if (ratio == 75) {
		$allVideos
			.wrap('<div class="embed-responsive embed-responsive-4by3"></div>');
	} else {
		$allVideos
			.wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
	}
});

/**
 * Match height 
 */
$('.row-eq-height > [class*="col-"]').matchHeight();

var myEfficientFn = debounce(function() {
	$('.row-eq-height > [class*="col-"]').matchHeight();
}, 250);

window.addEventListener('resize', myEfficientFn);

/**
 * [debounce description]
 * @param  {[type]} func      [description]
 * @param  {[type]} wait      [description]
 * @param  {[type]} immediate [description]
 * @return {[type]}           [description]
 */
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

$('.js-counter').countUp();

/**
 * Countdown
 */
$('.countdown__module').each(function() {
	var self = $(this),
		_date = self.attr('data-date'),
		_strf = self.html();
	self.countdown(_date, function(event) {
	  	self.html(event.strftime(_strf));
	}).removeClass("hide");
});

// /**
// * Dropdown
// */
$('[data-init="dropdown"]').each(function(index, el) {

$(el).find('a.dropdown__toggle').on('click', function(event) {
		event.preventDefault();
		$(el).find('.dropdown__content').toggleClass('open');
		$(el).toggleClass('open');
	});

$(document).on('click', function(event) {
		var $content = $(el).find('.dropdown__content');
		if ($.contains(el, event.target)) {
			return;
		}

if ($(el).hasClass('open')) {
			$(el).removeClass('open');
		}

if ($content.hasClass('open')) {
			$content.removeClass('open');
		}
	});
});

function consultForm(argument) {
	var _hForm = $('.js-consult-form .js-consult-form__content').outerHeight() / 2;
	var _paddingTop = _hForm + 50;

if(windowWidth > 1200) {
		var _paddingTop = _hForm + 200;
	}

$('.js-consult-form .js-consult-form__content').css('bottom', - _hForm);

if(windowWidth > 768) { 
		$('.js-consult-form + *').css('padding-top', _paddingTop);
	}
}

consultForm();
var myEfficientFn = debounce(function() {	
	consultForm();
}, 250);

window.addEventListener('resize', myEfficientFn);
/**
 * Masonry
 */
$('.grid__inner').masonry({
	itemSelector: '.grid-item',
	columnWidth: '.grid-sizer',
});

/**
 * grid css
 */

$.fn.reCalWidth = function() {
	var $self = $(this);
	$self.on('reCalWidth', function() {
		var _self = $(this);
		_self.css('width', '');
		var width = Math.floor(_self.width());
		_self.css('width', width + 'px');
		var height = Math.floor(_self.parent().children('.wide').width()/2);
		_self.parent().children('.wide').css('height', height + 'px');
	});
	$(window).on('resize', function() {
		$self.trigger('reCalWidth');
	});
}
function work() {
	$('.grid-css').each(function() {
		var workWrapper = $(this),
			workContainer = $('.grid__inner', workWrapper),
			filters = $('.filter', workWrapper),
			filterCurrent = $('.current a', filters),
			filterLiCurrent = $('.current', filters),
			duration = 0.3;
		workContainer.imagesLoaded( function() {
			workContainer.isotope({
				layoutMode: 'masonry',
				itemSelector: '.grid-item',
				transitionDuration: duration + 's',
				masonry: {
					columnWidth: '.grid-sizer'
				},
				// hiddenStyle: {},
				// visibleStyle: {}
			});
		});
		filters.on('click', 'a', function(e) {
			e.preventDefault();
			var $el = $(this);
			var selector = $el.attr('data-filter');
			filters.find('.current').removeClass('current');
			$el.parent().addClass('current');
			workContainer.isotope({
				filter: selector
			});
		});
		$('.grid-item', workWrapper).reCalWidth();
	});
}
work();

$('.js-post-effect').each(function() {
	var contentHeight = $(this).find('.post-02__content').height() + 30;

if(windowWidth > 768) {
		var contentHeight = $(this).find('.post-02__content').height() + 50;
	}

$(this).find('.post-02__body').css('transform', 'translateY(' + contentHeight + 'px)');

$(this).hover(function() {
		$(this).find('.post-02__body').css('transform', 'translateY(' + 0 + 'px)');
	}, function() {
		$(this).find('.post-02__body').css('transform', 'translateY(' + contentHeight + 'px)');
	});
});
$(document).ready(function(){
	$('a[href^="#"].clickScroll').on('click',function (e) {
	    e.preventDefault();

var target = this.hash;
	    var $target = $(target);

$('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function() {
	        window.location.hash = target;
	    });
	});
});
$('[data-init="video"]').each(function(index, el) {
	var el = $(this);
	var iframe = $(this).find('iframe');

$(this).find('.video-button').click(function(e) {

el.addClass('play-video');
		iframe[0].src += "?enablejsapi=1&autoplay=1";
		e.preventDefault();
	});
});

$('#back-to-top').on('click', function (e) {
	e.preventDefault();
	$('html,body').animate({
		scrollTop: 0
	}, 700);
});
/**
 * Menu
 */
$('.consult-nav').dropdownMenu({
    menuClass: 'consult-menu',
    breakpoint: 992,
    toggleClass: 'active',
    classButtonToggle: 'navbar-toggle',
    subMenu: {
        class: 'sub-menu',
        parentClass: 'menu-item-has-children',
        toggleClass: 'active'
    }
});

$(window).scroll(function() {
	if ($(document).scrollTop() > 100) {
		$('.header').addClass('shrink');
	} else {
		$('.header').removeClass('shrink');
	}
});

/**
 * Event click navbar-toggle
 */
$('.navbar-toggle').each(function(index, el) {
    $(el).on('click', function(event) {
        event.preventDefault();
        $(el).toggleClass('open');
    });

$(document).on('click', function(event) {
        var $content = $(el);
        if ($.contains(el, event.target)) {
            return;
        }

if ($(el).hasClass('open')) {
            $(el).removeClass('open');
        }
    });
});

/**
 * Event click search-form
 */
$('.search-form').each(function(index, el) {
    $(el).on('click', function(event) {
        event.preventDefault();
        $(el).addClass('open');
    });

$(document).on('click', function(event) {
        var $content = $(el);
        if ($.contains(el, event.target)) {
            return;
        }

if ($(el).hasClass('open')) {
            $(el).removeClass('open');
        }
    });
});

function slider() {
	var windowWidth    = $(window).innerWidth();
	var containerWidth = $('.container').width();
	var outerPadding   = (windowWidth - containerWidth)/2;

if(windowWidth > 1200) {
		$('.js-consult-slider').css('marginRight', - outerPadding);
	}
}

slider();
var myEfficientFn = debounce(function() {	
	slider();
}, 250);

window.addEventListener('resize', myEfficientFn);

})(jQuery);

