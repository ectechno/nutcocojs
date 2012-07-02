
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
			this.context.setRouter(new Core.Router());
			this.localRouter = new Core.Router(this.context.getRouter());
		}
	});
	test("first test with setup", function() {
		ok(true);
	});
});