const express = require("express");
const app = express();
const port = process.env.PORT || 8080;


app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

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

var Twitter = require('twit');




var config = require('./config');
var twitter = new Twitter({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token: config.access_token,
    access_token_secret: config.access_token_secret
});

function post(message) {
    twitter.post('statuses/update', { status: message }, function (error, tweet, response) {
        if (error) {
            console.log(error);
        }
        console.log(tweet);  // Tweet body.
        console.log(response);  // Raw response object.
    });
}


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


function get(filter) {
    twitter.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function (error, data, response) {
        console.log(data)
        if (error) {
            console.log(error);
        }
        console.log(tweet);  // Tweet body.
        console.log(response);  // Raw response object.
    });
} 