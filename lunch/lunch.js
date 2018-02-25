var express = require('express');
var app = express();
var host = process.env.NODE_NAME;
var pentry = [
    "Cuscuz com ovo",
    "Churrasco",
    "Hamburguer",
    "Arroz + Feijao",
    "Salada",
    "Filé",
];

var foodGetter = function () {
    return this.pentry[[Math.floor(Math.random()*this.pentry.length)]];
}

app.get('/', function (req, res) {
  res.send({
      "host": host,
      "food": foodGetter()
  });
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
