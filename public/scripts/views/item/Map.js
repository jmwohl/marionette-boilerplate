define([
	'backbone',
	'text!tmpl/item/Map_tmpl.hbs'
],
function( Backbone, MapTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Map ItemView");
		},
		
    	template: MapTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
