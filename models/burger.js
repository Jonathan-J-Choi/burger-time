module.exports = function(sequelize, DataTypes) {
  const Burgers = sequelize.define("Burgers", {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  });
  return Burgers;
};
// For Testing
// sequelize
//     .sync({
//       force: true
//     })
//     .then(function() {
//       Burgers.create({
//         burger_name: "hamburger",
//         devoured: false,
//       }),
//       Burgers.create({
//         burger_name: "cheeseburger",
//         devoured: false,
//       });
//     });
//   return Burgers;
// }