// https://www.codementor.io/nihantanu/21-essential-javascript-tech-interview-practice-questions-answers-du107p62z

//Q1
var x;   // declaring x
console.log(x);  // output: undefined;

if (typeof x === 'undefined')  // will return true
   console.log('true'); // print true;

// Q2
var y = 1;
  if (function f(){}) {
    y += typeof f;
  }
  console.log(y);  // 1undefined
