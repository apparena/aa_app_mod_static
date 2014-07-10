define([
    'underscore',
    'modules/aa_app_mod_static/js/views/StaticPageView',
], function (_, StaticPageView) {
    'use strict';

    return function () {
        var backdrop = $('.modal-backdrop');

        // remove all modals
        if (backdrop.length > 0) {
            backdrop.remove();
        }

        StaticPageView().init().showImprint();
    };
});