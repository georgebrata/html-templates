/*
author: Boostraptheme
author URL: https://boostraptheme.com
License: Creative Commons Attribution 4.0 Unported
License URL: https://creativecommons.org/licenses/by/4.0/
*/ 

/* ====================================================
                        ANIMATION
   ================================================= */
    $(function () {
        // animate on scroll
        new WOW().init();
    });
    
/*====================================================
                        CLIENTS
====================================================*/
$(function () {

    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
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
}); 