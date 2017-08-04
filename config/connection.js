var Sequelize = require("sequelize");

var sequelize = new Sequelize("sequelize_library", "root", "password", {
  host: "localhost",
  password: "root",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;