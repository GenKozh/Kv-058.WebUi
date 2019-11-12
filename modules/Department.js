const EmployeeFactory = require('./EmployeeFactory.js');

// import {EmployeeFactory} from './EmployeeFactory';

module.exports = class Department {
  constructor(obj) {
        this.depData = obj;
    };
    
    get dep(){
      return this._dep;
      }

      set dep(obj){ 
      this._dep = obj; 
    }

    listBaseSalary() {
      for(let member of this.depData){
        console.log(`${member.firstName} ${member.lastName}: got base salary: ${member.salary}`);
      }
    }
    callFactory() {

      const factory = new EmployeeFactory();
      const employees = []; 

      for(let member of this.depData){
        employees[member._id] = factory.createEmployees(member);
      }
      return employees;
    }

}

