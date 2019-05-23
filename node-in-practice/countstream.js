var Writable = require('stream').Writable;
var util = require('util');

module.exports = CountStream;

util.inherits(CountStream, Writable);  // inherit from Writable stream.

function CountStream(matchText, options) {
  Writable.call(this, options);
  this.count = 0;
  this.matcher = new RegExp(matchText, 'ig');
  // Create a RegExp object that matches globally and ignore case.
}

CountStream.prototype._write = function(chunk, encoding, cb) {
  var matches = chunk.toString().match(this.matcher);
  // Convert the current chunk of input into a string and  use it
  // to count matches
  if (matches) {
    this.count += matches.length;
  }
  cb();
}

CountStream.prototype.end = function() {
  this.emit('total', this.count); // when the stream has ended, 'publish' the
  // total number of matches
}
