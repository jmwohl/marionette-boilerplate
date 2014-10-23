define([
	'backbone',
	'controllers/FrontController',
	'coms/Communicator'
],
function(Backbone, FrontController, Communicator){
    'use strict';

	var RevisitAppRouter = Backbone.Marionette.AppRouter.extend({
		appRoutes: {
			'': 'index',
			'sites': 'sites',
			'users': 'users'
		},

		/* Backbone routes hash */
		routes: {},

		controller: new FrontController()
	});

	return new RevisitAppRouter();
});
