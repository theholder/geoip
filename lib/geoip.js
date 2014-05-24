var request = require('request');
var Q = require('q');

exports.key = function() {
	var deferred = Q.defer();
	request("http://geoip.sorch.info/apik.php?t=text", function (error, response, body) {
		if(!error && response.statusCode == 200) {
			deferred.resolve(body);
		}
	})
 	return deferred.promise;
};

exports.geoip = function (key, domain) {
	var deferred = Q.defer();
	var url = "http://geoip.sorch.info/ip/" + domain + " &key=" + key;
	request(url, function (error, response, body) {
		if(!error && response.statusCode == 200) {
			data = JSON.parse(body);
			deferred.resolve(data);
		}
	})
	return deferred.promise;
};
	

