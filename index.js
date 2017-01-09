var express = require('express');
var moment = require('moment');
var app = express();
var path = require('path');

function writeME(parms){
   console.log(parms);
}

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/[a-zA-Z0-9., ]+/', function(req, res) {
   res.end(writeME(req.params));
});




app.listen(process.env.PORT || 8080);

console.log("Your server is now running at 8080");