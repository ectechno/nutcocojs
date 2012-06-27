define(function() {
	return function() {
		this.init = function(global) {
			//global.addRouter(new Router())
			
			//alert('global settings for menuclicked event '+global.settings.events.MenuClicked);
			// Initialization logic for the Application goes here
			//alert('Application A initialized');
			hasher.setHash('appAPath1/128');
		};
	};
});