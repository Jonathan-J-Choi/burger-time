// Requiring our models
const db = require("../models");

// Routes
// =============================================================
module.exports = app => {
  app.get("/", (req, res) => {
    res.render("index");
  });

  // GET route for getting all of the Burgers
  app.get("/burgers", (req, res) => {
    // findAll returns all entries for a table when used with no options
    db.Burgers.findAll({}).then(burgers => {
      res.json(burgers);
    }); 
  });

  // POST route for saving a new Burger
  app.post("/burgers", (req, res) => {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    db.Burgers.create({ burger_name: req.body.burger_name, devoured: 0 })
    .then(() => {
      res.redirect("/")
    });
  });

  // Eat burger
  app.post("/eat/:id", (req, res) =>{
    db.Burgers.update({
      devoured: 1}, 
      {where: {id: req.params.id} 
    })
    .then (() =>{
      req.json(burgers);
    });
  });
};
