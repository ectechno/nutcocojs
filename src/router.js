/*
 *	Global router, adds listeners for the base path of each application 
 */

// Setting up crossroads and initiate listeners
define(['./apps/ApplicationA/router','./apps/ApplicationB/router'],function(RouterA,RouterB) {
	
	return function(){
		

		this.start=function(){
			// setup crossroads
			var globalRouter=crossroads.create(); //Define new router for global routing
			
			//globalRouter.routed.add(console.log, console); // log all routes
			var appRouters=new Array(new RouterA(),new RouterB()); // Application routers array
			//alert('global router chaning..');
			for ( var i in appRouters) {
				var tempRouter=appRouters[i].start();
				globalRouter.routed.add(tempRouter.parse, tempRouter);
				globalRouter.bypassed.add(tempRouter.parse, tempRouter);
			}
			
			// setup hasher
			function parseHash(newHash, oldHash) {
				globalRouter.parse(newHash);
			}
			hasher.initialized.add(parseHash);// parse initial hash
			hasher.changed.add(parseHash);// parse hash changes

			hasher.init(); // start listening for history change		
		};
	};
});