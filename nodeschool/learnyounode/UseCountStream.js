// Using the CountStream class
// Name:  UseCountStream.js
// Date:  March 13, 2016
// Source:  Node.js in Practice 2014
// This example loads the module from listing 1.1 B and 
//then instantiates it with the text 'book' C. It also 
//downloads the text from a website using Node’s standard
// http module D and then pipes the result through our CountStream class 

var CountStream = require('./countstream');
var countStream = new CountStream('book');
var http = require('http');

http.get('http://www.google.com', function(res) {
	res.pipe(countStream);
});

countStream.on('total', function(count) {
	console.log('Total matches:', count);
});
