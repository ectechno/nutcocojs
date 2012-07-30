$.get('./nutcoco.appcache', function(data) {
	//console.log(data);
	var manifest = new String(data);
	var x = manifest.indexOf("#libraries");
	var y = manifest.lastIndexOf("#libraries");
	var libPaths = manifest.substring(x, y - 1);
	var filenames = libPaths.split(/\r?\n/);
	var scrp = new String();
	for (var i = 1, k = filenames.length; i < k ; i++) {
		
		scrp = scrp + "<script src=\"./" + filenames[i] + "\" type=\"text/javascript\" charset=\"utf-8\"></script>\n";
		
	};
	$("head").append(scrp);
	$(document).ready(function() {
		$("body").append("<script src=\"./src/main.js\" type=\"text/javascript\" charset=\"utf-8\"></script>\n");
	});

});

