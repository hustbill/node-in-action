/*
 ## HTTP JSON API SERVER (Exercise 13 of 13)

  Write an HTTP server that serves JSON data when it receives a GET request
  to the path '/api/parsetime'. Expect the request to contain a query string
  with a key 'iso' and an ISO-format time as the value.

  Name: http_json_api_server.js
  Date: March 13, 2016
*/

var http = require('http');
var url = require('url');

function parsetime (time) {
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	};
}

function unixtime (time) {
	return { unixtime : time.getTime() };
}

var server = http.createServer(function (req, res) {
	var parsedUrl = url.parse(req.url, true);
	var time = new Date(parsedUrl.query.iso);
	var result;

	if (/^\/api\/parsetime/.test(req.url))
		result = parsetime(time);
	else if (/^\/api\/unixtime/.test(req.url))
		result = unixtime(time);

	if (result) {
		res.writeHead(200, { 'Content-Type' : 'application/json' });
		res.end(JSON.stringify(result))
	} else {
		res.writeHead(404);
		res.end();
	}

	// if (req.method == 'GET') {
	// 	if (req.path == '/api/parsetime') {
	// 		// res.body = {
	// 		//  "hour" : 14,
	// 		//  "minute" : 23,
	// 		//  "second" : 15
	// 		// };
	// 		res.writeHead(200, { 'Content-Type': 'application/json' })

	// 		url.parse( function (req.url) {

	// 		})
	// 		req.pipe(map(function (chunk) {
	// 			return chunk.toString().toUpperCase()
	// 		})).pipe(res);
	// 	}

	// 	 else if (req.path == '/api/unixtime') {
	// 	 	res.writeHead(200, { 'Content-Type': 'application/json' })

	// 		req.pipe(map(function (chunk) {
	// 			return chunk.toString().toUpperCase()
	// 		})).pipe(res);
	// 	}

	// } else {
	// 	return req.end('send me a GET\n');
	// }
});

server.listen(Number(process.argv[2]));