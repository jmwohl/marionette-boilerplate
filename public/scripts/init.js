/**
 * This file defines all of the paths and dependencies for the RevisitAdmin applicaiton.
 *
 * The deps array defines the modules that will be loaded as soon as the configuration is loaded. This loads 'main', which
 * kicks off the actual application (RevisitAdminApp).
 * @type {Array}
 */
require.config({

    /* starting point for application */
    deps: ['backbone.marionette', 'main'],

    paths: {
        // almond: '../bower_componenets/almond/almond',
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',


        /* alias all marionette libs */
        'backbone.marionette': '../bower_components/marionette/lib/core/backbone.marionette',
        'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
        'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
        backgrid: '../bower_components/backgrid/lib/backgrid',

        /* alias the bootstrap js lib */
        bootstrap: '../bower_components/bootstrap/bootstrap.min',

        // moment: '../bower_components/moment/moment',

        /* Alias text.js for template loading and shortcut the templates dir to tmpl */
        text: '../bower_components/requirejs-text/text',
        tmpl: "../templates",

        /* handlebars from the require handlerbars plugin below */
        // Handlebars: '../bower_components/require-handlebars-plugin/hbs/handlebars',

        /* require handlebars plugin - Alex Sexton */
        // i18nprecompile: '../bower_components/require-handlebars-plugin/hbs/i18nprecompile',
        // json2: '../bower_components/require-handlebars-plugin/hbs/json2',
        // hbs: '../bower_components/require-handlebars-plugin/hbs',

        /* requirejs plugins */
        async: '../bower_components/requirejs-plugins/src/async',
        font: '../bower_components/requirejs-plugins/src/font',
        goog: '../bower_components/requirejs-plugins/src/goog',
        image: '../bower_components/requirejs-plugins/src/image',
        json: '../bower_components/requirejs-plugins/src/json',
        noext: '../bower_components/requirejs-plugins/src/noext',
        mdown: '../bower_components/requirejs-plugins/src/mdown',
        propertyParser: '../bower_components/requirejs-plugins/src/propertyParser',
        markdownConverter: '../bower_components/requirejs-plugins/lib/Markdown.Converter'
    },

    // map: {
    //     '*': {
    //         'handlebars': 'Handlebars'
    //     },
    //     'hbs': {
    //         'i18nprecompile': '../bower_components/require-handlebars-plugin/hbs/i18nprecompile',
    //         'json2': '../bower_components/require-handlebars-plugin/hbs/json2',
    //         'underscore': '../bower_components/require-handlebars-plugin/hbs/underscore'
    //     }
    // },

    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        // 'backbone.marionette': {
        //     deps: ['backbone'],
        //     exports: 'Marionette'
        // },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jQuery'
        },
        backgrid: {
            deps: ['backbone'],
            exports: 'Backgrid'
        }
    }

    //, hbs: {
    //     disableI18n: true,
    //     disableHelpers: true
    // }
});
