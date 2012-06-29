define([], function() {

	return function() {
		// setup crossroads
		var globalRouter = crossroads.create();

		return {
			init : function() {
				// setup hasher
				function parseHash(newHash, oldHash) {
					globalRouter.parse(newHash);
				}
				hasher.initialized.add(parseHash);// parse initial hash
				hasher.changed.add(parseHash);// parse hash changes
				hasher.init(); // start listening for history change
			},
	
			// Function to add local routers to the global router
			addRouter : function(lRouter) {
				var tempRouter = lRouter.init();
				globalRouter.routed.add(tempRouter.parse, tempRouter);
				globalRouter.bypassed.add(tempRouter.parse, tempRouter);
			}
		};
	};

});
