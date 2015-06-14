# learn-node
Node.js Express Mongodb

# Node.js quick start examples
Date: June 14, 2015

## A static files combainer server
We use this server combain a few static JS or CSS files
eg,
  combain  /foo/bar.js,foo/baz.js
  
### Design
 ``` 
             +---------+   +-----------+   +----------+
  request -->|  parse  |-->|  combine  |-->|  output  |--> response
             +---------+   +-----------+   +----------+
```			 
### Run
Sever:
node server.js config.json

Browser:
http://localhost:8081/foo/??bar.js,baz.js

###Result
> var fs = require('fs');

> var express = require('express');

> var mongoose = require('mongoose');

> var bunyan = require('bunyan');

> var config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

> var routes = require('./routes');
