(function() {
	'use strict';

	var root = this;

	root.define([
		'views/collection/SitesListCollectionView'
		],
		function( Siteslistcollectionview ) {

			describe('Siteslistcollectionview Collectionview', function () {

				it('should be an instance of Siteslistcollectionview Collectionview', function () {
					var SitesListCollectionView = new Siteslistcollectionview();
					expect( SitesListCollectionView ).to.be.an.instanceof( Siteslistcollectionview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );