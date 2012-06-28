//Array containing base paths
var APP_PATHS_A = [ 'appAPath1/', 'appAPath2/' ];

// Setting up crossroads and initiate listeners
define(function() {
	return function() {
		this.start = function() {
			var localRouter = crossroads.create(); // Define new router for
													// local routing

			// Initiating listeners for each path
			for ( var tempPath in APP_PATHS_A) {

				// console.log(APP_PATHS_A[tempPath]);
				localRouter.addRoute(APP_PATHS_A[tempPath] + '{id}', function(
						id) {
					console.log("appA" + id);
				});
			}
			return localRouter;
		};
	};
});