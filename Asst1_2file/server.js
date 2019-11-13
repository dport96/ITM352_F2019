var http = require('http');
var app = require('./app'); 

http.createServer(app.handleRequest).listen(8080);
console.log("Listening on 8080");