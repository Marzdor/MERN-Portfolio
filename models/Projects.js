const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  tech: {
    type: Array,
    required: true
  },
  urls: {
    type: Object,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = Project = mongoose.model("project", ProjectSchema);
