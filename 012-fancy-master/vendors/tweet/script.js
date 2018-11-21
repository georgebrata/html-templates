;(function($) {
    "use strict";
  
    jQuery(function($){
        var FEED = window.FEED||{};

        FEED.TWEET= function(){
            $('.tw_username').twittie({
                count: 1,
                template: '{{user_name}}'
            });
            $('.tweets_feed').twittie({
                dateFormat: '%d %b, %Y',
                count: 2,
                template:
                    '<div class="row m0 tw_content"><div class="tweet_text row m0">'+'<div><i class="fa fa-twitter"></i>{{tweet}}</div>'+'</div>'
                    +'<div class="row m0 tweet_date">{{date}}</div></div>'
                    +'<div class="row m0 footer"><div class="tweet_user fleft">'                    
//                        + '<i class="fa fa-twitter"></i>{{user_name}}'
                    +'</div>'
                    +'<div class="tweet_time fright">'+'<a href="{{url}}">Visit my Twitter</a>'+ '</div></div>'
            },
            function(){
                $(".tweets_feed ul").owlCarousel({
                    loop:true,
                    margin:0,
                    nav:false,
                    dots: false,
                    navContainer: "#carousel_nav",
                    items:1,
                    autoplay:true,

                });
            })
        }

        $(document).ready(function(){FEED.TWEET();})
        
    })
    
        /*----------------------------------------------------*/
        /*  Instafeed
        /*----------------------------------------------------*/
//          var userFeed = new Instafeed({
//              get: 'user',
//              userId: 4006500989,
//              accessToken: '4006500989.1677ed0.62090ee58ba54bf29173c09647f11b18',
//              template: '<li><a href="{{link}}"><img src="{{image}}" /></a></li>',
//              limit : 9
//          });
//          userFeed.run(); 
    
})(jQuery)