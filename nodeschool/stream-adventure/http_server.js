/*
Name:  http_server.js
Date: March 14, 2016
write an http server that uses a through stream to write back
the request stream as upper-cased response data for POST requests.
*/

var http = require('http');
var fs = require('fs');
var through = require('through2');

var stream = through(write, end);

function write (buf, _, next) {
	this.push(buf.toString().toUpperCase());
	next();
}

function end(done) {
	done();
}


var server = http.createServer(function (req, res) {
	if (req.method === 'POST') {
		req.pipe(stream).pipe(res);
	}
	else 
		res.end('send me a POST\n');
})

server.listen(parseInt(process.argv[2]));

