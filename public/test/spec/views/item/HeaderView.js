(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/HeaderView'
		],
		function( Headerview ) {

			describe('Headerview Itemview', function () {

				it('should be an instance of Headerview Itemview', function () {
					var HeaderView = new Headerview();
					expect( HeaderView ).to.be.an.instanceof( Headerview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );