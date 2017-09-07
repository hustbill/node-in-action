var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(4041, function(){
    console.log('Server running on 4041...');
});