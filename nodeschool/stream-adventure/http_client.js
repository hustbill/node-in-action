/*
Name:  http_client.js
Date: March 14, 2016
Send an HTTP POST request to http://localhost:8099 and pipe process.stdin into
it. Pipe the response stream to process.stdout.
*/

var http = require('http');
var fs = require('fs');
var through = require('through2');
var request = require('request');

// GET request
// request('http://localhost:8099').pipe(process.stdin);

// POST request
var r = request.post('http://localhost:8099');
process.stdin.pipe(r).pipe(process.stdout);

// var stream = through(write, end);
// function write (buf, _, next) {
// 	this.push(buf.toString().toUpperCase());
// 	next();
// }

// function end(done) {
// 	done();
// }


// var server = http.createServer(function (req, res) {
// 	if (req.method === 'POST') {
// 		req.pipe(stream).pipe(res);
// 	}
// 	else 
// 		res.end('send me a POST\n');
// })

// server.listen(parseInt(process.argv[2]));


