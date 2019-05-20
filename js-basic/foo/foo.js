var foo= {
  "hello" : "world",
  "node"  :   "js",
  "blabalh": "bar"

};

for(var key in foo) {
  console.log(key + ": " + foo[key]);
}

function foo() {}

var a = 0;
var b = '嘘~蛋花汤在睡觉。';
var c = 1.0;
var d = foo;
var e = { "a" : a };
var f = [ 1, 2, 3 ];
var g = null;
var h = undefined;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);
console.log(typeof h);
