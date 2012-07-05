define([], function() {
	
	return function(parentMediator) {
		var self = this;
		var parent = parentMediator;
		
		return{
			// function to notify others on an occurrence of an event
			notify : function(event, params, global) {
				
				self.trigger(event, params);
				if(global && parent) {
					parent.notify(event, param, true);
				}
			},
			// function to listen to the events published by others
			listen : function(event, fn, global) {
				if(global && parent) {
					parent.listen(event, fn, global);
				} else {
					self.bind(event, fn);
				}
			}
		};

	};
});
