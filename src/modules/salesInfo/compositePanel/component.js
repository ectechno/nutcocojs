define([ '_core','text!./view.html', 'text!./chartViewPanel/view.html',
		'text!./treeViewPanel/view.html' ], function(Core, parentViewText, chartViewText, treeViewText) {
	return function(moduleContext,vm) {

		var panel = new Core.Panel(vm, parentViewText);
		
		return {
			addChild : function(childId) {
				$("#panel").append($('#' + childId));
			},
			
			dispose : function() {
				panel.dispose();
			}
		};

	};
});