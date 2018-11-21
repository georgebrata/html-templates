$.fn.dropdownMenu = function(opt) {
    return $(this).each(function() {
        var el = $(this),
            optsDefault = {
                menuClass: 'dropdown-menu-list',
                breakpoint: 1000,
                toggleClass: 'active',
                classButtonToggle: 'toggle-menu',
                subMenu: {
                    class: 'sub-menu',
                    parentClass: 'menu-item-has-children',
                    toggleClass: 'active'
                }
            },
            options = $.extend({}, optsDefault, opt);
        el.on('dropdownMenu', function() {
            $('.' + options.classButtonToggle, el).on('click', function(e) {
                e.stopPropagation();
                $('.' + options.menuClass, el).toggleClass(options.toggleClass);
            });
            $('.' + options.subMenu.parentClass, el).on('click', '> a', function(e) {
                e.preventDefault();
                var self = $(this);
                self.next('.' + options.subMenu.class).slideToggle(400);
                self.parent().toggleClass(options.subMenu.toggleClass);
            });
            $(document).on('click', function() {
                $('.' + options.menuClass, el).removeClass(options.toggleClass);
                $('.' + options.subMenu.parentClass, el).removeClass(options.subMenu.toggleClass);
                $('.' + options.subMenu.class, el).hide();
            });
            $('.' + options.menuClass).on('click', function(e) {
                e.stopPropagation();
            });
        });
        if (window.innerWidth <= options.breakpoint) {
            el.trigger('dropdownMenu');
        }
        $(window).resize(function() {
            if (window.innerWidth <= options.breakpoint) {
                el.trigger('dropdownMenu');
            } else {
                $('.' + options.classButtonToggle, el).off('click');
                $('.' + options.subMenu.parentClass, el).off('click', '> a');
                $('html, body').off('click');
                $('.' + options.menuClass).off('click');
            }
        });
    });
}
