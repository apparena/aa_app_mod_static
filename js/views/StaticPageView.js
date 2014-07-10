define([
    'ViewExtend',
    'jquery',
    'underscore',
    'backbone',
    'modules/aa_app_mod_facebook/js/views/FacebookView'
], function (View, $, _, Backbone, Facebook) {
    'use strict';

    return function () {
        View.namespace = 'StaticPageView';

        View.code = Backbone.View.extend({
            el: $('.content-wrapper'),

            events: {},

            reloadTime: 500,

            initialize: function () {
                _.bindAll(this, 'render', 'showTerms', 'showImprint', 'showPrivacy', 'showStatic');
            },

            render: function () {
                // scoll to top in FB-Tab
                Facebook().init().scrollTo(0, 0);

                // append rendered templated
                this.$el.html(this.template);
            },

            showTerms: function () {
                var that = this;

                require(['text!modules/aa_app_mod_static/templates/terms.html'], function (TermsPageTemplate) {
                    that.template = _.template(TermsPageTemplate, {});

                    $('body').addClass('app-terms').addClass('redirectionclass');

                    // we need a delay for fangate
                    _.delay(function () {
                        that.render();
                        that.goTo('/mod/static/terms', false);
                    }, that.reloadTime);
                });
            },

            showImprint: function () {
                var that = this;

                require(['text!modules/aa_app_mod_static/templates/imprint.html'], function (ImprintPageTemplate) {
                    that.template = _.template(ImprintPageTemplate, {});

                    $('body').addClass('app-imprint').addClass('redirectionclass');

                    // we need a delay for fangate
                    _.delay(function () {
                        that.render();
                        that.goTo('/mod/static/imprint', false);
                    }, that.reloadTime);
                });
            },

            showPrivacy: function () {
                var that = this;

                require(['text!modules/aa_app_mod_static/templates/privacy.html'], function (PrivacyPageTemplate) {
                    that.template = _.template(PrivacyPageTemplate, {});

                    $('body').addClass('app-privacy').addClass('redirectionclass');

                    // we need a delay for fangate
                    _.delay(function () {
                        that.render();
                        that.goTo('/mod/static/privacy', false);
                    }, that.reloadTime);
                });
            },

            showStatic: function () {
                var that = this;

                require(['text!modules/aa_app_mod_static/templates/static_page.html'], function (StaticPageTemplate) {
                    that.template = _.template(StaticPageTemplate, {id: that.id});

                    $('body').addClass('app-static-' + that.id).addClass('redirectionclass');

                    // we need a delay for fangate
                    _.delay(function () {
                        that.render();
                        that.goTo('/mod/static/page/' + that.id, false);
                    }, that.reloadTime);
                });
            }
        });

        return View;
    }
});