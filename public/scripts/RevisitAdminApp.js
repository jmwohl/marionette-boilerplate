define([
    'backbone',
    'underscore',
    'routers/RevisitAppRouter',
    'coms/Communicator',
    'collections/SitesCollection',
    'views/item/HeaderView',
    'views/layout/MainLayoutView'
], function(
    Backbone,
    _,
    RevisitAppRouter,
    Communicator,
    SitesCollections,
    HeaderView,
    MainLayoutView
) {
    'use strict';

    // console.log(Backbone.Marionette);

    var RevisitAdminApp = new Backbone.Marionette.Application();

    // add our application regions
    RevisitAdminApp.addRegions({
        header: "#Header",
        main: "#Main"
    });

    // Initialize underscore templating
    RevisitAdminApp.addInitializer(function(options) {
        _.templateSettings = {
            interpolate: /\{\{=(.+?)\}\}/g,
            escape: /\{\{-(.+?)\}\}/g,
            evaluate: /\{\{(.+?)\}\}/g
        };
    });

    // Initialize views
    RevisitAdminApp.addInitializer(function(options) {
        // make this app object available to other modules
        this.header.show(new HeaderView());
        this.main.show(new MainLayoutView());
    });

    // Initialize App-wide coms
    RevisitAdminApp.addInitializer(function(options) {
        // make this app object available to other modules
        Communicator.reqres.setHandler('app', function() {
            console.log('app requested');
            return RevisitAdminApp;
        });

        // let other modules set the main app's regions (used primarily from FrontController)
        Communicator.command.setHandler('app:show', function(region, view) {
            if (RevisitAdminApp[region]) {
                RevisitAdminApp[region].show(view);
            }
        });

    });


    // app config module, allows loading config data
    // easily via communicator. see `config/default-config.js`
    RevisitAdminApp.addInitializer(function(options) {
        // get a vanilla config object
        Communicator.reqres.setHandler('config', function(key) {
            return key ? AppConfig[key] : AppConfig;
        });

        // get a config object as a bb model
        Communicator.reqres.setHandler('config:model', function(key) {
            if (key && AppConfig.models && AppConfig.models[key]) {
                return new Backbone.Model(AppConfig.models[key]);
            }
        });
    });

    // Once everything is initialized, start the history
    RevisitAdminApp.on('start', function() {
        console.log('app initialized');
        if (Backbone.history) {
            Backbone.history.start();
        }
    });

    return RevisitAdminApp;
});
