require.config({
	paths : {
		text : './jslibs/require/text',
		order : './jslibs/require/order',
		i18n : './jslibs/require/i18n',

		_core : './core/_core',
	}
});

/*
 * This is the main entry to the application. This script is called from the
 * main HTML file.libraries inside the require directory will be loaded by this
 * script and any configuration related to the base libraries may be setup here.
 * Once base libraries are setup, application will be instantiated.
 */

require(['_core', './settings', './apps/loader'], function(Core, 
		Settings,  AppLoader) {

	var context = new Core.Context();
	context.setSettings(Settings); // add settings to the global object
	var globalRouter = new Core.Router();
	context.setRouter(globalRouter);// add router to the global object
	
	var appLoader = new AppLoader();
	appLoader.init(context); // initialize the apploader and pass the global object

	globalRouter.init();
	
	
});
