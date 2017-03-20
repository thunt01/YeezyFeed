var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'HY4jxxrh5L8fj0gveKekzzvuX',
  consumer_secret: 'CqaB6gzV5hCAgvKEW1hdunwp4fnyYzSloSuD9HqujGMkaZp1YP',
  access_token_key: '756141432730099712-baFVVvHY2gWhL3ujIsJfdTZkP7ACiqn',
  access_token_secret: '9YFuNfiGMmWrEYTDvvmmI6iuOUO5RaTW9QdWyRgFzpmXI'
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweetdata.length);
  }
});

var tweetdata = [];
client.stream('statuses/filter', {track: 'kanye'}, function(stream) {
  stream.on('data', function(tweet) {
	  tweetdata.unshift(tweet);
	  if (tweetdata.length == 101){
	  	tweetdata.pop();
	  	console.log(tweetdata.length);
	  }
  });
 
  stream.on('error', function(error) {
	console.log("Server Error");
  });

});
var express = require('express');
var app = express();

// CORS handling
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};
app.use(allowCrossDomain);

app.get('/feed', function (req, res) {
  res.send(tweetdata);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

