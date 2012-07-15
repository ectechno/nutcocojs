require([ './settings', '_core' ], function(Settings) {

	var Core = null;
	module("Core.Loader Tests", {
		setup : function() {
			Core = testr('_core');
		}
	});

	test('successful loading of all given modules', function() {
		var context = {};
		var loader = new Core.Loader(context);

		var module1 = sinon.spy();
		var module2 = sinon.spy();

		var modules = {
			moduleOne : module1,
			moduleTwo : module2,
		};
		
		loader.load(modules);

		sinon.assert.calledWith(module1, context);
		sinon.assert.calledWith(module2, context);
	});
	
	
	test('fault tollerence of module loading', function() {
		var context = {};
		var loader = new Core.Loader(context);

		var module1 = sinon.stub().throws("this is a bad module");
		var module2 = sinon.spy();

		var modules = {
			moduleOne : module1,
			moduleTwo : module2,
		};
		
		loader.load(modules);

		sinon.assert.calledWith(module2, context);
	});

});
