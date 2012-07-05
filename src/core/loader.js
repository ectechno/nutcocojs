define([], function() {
	
	return function(globalContext) {
		
		return {
			load : function(modules) {
				for ( i in modules) {
					modules[i].init(globalContext); // initializes the module
				}
			},
		};
		
	};
});
