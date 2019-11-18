//================= Modular Node OOP part ===================

const Department = require("./modules/Department.js");
const EmployeeFactory = require('./modules/EmployeeFactory.js');

// Array is the best DB

const data = require("./modules/departmentDb.js");


const newDep = new Department(data);

newDep.empl = newDep.callFactory();

// Department should have list of managers(which have their own teams)

newDep.managersArray = [];

for (let { firstName, lastName, role, team } of newDep.empl) {
  if (role === "manager" && team.length > 0) {
    newDep.managersArray.push(`${firstName} ${lastName}`);
  }
}

//============ Console output fot results for OOP part =================

// Department should be able to give salary (for each employee write message: "$firstName $lastName: got salary: $salaryValue")

// newDep.giveSalary = () => {
//   for(let member of newDep.empl){
//     console.log(`${member.firstName} ${member.lastName}: got salary: ${member.getSalary()}`);
//   }
// }

// Redefine string representation for Employee as follows: "$firstName $lastName, manager:${manager.lastName}, experience: $experience"
// for (let member in newDep.empl) {
//   console.log(newDep.empl[member].toString());
// }

// console.log(newDep.managersArray);
// newDep.listBaseSalary();
// newDep.giveSalary();

//================ Express app part ==================

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//Paths for GET/POST requests

const __depEmployees = "/api/v1/employees";
const __depManagers = "/api/v1/managers";

//Links for Bootstrap NavBar

let store = {
  department: {
    page: "Department listing",
    content: "Home, sweet home"
  },
  employees: {
    page: "Department Employee",
    content: "Employees"
  },
  managers: {
    page: "Department Managers",
    content: "Personal stuff"
  }
};


let storeKeys = Object.keys(store);

app.use(bodyParser.urlencoded({ extended: false }));

app
  .get('/department', (req, res) => {
    res.render("main.pug", {
      page: "Department Employees",
      links: storeKeys,
      data: newDep.empl,
      id: 0
    });
  });

app
  .get('/',(req, res) => {
  res.redirect("/department");
  return;
  });

app
  .get('/employees',(req, res) => {
  res.redirect("/api/v1/employees");
  return;
  });

app
  .get('/managers',(req, res) => {
  res.redirect("/api/v1/managers");
  return;
  });

app
  .get('/newempl',(req, res) => {
    res.render("newempl.pug", {
      page: "Add New Employee",
      links: storeKeys,
    });
  });
app
  .get('/newmanag',(req, res) => {
    res.render("newmanag.pug", {
      page: "Add New Manager",
      links: storeKeys,
    });
  });

app
  .get('/api/v1/employees/:id', (req, res) => {
    res.send(JSON.stringify(
        newDep.empl.map(({ role: type, _id: id, manager: manager_id, salary: salary, ...others }) => ({
          type,
          id,
          manager_id,
          ...others
        }))[req.params.id]
      )
    );
  });

app
  .get('/api/v1/managers/:id', (req, res) => {
    res.send(JSON.stringify(
        newDep.empl.map(({ role: type, _id: id, manager: manager_id, salary: salary, team, dev_team, ...others }) => ({
          type,
          id,
          manager_id,
          salary,
          ...others
        }))[req.params.id]
      )
    );
  });

app
  .route(__depEmployees)
  .get((req, res) => {
    // console.log(newDep.empl);
    res.send(JSON.stringify(
        newDep.empl.map(({ role: type, _id: id, manager: manager_id, salary: salary, ...others }) => ({
          type,
          id,
          manager_id,
          ...others
        }))
      )
    );
  })
  .post((req, res) => {
    const data = req.body;
    console.log(data);
    if (data.role && data.salary && data.firstName && data.lastName && data.experience && data.manager) {
      newDep.empl.push(((obj) => {
        obj = data;
        const factory = new EmployeeFactory();
        let employee = {}; 
        employee =  factory.createEmployees(obj)
        return employee;
      })());
    }
    res.redirect("/");
  });



// GET /api/v1/managers/:id/team should return a list of this manager's team in format
// [{"type": "designer", "id": 0, other data...}, {"type": "developer", other data...}]
// POST /api/v1/managers/:id/team should accept an object {"employee_id": 0}
// and should add an employee from general employee list by his employee_id (or index) to manager's team



app
  .route(__depManagers)
  .get((req, res) => {
    // console.log(newDep.empl);

    const reduceArray = newDep.empl.reduce((carry, item) => {
      if (typeof item === "object" && item.role === "manager") {
        carry.push(item);
      }
      return carry;
    }, []);

    const managersArray = reduceArray.map(
    ({ role: type, _id: _id, salary, team, dev_team, ...others }, id) => (
      {
      type,
      id,
      ...others
    }));

    res.send(
          JSON.stringify(managersArray)
      )
    return;
  })
  .post((req, res) => {
    const data = req.body;
    console.log(data);
    if (
      data.role &&
      data.salary &&
      data.firstName &&
      data.lastName &&
      data.experience &&
      data.manager
    ) {
      newDep.empl.push(
        (obj => {
          obj = data;
          const factory = new EmployeeFactory();
          let employee = {};
          employee = factory.createEmployees(obj);
          return employee;
        })()
      );
    }
    res.redirect("/");
  });

const server = app.listen(process.env.PORT || 5000, function() {
  console.log("Listening on port 5000");
});
