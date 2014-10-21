(function() {
	'use strict';

	var root = this;

	root.define([
		'views/test'
		],
		function( Test ) {

			describe('Test View', function () {

				it('should be an instance of Test View', function () {
					var test = new Test();
					expect( test ).to.be.an.instanceof( Test );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );