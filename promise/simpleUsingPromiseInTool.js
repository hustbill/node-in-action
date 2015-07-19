var Promise = require('bluebird');

var p = Promise.resolve().then(function() {
  console.log('Promise resolve callback');
}, function() {
  console.log('Promise reject callback');
});


var p = Promise.reject().then(function() {
  console.log('Promise resolve callback');
}, function() {
  console.log('Promise reject callback');
});
