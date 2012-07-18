define([ '_core', 'text!./view.html'],function( Core, viewText) {
	return function(vm) {

		var panel = new Core.Panel(vm, viewText);
		
		return{
			getElementId : function(){
				return panel.getElementId();
			}
		};	
	};
});