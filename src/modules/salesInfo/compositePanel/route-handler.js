define([ '_core','./component','./viewmodel','./chartViewPanel/component','./treeViewPanel/component'],function( Core,SplitterComponent,ViewModel,ChartViewComponent,TreeViewComponent) {
	return function(moduleContext) {

		var component = null;

		return {
			
			activate: function(vals) {
				
				var vm = new ViewModel(moduleContext);
				component = new SplitterComponent(vm);
				
				component.addChild(new ChartViewComponent(vm).getElementId());
				component.addChild(new TreeViewComponent(vm).getElementId());
			},
			
			deactivate: function() {
				if (component) {
					component.dispose();
				}
			}
		};
		
	};
});