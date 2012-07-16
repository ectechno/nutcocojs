define([ '_core', './component'],function( Core, Component) {
	return function(moduleContext) {

		var panel = null;
		return {
			
			activate: function(vals) {
				panel = new Component(moduleContext);
			},
			
			deactivate: function() {
				if (panel) {
					panel.dispose();
				}
			}
		};
		
	};
});