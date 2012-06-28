//Array containing base paths
var APP_PATHS_B = [ 'appBPath1/', 'appBPath2/' ];

// Setting up crossroads and initiate listeners
define(function() {
	return function() {
		this.start = function() {

			var localRouter = crossroads.create(); // Define new router for
													// local routing

			// Initiating listeners for each path
			for ( var tempPath in APP_PATHS_B) {
				localRouter.addRoute(APP_PATHS_B[tempPath] + '{id}', function(
						id) {
					console.log("appB" + id);
				});
			}
			return localRouter;
		};
	};
});