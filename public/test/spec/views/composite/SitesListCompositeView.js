(function() {
	'use strict';

	var root = this;

	root.define([
		'views/composite/SitesListCompositeView'
		],
		function( Siteslistcompositeview ) {

			describe('Siteslistcompositeview Compositeview', function () {

				it('should be an instance of Siteslistcompositeview Compositeview', function () {
					var SitesListCompositeView = new Siteslistcompositeview();
					expect( SitesListCompositeView ).to.be.an.instanceof( Siteslistcompositeview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );