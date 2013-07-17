var express = require('express');
var fs = require('fs');

var buff = fs.readFileSync("index.html");
var outputLine = buff.toString('utf8', 0);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(outputLine);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
