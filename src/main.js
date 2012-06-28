require.config({
	paths : {
		text : './jslibs/require/text',
		order : './jslibs/require/order',
		i18n : './jslibs/require/i18n',

		base : './core/base',
		util : './core/util',
	}
});

/*
 * This is the main entry to the application. This script is called from the
 * main HTML file.libraries inside the require directory will be loaded by this
 * script and any configuration related to the base libraries may be setup here.
 * Once base libraries are setup, application will be instantiated.
 */

require([ 'base', './settings', './router', './apploader' ], function(Base,
		Settings, Router, AppLoader) {

	var global = new Base.Context('NutCocoApp');
	global.setSettings(Settings); // add settings to the global object
	global.setRouter(new Router());// add router to the global object
	
	global.router.start();

	var appLoader = new AppLoader();
	appLoader.init(global); // initialize the apploader and pass the global object

});
