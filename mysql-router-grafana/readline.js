var fs = require('fs'),
  readline = require('readline');

var rd = readline.createInterface({
  input: fs.createReadStream('metrics.txt'),
  // output: process.stdout,
  console: false
});

rd.on('line', function (line) {
  var startIdx = line.indexOf("metric");
  var endIdx = line.indexOf("refId");
  var metric = line.slice(startIdx, endIdx);

  fs.appendFile('metrics-output.txt', metric + '\n', function (err) {
    if (err) throw err;
    console.log(metric);
  })

});