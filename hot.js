// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Table Data
// =============================================================
var characters = [
  {
    routeName: "user1",
    name: "Brian",
    phone: "7341230000",
    email: "me@me.com"    ,
    guests: 2,
    uniqueID: 1984
  },
  {
    routeName: "user1",
    name: "Moira",
    phone: "6081230000",
    email: "me@me.com"  ,
    guests: 2,
    uniqueID: 1984
  },
  {
    routeName: "user1",
    name: "Brian",
    phone: "3135550000",
    email: "me@me.com"    ,
    guests: 2,
    uniqueID: 1984
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
  });

// Displays all characters
/*app.get("/api/characters", function(req, res) {
  return res.json(characters);
}); */
/*
// Displays a single character, or returns false
app.get("/api/characters/:character", function(req, res) {
  var chosen = req.params.character;

  console.log(chosen);

  for (var i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  return res.json(false);
});
*/

// Create New Characters - takes in JSON input
app.post("/api/characters", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newCharacter = req.body;
  console.log("newCharacter", newCharacter)

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newCharacter);

  characters.push(newCharacter);

  res.json(newCharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
