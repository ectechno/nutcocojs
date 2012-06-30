define([], function() {
	
	return function() {
		
		var _settings = null;
		var _router = null;
		var _mediator = null;
		
		return{
			setSettings : function(settings){_settings = settings;},
			getSettings : function(){return _settings;},
			
			setRouter : function(router){_router = router;},
			getRouter : function(){return _router;},
			
			setMediator : function(mediator){_mediator = mediator;},
			getMediator : function(){return _mediator;},
		};

	};
});
