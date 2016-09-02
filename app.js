/*
console.log("Hola Mundo");

var unaVariable = "hola";
console.log(unaVariable);

unaVariable = true;
console.log(unaVariable);

unaVariable = {
  nombre : "Yo soy una variable"
}
unaVariable.nombre = "Cambiando el nombre"
console.log(unaVariable);
*/

var express = require("express");
var ejs = require("ejs");

var app = express();

app.set("view engine", "ejs");

app.get('/',function(req, res) {
    res.render('index');
});

app.listen(8080, function () {
  console.log("escuchando en 8080");
})
