define([ '_core' ], function(Core) {

	return function() {

		return {
			build : function(globalRouter) {
				
				var localRouter = new Core.Router(globalRouter);

				localRouter.addRoute('appBPathP/{id}', function(id) {
					console.log("appBP " + id);
				});

				localRouter.addRoute('appBPathQ/{id}', function(id) {
					console.log("appBQ " + id);
				});

				localRouter.addRoute('appBPathR/{id}', function(id) {
					console.log("appBR " + id);
				});

				return localRouter;
			}

		};
	};

});