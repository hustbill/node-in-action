var counter1 = require('./util/counter.js');
var counter2 = require('./util/counter.js');
var Queue = require('./util/Queue.js');

console.log(counter1.count());
console.log(counter2.count());
console.log(counter2.count());

var dance = (maleDancers, femaleDancers) => {
    var output = [];
    output.push("The dance parters are:\n");
    while (!femaleDancers.empty() && !maleDancers.empty()) {
        person = femaleDancers.dequeue();

        output.push("Femal dancer is: " + person.name);
        person = maleDancers.dequeue();
        output.push(" and the male dancer is: " + person.name);
    }
    output.push("\n");
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

var output = dance(maleDancers, femaleDancers);
console.log(output);

if (!femaleDancers.empty()) {
    console.log(femaleDancers.front().name + " is waiting to dance.");
}

if (!maleDancers.empty()) {
    console.log(maleDancers.front().name + " is waiting to dance.");
}
