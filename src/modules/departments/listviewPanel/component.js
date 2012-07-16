define(['_core', 'text!./view.html', './viewmodel' ], function(Core, viewText, ViewModel) {
	return function(moduleContext) {
		
		var vm = new ViewModel("my department");
		var panel = new Core.Panel(vm, viewText);

		return {

			dispose : function() {
				panel.dispose();
			}
		};
	};
}); 