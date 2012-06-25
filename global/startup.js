require.config({
	paths : {

		base : './global/core/base',
		util : './global/core/util',

		settings : './global/settings',
		router : './global/router',
	}
});

define([ './global/apploader' ], function(AppLoader) {
	return function() {
		this.init = function() {
			var appLoader = new AppLoader();
			appLoader.init();
		};
	};

});