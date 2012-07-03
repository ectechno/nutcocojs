define([ './auctionsModule/module',
		'./trainingsModule/module' ], function(
		ApplicationA, ApplicationB) {
	
	var apps = new Array(new ApplicationA(), new ApplicationB()); // Array containing all the applications

	return function()
	{
		this.init = function(global) {
			for ( var count = 0; count < apps.length; count++) {
				apps[count].init(global); // initializes all the applications
			}
		};
	}
	;
});