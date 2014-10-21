(function() {
	'use strict';

	var root = this;

	root.define([
		'models/SiteModel'
		],
		function( Sitemodel ) {

			describe('Sitemodel Model', function () {

				it('should be an instance of Sitemodel Model', function () {
					var SiteModel = new Sitemodel();
					expect( SiteModel ).to.be.an.instanceof( Sitemodel );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );