var http = require('http');

var counter1 = require('./util/counter.js');
var counter2 = require('./util/counter.js');
var Queue = require('./util/Queue.js');

console.log(counter1.count());
console.log(counter2.count());
console.log(counter2.count());

var dance = (maleDancers, femaleDancers) => {
	var output = [];
	output.push("The dance parters are:");
	while (!femaleDancers.empty() && !maleDancers.empty()) {
		person = femaleDancers.dequeue();

		output.push("Femal dancer is: " + person.name);
		person = maleDancers.dequeue();
		output.push(" and the male dancer is: " + person.name);
	}	
	return output;
}

var print = (str) => {
	console.log(str);
}

// test promgram
const femaleDancers = new Queue();
const maleDancers = new Queue();

const persons = [
	"F Allison McMIllan",
	"M Frank Optiz",
	"M Mason Mimillan",
	"M Bowen Zhang",
	"F Cheryl Ferenback",
	"M Raymond williams",
	"F Jennifer Ingram",
	"M Bryan Frazer",
	"M David Durr",
	"M Hua Zhang",
	"F Alice Martin",
	"F Aurora Adney"
];

femaleDancers.getDancers("F", persons);
maleDancers.getDancers("M", persons);

var result = dance(maleDancers, femaleDancers);

if (!femaleDancers.empty()) {
	result.concat(femaleDancers.front().name + " is waiting to dance.");
}

if (!maleDancers.empty()) {
	result.concat(maleDancers.front().name + " is waiting to dance.");
}

var replaceComma  = (str) => {
	str = str.replace(/,/g, '<br>');
	return str;
}



for (var i = 0; i < result.length; i++) {
	result[i] = result[i].replace(/,/g, '<br>');
	 result[i] = result[i].concat('\n');
}
console.log(result);

http.createServer( function (request, response) {
	response.writeHead(200, {'Content-Type': 'text-plain'});
	response.end(JSON.stringify(maleDancers) + "\n" + result);
}).listen(8080, 'localhost');

console.log('Sever running at http://localhost:8080/');
