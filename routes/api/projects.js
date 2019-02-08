const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.json()); // to support JSON-encoded bodies
router.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

const auth = require("../../auth");

// Project Model
const Project = require("../../models/Projects");

router.get("/auth", auth, (req, res) => {
  res.json({ success: true });
});

// @route GET api/projects
// @desc  get all projects
// @access Public
router.get("/", (req, res) => {
  Project.find()
    .sort({ name: 1 })
    .then(projects => res.json(projects));
});

// @route GET api/projects
// @desc  get spesific project
// @access Public
router.get("/edit=:id", (req, res) => {
  Project.findById(req.params.id).then(projects => res.json(projects));
});

// @route POST api/projects
// @desc  Edit a project
// @access Public
router.post("/edit=:id", auth, (req, res) => {
  const newData = {
    name: req.body.name,
    tech: req.body.tech.split(","),
    urls: { live: req.body.live, code: req.body.code },
    description: req.body.description
  };
  Project.findByIdAndUpdate(req.params.id, newData, { new: true }, err => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/admin");
    }
  });
});

// @route POST api/projects
// @desc  Create a project
// @access Public
router.post("/", auth, (req, res) => {
  newProject = new Project({
    name: req.body.name,
    tech: req.body.tech.split(","),
    urls: { live: req.body.live, code: req.body.code },
    description: req.body.description
  });

  newProject.save().then(() => res.redirect("/admin"));
});

// @route DELETE api/projects/:id
// @desc  Delete a project
// @access Public
router.delete("/:id", auth, (req, res) => {
  Project.findById(req.params.id)
    .then(project => project.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
