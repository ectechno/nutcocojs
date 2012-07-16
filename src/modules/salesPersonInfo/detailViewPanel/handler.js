define(['./component'], function(Component) {
	return function(moduleContext) {

		var component = null;
		return {
			activate : function(vals) {
				component = new Component(moduleContext, vals);
			},

			deactivate : function() {
				if (component) {
					component.dispose();
				}
			}
		};

	};
}); 