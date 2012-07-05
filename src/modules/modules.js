define(function(require) {

	var AuctionsModule = require('./auctionsModule/module');
	var TrainingsModule = require('./trainingsModule/module');

	// create an array containing all modules for easy handling
	return [ new AuctionsModule(), new TrainingsModule() ];

});