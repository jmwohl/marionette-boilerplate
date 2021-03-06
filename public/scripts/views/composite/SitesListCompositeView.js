define([
	'backbone',
	'text!tmpl/composite/SitesListCompositeView_tmpl.hbs',
	'views/item/SitesListItemView'
],
function( Backbone, SiteslistcompositeviewTmpl, SitesListItemView  ) {
    'use strict';

	/* Return a CompositeView class definition */
	return Backbone.Marionette.CompositeView.extend({

		initialize: function() {
			console.log("initialize a Siteslistcompositeview CompositeView");
			this.collection.fetch()
				.done();
		},
		
    	
    	template: _.template(SiteslistcompositeviewTmpl),
    	

    	/* ui selector cache */
    	ui: {},

    	/* where are we appending the items views */
    	childViewContainer: "tbody",

    	childView: SitesListItemView,

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
