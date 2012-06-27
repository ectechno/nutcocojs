require.config({
	baseUrl : "../src/",	//we will set the application's src folder as the base url
});

require([ './apploader' 	//load the modules that will be used in the tests
          ], function() {
	$(function() {			//wait till the DOM loads, (a workaround to wait till testr.js loads)
		
		/*
		 * Start Unit tests
		 */

		module("AppLoader Tests");
		test("Application A init", function() {
			
			var fakeInit = sinon.spy();	//spy method
			var fakeApp = function() {
				this.init = fakeInit;
			};

			var AppLoader = testr('apploader', {
				'./apps/ApplicationA/application' : fakeApp
			});

			var appLoader = new AppLoader();
			appLoader.init();
			ok(fakeInit.called, "The init method in ApplicationA is called");
		});
		

	});

});


