//Array containing base paths
var APP_PATHS = [ 'appAPath1/', 'appAPath2/' ];

// Setting up crossroads and initiate listeners
define(function() {
	return function() {
		this.start = function() {
			var localRouter = crossroads.create(); // Define new router for local routing
			//alert('Starting local router');								
			// Initiating listeners for each path
			for ( var tempPath in APP_PATHS) {
				localRouter.addRoute(APP_PATHS[tempPath] + '{id}',
						function(id) {
							console.log(id);
						});
			}
			return localRouter;
		};
	};
});