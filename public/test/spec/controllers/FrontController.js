(function() {
	'use strict';

	var root = this;

	root.define([
		'controllers/FrontController'
		],
		function( Frontcontroller ) {

			describe('Frontcontroller Controller', function () {

				it('should be an instance of Frontcontroller Controller', function () {
					var FrontController = new Frontcontroller();
					expect( FrontController ).to.be.an.instanceof( Frontcontroller );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );