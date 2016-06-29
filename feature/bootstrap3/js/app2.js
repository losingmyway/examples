(function ($) {
    'use strict';

    // Toggle classes in body for syncing sliding animation with other elements
    $('#bs-example-navbar-collapse-2')
        .on('show.bs.collapse', function (e) {
            $('body').addClass('menu-slider');
        })
        .on('shown.bs.collapse', function (e) {
            $('body').addClass('in');
        })
        .on('hide.bs.collapse', function (e) {
            $('body').removeClass('menu-slider');
        })
        .on('hidden.bs.collapse', function (e) {
            $('body').removeClass('in');
        });

     $('#bs-example-navbar-collapse-3')
        .on('show.bs.collapse', function (e) {
            $('body').addClass('menu-slider3');
        })
        .on('shown.bs.collapse', function (e) {
            $('body').addClass('in3');
        })
        .on('hide.bs.collapse', function (e) {
            $('body').removeClass('menu-slider3');
        })
        .on('hidden.bs.collapse', function (e) {
            $('body').removeClass('in3');
        });
})(jQuery);