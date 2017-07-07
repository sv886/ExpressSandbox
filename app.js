// import express module
var express = require("express");
// execute and save to variable 'app'
var app = express();

// app.whateverexpresscomeswith

// ########################################################
// Routes
// ########################################################

// "/" => "Hai there!"
app.get("/", function(req, res){
  res.send("Hai there!");
});
// "/adieu" => "adios cabrón"
app.get("/adieu", function(req, res){
  res.send("adios cabrón");
});
// "/dog" => "MEOW"
app.get("/dog", function(req, res){
  res.send("MEOW");
});


// Tell express to listen for requests (start server)

app.listen(3000, function(){
  console.log("engine rennin good too boy i tell u wHat");
});
