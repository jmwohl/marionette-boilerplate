define([
        'backbone',
        'text!tmpl/item/SitesListItemView_tmpl.hbs'
    ],
    function(Backbone, SiteslistitemviewTmpl) {
        'use strict';

        /* Return a ItemView class definition */
        return Backbone.Marionette.ItemView.extend({
            tagName: 'tr',

            initialize: function() {
                console.log("initialize a Siteslistitemview ItemView");
            },

            template: function(serialized_model) {                
                return _.template(SiteslistitemviewTmpl, serialized_model);
            },

            /* ui selector cache */
            ui: {},

            /* Ui events hash */
            events: {
                'click': 'selectSite'
            },

            /* on render callback */
            onRender: function() {},

            selectSite: function() {
                console.log('site selected');
                alert(this.model.get('name'));
            }
        });

    });
