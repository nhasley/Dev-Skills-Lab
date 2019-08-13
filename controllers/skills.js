var Skill = require("../models/skills");

module.exports = {
  index,
  show
};

function show(req, res) {
  res.render("skills/show", {
    skill: Skill.getOne(req.params.id),
    skillNum: parseInt(req.params.id) + 1
  });
}

function index(req, res) {
  res.render("skills/index", {
    skills: Skills.getAll()
  });
}
