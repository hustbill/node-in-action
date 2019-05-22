var express = require('express');
var app = require('express')();
var http = require('http').createServer(app);

var io = require('socket.io')(http);

app.use(express.static(__dirname + '/client');

app.get('/', function (req, res) {
  res.sendfile('index.html');
});

var connectedScokets = {};
var allUsers = [{'nickname:""'}];

io.on('connection', function(socket) {
  // new user enter the chat room
  socket.on('addUser', function(data) {
    // coding there...
  });

  // user send new message
  socket.on('addMessage', function() {
    // coding there...
  });

  // user exit the chat room
  socket.on('disconnect', function() {
    // coding there...
  });

});

http.listen(8080, function() {
  console.log('app is running at port 3000 !');
})
