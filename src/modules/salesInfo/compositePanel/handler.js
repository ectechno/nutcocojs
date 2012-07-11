define([ '_core', './viewmodel', 'text!./view.html', 'text!./chartViewPanel/view.html','text!./treeViewPanel/view.html'],function( Core, ViewModel, parentViewText, chartViewText, treeViewText) {
	return function(moduleContext) {

		var panel = null;
		return {
			
			activate: function(vals) {
				var vm = new ViewModel(moduleContext);
				
				//A workaround to get the shared viewmodel working... Not sure if this is the best way
				var parent = $(parentViewText);
				parent.find("#panel1").append(treeViewText);
				parent.find("#panel2").append(chartViewText);
				
				panel = new Core.Panel(vm, parent.html());
				
			},
			
			deactivate: function() {
				if (panel) {
					panel.dispose();
				}
			}
		};
		
	};
});