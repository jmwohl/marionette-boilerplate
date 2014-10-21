define([
    'backbone', 
    'handlebars', 
    'communicator', 
    'collections/SitesCollection', 
    'views/item/HeaderView',
    'views/layout/MainLayoutView'
], function(
    Backbone, 
    Handlebars, 
    Communicator, 
    SitesCollections,
    HeaderView,
    MainLayoutView
) {
    console.log(Backbone.Marionette);

    var RevisitAdminApp = new Backbone.Marionette.Application();

    // add our application regions
    RevisitAdminApp.addRegions({
        header: "#Header",
        main: "#Main"
    });

    // Initialize Views
    RevisitAdminApp.addInitializer(function(options) {
        this.header.show(new HeaderView());

        this.main.show(new MainLayoutView());
    });

    RevisitAdminApp.addInitializer(function(options) {
        
    });

    return RevisitAdminApp;
});
