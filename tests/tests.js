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


require([ 
          '../tests/modules/settingsTests', 
          '../tests/modules/sampleTests', 
], function() {}); 
