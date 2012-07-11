define([ '_core', './viewmodel', 'text!./view.html', 'text!./chartViewPanel/view.html','text!./treeViewPanel/view.html'],function( Core, ViewModel, parentViewText, chartViewText, treeViewText) {
	return function(moduleContext) {

		var panel = null;
		return {
			
			activate: function(vals) {
				var vm = new ViewModel(vals.id);
				
				//A workaround to get the shared viewmodel working... Not sure if this is the best way
				//var parent = $(parentViewText);
				//parent.find("#panel1").append(treeViewText);
				//parent.find("#panel2").append(chartViewText);
				
				//panel = new Core.Panel(vm, parent.html());
				panel = new Core.Panel(vm, parentViewText);
				treeViewPanel = new Core.Panel(vm, treeViewText);
				chartViewPanel = new Core.Panel(vm, chartViewText);
				
				$("#panel").append($('#'+treeViewPanel.getElementId()));
				$("#panel").append($('#'+chartViewPanel.getElementId()));
				
			},
			
			deactivate: function() {
				if (panel) {
					panel.dispose();
				}
			}
		};
		
	};
});