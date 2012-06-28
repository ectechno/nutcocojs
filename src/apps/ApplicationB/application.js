define(['./router'],function(Router) {
	return function() {
		this.init = function(global) {
	
			var localRouter=new Router();  //create the local router
			global.router.addRouter(localRouter); // chain the local router to the global router
			
		};
	};
});
