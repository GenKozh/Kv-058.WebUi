const Employee = require('./employee.js');

// import { Employee } from "./Employee";

module.exports = class Developer extends Employee {
  constructor(obj) {
    super(obj);
    this.role = "developer";
  }

  get dvlpr() {
    return this._dvlpr;
  }

  set dvlpr(obj) {
    this._dvlpr = obj;
  }


}
