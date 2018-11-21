/**	
	* Template Name: Apex App
	* Version: 1.0	
	* Template Scripts
	* Author: MarkUps
	* Author URI: http://www.markups.io/

	Custom JS
	
	1. FULL OVERLAY MENU
	2. MENU SMOOTH SCROLLING
	3. VIDEO POPUP
	4. APPS SCREENSHOT SLIDEER ( SLICK SLIDER )
	5. BOOTSTRAP ACCORDION  
	
	
**/



(function( $ ){


	/* ----------------------------------------------------------- */
	/*  1. FULL OVERLYAY MENU
	/* ----------------------------------------------------------- */

   $('.mu-menu-btn').on('click', function(event) {
	   
        event.preventDefault();
        
        $('.mu-menu-full-overlay').addClass('mu-menu-full-overlay-show');
       
    });
   
    // when click colose btn
    
    $('.mu-menu-close-btn').on('click', function(event) {
	    
	    event.preventDefault();
	    
		$('.mu-menu-full-overlay').removeClass('mu-menu-full-overlay-show');
		
    });

    // when click menu item overlay disappear

    $('.mu-menu a').on('click', function(event) {
	   
        event.preventDefault();
        
        $('.mu-menu-full-overlay').removeClass('mu-menu-full-overlay-show');
       
    });

    /* ----------------------------------------------------------- */
	/*  2. MENU SMOOTH SCROLLING
	/* ----------------------------------------------------------- */ 

	//MENU SCROLLING WITH ACTIVE ITEM SELECTED

	 $(".mu-menu a").click(function(event){
         event.preventDefault();
         //calculate destination place
         var dest=0;
         if($(this.hash).offset().top > $(document).height()-$(window).height()){
              dest=$(document).height()-$(window).height();
         }else{
              dest=$(this.hash).offset().top;
         }
         //go to destination
         $('html,body').animate({scrollTop:dest}, 1000,'swing');
     });
	    

		
	/* ----------------------------------------------------------- */
	/*  3. VIDEO POPUP
	/* ----------------------------------------------------------- */

   $('.mu-video-play-btn').on('click', function(event) {
	   
        event.preventDefault();
        
        $('.mu-video-iframe-area').addClass('mu-video-iframe-display');
       
    });
   
    // when click the close btn

    // disappear iframe window
    
    $('.mu-video-close-btn').on('click', function(event) {
	    
	    event.preventDefault();
	    
		$('.mu-video-iframe-area').removeClass('mu-video-iframe-display');
		
    });

    // stop iframe if it is play while close the iframe window

    $('.mu-video-close-btn').click(function(){

        $('.mu-video-iframe').attr('src', $('.mu-video-iframe').attr('src'));

    });

    // when click overlay area

     $('.mu-video-iframe-area').on('click', function(event) {
	    
	    event.preventDefault();
	    
		$('.mu-video-iframe-area').removeClass('mu-video-iframe-display');
		
    });

	$('.mu-video-iframe-area, .mu-video-iframe').on('click', function(e){
	    e.stopPropagation();
	});

		
	/* ----------------------------------------------------------- */
	/*  4. APPS SCREENSHOT SLIDEER ( SLICK SLIDER )
	/* ----------------------------------------------------------- */

		$('.mu-apps-screenshot-slider').slick({
		  slidesToShow: 4,
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: true,
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: true,
		        slidesToShow: 1
		      }
		    }
		  ]
		});



	/* ----------------------------------------------------------- */
	/*  5. BOOTSTRAP ACCORDION 
	/* ----------------------------------------------------------- */ 

		/* Start for accordion #1*/
		$('#accordion .panel-collapse').on('shown.bs.collapse', function () {
		$(this).prev().find(".fa").removeClass("fa-plus").addClass("fa-minus");
		});
		
		//The reverse of the above on hidden event:
		
		$('#accordion .panel-collapse').on('hidden.bs.collapse', function () {
		$(this).prev().find(".fa").removeClass("fa-minus").addClass("fa-plus");
		});



	
	
})( jQuery );



  
	