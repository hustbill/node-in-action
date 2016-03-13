// HTTP Client GET

var http = require('http')

// var url = 'http://www.google.com'

// http.get(url, callback);

// function callback (response) {
// 	response.on("data", function(data) {
// 		//console.log(setEncoding(data, 'utf8'));
// 		console.log(data.toString())
// 	})
// }

http.get(process.argv[2], function (response) {
	response.setEncoding('utf8')
	response.on('data', console.log)
	response.on('error', console.error)
})