/*
 ## HTTP FILE SERVER (Exercise 11 of 13)
 Name: http_file_server.js
 Date: March 13, 2016
 Source: learnyounode
 Run:  $ node http_file_server.js 9000 http_file_server.js
 Result:  open a web browser,  type  the url:  http://127.0.0.1:9000

  Write an HTTP server that serves the same text file for each request it
  receives.

  Your server should listen on the port provided by the first argument to
  your program.

  You will be provided with the location of the file to serve as the second
  command-line argument. You must use the fs.createReadStream() method to
  stream the file contents to the response.
*/

var fs = require('fs');
var http = require('http');
//var net = require('net');  // for a generic TCP server


var server = http.createServer( function (req, res) {
	// request handling logic ...
	res.writeHead(200, {
	  	'Content-Type': 'text/plain' 
	});
	fs.createReadStream(process.argv[3]).pipe(res);
 });

server.listen(Number(process.argv[2]));

