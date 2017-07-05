//Callback functions 
    var error = function (err, response, body) {
    	console.log('ERROR [%s]', err);
    };
    var success = function (data) {
    	console.log('Data [%s]', data);
    };
 
    var Twitter = require('twit');
 



 var config = require('./config');
      var twitter = new Twitter({
    	       consumer_key: config.consumer_key,
    	       consumer_secret: config.consumer_secret,
    	       access_token: config.access_token,
    	       access_token_secret: config.access_token_secret
    	});


      twitter.post('statuses/update', {status: 'test2'},  function(error, tweet, response){
  if(error){
    console.log(error);
  }
  console.log(tweet);  // Tweet body.
  console.log(response);  // Raw response object.
});

/*twitter.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
  console.log(data)
})*/