(function() {
	'use strict';

	var root = this;

	root.define([
		'views/collection/SitesListItemView'
		],
		function( Siteslistitemview ) {

			describe('Siteslistitemview Collectionview', function () {

				it('should be an instance of Siteslistitemview Collectionview', function () {
					var SitesListItemView = new Siteslistitemview();
					expect( SitesListItemView ).to.be.an.instanceof( Siteslistitemview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );