define(['_core', 'text!./view.html', './viewmodel', 'i18n!./nls/captions' ], function(Core, viewText, ViewModel, i18n) {
	return function(moduleContext) {
		var language = window.navigator.userLanguage || window.navigator.language;
		console.log(language);
		var vm = new ViewModel("my department");
		var panel = new Core.Panel(vm, viewText, i18n);

		return {

			dispose : function() {
				panel.dispose();
			}
		};
	};
}); 