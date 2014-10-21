define([
	'backbone',
	'view/item/SitesListItemView'
],
function( Backbone, SitesListItemView ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.CollectionView.extend({

		initialize: function() {
			console.log("initialize a Siteslistcollectionview CollectionView");
		},
		
		childView: 'SitesListItemView',

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
