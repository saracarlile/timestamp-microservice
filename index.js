var express = require('express');
var moment = require('moment');
var app = express();
moment().format();

function checkNaturalDate(input) {
  var str = input;
  var re = /(January|February|March|April|May|June?|July|August|September|October|November|December)\s(\d\d?).+?(\d\d\d\d)/;
  var result = str.match(re);
  return result;
}


// viewed at http://localhost:8080

app.use(express.static(__dirname + "/public"));

app.get('/:date', function (req, res) {
  var output = '';
  var input = decodeURI(req.params.date);
  if (!isNaN(input)) {
    var naturalDate = moment.unix(input).format('LL');
    output = { "unix": input, "natural": naturalDate }
  }
  else if (checkNaturalDate(input)) {
    var unix = moment(input).unix();
    output = { "unix": unix, "natural": input }
  }




  // var output = moment(day).format('MM DD YYYY');

 // res.send("hello " + input);

  res.json(output)
});

app.listen(process.env.PORT || 8080);

console.log("Your server is now running at 8080");