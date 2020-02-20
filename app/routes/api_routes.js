// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the Burgers
  app.get("/burger", function(req, res) {

    // findAll returns all entries for a table when used with no options
    db.Burger.findAll({}).then(function(dbBurger) {

      // We have access to the Burgers as an argument inside of the callback function
      res.json(dbBurger);
    });
  });

  // POST route for saving a new Burger

  app.post("/newBurger", function(req, res) {
    console.log(req.body);

    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Burger.create({
      burger_name: req.body.burgerName,
      devoured: false,
    })
    .then(function(dbBurger) {
      // We have access to the new Burger as an argument inside of the callback function
      res.json(dbBurgers);
    });
  });

  // DELETE route for deleting Burgers. We can get the id of the Burger we want to delete from
  // req.params.id
  app.delete("/:id", function(req, res) {});


  // PUT route for updating Burgers. We can get the updated Burger from req.body
  app.put("", function(req, res) {});

};
