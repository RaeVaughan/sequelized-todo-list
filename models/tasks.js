// Dependencies
// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references connection to the DB
var sequelize = require("../config/connection.js");

// Creates a "Task" model that matches up with DB
var Task = sequelize.define("task", {
  task_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

// Syncs with DB
Task.sync();

// Makes the model available for other files (will also create a table)
module.exports = Task;
