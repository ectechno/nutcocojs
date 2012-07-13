define(['_core', './viewmodel', './component'], function(Core, ViewModel, Component) {
	return function(moduleContext) {

		var component = null;
		return {

			activate : function(vals) {
				var vm = new ViewModel(vals.id);
				component = new Component(vm);
			},

			deactivate : function() {
				if (component) {
					component.dispose();
				}
			}
		};

	};
}); 