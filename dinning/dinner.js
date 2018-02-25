var express = require('express');
var app = express();
var host = process.env.NODE_NAME;
var pentry = [
    "Cuscuz com ovo",
    "Sanduiche",
    "Sopa",
    "Polenta",
    "Salada",
    "Tartar",
];

var foodGetter = function () {
    return pentry[[Math.floor(Math.random()*pentry.length)]];
}

app.get('/', function (req, res) {
  res.json({
      "host": host,
      "food": foodGetter()
  });
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
