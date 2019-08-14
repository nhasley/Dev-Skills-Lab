var skills = require("../models/skills");

function index(req, res) {
  res.render("skills/index", { skills: skills.gitAll() });
}
function show(req, res) {
  res.render("skills/show", { skills: skills.gitOne(req.params.id) });
}
function create(req, res) {
  skills.create(req.body.newSkill);
  res.redirect("/skills");
}
function skillDelete(req, res) {
  skills.deleteSkill(req.params.id);
  res.redirect("/skills");
}
function update(req, res) {
  skills.edit(req.params.id, req.body.newSkill);
  res.redirect("/skills");
}
module.exports = {
  index,
  show,
  create,
  delete: skillDelete,
  update
};
