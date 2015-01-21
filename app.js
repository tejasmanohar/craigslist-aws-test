var express = require('express');
var app = express();
var request = require('request');
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  request('http://sfbay.craigslist.org/search/apa?query=cheap&_=123456', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.sendStatus(200);
      console.log(body);
      if(body.indexOf("<time datetime=\"") > 0) {
        console.log('success');
      }
    } else {
      res.sendStatus(500);
      console.log(error);
    }
  });
});


app.listen(port, function() {
  console.log('Listening on ' + port);
});
