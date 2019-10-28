import { Employee } from "./Employee";

export class Designer extends Employee {
  constructor(obj) {
    super(obj);
    this.role = "designer";
    this.effCoeff = obj.effCoeff;
  }

  get dsgn() {
    return this._dsgn;
  }

  set dvlpr(obj) {
    this._dsgn = obj;
  }
  
  // Each Designer gets the salary = salary*effCoeff

  getSalary() {
    // console.log(parseFloat(this.effCoeff));
    return super.getSalary() * parseFloat(this.effCoeff);
  }
}
