class Vacation {
  constructor(destination, length) {
    this.destination = destination
    this.length = length
  }

  print() {
    console.log(`${this.destination} will take ${this.length} days.`)
  }
}


const trip = new Vacation("Santiago, Chile", 7);
trip.print();
// console.log(trip.print()); // Chile will take 7 days


// Immutability
// Array.push 会改变原先array
// Array.concat  则不会改变原先array
//  ES6 spread Operator to concatenate arrays in the same way it can be used to copy objects
let list = [
  {title: "Rad Red"},
  {title: "Lawn"},
  {title: "Party Pink"}
];

const addColorConcate = (title, array) => array.concat(title);
console.log(addColorConcate("Glam Green", list).length);  //4
console.log(list.length);  // 3

const addColor = (title, list) => [...list, {title}]

var newList = addColor("Dark Blue", list);
console.log(newList.length);  //4console.log(newList.length);  //4
console.log(list.length);  // 3

console.log(list.length);  // 3
