// ########################################################
// Setup
// ########################################################

// import express module
var express = require("express");
// execute and save to variable 'app'
var app = express();
// app.whateverexpresscomeswith

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

var request = require('request');
// simple way to make http calls

// temporarily scope friends outside of route function for post lesson
var friends = ["ronny", "bobby", "ricky", "mike"];

// ########################################################
// Assets
// ########################################################
// tell express to serve contents of public directory
app.use(express.static("public"));
// tell express to expect ejs templates
app.set("view engine", "ejs");



// ########################################################
// Routes (Basics Section)
// ########################################################

// // "/" => "Hai there!"
// app.get("/", function(req, res){
//   res.send("Hai there!");
// });

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



// ########################################################
// Routes (Template Section)
// ########################################################
// NOTE: npm install ejs to utilize ejs templates

// "/" => render embedded javascript template with
// the response #render method.
app.get("/", function(req, res){
  res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res){
  var thing = req.params.thing;
  res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
  var posts = [
    {title: "Post 1", author: "Charlie"},
    {title: "Post 2", author: "Chuck"},
    {title: "Post 3", author: "Chaz"}
  ]

  res.render("posts", {posts: posts});
});

app.get("/friends", function(req, res){
  res.render("friends", {friends: friends});
});

// post route for creating new fraindz
app.post("/addFriend", function(req, res){
  newFriend = req.body.newfriend
  friends.push(newFriend);
  res.redirect("/friends");
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
