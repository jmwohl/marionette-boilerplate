(function() {
	'use strict';

	var root = this;

	root.define([
		'views/Map'
		],
		function( Map ) {

			describe('Map View', function () {

				it('should be an instance of Map View', function () {
					var Map = new Map();
					expect( Map ).to.be.an.instanceof( Map );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );