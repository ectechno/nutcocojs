define(['_util'], function(Util) {
	
	var router = function(parent) {
		this.router = crossroads.create();
		this.parent = parent;
		
		this.getNativeRouter = function() {return this.router;};
		this.initialize.apply(this, arguments);
	};

	router.extend = Util.Extend;
	router.prototype.initialize = function(){};
	router.prototype.addRoute = function(pattern, handler) {
		return this.router.addRoute(pattern, handler);
	};
	router.prototype.init = function() {
		
		if (this.parent) {
			crParentRouter = this.parent.getNativeRouter();
			crParentRouter.routed.add(this.router.parse, this.router);
			crParentRouter.bypassed.add(this.router.parse, this.router);
		} else if(!hasher.isActive()) {
			var self = this;
			function parseHash(newHash, oldHash) {
				self.router.parse(newHash);
			}
			hasher.initialized.add(parseHash);// parse initial hash
			hasher.changed.add(parseHash);// parse hash changes
			hasher.init(); // start listening for history change

		};
	};
	
	return router;
});
