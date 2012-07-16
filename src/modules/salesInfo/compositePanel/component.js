define([ '_core','text!./view.html'], function(Core, parentViewText) {
	return function(vm) {

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