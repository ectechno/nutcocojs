define([ '_core','./component','./viewmodel','./chartViewPanel/component','./treeViewPanel/component'],function( Core,SplitterComponent,ViewModel,ChartViewComponent,TreeViewComponent) {
	return function(moduleContext) {

		var component = null;

		return {
			
			activate: function(vals) {
				
				var vm = new ViewModel(moduleContext);
				component = new SplitterComponent(vm);
				var components = new Array(new ChartViewComponent(vm),new TreeViewComponent(vm));
				for(key in components){
					component.addChild(components[key].getElementId());
				}
			},
			
			deactivate: function() {
				if (component) {
					component.dispose();
				}
			}
		};
		
	};
});