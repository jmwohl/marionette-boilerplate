(function() {
	'use strict';

	var root = this;

	root.define([
		'routers/AppRouter'
		],
		function( Approuter ) {

			describe('Approuter Router', function () {

				it('should be an instance of Approuter Router', function () {
					var AppRouter = new Approuter();
					expect( AppRouter ).to.be.an.instanceof( Approuter );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );