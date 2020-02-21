var express = require("express");
const db = require("./app/models");
var exphbs = require("express-handlebars");
const sequelize = require("sequelize");
var app = express();
var PORT = process.env.PORT || 8080;

// Database
const db=require("./app/models");
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static(__dirname + "/public"));

// 
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
// require("./app/routes/html_routes.js")(app);
require("./app/routes/api_routes.js")(app);

// Starts the server to begin listening
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("Listening on port %s", PORT);
  });
});