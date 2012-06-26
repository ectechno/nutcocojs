require.config({
	paths : {

		base : './global/core/base',
		util : './global/core/util',

		settings : './global/settings',
		router : './global/router',
	}
});

define([ 'base', 'settings', './apploader','router' ], function(Base, Settings, AppLoader,Router) {
	return function() {
		this.init = function() {
			
			var global = new Base.Context('NutCocoApp');
			global.setSettings(Settings);
			
			var appLoader = new AppLoader();
			appLoader.init(global);
		};
	};

});