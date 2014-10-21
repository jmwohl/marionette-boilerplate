require.config({

    /* starting point for application */
    deps: ['backbone.marionette', 'main'],

    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',

        /* alias all marionette libs */
        'backbone.marionette': '../bower_components/marionette/lib/core/backbone.marionette',
        'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
        'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',

        /* alias the bootstrap js lib */
        // bootstrap: 'vendor/bootstrap',

        // moment: '../bower_components/moment/moment',

        /* Alias text.js for template loading and shortcut the templates dir to tmpl */
        text: '../bower_components/requirejs-text/text',
        tmpl: "../templates",

        /* handlebars from the require handlerbars plugin below */
        handlebars: '../bower_components/require-handlebars-plugin/hbs/handlebars',

        /* require handlebars plugin - Alex Sexton */
        i18nprecompile: '../bower_components/require-handlebars-plugin/hbs/i18nprecompile',
        json2: '../bower_components/require-handlebars-plugin/hbs/json2',
        hbs: '../bower_components/require-handlebars-plugin/hbs',

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

    map: {
        '*': {
            'hbs/underscore': 'underscore',
            'hbs/handlebars': 'handlebars'
        }
    },

    shim: {
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jQuery'
        }
    },

    hbs: {
        disableI18n: true,
        disableHelpers: true
    }
});
