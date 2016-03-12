// create a simple http server
var http = require('http');  


http.createServer(function (req, res) {
    res.writeHead(200, {'Context-Type' : 'text/html'});   // 200 means success
    res.write('<meta charset="UTF-8"> <h1> I am ready for the interview! </h1><font color="red"> this server is very simple!</font>');
        res.end();
}).listen(3000); 