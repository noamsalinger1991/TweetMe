const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
var send = require('sendMessages.js');
var get = require('getTweets.js');


app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

// set the home page route
app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
