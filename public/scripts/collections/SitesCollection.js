define([
	'backbone',
	'models/SiteModel'
],
function( Backbone, SiteModel ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		url: "http://revisit.global/api/v0/facilities.json",
		
		model: SiteModel,
		
		initialize: function() {
			console.log("initialize a Sitescollection collection");
		},

		parse: function(response) {
			return response.facilities;
		}
	});
});
