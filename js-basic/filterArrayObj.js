// Filtering an array of objects
// Ref: http://book.mixu.net/node/ch5.html



function match(item, filter) {
  var keys = Object.keys(filter);
  // true if any true
  return keys.some(function (key) {
    return item[key] == filter[key];
  });
}
var objects = [ { a: 'a', b: 'b', c: 'c'},
  { b: '2', c: '1'},
  { d: '3', e: '4'},
  { e: 'f', c: 'c'} ];

objects.forEach(function(obj) {
  console.log('Result: ', match(obj, { c: 'c', d: '3'}));
});

/*
LOG "Result: " true
LOG "Result: " false
LOG "Result: " true
LOG "Result: " true

*/
