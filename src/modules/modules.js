define(function(require) {

	// create an array containing all modules classes that needs to be initiated
<<<<<<< HEAD
	return [ require('./moduleOne/module'), require('./moduleTwo/module') , require('./salesPersonInfo/module'), require('./salesInfo/module')];
=======
	return {
		moduleOne : require('./moduleOne/module'),
		moduleTwo : require('./moduleTwo/module')
	};
>>>>>>> origin/master

});