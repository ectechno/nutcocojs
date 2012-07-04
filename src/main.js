require.config({
	paths : {
		text : './jslibs/require/text',
		order : './jslibs/require/order',
		i18n : './jslibs/require/i18n',

		_core : './core/_core',
		_util : './util/_util',
	}
});

/*
 * This is the main entry to the application. This script is called from the
 * main HTML file.libraries inside the require directory will be loaded by this
 * script and any configuration related to the base libraries may be setup here.
 * Once base libraries are setup, application will be instantiated.
 */

require(['_core', './settings', './modules/loader'], function(Core, Settings,  AppLoader) {

	//lets setup the global context 
	var context = new Core.Context(); // create the global context object
	context.setRouter(new Core.Router());// add router to the global object
	context.setMediator(new Core.Mediator($('document'))); // add the global mediator
	context.setSettings(Settings); // add settings to the global object
	
	//load all the applications
	var appLoader = new AppLoader();
	appLoader.init(context); // initialize the apploader and pass the global object

	//start the router
	context.getRouter().init();
	
	
});
