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
          '../tests/core/settingsTests', 
          '../tests/core/loaderTests',
          '../tests/core/sampleTests', 
], function() {}); 
