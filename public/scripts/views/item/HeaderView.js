define([
	'backbone',
	'text!tmpl/item/HeaderView.tpl'
],
function( Backbone, HeaderviewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Headerview ItemView");
		},
		
    	template: HeaderviewTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
