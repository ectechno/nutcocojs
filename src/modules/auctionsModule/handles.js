/*
 * This is the definition file for creating route path handles for the module. 
 * One can add any amount of handler objects by specifying a route path on which 
 * they should be activated. Handler objects needs two methods 'activate' and 'deactivate'
 * for the controller to invoke. 
 */
define(function(require) {

	// lets get all the panel handler classes in to variables
	var AuctionDetailHandler = require('./auctionDetail/handler');

	// now return a structure containing the route path and handler instance
	return {
		'appAPathP/{id}' : new AuctionDetailHandler(),
		'appAPathQ/{id}' : new AuctionDetailHandler()
	};
});