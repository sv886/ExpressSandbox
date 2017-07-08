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

// implement express route params asi "/r/:subReddit"
// access request params via request object params
app.get("/r/:subredditName", function(req, res){
  console.log(req.params);
  // { subredditName: 'dogs' }

  var subreddit = req.params.subredditName;
  res.send("welcome to the " + subreddit.toUpperCase() + " sub!");
});

// implement express route params asi "/r/:subReddit"
app.get("/r/:subredditName/comments/:id/:title", function(req, res){
  console.log(req.params);
  // { subredditName: 'aww', id: '34', title: 'hippo_party' }

  res.send("edgy " + req.params.title + " comment section");
});

// GET * is a catch-all for any URL aside from whatever else we've defined.
// Good for error page. ORDER MATTERS, catch-all should live below
// defined routes.
// "*" => "Page not found."
app.get("*", function(req, res){
  res.send("Page not found.");
});

// Tell express to listen for requests (start server)
app.listen(3000, function(){
  console.log("engine rennin good too boy i tell u wHat");
});
