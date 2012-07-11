define([], function() {

	return function(moduleContext) {
		var self = this;
		
		this.init = function(){
			$.getJSON(moduleContext.getSettings().items().urls.departments, function (result) {
				self.salesInfo(result);
            });
		}	
		
		this.salesInfo=ko.observableArray();
		this.moduleEnabled = ko.observable(true);
		this.init();
		self.drawTree = function(){
			//alert('drawing tree');
			$("#treeView").jstree({
	            "themes": {
	                "theme": "apple"
	            },
	            "plugins": ["themes", "html_data"]
	        });
		}
		
		this.yearClicked= function(years,department){
			console.log(years + ' ' + department);
		}
		
		
	};
});
