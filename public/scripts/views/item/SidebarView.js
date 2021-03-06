define([
	'backbone',
	'text!tmpl/item/SidebarView_tmpl.hbs'
],
function( Backbone, SidebarviewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Sidebarview ItemView");
		},
		
    	template: SidebarviewTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
