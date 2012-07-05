define(['_util'], function(Util) {
	
	return function() {
		var _router = crossroads.create();
		_router.normalizeFn = crossroads.NORM_AS_OBJECT;
		
		return{
			addRoute : function(pattern, handler) {
				return _router.addRoute(pattern, handler);
			},
			
			init : function() {
				
				if(!hasher.isActive()) {
					function parseHash(newHash, oldHash) {
						_router.parse(newHash);
					}
					hasher.initialized.add(parseHash);// parse initial hash
					hasher.changed.add(parseHash);// parse hash changes
					hasher.init(); // start listening for history change

				};
			},
			
			routeTo : function(path) {
				hasher.setHash(path);
			},
			
		};
		
	};
});
