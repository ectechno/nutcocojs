require.config({
	paths : {
		text : './jslibs/require/text',
		order : './jslibs/require/order',
		i18n : './jslibs/require/i18n',

		base : './suite/core/base',
		util : './suite/core/util',

		settings : './suite/global/settings',
		router : './suite/global/router',
	}
});

/*
 * This is the application function which will create contexts and initiate the
 * modules. All modules attached to a particular context may be connected
 * together through a common event bus. If multiple contexts are created, they
 * will be completely isolated.
 */
define([ 'base', 'settings', 'router' ], function(Base, Settings, Router) {

	return function() {
		// initializing the application
		this.init = function() {
			// create a common context for all the interacting modules
			var appContext = new Base.Context('NutCocoApp1');

		//	var router = new Router(appContext);
		//	router.StartRouter();

		};

	};
});
