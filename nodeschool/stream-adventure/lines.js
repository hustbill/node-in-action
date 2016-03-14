/*
Name: lines.js
Date: March 14, 2016
Instead of transforming every line as in the previous "TRANSFORM" example,
for this challenge, convert even-numbered lines to upper-case and odd-numbered
lines to lower-case. Consider the first line to be odd-numbered. For example
given this input:

    One
    Two
    Three
    Four

Your program should output:

    one
    TWO
    three
    FOUR
*/

var through = require('through2');
var split = require('split');

var lineCount = 0;
var stream = through(write, end);

// var stream = through( function (buffer, _, next) {
// 	this.push(buffer.toString().toUpperCase());
// 	next();
// });

function write (buf, _, next) {
	var line = buf.toString();
	this.push(lineCount %2 === 0 
		? line.toLowerCase() + '\n' 
		: line.toUpperCase() + '\n'
	);
	lineCount ++;
	next();
}


function end (done) {
	done();
}

process.stdin
	.pipe(split())
	.pipe(stream)
	.pipe(process.stdout);
