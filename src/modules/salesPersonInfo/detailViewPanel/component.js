define(['_core', 'text!./view.html', './viewmodel'], function(Core, viewText, ViewModel) {
	return function(moduleContext, id) {

		var vm = new ViewModel(moduleContext, id);
		var panel = new Core.Panel(vm, viewText);

		return {
			getElementId : function() {
				return panel.getElementId();
			},

			dispose : function() {
				panel.dispose();
			}
		};
	};
}); 