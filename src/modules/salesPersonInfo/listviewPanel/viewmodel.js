define([], function() {

	return function() {
		var self = this;
		
		this.init = function(){
			//TODO: need to get the url from the settings object
			$.getJSON("./dummyServer/salesPersonInfo.json", function (result) {
				self.salesPersons(result);
            });
		}	
			
		
		
		this.salesPersons = ko.observableArray();
		this.personClicked = function(person){
			//TODO: need to user router.setRoute() method instead
			hasher.setHash("salespersons/"+person.id);
		}
		this.moduleEnabled = ko.observable(true);
		
		
		this.init();	//call the initialization method.. is this the best way?
	};
});
