define([], function() {

	return function(router) {
		
		var allHandles = {};

		function wrapper(handle) {
			var self = this;
			self.handle = handle;

			this.activate = function(vals) {
				deactivateAll();// deactivate all active panels
				self.handle.activate(vals);// activate the requested handler
			};

		}

		function deactivateAll() {
			for (path in allHandles) {
				allHandles[path].deactivate();
			}
		}

		return {
			addHandles : function(handles) {
				for (path in handles) {
					var route = router.addRoute(path);
					route.matched.add(new wrapper(handles[path]).activate);
				}
				_.extend(allHandles, handles);
			},

		};

	};
});
