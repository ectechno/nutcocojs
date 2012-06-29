
define(function() {

	return function() {
		// setup crossroads
		var globalRouter = crossroads.create(); // Define new router for global routing
		this.init = function() {

			//alert('Global router started');
			// setup hasher
			function parseHash(newHash, oldHash) {
				globalRouter.parse(newHash);
			}
			hasher.initialized.add(parseHash);// parse initial hash
			hasher.changed.add(parseHash);// parse hash changes
			hasher.init(); // start listening for history change
		};

		// Function to add local routers to the global router
		this.addRouter = function(lRouter) {
			var tempRouter = lRouter.start();
			globalRouter.routed.add(tempRouter.parse, tempRouter);
			globalRouter.bypassed.add(tempRouter.parse, tempRouter);
		};
	};
});