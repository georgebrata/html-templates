(function ($) {
    'use strict';

    $(document).on('ready', function () {
        
        // Nice Select
        $('select').niceSelect();
        // -----------------------------
        //  Client Slider
        // -----------------------------
        $('.category-slider').slick({
            slidesToShow:8,
            infinite: true,
            arrows:false,
            autoplay: false,
            autoplaySpeed: 2000
        });
        // -----------------------------
        //  Select Box
        // -----------------------------
        // $('.select-box').selectbox();
        // -----------------------------
        //  Video Replace
        // -----------------------------
        $('.video-box img').click(function() {
            var video = '<iframe allowfullscreen src="' + $(this).attr('data-video') + '"></iframe>';
            $(this).replaceWith(video);
        });
        // -----------------------------
        //  Coupon type Active switch
        // -----------------------------
        $('.coupon-types li').click(function () {
            $('.coupon-types li').not(this).removeClass('active');
            $(this).addClass('active');
        });
        // -----------------------------
        // Datepicker Init
        // -----------------------------
        $('.input-group.date').datepicker({
            format: 'dd/mm/yy'
        });
        // -----------------------------
        // Datepicker Init
        // -----------------------------
        $('#top').click(function() {
          $('html, body').animate({ scrollTop: 0 }, 'slow');
          return false;
        });
        // -----------------------------
        // Button Active Toggle
        // -----------------------------
        $('.btn-group > .btn').click(function(){
            $(this).find('i').toggleClass('btn-active');
        });
        // -----------------------------
        // Coupon Type Select
        // -----------------------------
        $('#online-code').click(function(){
            $('.code-input').fadeIn(500);
        });
        $('#store-coupon, #online-sale').click(function(){
            $('.code-input').fadeOut(500);
        });
        /***ON-LOAD***/
        jQuery(window).on('load', function () {
            
        });

    });

})(jQuery);



 $(document).ready(function() {
  $('select:not(.ignore)').niceSelect();      
});



// GOogle Map

window.marker = null;

function initialize() {
    var map;

    var nottingham = new google.maps.LatLng(51.507351, -0.127758);

    var style = [
    {
        "stylers": [
            {
                "hue": "#ff61a6"
            },
            {
                "visibility": "on"
            },
            {
                "invert_lightness": true
            },
            {
                "saturation": 40
            },
            {
                "lightness": 10
            }
        ]
    }
];

    var mapOptions = {
        // SET THE CENTER
        center: nottingham,

        // SET THE MAP STYLE & ZOOM LEVEL
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom:9,

        // SET THE BACKGROUND COLOUR
        backgroundColor:"#000",

        // REMOVE ALL THE CONTROLS EXCEPT ZOOM
        zoom:17,
        panControl:false,
        zoomControl:true,
        mapTypeControl:false,
        scaleControl:false,
        streetViewControl:false,
        overviewMapControl:false,
        zoomControlOptions: {
            style:google.maps.ZoomControlStyle.LARGE
        }

    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // SET THE MAP TYPE
    var mapType = new google.maps.StyledMapType(style, {name:"Grayscale"});
    map.mapTypes.set('grey', mapType);
    map.setMapTypeId('grey');

    //CREATE A CUSTOM PIN ICON
    var marker_image ='plugins/google-map/images/marker.png';
    var pinIcon = new google.maps.MarkerImage(marker_image,null,null, null,new google.maps.Size(74, 73));

    marker = new google.maps.Marker({
        position: nottingham,
        map: map,
        icon: pinIcon,
        title: 'eventre'
    });
}

google.maps.event.addDomListener(window, 'load', initialize);




var slider = new Slider('#ex2', {});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})