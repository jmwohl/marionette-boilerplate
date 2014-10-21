define([
	'backbone',
	'hbs!tmpl/item/SitesListItemView_tmpl'
],
function( Backbone, SiteslistitemviewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Siteslistitemview ItemView");
		},
		
    	template: SiteslistitemviewTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
