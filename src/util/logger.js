define([], function() {
	return {
		info : function(msg) {
			//if (windows.console) {
			//	console.log(msg);
			//}
			
			debug.info(msg);
		},
		
		warn : function(msg) {
			debug.warn(msg);
		},
		
		error : function(msg, error, silent) {
			debug.error(msg, error);
		},
	};

});
