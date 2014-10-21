(function() {
	'use strict';

	var root = this;

	root.define([
		'views/layout/MainLayoutView'
		],
		function( Mainlayoutview ) {

			describe('Mainlayoutview Layout', function () {

				it('should be an instance of Mainlayoutview Layout', function () {
					var MainLayoutView = new Mainlayoutview();
					expect( MainLayoutView ).to.be.an.instanceof( Mainlayoutview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );