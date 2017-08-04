// Import the orm to create functions that will interact with the database
var orm = require("../config/orm.js");

var task = {
  selectAll: function(cb) {
    debugger
    orm.selectAll("tasks", function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    orm.insertOne("tasks", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("tasks", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("tasks", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller
module.exports = task;