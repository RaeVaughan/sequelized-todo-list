//requre express and the tasks model
var express = require("express");
var task = require("../models/tasks.js");

var router = express.Router();

// Create all routes and set up logic within those routes where required
router.get("/", function(req, res) {
  task.selectAll(function(data) {
    var hbsObject = {
      tasks: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  tasks.insertOne([
    "task_name", "completed"
  ], [
    req.body.task_name, req.body.completed
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  task.updateOne({
    completed: req.body.completed
  }, condition, function() {
    res.redirect("/");
  });
});

// router.delete("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   cat.delete(condition, function() {
//     res.redirect("/");
//   });
// });

// Export routes for server.js to use.
module.exports = router;