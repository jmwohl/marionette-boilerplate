define([
	'backbone',
	'hbs!tmpl/layout/SitesListLayoutView_tmpl',
	'views/collection/SitesListCollectionView',
	'collections/SitesCollection'
],
function( Backbone, SiteslistlayoutviewTmpl, SitesListCollectionView, SitesCollection ) {
    'use strict';

	/* Return a Layout class definition */
	return Backbone.Marionette.LayoutView.extend({

		initialize: function() {
			console.log("initialize a Siteslistlayoutview Layout");
			this.facilities = new SitesCollection();
		},
		
    	template: SiteslistlayoutviewTmpl,
    	

    	/* Layout sub regions */
    	regions: {
    		tableContent: "tbody"
    	},

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {
			this.tbody.show(new SitesListCollectionView({collection: this.facilities}));
		}
	});

});
