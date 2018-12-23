const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.json()); // to support JSON-encoded bodies
router.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

// Project Model
const Project = require("../../models/Projects");

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
router.get("/edit=:name", (req, res) => {
  Project.find({ name: req.params.name }).then(projects => res.json(projects));
});

// @route POST api/projects
// @desc  Edit a project
// @access Public
router.post("/edit=:id", (req, res) => {
  const newData = {
    name: req.body.name,
    rarity: req.body.rarity,
    location: req.body.location.split(","),
    description: req.body.description
  };
  Project.findByIdAndUpdate(
    req.params.id,
    newData,
    { new: true },
    (err, Project) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/edit");
      }
    }
  );
});

// @route POST api/projects
// @desc  Create a project
// @access Public
router.post("/", (req, res) => {
  newProject = new Project({
    siteName: req.body.siteName,
    imageName: req.body.imageName,
    tags: req.body.tags,
    url: req.body.url,
    description: req.body.description
  });

  newProject.save().then(project => res.json(project));
});

// @route DELETE api/projects/:id
// @desc  Delete a project
// @access Public
router.delete("/:id", (req, res) => {
  Project.findById(req.params.id)
    .then(project => project.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
