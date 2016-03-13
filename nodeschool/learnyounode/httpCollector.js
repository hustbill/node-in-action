// HTTP Collector

var bl = require('bl')
var http = require('http')
var buf;

// http.get(process.argv[2], function (response)  {
// 	response.setEncoding('utf8')
// 	response.on('data', buf += data)
// 	response.on('end', console.log(buf))
// })

http.get(process.argv[2], function (response)  {
	response.pipe(bl(function (err, data) {
		if (err) 
			return console.error(err)
		data = data.toString()
		console.log(data.length)
		console.log(data)
	}))
})