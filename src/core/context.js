define([], function() {
	
	return function() {
		
		var _settings = null;
		var _router = null;
		
		return{
			setSettings : function(settings){_settings = settings;},
			getSettings : function(){return _settings;},
			
			setRouter : function(router){_router = router;},
			getRouter : function(){return _router;},
		};

	};
});
