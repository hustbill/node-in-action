var request = require('request');

const stackstormOpts = {
  url: ' https://sl73operaapq178/auth/v1/tokens',
  method: 'POST',
  json: true,
  rejectUnauthorized: false,
  headers: {
    'Content-Type': 'application/json',
    'authorization': 'Basic c3QyYWRtaW46YWRtaW4xMjM='
  }
};

request(stackstormOpts, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the JSON
});
/*
$ node index.js
error: null
statusCode: 201
body: { service: false,
  expiry: '2018-10-20T23:43:25.069997Z',
  token: '40bab5a72e6440029ad8bf73ffc4c07a',
  user: 'st2admin',
  id: '5bca6c1d1e27d6393cad3d9a',
  metadata: {} }
*/


  // ref: Javascript base64 http basic authorization encoder 
  // http://www.tuxgraphics.org/toolbox/base64-javascript.html
