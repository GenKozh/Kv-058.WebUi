module.exports = class Employee {
  constructor(obj) {
    //storing input obj in field
    // this.emplData = obj;
    // create 8 const by deconstructing input obj
    const {
      _id,
      firstName,
      lastName,
      salary,
      experience,
      manager,
      team,
      dev_team
    } = obj;
    // create 8 fields with values from deconstructed objs
    this._id = _id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
    this.experience = experience;
    this.manager = manager;
    this.team = team;
    this.dev_team = dev_team;
  }

  // Redefine string representation for Employee as follows: "$firstName $lastName, manager:${manager.lastName}, experience: $experience"

  toString() {
    return `${this.firstName} ${this.lastName}, manager:${this.manager}, experience: ${this.experience}`;
  }

  get empl() {
    return this._empl;
  }

  set empl(obj) {
    this._empl = obj;
  }

  // Each Employee gets the salary, defined in field salary. If experience of employee is > 2 years,
  // he gets bonus + 200$, if experience is > 5 years, he gets salary * 1.2 + bonus 500

  getSalary() {
    if (this.experience > 5) {
      return this.salary * 1.2 + 500;
    } else if (this.experience > 2) {
      return this.salary + 200;
    } else {
      return this.salary;
    }
  }

//declare custom iterator

  [Symbol.iterator]() {
    let element = this.manager;

        return {
            next() {
                let value, done = true;
                if (element !== 0) {
                    value = element.data;
                    done = false;
                    element = element.next;
                }
                return {
                    value: value,
                    done: done
                }
            }
        }
    }
};
