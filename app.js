const Department = require('./modules/Department.js');

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
