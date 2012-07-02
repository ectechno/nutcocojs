require.config({
	baseUrl : "../src/", //we will set the application's src folder as the base url
});

require.config({
	paths : {
		text : './jslibs/require/text',
		order : './jslibs/require/order',
		i18n : './jslibs/require/i18n',
		
		_core : './core/_core',
		_util : './util/_util'
	}
});

require([ '../tests/testmodules/appLevelRoutingTests',	//A list of all the unit test module paths (relative to the base URL)
          '../tests/testmodules/sampleTests',
          '../tests/testmodules/SettingsTests',
          '../tests/testmodules/routerTests'
          ], function() {

});
