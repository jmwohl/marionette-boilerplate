(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/SidebarView'
		],
		function( Sidebarview ) {

			describe('Sidebarview Itemview', function () {

				it('should be an instance of Sidebarview Itemview', function () {
					var SidebarView = new Sidebarview();
					expect( SidebarView ).to.be.an.instanceof( Sidebarview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );