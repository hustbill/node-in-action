// Learning React Chapter 2 Samples

// Declaring Variables in ES6
const pizza = true;

// pizza = false;
// TypeError: Assignment to constant variable.

// let

var name = "JavaScript"

if (name) {
  var name = "React"
  console.log('block', name)  // block React
}
console.log('global', name)   // global React

var topic = "JavaScript"
if (topic) {
  let topic = "React"
  console.log('block', topic)  // React
}
console.log('global', topic)   // JavaScript

// curly braces {} dont' block off a variable's scope is in for loops
/*
var div,
    container = document.getElementById('container')

for (var i = 0; i < 5; i++) {
  div = document.createElement('div')
  div.onClick = function() {
    alert('This is box #' + i)
  }
  container.appendChild(div);
}
// http://jsbin.com/gapoxa/5/edit?html,js,output
*/


// arrow functions
//  2017.08.27 7:14AM

var lordify = (firstName, land) => `${firstName} of ${land}`

console.log( lordify("Dale", "Maryland"))  // Dale of Maryland

var tahoe = {
   resorts:["Kirkwood", "Squw", "Alpine", "Heavenly", "Northstar"],
    print: function(delay=1000) {
      setTimeout(() => {
        //console.log(this === window)
        console.log(this.resorts.join(","));
      }, delay)
    }
}

tahoe.print(); // false


// Destructuring Assignment
var tahoe1 = {
        type: "lake",
        name: "tahoe",
        state: "california"
    }
    var {name, state} = tahoe1
    var tahoeCity = {
        state: tahoe1.state,
        type: "city"
    }
    console.log(tahoeCity.type, tahoeCity.state)

var sandwich =  {
      bread: "dutch crunch",
      meat: "tuna",
      cheese: "swiss",
      toppings: ["lettuce", "tomato", "mustard"]
}

var {bread, meat} = sandwich

console.log(bread, meat)

bread = "garlic"
meat = "turkey"

console.log(bread,meat)
console.log(sandwich.bread, sandwich.meat)


// The Spread Operator

var peaks = ["Tallac", "Ralston", "Rose"]
var canyons = ["Ward", "Blackwood"]
var tahoe2 = [...peaks, ...canyons]

console.log(tahoe2.join(', ')) //  Tallac, Ralston,  Rose, Ward,  Blackwood
