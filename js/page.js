define([
    'underscore',
    'modules/aa_app_mod_static/js/views/StaticPageView',
], function (_, StaticPageView) {
    'use strict';

    return function (id) {
        id = id || 1;

        var backdrop = $('.modal-backdrop');

        // remove all modals
        if (backdrop.length > 0) {
            backdrop.remove();
        }

        StaticPageView().init({id: id}).showStatic();
    };
});