/*
author: Boostraptheme
author URL: https://boostraptheme.com
License: Creative Commons Attribution 4.0 Unported
License URL: https://creativecommons.org/licenses/by/4.0/
*/ 

// ====================================================
                        // ANIMATION
// ====================================================
	$(function () {
	    // animate on scroll
	    new WOW().init();
	});

// ====================================================
                        // NAVIGATION
// ====================================================
	(function($) {
	    "use strict"; // Start of use strict
		// Smooth scrolling using jQuery easing
		$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  if (target.length) {
		    $('html, body').animate({
		      scrollTop: (target.offset().top - 0)
		    }, 1000, "easeInOutExpo");
		    return false;
		  }
		}); 

	    // Closes responsive menu when a scroll trigger link is clicked
	    $('.js-scroll-trigger').click(function() {
	      $('.navbar-collapse').collapse('hide');
	    });

	    $("a.smooth-scrolls").click(function (event) {

	        // event.preventDefault();

	        // get/return id like #about, #work, #team and etc
	        var section = $(this).attr("href");

	        $('html, body').animate({
	            scrollTop: ($(section).offset().top - 2)
	        }, 1000, "easeInOutExpo");
	    });

	    // Activate scrollspy to add active class to navbar items on scroll
	    $('body').scrollspy({
	      target: '#mainNav',
	      offset: 62
	    }); 

	    // $(".navbar-collapse ul li a").on("click touch", function(){
	       
	    //     $(".navbar-toggle").click();
	    // });

	    // search bar
        jQuery('.search').on("click", function () {
        if(jQuery('.search-btn').hasClass('fa-search')){
          jQuery('.search-open').fadeIn(500);
          jQuery('.search-btn').removeClass('fa-search');
          jQuery('.search-btn').addClass('fa-times');
        } else {
          jQuery('.search-open').fadeOut(500);
          jQuery('.search-btn').addClass('fa-search');
          jQuery('.search-btn').removeClass('fa-times');
        }
      });

      //fixed navbar
      var toggleAffix = function(affixElement, scrollElement, wrapper) {
      
        var height = affixElement.outerHeight(),
            top = wrapper.offset().top;
        
        if (scrollElement.scrollTop() >= top){
            wrapper.height(height);
            affixElement.addClass("affix");
        }
        else {
            affixElement.removeClass("affix");
            wrapper.height('auto');
        }
          
      };
      

      $('[data-toggle="affix"]').each(function() {
        var ele = $(this),
            wrapper = $('<div></div>');
        
        ele.before(wrapper);
        $(window).on('scroll resize', function() {
            toggleAffix(ele, $(this), wrapper);
        });
        
        // init
        toggleAffix(ele, $(window), wrapper);
      });
      
        // Hover dropdown 
        $('ul.navbar-nav li.dropdown').hover(function() {
          $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
        }, function() {
          $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
        });

	})(jQuery); // End of use strict


// ====================================================
                   // LOGIN FORM
// ====================================================

    (function($) {

        var $formLogin = $('#login-form');
        var $formRegister = $('#register-form');
        var $divForms = $('#div-forms');
        var $modalAnimateTime = 300;
        var $msgAnimateTime = 150;
        var $msgShowTime = 2000;

        $("form").submit(function () {
            switch(this.id) {
                case "login-form":
                    var $lg_username=$('#login_username').val();
                    var $lg_password=$('#login_password').val();
                    if ($lg_username == "ERROR") {
                        msgChange($('#div-login-msg'), $('#icon-login-msg'), $('#text-login-msg'), "error", "glyphicon-remove", "Login error");
                    } else {
                        msgChange($('#div-login-msg'), $('#icon-login-msg'), $('#text-login-msg'), "success", "glyphicon-ok", "Login OK");
                    }
                    return false;
                    break; 
                case "register-form":
                    var $rg_username=$('#register_username').val();
                    var $rg_email=$('#register_email').val();
                    var $rg_password=$('#register_password').val();
                    if ($rg_username == "ERROR") {
                        msgChange($('#div-register-msg'), $('#icon-register-msg'), $('#text-register-msg'), "error", "glyphicon-remove", "Register error");
                    } else {
                        msgChange($('#div-register-msg'), $('#icon-register-msg'), $('#text-register-msg'), "success", "glyphicon-ok", "Register OK");
                    }
                    return false;
                    break;
                default:
                    return false;
            }
            return false;
        });
        
        $('#login_register_btn').click( function () { modalAnimate($formLogin, $formRegister) });
        $('#register_login_btn').click( function () { modalAnimate($formRegister, $formLogin); }); 
        
        function modalAnimate ($oldForm, $newForm) {
            var $oldH = $oldForm.height();
            var $newH = $newForm.height();
            $divForms.css("height",$oldH);
            $oldForm.fadeToggle($modalAnimateTime, function(){
                $divForms.animate({height: $newH}, $modalAnimateTime, function(){
                    $newForm.fadeToggle($modalAnimateTime);
                });
            });
        }
        
        function msgFade ($msgId, $msgText) {
            $msgId.fadeOut($msgAnimateTime, function() {
                $(this).text($msgText).fadeIn($msgAnimateTime);
            });
        } 
    })(jQuery); // End of use strict

// ====================================================
                   // AUTO WRITER
// ====================================================
      var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };  

// ====================================================
                   // HOME TEXT SCROLL
// ====================================================
	(function($) {
	      $('.carousel').carousel();
	})(jQuery); // End of use strict


// ====================================================
                        // BLOG
// ====================================================
        $( document ).ready(function() {
         
            $('.thumbnail-blogs').hover(
                function(){
                    $(this).find('.caption').slideDown(250)
                },
                function(){
                    $(this).find('.caption').slideUp(205)
                }
            );                                      
        });

// ====================================================
                        // THOUGHTS
// ====================================================
	(function($) {

	    $("#clients-list").owlCarousel({
	        items: 6,
	        autoplay: true,
	        smartSpeed: 700,
	        loop: true,
	        dots:false,
	        autoplayHoverPause: true,
	        responsive: {
	          0: {
	            items: 1
	          },
	          480: {
	            items: 3
	          },
	          768: {
	            items: 5
	          },
	          992: {
	            items: 6
	          }
	        }
	    });
	})(jQuery); // End of use strict
    // owl crousel testimonial section
    $('#thought-desc').owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });

// ====================================================
                	// BACK TO TOP
// ====================================================
	(function($) {

	    $(window).scroll(function () {

	        if ($(this).scrollTop() < 50) {
	            // hide nav
	            $("nav").removeClass("vesco-top-nav");
	            $("#back-to-top").fadeOut();

	        } else {
	            // show nav
	            $("nav").addClass("vesco-top-nav");
	            $("#back-to-top").fadeIn();
	        }
	    });
	})(jQuery); // End of use strict


// ====================================================
                    // TESTIMONIALS
// ====================================================
    $('#customers-testimonials').owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });