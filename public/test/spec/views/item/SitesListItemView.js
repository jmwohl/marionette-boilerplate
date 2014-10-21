(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/SitesListItemView'
		],
		function( Siteslistitemview ) {

			describe('Siteslistitemview Itemview', function () {

				it('should be an instance of Siteslistitemview Itemview', function () {
					var SitesListItemView = new Siteslistitemview();
					expect( SitesListItemView ).to.be.an.instanceof( Siteslistitemview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );