/*
 Template Name: vacayhome
 File Name: custom.js
 Author Name: ThemeVault
 Author URI: http://www.themevault.net/
 License URI: http://www.themevault.net/license/
 */

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });

});

$(document).ready(function () {
    var myButton = $('#mybutton');
    var userFeed = new Instafeed({
        get: 'user',
        userId: '4828631159',
        accessToken: '4828631159.1677ed0.3e66d0fb39cc4a8383ddd034121c65dc',
        limit: '6',
        sortBy: 'most-recent',
        after: function () {
            var images = $("#instafeed").find('a');
            $.each(images, function (index, image) {
                var delay = (index * 75) + 'ms';
                $(image).css('-webkit-animation-delay', delay);
                $(image).css('-moz-animation-delay', delay);
                $(image).css('-ms-animation-delay', delay);
                $(image).css('-o-animation-delay', delay);
                $(image).css('animation-delay', delay);
                $(image).addClass('animated flipInX');
            });

        },
        template: ' <div class="col-md-4 col-sm-4 col-xs-4"><div class="insta-image"><a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="likes">&hearts; {{likes}}</div></a></div></div>'
    });
    userFeed.run();
});

