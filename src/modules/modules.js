define(function(require) {

	// create an array containing all modules classes that needs to be initiated
	return {
		departmentInfo : require('./departments/module'),
		salesPersonInfo : require('./salesPersonInfo/module'), 
		salesInfo : require('./salesInfo/module'),
	};

});