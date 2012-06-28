/*
 * This is a test module. Place all the Unit Tests related to module in this file
 */

require([ './apploader'], function(){
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
	
	test("Application B init", function() {
		
		var fakeInit = sinon.spy();	//spy method
		var fakeApp = function() {
			this.init = fakeInit;
		};

		var AppLoader = testr('apploader', {
			'./apps/ApplicationB/application' : fakeApp
		});

		var appLoader = new AppLoader();
		appLoader.init();
		ok(fakeInit.called, "The init method in ApplicationB is called");
	});
});