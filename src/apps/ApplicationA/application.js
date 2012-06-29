define(['./router'],function(Router) {
	return function() {
		this.init = function(global) {
			
			var localRouter=new Router();  //create the local router
			global.getRouter().addRouter(localRouter); // chain the local router to the global router
			
			hasher.setHash('appAPath1/128');
		};
	};
});