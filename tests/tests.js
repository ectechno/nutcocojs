require.config({
	baseUrl : "../src/", //we will set the application's src folder as the base url
});

require([ '../tests/testmodules/appLoaderTests', 	//A list of all the unit test module paths (relative to the base URL)
          '../tests/testmodules/sampleTests'
          ], function() {

});
