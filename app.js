const express = require('express');
const expressApp = express();

const Department = require('./modules/department.js');

// import {Department} from './modules/Department';


const data = 
[
  {
    '_id': 0,
    'role': 'manager',
    'firstName': 'Bill',
    'lastName': 'Clinton',
    'salary': 1000,
    'experience': 20,
    'manager': 0,
    'team': [1,2,3],
    'dev_team': [2,3],
    'effCoeff': 0
    
  },
  {
    '_id': 1,
    'role': 'designer',
    'firstName': 'Vladimir',
    'lastName': 'Lenin',
    'salary': 800,
    'experience': 1,
    'manager': 1,
    'team': [],
    'dev_team': [],
    'effCoeff': .5
    
  },
  {
    '_id': 2,
    'role': 'developer',
    'firstName': 'Entony',
    'lastName': 'Hopkins',
    'salary': 900,
    'experience': 1.5,
    'manager': 1,
    'team': [],
    'dev_team': [],
    'effCoeff': 0
    
  },
  {
    '_id': 3,
    'role': 'developer',
    'firstName': 'John',
    'lastName': 'Travolta',
    'salary': 900,
    'experience': 10,
    'manager': 1,
    'team': [],
    'dev_team': [],
    'effCoeff': 0
    
  },
  {
    '_id': 4,
    'role': 'manager',
    'firstName': 'George',
    'lastName': 'Bush',
    'salary': 1000,
    'experience': 20,
    'manager': 0,
    'team': [5],
    'dev_team': [],
    'effCoeff': 0
    
  },
  {
    '_id': 5,
    'role': 'designer',
    'firstName': 'Barbara',
    'lastName': 'Streisand',
    'salary': 800,
    'experience': 1,
    'manager': 4,
    'team': [],
    'dev_team': [],
    'effCoeff': .5
    
  },
  {
    '_id': 5,
    'role': 'manager',
    'firstName': 'Yury',
    'lastName': 'Gagarin',
    'salary': 1000,
    'experience': 1,
    'manager': 0,
    'team': [],
    'dev_team': [],
    'effCoeff': .5
  },
  
];

const newDep = new Department(data);

newDep.empl = newDep.callFactory();

// Department should have list of managers(which have their own teams)

newDep.managersArray = [];

for (let {firstName, lastName, role, team} of newDep.empl) {
  if (role === 'manager' && team.length > 0) {
    newDep.managersArray.push(`${firstName} ${lastName}`);
  } 
}

// Department should be able to give salary (for each employee write message: "$firstName $lastName: got salary: $salaryValue")

newDep.giveSalary = () => {
  for(let member of newDep.empl){
    console.log(`${member.firstName} ${member.lastName}: got salary: ${member.getSalary()}`);
  }
}

// Redefine string representation for Employee as follows: "$firstName $lastName, manager:${manager.lastName}, experience: $experience"
for (let member in newDep.empl) {
  console.log(newDep.empl[member].toString());
}

console.log(newDep.managersArray);

newDep.listBaseSalary();

newDep.giveSalary();


// GET /api/v1/employees should return a list of all employees except managers in format
//  [{"type": "designer", "id": 0, "manager_id": 1, other data...}, 
//  {"type": "developer", "id": 0, "manager_id": 1, other data...}], 
//  where id is the index of employee in the general array, but do not return the 
//  calculated salary with bonuses in the list!!!! Return manager_id if he has a manager.

expressApp.get('/api/v1/employees', (req, res) => {
  res.send(data)
}); 

// POST /api/v1/employees should accept an object 
// {"type": "designer", other data...} (no id in post, as client does not know it when creating new employees) 
// and depending on type field create an instance of Developer or Designer.

// expressApp.post('/api/v1/employees', (req, res) => {
//   res.post({
//     firstName: 'Boris',
//     lastName: 'Blade'
//   })
// }); 


// GET /api/v1/employees/:id should return all info about specific employee from general employee list in format 
// ["type": "designer", "id": 0, "salary": 1500, other data...}, 
// here you should return the employee's salary with bonuses!

// expressApp.get('/api/v1/employees/:id', (req, res) => {
//   res.post({
//     firstName: 'Boris',
//     lastName: 'Blade'
//   })
// }); 

// GET /api/v1/managers should return a list of all managers in format [{"type": "manager", "id": 0, other data...}], 
// where id is the index of manager in the managers array, do not return the calculated salary with bonuses in the list, 
// and do not return the team members!!!!

// POST /api/v1/managers should accept an object 
// {"type": "manager", other data...} (no id in post, as client does not know it 
//   when creating new employees) and create a Manager in you app.

// GET /api/v1/managers/:id should return all info about specific manager in format 
// ["type": "manager", "id": 0, "salary": 1500, other data...}, here you should return the 
// managers's salary with bonuses. Do not return the team list!.

// GET /api/v1/managers/:id/team should return a list of this manager's team in format 
// [{"type": "designer", "id": 0, other data...}, {"type": "developer", other data...}]

// POST /api/v1/managers/:id/team should accept an object {"employee_id": 0} 
// and should add an employee from general employee list by his employee_id (or index) to manager's team





// const app = express()
//     .use(bodyParser.json())
//     .use(bodyParser.urlencoded({ extended: false }))
//     .post('/pets', (req, res, next) => {
//         pets.push(new Pet(req.body.type, req.body.name));
//         res.end();
//     })
//     .get('/pets', (req, res, next) => {
//         res.end(JSON.stringify(pets));
//     })
//     .put('/pets/:id', (req, res, next) => {
//         pets[req.params.id] = req.body;
//         res.end();
//     })
//     .get('/pets/:id', (req,res, next) => {
//         res.end(JSON.stringify(pets[req.params.id]));
//     })
//     .listen(3000);




const sever = expressApp.listen(3000, () => { 
  console.log("Listenting on port 3000");
})