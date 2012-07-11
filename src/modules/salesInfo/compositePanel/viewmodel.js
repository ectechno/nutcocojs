<<<<<<< HEAD
define([], function() {

	return function(moduleContext) {
		var self = this;
		this.year=ko.observable();
		this.deptName=ko.observable();
		this.month=ko.observable("Test");
		this.sales=ko.observable("TestSales");
		
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
		
		this.yearClicked= function(years,department,data){
			console.log(years + ' ' + department+' '+ data.values);
			self.setTableValues(years,department,data);
		}
		
		//Function to set the table values
		this.setTableValues=function(year,department,data){
			self.year(year);
			self.deptName(department);
		}
		
	};
});
=======
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
>>>>>>> origin/initdeploy
