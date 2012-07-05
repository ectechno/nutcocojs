define([ '_core', './viewmodel', 'text!./view.html'],function( Core, ViewModel, viewText) {
	return function(moduleContext) {

		var panel = null;
		return {
			
			activate: function(vals) {
				var vm = new ViewModel(vals.id);
				panel = new Core.Panel(vm, viewText);
			},
			
			deactivate: function() {
				console.log('deactivation called');
				if (panel) {
					panel.dispose();
				}
			}
		};
		
	};
});