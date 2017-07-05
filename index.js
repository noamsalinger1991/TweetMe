const express = require("express");
const app = express();
const port = process.env.PORT || 8080;



app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
