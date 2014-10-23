define(function() {
	'use strict';

	/* return an array of specs to be run */
	return {
		specs: ['spec/collections/SitesCollection.js',
		'spec/controllers/FrontController.js',
		'spec/models/SiteModel.js',
		'spec/routers/AppRouter.js',
		'spec/views/Map.js',
		'spec/views/collection/SitesListCollectionView.js',
		'spec/views/collection/SitesListItemView.js',
		'spec/views/composite/SitesListCompositeView.js',
		'spec/views/item/HeaderView.js',
		'spec/views/item/Map.js',
		'spec/views/item/SidebarView.js',
		'spec/views/item/SitesListItemView.js',
		'spec/views/layout/MainLayoutView.js',
		'spec/views/layout/SitesListLayoutView.js',
		'spec/views/test.js'
		]
	};
});
