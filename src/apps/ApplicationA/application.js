define([ '_core'],function( Core) {
	return function() {
		this.init = function(global) {
			
			var localRouter=new Core.Router(global.getRouter());  //create the local router
			
			localRouter.addRoute('appAPath1/{id}', function(id) {
				console.log("appA" + id);
			});
			
			localRouter.init();
			
		};
	};
});