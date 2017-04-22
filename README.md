# learn-node
Node.js Express Mongodb

# Node.js quick start examples
Date: June 14, 2015

# node-influx 
The InfluxDB Client for Node.js and Browsers  
[node-influx](https://node-influx.github.io/)
Date: April 22, 2017  

```code
cd ./automonitor-ui/src
node app.js 
```
In this example we'll create a server which has an index page that prints out "hello world", and a page http://localhost:3000/edges which prints out the last ten response times that InfluxDB gave us.
The end result should look something like this:

```js
➜  ~ curl -s localhost:3000
Hello world!
➜  ~ curl -s localhost:3000/times | jq
[
  {
    "time": "2016-10-09T19:13:26.815Z",
    "duration": 205,
    "host": "ares.peet.io",
    "path": "/"
  }
]
```

Get started by installing and importing everything we need! This tutorial assumes you're running Node 6.

```
npm install influx express
```



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
