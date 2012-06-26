define([ './apps/ApplicationA/application',
		'./apps/ApplicationB/application' ], function(
		ApplicationA, ApplicationB) {

	return function()
	{
		this.init = function(global) {
			
			var apps = new Array(new ApplicationA(), new ApplicationB()); // Array containing all the applications
																		
			for ( var count = 0; count < apps.length; count++) {
				apps[count].init(global); // initializes all the applications
				
			}

		};
	}
	;
});