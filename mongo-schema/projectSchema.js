const mongoose = require('mongoose');

const WritingProjectsSchema = new mongoose.Schema({
  id: Number,
  user: String,
  name: String,
  type: String,
  description: String,
  status: Number,
  folders: Array,
  tags: Array,
},
{
  collection: "WritingProject"
});

const WritingProject = new mongoose.model("WritingProject", WritingProjectsSchema);

module.exports = WritingProject;
