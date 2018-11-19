/*
    This file handle custom fuctions for the template.
    @version - 1.0
*/

;(function($) {
    "use strict";
	
    //* mainNavbar
    function mainNavbar(){
        if ( $('#main_navbar').length ){ 
             $('#main_navbar').affix({
                offset: {
                    top: 10,
                    bottom: function () {
                        return (this.bottom = $('.footer').outerHeight(true))
                    }
                }
            }); 
        };
    };
    
	 //* nav_searchFrom
    function searchFrom(){
        if ( $('.nav_searchFrom').length ){  
             $('.nav_searchFrom').on('click',function(){
                $('.searchForm').toggleClass('show');
                return false
            });
            $('.form_hide').on('click',function(){
                $('.searchForm').removeClass('show')
            });
        };
    };
    
    //*  Main slider js 
    function home_main_slider(){
        if ( $('.slider_inner').length ){
            $('.slider_inner').camera({
                loader: true,
                navigation: true,
                autoPlay:false,
                time: 4000,
                playPause: false,
                pagination: false,
                thumbnails: false,
                overlayer: true,
                hover: false,  
                minHeight: '500px',
            }); 
        }
    }
    
    //* Isotope Js
    function portfolio_isotope(){
        if ( $('.portfolio_item, .portfolio_2 .portfolio_filter ul li').length ){
            // Activate isotope in container
            $(".portfolio_item").imagesLoaded( function() {
                $(".portfolio_item").isotope({
                    itemSelector: ".single_facilities",
                    layoutMode: 'masonry',
                    percentPosition:true,
                    masonry: {
                        columnWidth: ".grid-sizer, .grid-sizer-2"  
                    }            
                }); 
            }); 
            
            // Activate isotope in container
            $(".portfolio_2").imagesLoaded( function() {
                $(".portfolio_2").isotope({
                    itemSelector: ".single_facilities",
                    layoutMode: 'fitRows',
                }); 
            });
            // Add isotope click function
            $(".portfolio_filter ul li").on('click',function(){
                $(".portfolio_filter ul li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr("data-filter");
                $(".portfolio_item, .portfolio_2").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });
        }
    };
    
    //* Stellar 
    $(function(){
        $.stellar({
            horizontalScrolling: false,
            verticalOffset: 40
        });
    });
    
     //* counterUp JS
    function counterUp(){
        if ( $('.counter').length ){ 
            $('.counter').counterUp({
                delay: 10,
                time: 900,
            });
        } 
    }; 
    
    //* Testimonial Carosel
    function testimonialsCarosel(){
        if ( $('.testimonial_carosel').length ){
            $('.testimonial_carosel').owlCarousel({
                loop:true,
                items:1,
                autoplay:false,
            });
        };
    };
    //* Testimonial Carosel
    function partnersCarosel(){
        if ( $('.partners').length ){
            $('.partners').owlCarousel({
                loop:true,
                items:5,
                margin:110,
                autoplay:true,
                response:true,
                responsive:{
                    300:{
                        items:1, 
                        margin:0,
                    },
                    500:{
                        items:3, 
                    },
                    700:{
                        items:3, 
                    },
                    800:{
                        items:4,
                        margin:40,
                    },
                    1000:{
                        items:5,
                    },  
                }
            });
        };
    };
    
    //* waypoint JS
    function ourSkrill(){
         if ( $('.our_skill_inner').length ){
             $(".our_skill_inner").each(function() {
                $(this).waypoint(function() {
                    var progressBar = $(".progress-bar");
                    progressBar.each(function(indx){
                        $(this).css("width", $(this).attr("aria-valuenow") + "%")
                    })
                }, 
                {
                    triggerOnce: true,
                    offset: 'bottom-in-view'

                });
            });
         }
    };
    
     //* counterUp 2 JS
    function counterUp2(){
        if ( $('.counter2').length ){ 
            $('.counter2').counterUp({
                delay: 10,
                time: 200,
            });
        } 
    }; 
    
    //* Hide Loading Box (Preloader)
     function preloader(){
        if ( $('.preloader').length ){ 
             $(window).load(function() {
                $('.preloader').delay(500).fadeOut('slow');
                $('body').delay(500).css({'overflow':'visible'});
            });
        } 
    }; 
    
    /*Function Calls*/ 
    searchFrom ();
    new WOW().init();
	home_main_slider();
    testimonialsCarosel ();
    portfolio_isotope ();
    counterUp ();  
    partnersCarosel ();
    ourSkrill ();
    counterUp2 ();
    mainNavbar ();
    preloader ();
    
})(jQuery);

! function(a) {
    "use strict";
    a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var o = a(this.hash);
            if ((o = o.length ? o : a("[name=" + this.hash.slice(1) + "]")).length) return a("html, body").animate({
                scrollTop: o.offset().top - 54
            }, 1e3, "easeInOutExpo"), !1
        }
    }), a(".js-scroll-trigger").click(function() {
        a(".navbar-collapse").collapse("hide")
    }), a("body").scrollspy({
        target: "#mainNav",
        offset: 56
    });
    var o = function() {
        a("#mainNav").offset().top > 100 ? a("#mainNav").addClass("navbar-shrink") : a("#mainNav").removeClass("navbar-shrink")
    };
    o(), a(window).scroll(o), a(".portfolio-modal").on("show.bs.modal", function(o) {
        a(".navbar").addClass("d-none")
    }), a(".portfolio-modal").on("hidden.bs.modal", function(o) {
        a(".navbar").removeClass("d-none")
    })
}(jQuery);