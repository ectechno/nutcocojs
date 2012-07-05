define(['./router', './mediator', './controller'], function(Router, Mediator, Controller) {
	
	return function(parentContext) {
		
		var settings = {};
		var router = null;
		var mediator = null;
		var controller = null;
		var parent = parentContext || null;
		
		if(!parent) {
			router = new Router();
			mediator = new Mediator();
			controller = new Controller(router);
		} else {
			router = parent.getRouter();
			mediator = new Mediator(parent.getMediator());
			_.extend(settings, parent.getSettings());
			controller = parent.getController();
		}

		
		return{
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
			
			getParent : function(){return parent;},
			
			activate : function() {
				router.init();
			},
		};

	};
});
