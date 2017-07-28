// Import the orm to create functions that will interact with the database
var orm = require("../config/orm.js");

var task = {
  all: function(cb) {
    orm.selectAll("tasks", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.insertOne("tasks", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
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