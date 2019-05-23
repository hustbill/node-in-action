var CountStream = require('./countstream'); // Load the countstream.js file`
var counStream = new CountStream('book'); // Instantiate a CountStreamclass that counts text matching "book"
var http = require('http');
var https = require('https');

http.get('http://www.maning.com', function(res) { // Download www.manning.com
  res.pipe(counStream); //Pip the data from the website to CountStream,
                         // thereby counting the text matching "book"
})

counStream.on('total', function(count) {
  console.log('Total matches:', count);
})
