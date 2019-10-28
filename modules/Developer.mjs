import { Employee } from "./Employee";

export class Developer extends Employee {
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
