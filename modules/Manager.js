const Employee = require('./Employee.js');

// import { Employee } from "./Employee";

module.exports = class Manager extends Employee {
  constructor(obj) {
    super(obj);
    this.role = "manager";
  }

  get mngr() {
    return this._mngr;
  }

  set mngr(obj) {
    this._mngr = obj;
  }

  getSalary() {

    // Each Manager gets salary +

    // 200$ if his team has >5 members
    // 300$ if his team has >10 members
    // salary*1.1 if more than half of team members are Developers.

    let salary;
    if (this.team.length > 5) {
      salary = super.getSalary() + 200;
    } else if (this.team.length > 10) {
      salary = super.getSalary() + 300;
    } else {
      salary = super.getSalary();
    }
    
    // salary*1.1 if more than half of team members are Developers.

    if (this.team.length / this.dev_team.length > .5) {
      salary = 1.1 * salary;
    }
    return salary;
  }
}

