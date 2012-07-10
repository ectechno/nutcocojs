define(function(require) {

	// create an array containing all modules classes that needs to be initiated
	return [ require('./moduleOne/module'), require('./moduleTwo/module') ];

});