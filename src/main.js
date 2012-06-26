require.config({
    paths: {
        text: './jslibs/require/text',
        order: './jslibs/require/order',
        i18n: './jslibs/require/i18n',
        
		base : './core/base',
		util : './core/util',

		settings : './settings',
		router : './router',
    }
});

/*
This is the main entry to the application. This script is called from the main HTML file.libraries inside the require directory will be loaded by this script and any configuration related to the
base libraries may be setup here. Once base libraries are setup, application will be instantiated.
*/

require(['base', 'settings', './apploader' ], function (Base, Settings, AppLoader) {
	
	var global = new Base.Context('NutCocoApp');
	global.setSettings(Settings);
	
	var appLoader = new AppLoader();
	appLoader.init(global);
	
});
