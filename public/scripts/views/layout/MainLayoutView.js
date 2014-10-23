define([
	'backbone',
	'text!tmpl/layout/MainLayoutView_tmpl.hbs',
	'views/item/SidebarView',
	'views/composite/SitesListCompositeView',
	'collections/SitesCollection'
],
function( Backbone, MainlayoutviewTmpl, SidebarView, SitesListCompositeView, SitesCollection ) {
    'use strict';

	/* Return a Layout class definition */
	return Backbone.Marionette.LayoutView.extend({

		initialize: function() {
			console.log("initialize a Mainlayoutview Layout");
			this.facilities = new SitesCollection();
		},
		
    	template: MainlayoutviewTmpl,
    	

    	/* Layout sub regions */
    	regions: {
    		sidebar: "#Sidebar",
    		content: "#Content"
    	},

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {
			this.sidebar.show(new SidebarView());

			this.content.show(new SitesListCompositeView({collection: this.facilities}));
		}
	});

});
