define([], function() {
	return {
		info : function(msg) {
			debug.info(msg);
		},
		
		warn : function(msg) {
			debug.warn(msg);
		},
		
		error : function(msg, error) {
			debug.error(msg, error);
		},
	};

});
