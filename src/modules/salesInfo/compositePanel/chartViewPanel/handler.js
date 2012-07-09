define([ '_core', '../viewmodel', 'text!./view.html'],function( Core, ViewModel, viewText) {
	return function(moduleContext) {

		var panel = null;
		return {
			
			activate: function(vals) {
				var vm = new ViewModel();
				panel = new Core.Panel(vm, viewText);
			},
			
			deactivate: function() {
				if (panel) {
					panel.dispose();
				}
			}
		};
		
	};
});