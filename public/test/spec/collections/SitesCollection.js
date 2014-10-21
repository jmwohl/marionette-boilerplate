(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/SitesCollection'
		],
		function( Sitescollection ) {

			describe('Sitescollection Collection', function () {

				it('should be an instance of Sitescollection Collection', function () {
					var SitesCollection = new Sitescollection();
					expect( SitesCollection ).to.be.an.instanceof( Sitescollection );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );