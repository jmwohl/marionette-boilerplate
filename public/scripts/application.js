define(['backbone', 'handlebars', 'communicator', 'collections/SitesCollection', 'views/item/Map'], function(Backbone, Handlebars, Communicator, SitesCollections, Map) {
	console.log(Backbone.Marionette);

    var RevisitAdminApp = new Backbone.Marionette.Application();

	// add our application regions
    RevisitAdminApp.addRegions({
		header: "#RA_Header", 
		main: "#RA_Main",
		footer: "#RA_Footer"
    });

    // Initialize Views
    RevisitAdminApp.addInitializer(function(options) {
    	this.facilities = new SitesCollections();
        // do useful stuff here
        var map = new Map();
        RevisitAdminApp.main.show(map);
    });

    RevisitAdminApp.addInitializer(function(options) {
    	this.facilities.fetch().done(function(facilities) {
    		console.log(facilities);
    	});
    });

    return RevisitAdminApp;
});
