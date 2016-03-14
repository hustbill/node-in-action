/*
Name: transform.js
Date: March 14, 2016
Convert data from `process.stdin` to upper-case data on `process.stdout`
using the `through2` module.
*/

var through = require('through2');
var stream = through(write, end);
// var stream = through( function (buffer, _, next) {
// 	this.push(buffer.toString().toUpperCase());
// 	next();
// });

function write (buf, _, next) {
	this.push(buf.toString().toUpperCase());
	next();
}


function end (done) {
	done();
}

process.stdin.pipe(stream).pipe(process.stdout);
