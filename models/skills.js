const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Javascript" },
  { skill: "MERN Stack" }
];

module.exports = {
  getAll,
  getOne
};

function getOne(id) {
  return skills[id];
}

function getAll() {
  return skills;
}
