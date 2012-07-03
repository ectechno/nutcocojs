define([ '_core', './panelController', './settings'],function( Core, RouteBuilder, Settings) {
	return function() {
		this.init = function(globalContext) {
			
			//setup a local context for the application
			var appContext = new Core.Context(globalContext);
			appContext.setRouter(new RouteBuilder().build(globalContext.getRouter()));
			appContext.setMediator(new Core.Mediator($(this))); // add a mediator for application
			appContext.setSettings(Settings); // add settings to the global object
			
			//initiate the router
			appContext.getRouter().init();
			appContext.getRouter().routeTo('appBPathQ/878');
		};
	};
});