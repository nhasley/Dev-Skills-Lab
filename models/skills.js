const skills = ["HTML", "CSS", "Javascript", "MERN Stack"];

module.exports = {
  gitAll,
  gitOne,
  create,
  deleteSkill,
  edit
};
function gitAll() {
  return skills;
}
function gitOne(id) {
  return [skills[id], parseInt(id) + 1];
}
function create(input) {
  skills.push(input);
}
function deleteSkill(id) {
  skills.splice(id, 1);
}
function edit(id, input) {
  skills[parseInt(id)] = input;
}
