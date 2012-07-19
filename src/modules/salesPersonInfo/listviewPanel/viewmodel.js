define([], function() {

	return function(moduleContext) {
		var self = this;
		
		self.myvar = ko.observable("");
		
		this.salesPersons = ko.observableArray();
		this.personClicked = function(person){
			moduleContext.getController().goTo("salespersons/"+person.id);
		};
		
		//self executable as a constructor function
		(function(){
			
			self.myvar("hello");
			
			$.getJSON(moduleContext.getSettings().items().urls.salesPersonInfo, function (result) {
				self.salesPersons(result);
				
            });
		})();
		
	};
});
