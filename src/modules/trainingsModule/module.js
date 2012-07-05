define([ '_core', './routeBuilder', './settings'],function( Core, RouteBuilder, Settings) {
	return function() {
		this.init = function(globalContext) {
	
			//setup a local context for the application
			var appContext = new Core.Context(globalContext);
			appContext.addSettings(Settings); // add settings to the global object
			
			//initiate the application controller
			//new Controller().configure(appContext.getRouter());
			
			//new Controller().configure(new Core.Router(globalContext.getRouter()));
			//appContext.getRouter().routeTo('appBPathQ/878');

			
		};
	};
});
