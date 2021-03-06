const data = [
  {
    _id: 0,
    role: "manager",
    firstName: "Bill",
    lastName: "Clinton",
    salary: 1000,
    experience: 20,
    manager: 0,
    team: [1, 2, 3],
    dev_team: [2, 3],
    effCoeff: 0
  },
  {
    _id: 1,
    role: "designer",
    firstName: "Vladimir",
    lastName: "Lenin",
    salary: 800,
    experience: 1,
    manager: 1,
    team: [],
    dev_team: [],
    effCoeff: 0.5
  },
  {
    _id: 2,
    role: "developer",
    firstName: "Entony",
    lastName: "Hopkins",
    salary: 900,
    experience: 1.5,
    manager: 1,
    team: [],
    dev_team: [],
    effCoeff: 0
  },
  {
    _id: 3,
    role: "developer",
    firstName: "John",
    lastName: "Travolta",
    salary: 900,
    experience: 10,
    manager: 1,
    team: [],
    dev_team: [],
    effCoeff: 0
  },
  {
    _id: 4,
    role: "manager",
    firstName: "George",
    lastName: "Bush",
    salary: 1000,
    experience: 20,
    manager: 0,
    team: [5],
    dev_team: [],
    effCoeff: 0
  },
  {
    _id: 5,
    role: "designer",
    firstName: "Barbara",
    lastName: "Streisand",
    salary: 800,
    experience: 1,
    manager: 4,
    team: [],
    dev_team: [],
    effCoeff: 0.5
  },
  {
    _id: 6,
    role: "manager",
    firstName: "Yury",
    lastName: "Gagarin",
    salary: 1000,
    experience: 1,
    manager: 0,
    team: [],
    dev_team: [],
    effCoeff: 0.5
  }
];

module.exports = data;