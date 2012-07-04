define([ '_core', './routeBuilder'],function( Core, RouteBuilder) {
	return function() {
		this.init = function(globalContext) {
	
			var localRouter = new RouteBuilder().build(globalContext.getRouter());
			localRouter.init();
			
		};
	};
});
