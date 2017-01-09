var express = require('express');
var moment = require('moment');
var app = express();

app.all("*", function(request, response, next) {
  response.writeHead(200, { "Content-Type": 'text/html' });
  next();
});
