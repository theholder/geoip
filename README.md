geoip.js
=========

What is it?
-----------
A geoip database parser for the database hosted at http://geoip.sorch.info/:
	- pulling information from the databse
	


How do I use it?
----------------

var geoip = require('geoip');

geoip.key().then(function(d, err) { 
		geoip.geoip(d, "google.com").then(function(data, err) {
			console.log(data["isp"]);
		})
	}
);


License
-------
This program is distributed under the terms of the GNU GPL.
