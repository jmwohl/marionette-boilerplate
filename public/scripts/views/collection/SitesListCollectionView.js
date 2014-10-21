define([
	'backbone',
	'views/item/SitesListItemView'
],
function( Backbone, SitesListItemView ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.CollectionView.extend({
		el: 'tbody',
		
		initialize: function() {
			console.log("initialize a Siteslistcollectionview CollectionView");
			this.collection.fetch()
				.done();
		},
		
		childView: SitesListItemView,

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
