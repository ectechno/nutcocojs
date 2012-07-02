require.config({
	paths : {
		_core : './core/_core',
	}
});

require([ '_core' ], function() {
	module("Application Level Routing Test", {
		setup : function() {
			var Core = testr('_core');
			this.context = new Core.Context();
			this.globalRouter = new Core.Router();
			this.context.setRouter(this.globalRouter);
		},
		teardown : function() {
			hasher.stop();
		}
	});

	test("Hash set before routers initialize", function() {
		hasher.setHash('appAPath1/128');

		var spyMethod = sinon.spy();
		var localRouter = new Core.Router(this.globalRouter);
		localRouter.addRoute('appAPath1/{id}', spyMethod);
		localRouter.init();
		this.context.getRouter().init();

		ok(spyMethod.calledWith("128"), "Router callback function called");
	});

	test("Hash set after local router initialize", function() {

		var spyMethod = sinon.spy();
		var localRouter = new Core.Router(this.globalRouter);
		localRouter.addRoute('appAPath1/{id}', spyMethod);
		localRouter.init();
		hasher.setHash('appAPath1/128');
		this.context.getRouter().init();

		ok(spyMethod.calledWith("128"), "Router callback function called");
	});
	
	test("Hash set after global router initialize", function() {

		var spyMethod = sinon.spy();
		var localRouter = new Core.Router(this.globalRouter);
		localRouter.addRoute('appAPath1/{id}', spyMethod);
		localRouter.init();
		this.context.getRouter().init();
		hasher.setHash('appAPath1/128');
		
		ok(spyMethod.calledWith("128"), "Router callback function called");
	});
	
	
	test("Multiple local routers", function() {
		
		var spyMethod1 = sinon.spy();
		var spyMethod2 = sinon.spy();
		
		var localRouter1 = new Core.Router(this.globalRouter);
		localRouter1.addRoute('appAPath1/{id}', spyMethod1);
		localRouter1.init();
		
		var localRouter2 = new Core.Router(this.globalRouter);
		localRouter2.addRoute('appBPath1/{id}', spyMethod2);
		localRouter2.init();
		
		this.context.getRouter().init();
		hasher.setHash('appAPath1/128');
		hasher.setHash('appBPath1/256');
		
		ok(spyMethod1.calledWith("128"), "Router1 callback function called");
		ok(spyMethod2.calledWith("256"), "Router2 callback function called");

	});
});