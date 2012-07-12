define([], function() {

	return function(moduleContext) {
		var self = this;
		
		this.plot = null;
		/*
		ko.bindingHandlers.flotChart = {
			init : function(element, valueAccessor, allBindingsAccessor, viewModel){		
				viewModel.plot = $.plot($(element), [], {
					lines : {
						show : true
					},
					points : {
						show : true
					}});
			},
			update : function(element, valueAccessor, allBindingsAccessor, viewModel){
				//viewModel.plot.setData([valueAccessor().dataItems]);
				//viewModel.plot.draw();
				viewModel.drawChart();
				//var a = valueAccessor();
				//console.log(a);
			}
		};
		*/
		this.init = function(){
			$.getJSON(moduleContext.getSettings().items().urls.departments, function (result) {
				self.salesInfo(result);
            });
		}	
		this.selectedYear = ko.observable();
		this.selectedDept = ko.observable();
		this.selectedData = ko.observableArray();
		this.chartData = ko.computed(function(){
			var tickLabels = _.map(self.selectedData(), function(item,
					key) {
				return [ key, item.month ];
			});
			var dataItems = _.map(self.selectedData(), function(item,
					key) {
				return [ key, item.sales ];
			});
			return {
				"tickLabels" : tickLabels,
				"dataItems" : dataItems
			};
		});
		this.totalSales = ko.computed(function(){
			return _.reduce(self.selectedData().values, function(memo, item){ return memo + item.sales; }, 0);
		});
		
		this.salesInfo=ko.observableArray();
		this.moduleEnabled = ko.observable(true);
		this.init();
		
		self.drawTree = function(){
			// alert('drawing tree');
			$("#treeView").jstree({
	            "themes": {
	                "theme": "apple"
	            },
	            "plugins": ["themes", "html_data"]
	        });
		}
		
		self.drawChart = function() {
			var tickLabels = _.map(self.selectedData(), function(item,
					key) {
				return [ key, item.month ];
			});
			var dataItems = _.map(self.selectedData(), function(item,
					key) {
				return [ key, item.sales ];
			});
			var options = {
				lines : {
					show : true
				},
				points : {
					show : true
				},
				xaxis : {
					ticks : tickLabels
				}
			};
			var placeholder = $("#chart-placeholder");

			var data = [ {
				"label" : self.selectedDept() + " -  " + self.selectedYear(),
				"data" : dataItems
			} ];
			//self.plot = $.plot(placeholder, data, options);
			
			if(self.plot){

				self.plot.setData(data);
				
				self.plot.draw();
			}else{
				self.plot = $.plot(placeholder, data, options);
			}
			
		}
		
		
		this.yearClicked= function(years,department,data){
			self.selectedYear(years);
			self.selectedDept(department);
			self.selectedData(data.values);
			self.drawChart();
		}
		
		
	};
});

