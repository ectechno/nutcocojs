//Array containing base paths
var APP_PATHS = [ 'appAPath1/', 'appAPath2/' ];

// Setting up crossroads and initiate listeners
define(function() {
	return function() {
		this.start = function() {
			var localRouter = crossroads.create(); // Define new router for local routing
			//alert('Starting local router A');								
			// Initiating listeners for each path
			for ( var tempPath in APP_PATHS) {
				//alert(APP_PATHS[tempPath] + '{id}');		
				localRouter.addRoute(APP_PATHS[tempPath] + '{id}',
						function(id) {
							console.log(id);
						});
			}
			return localRouter;
		};
	};
});