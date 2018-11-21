/* 
 Created on : Jul 17, 2017, 12:31:12 AM
 Author     : Atta-Ur-Rehman Shah (http://attacomsian.com)
 */
$(function () {
    //init 
    init();
    //init wow effects
    new WOW().init();

    //tooltip
    $("[data-toggle='tooltip']").tooltip();

    //popover
    $('[data-toggle="popover"]').popover();

    //scroll menu
    $(window).scroll(function () {
        init();
    });

    //page scroll
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 70
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    //init function
    function init() {
        var scroll = $(window).scrollTop();
        if (scroll >= 200) {
            $('.sticky-navigation').removeClass('navbar-transparent').addClass('bg-primary');
            $('.sticky-navigation-alt').removeClass('navbar-transparent').addClass('bg-inverse').addClass('navbar-raised');
        } else {
            $('.sticky-navigation').removeClass('bg-primary').addClass('navbar-transparent');
            $('.sticky-navigation-alt').removeClass('bg-inverse').removeClass('navbar-raised').addClass('navbar-transparent');
        }
        return false;
    }
    
    //single date picker
    $('#datepicker').daterangepicker({
        singleDatePicker: true
    });
     //date range picker
    $('#daterange').daterangepicker({
        opens: 'left',
        autoApply:true
    });
});