#!/usr/bin/env nodejs

var http = require('http');

http.createServer( function (request, response) {
	response.writeHead(200, {'Content-Type': 'text-plain'});
	response.end('Hello World\n');
}).listen(8080, 'localhost');

console.log('Sever running at http://localhost:8080/');