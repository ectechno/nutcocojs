define([ './global/applications/ApplicationA/application',
		'./global/applications/ApplicationB/application' ], function(
		ApplicationA, ApplicationB) {
		
	return funtion(){
		this.init = function () {
			
			var apps=new Array(new ApplicationA(), new ApplicationB()); // Array containing all the applications
			
			for(var count=0; count<apps.length; count++){
				apps[count].init(); //initializes all the applications
			}
		};
	};
});