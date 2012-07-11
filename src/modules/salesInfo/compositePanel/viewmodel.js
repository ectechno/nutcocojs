define([], function() {

	return function(moduleContext) {
		var self = this;
		
		this.init = function(){
			$.getJSON(moduleContext.getSettings().items().urls.departments, function (result) {
				self.salesInfo(result);
            });
		}	
		this.selectedYear = ko.observable();
		this.selectedDept = ko.observable();
		this.selectedData = ko.observableArray();
		this.totalSales = ko.computed(function(){
			return _.reduce(self.selectedData().values, function(memo, item){ return memo + item.sales; }, 0);
		});
		
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
		
		this.yearClicked= function(years,department,data){
			this.selectedYear(years);
			this.selectedDept(department);
			this.selectedData(data);
			console.log(data.values);

		}
		
		
	};
});
