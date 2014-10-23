/**
 * The FrontController is the application-wide controller for handling routes.
 */
define([
	'backbone',
	'coms/Communicator',
	'views/item/HeaderView',
	'views/layout/MainLayoutView'
],
function( 
	Backbone, 
	Communicator,
	HeaderView,
	MainLayoutView 
) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {
			console.log("initialize a Frontcontroller Controller");
		},

		/**
		 * GETTERS
		 */

		app: function() {
			return Communicator.reqres.request('app');
		},



		/**
		 * ROUTE HANDLERS (i.e. acitons)
		 */

		index: function() {
			console.log('index route');
		},

		sites: function() {
			console.log('sites route');
			Communicator.command.execute('app:show', 'main', new MainLayoutView());
		},

		users: function() {
			console.log('users route');
		}
	});

});
