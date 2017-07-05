const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
var Twitter = require('twit');


app.set('views', __dirname + '/views');

// app.set('view engine', 'ejs');

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

//Callback functions 
var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};
var success = function (data) {
    console.log('Data [%s]', data);
};

//loads token for aouth
var config = require('./config');
var twitter = new Twitter({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token: config.access_token,
    access_token_secret: config.access_token_secret
});

//post endpoint for posting tweets
app.post('/post' , function(req ,res){
	
	const message = req.query.message;
	console.log(message);
	twitter.post('statuses/update', {status: message},  function(error, tweet, response){
	  if(error){
		console.log(error);
	  }
	  console.log(tweet);  // Tweet body.
	  console.log(response);  // Raw response object.

	  res.send('message sent').end();
	});
});

// get endpoint for getting tweets
app.get('/get' , function(req ,res){
twitter.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(error, data, response) {
  console.log(data)
  if(error){
    console.log(error);
  }
  
  res.send(data).end();
})	
});
