//requre express and the tasks model
var express = require("express");
var task = require("../models/tasks.js");

var router = express.Router();

// Create all routes and set up logic within those routes where required

//get all tasks
router.get("/", function(req, res) {
  task.findAll({}).then(function(data) {
    var hbsObject = {
      tasks: data
    };
    console.log("object: ", hbsObject);
    res.render("index", hbsObject);
  });
});

//insert a task
router.post("/", function(req, res) {
  task.create({
    task_name: req.body.task_name,
    completed: req.body.completed
  }).then(function() {
    res.redirect("/");
  });
});

//update a task
router.put("/:id", function(req, res) {
  task.update(
    { completed: req.body.completed },
    { where: { id: req.params.id } }
  )
  .then(function() {
    res.redirect("/");
    console.log("Updated!");
  });
});

//delete a task
router.delete("/:id", function(req, res) { 
  task.destroy({
    where: { id: req.params.id }
  }).then(function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;