define(['_core', 'text!./view.html', './viewmodel' ], function(Core, viewText, ViewModel) {
	return function(moduleContext) {
		
		var vm = new ViewModel(moduleContext);
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