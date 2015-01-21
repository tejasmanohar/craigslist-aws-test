var express = require('express');
var app = express();

var port = process.env.PORT || 5000;

app.get('/', function(req, res) {
  res.sendStatus(200);
});


app.listen(port, function() {
  console.log('Listening on ' + port);
});
