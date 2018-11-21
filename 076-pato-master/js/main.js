
(function ($) {
    "use strict";

    /*[ Load page ]
    ===========================================================*/
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        loading: true,
        loadingParentElement: 'html',
        loadingClass: 'animsition-loading-1',
        loadingInner: '<div class="cp-spinner cp-meter"></div>',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'html',
        transition: function(url){ window.location.href = url; }
    });
    
    /*[ Back to top ]
    ===========================================================*/
    var windowH = $(window).height()/2;

    $(window).on('scroll',function(){
        if ($(this).scrollTop() > windowH) {
            $("#myBtn").css('display','flex');
        } else {
            $("#myBtn").css('display','none');
        }
    });

    $('#myBtn').on("click", function(){
        $('html, body').animate({scrollTop: 0}, 300);
    });


    /*[ Select ]
    ===========================================================*/
    $(".selection-1").select2({
        minimumResultsForSearch: 20,
        dropdownParent: $('#dropDownSelect1')
    });

    /*[ Daterangepicker ]
    ===========================================================*/
    $('.my-calendar').daterangepicker({
        "singleDatePicker": true,
        "showDropdowns": true,
        locale: {
            format: 'DD/MM/YYYY'
        },
    });

    var myCalendar = $('.my-calendar');
    var isClick = 0;

    $(window).on('click',function(){ 
        isClick = 0;
    });

    $(myCalendar).on('apply.daterangepicker',function(){ 
        isClick = 0;
    });

    $('.btn-calendar').on('click',function(e){ 
        e.stopPropagation();

        if(isClick == 1) isClick = 0;   
        else if(isClick == 0) isClick = 1;

        if (isClick == 1) {
            myCalendar.focus();
        }
    });

    $(myCalendar).on('click',function(e){ 
        e.stopPropagation();
        isClick = 1;
    });

    $('.daterangepicker').on('click',function(e){ 
        e.stopPropagation();
    });


    /*[ Play video 01]
    ===========================================================*/
    var srcOld = $('.video-mo-01').children('iframe').attr('src');

    $('[data-target="#modal-video-01"]').on('click',function(){
        $('.video-mo-01').children('iframe')[0].src += "&autoplay=1";

        setTimeout(function(){
            $('.video-mo-01').css('opacity','1');
        },300);      
    });

    $('[data-dismiss="modal"]').on('click',function(){
        $('.video-mo-01').children('iframe')[0].src = srcOld;
        $('.video-mo-01').css('opacity','0');
    });
    

    /*[ Fixed Header ]
    ===========================================================*/
    var header = $('header');
    var logo = $(header).find('.logo img');
    var linkLogo1 = $(logo).attr('src');
    var linkLogo2 = $(logo).data('logofixed');


    $(window).on('scroll',function(){
        if($(this).scrollTop() > 5 && $(this).width() > 992) {
            $(logo).attr('src',linkLogo2);
            $(header).addClass('header-fixed');
        }
        else {
            $(header).removeClass('header-fixed');
            $(logo).attr('src',linkLogo1);
        }
        
    });

    /*[ Show/hide sidebar ]
    ===========================================================*/
    $('body').append('<div class="overlay-sidebar trans-0-4"></div>');
    var ovlSideBar = $('.overlay-sidebar');
    var btnShowSidebar = $('.btn-show-sidebar');
    var btnHideSidebar = $('.btn-hide-sidebar');
    var sidebar = $('.sidebar');

    $(btnShowSidebar).on('click', function(){
        $(sidebar).addClass('show-sidebar');
        $(ovlSideBar).addClass('show-overlay-sidebar');
    })

    $(btnHideSidebar).on('click', function(){
        $(sidebar).removeClass('show-sidebar');
        $(ovlSideBar).removeClass('show-overlay-sidebar');
    })

    $(ovlSideBar).on('click', function(){
        $(sidebar).removeClass('show-sidebar');
        $(ovlSideBar).removeClass('show-overlay-sidebar');
    })


    /*[ Isotope ]
    ===========================================================*/
    var $topeContainer = $('.isotope-grid');
    var $filter = $('.filter-tope-group');

    // filter items on button click
    $filter.each(function () {
        $filter.on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $topeContainer.isotope({filter: filterValue});
        });
        
    });

    // init Isotope
    $(window).on('load', function () {
        var $grid = $topeContainer.each(function () {
            $(this).isotope({
                itemSelector: '.isotope-item',
                percentPosition: true,
                animationEngine : 'best-available',
                masonry: {
                    columnWidth: '.isotope-item'
                }
            });
        });
    });

    var labelGallerys = $('.label-gallery');

    $(labelGallerys).each(function(){
        $(this).on('click', function(){
            for(var i=0; i<labelGallerys.length; i++) {
                $(labelGallerys[i]).removeClass('is-actived');
            }

            $(this).addClass('is-actived');
        });
    });

    

})(jQuery);