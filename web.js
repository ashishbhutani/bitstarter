var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  //var buf = new Buffer()
  var buf = fs.readFileSync('index.html')
  var str = buf.toString();
  //console.log(str)
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listeningn " + port);
});
