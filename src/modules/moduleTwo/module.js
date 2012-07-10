define([ '_core', './handles', './settings' ], function(Core, handles, settings) {
	return function(globalContext) {
		//setup a local context for the application
		var moduleContext = new Core.Context(globalContext);
		moduleContext.getSettings().load(settings); // add settings to the global object
		moduleContext.getController().addHandles(handles);

		moduleContext.activate();
	};
});