var express = require('express');
var moment = require('moment');
var app = express();
var path = require('path');



// viewed at http://localhost:8080

app.use(express.static(__dirname + "/public"));

app.get('/:date',function(req,res){
  var input = decodeURI(req.params.date);
  
  res.send("hello " + input);
});

app.listen(process.env.PORT || 8080);

console.log("Your server is now running at 8080");