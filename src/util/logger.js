define([], function() {
	return {
		info : function(msg) {
			if (window['console'] != 'undefined') {
				debug.info(msg);
			}

		},

		warn : function(msg) {
			if (window['console'] != 'undefined') {
				debug.warn(msg);
			}
		},

		error : function(msg, error, silent) {
			if (window['console'] != 'undefined') {
				debug.error(msg, error);
			}
		},
	};

});