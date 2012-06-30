define([], function() {
	
	return function(element) {
		var eventElement = element;
		
		return{
			// function to notify others on an occurrence of an event
			notify : function(event, params) {
				eventElement.trigger(event, params);
			},
			// function to listen to the events published by others
			listen : function(event, fn) {
				eventElement.bind(event, fn);
			}
		};

	};
});
