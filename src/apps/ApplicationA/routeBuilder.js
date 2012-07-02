define([ '_core' ], function(Core) {

	return function() {

		return {
			build : function(globalRouter) {
				
				var localRouter = new Core.Router(globalRouter);

				localRouter.addRoute('appAPathP/{id}', function(id) {
					console.log("appAP " + id);
				});

				localRouter.addRoute('appAPathQ/{id}', function(id) {
					console.log("appAQ " + id);
				});

				localRouter.addRoute('appAPathR/{id}', function(id) {
					console.log("appAR " + id);
				});

				return localRouter;
			}

		};
	};

});