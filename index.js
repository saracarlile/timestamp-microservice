var express = require('express');
var moment = require('moment');
var app = express();



app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + '/public/css/'));
//server index.html out of /public

app.get('/:date', function (req, res) {
  var output = '';
  var input = decodeURI(req.params.date);
  if (!isNaN(input)) {
    var naturalDate = moment.unix(input).format('LL');
    output = { "unix": input, "natural": naturalDate }
  }
  else if (moment(input).isValid()) {
    var unix = moment(input).unix();
    output = { "unix": unix, "natural": input }
  }
  else {
    output = { "unix": null, "natural": null }
  }

  res.json(output)
});

app.listen(process.env.PORT || 8080);

console.log("server now running - port 8080 on localhost");
// viewed at http://localhost:8080