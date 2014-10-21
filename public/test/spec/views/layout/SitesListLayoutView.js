(function() {
	'use strict';

	var root = this;

	root.define([
		'views/layout/SitesListLayoutView'
		],
		function( Siteslistlayoutview ) {

			describe('Siteslistlayoutview Layout', function () {

				it('should be an instance of Siteslistlayoutview Layout', function () {
					var SitesListLayoutView = new Siteslistlayoutview();
					expect( SitesListLayoutView ).to.be.an.instanceof( Siteslistlayoutview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );