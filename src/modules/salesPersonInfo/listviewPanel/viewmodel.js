define(["i18n!./nls/captions"], function(captions) {

	return function(moduleContext) {
		var self = this;
		
		self.myvar = ko.observable("");
		
		this.salesPersons = ko.observableArray();
		this.personClicked = function(person){
			moduleContext.getController().goTo("salespersons/"+person.id);
		};
		console.log("Language :"+navigator.language+" Test Localization "+captions.firstname);
		//self executable as a constructor function
		(function(){
			
			self.myvar("hello");
			
			$.getJSON(moduleContext.getSettings().items().urls.salesPersonInfo, function (result) {
				self.salesPersons(result);
				
            });
		})();
		
	};
});
