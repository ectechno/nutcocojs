require.config({
	paths : {
		_core : './core/_core',
	}
});

require([ './settings' ], function( Settings) {

	module("Settings Tests",{
		setup : function(){
			var Core = testr('_core');
			this.context = new Core.Context();
			this.context.setSettings(Settings);
		}
	});
	
	test('Test settings', function(){
		equal(this.context.getSettings(), Settings, 'global settings set');
		
	});
});

