define(['./router', './mediator', './controller'], function(Router, Mediator, Controller) {
	
	return function(parentContext) {
		
		var settings = {};
		var router = null;
		var mediator = null;
		var controller = null;

		mediator = parentContext ? new Mediator(parentContext.getMediator()) : new Mediator();
		settings = parentContext ? _.extend(settings, parentContext.getSettings()) : settings;
		
		router = new Router();
		
		
		var _return = {
			addSettings : function(newSettings){
				_.extend(settings, newSettings);
			},
			getSettings : function(){return settings;},
			
			getController : function() {return controller;},
			setController : function(newController) {controller = newController;},
			
			getRouter : function(){return router;},
			setRouter : function(newRouter) {router = newRouter;},
			
			getMediator : function(){return mediator;},
			setMediator : function(newMediator) {mediator = newMediator;},
			
			getParentContext : function(){return parentContext;},
			
			activate : function() {
				router.init();
			},
		};
		
		controller = new Controller(router, _return);

		return _return;
	};
});
