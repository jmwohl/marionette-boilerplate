(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/Map'
		],
		function( Map ) {

			describe('Map Itemview', function () {

				it('should be an instance of Map Itemview', function () {
					var Map = new Map();
					expect( Map ).to.be.an.instanceof( Map );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );