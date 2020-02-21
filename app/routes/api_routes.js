// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });

  // GET route for getting all of the Burgers
  app.get("/burgers", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Burgers.findAll({}).then(function(burgers) {
      // We have access to the Burgers as an argument inside of the callback function
      res.json(burgers);
    });
  });

  // POST route for saving a new Burger
  app.post("/burgers", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    db.Burgers.create({
      burger_name: req.body.burgerName,
    })
    .then(function(dbBurgers) {
      res.redirect("/")
    });
  });

  // Eat burger
  app.post("/eat/:id", (req, res) {
    db.Burgers.update({
      devoured: 1}, 
      {where: {id: req.params.id} 
    })
    .then (function(dbBurgers) {
      req.json(burgers);
    });
  });
};
