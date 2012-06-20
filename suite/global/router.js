define(function() {

	// setup crossroads
	crossroads.routed.add(console.log, console); // log all routes

	// setup hasher
	function parseHash(newHash,oldHash){
		crossroads.parse(newHash);
	}
	hasher.initialized.add(parseHash);// parse initial hash
	hasher.changed.add(parseHash);// parse hash changes
	
	crossroads.addRoute('/news/{id}', function(id) {
		console.log(id);
	});
	hasher.init(); // start listening for history change
	hasher.setHash('news/128');
	//crossroads.parse('news/128');
});