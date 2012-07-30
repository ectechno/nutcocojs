'use strict'; //avoid accidental global variable declarations

require.config({
	baseUrl : './src',
	paths : {
		text : '../libs/require/text',
		order : '../libs/require/order',
		i18n : '../libs/require/i18n',

		_core : './core/_core',
		_util : './util/_util',

	}
});

/*
 * This is the main entry to the application. This script is called from the
 * main HTML file.
 */

require(['order!_core', 'order!./settings', 'order!./modules/modules'], function(Core, settings, modules) {
	//lets setup the global context
	var globalContext = new Core.Context();
	// create the global context object
	globalContext.getSettings().load(settings);
	// add settings to the global object

	//load all the modules
	var moduleLoader = new Core.Loader(globalContext);
	moduleLoader.load(modules);
	// initialize the apploader and pass the global object

	//activate the global context once everything is setup
	globalContext.activate();

});
