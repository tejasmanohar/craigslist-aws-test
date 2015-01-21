var express = require('express');
var app = express();
var request = require('request');
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  request('http://sfbay.craigslist.org/search/apa?query=cheap', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
      res.sendStatus(200);
    } else {
      console.log(error);
      res.sendStatus(500);
    }
  });
});


app.listen(port, function() {
  console.log('Listening on ' + port);
});
