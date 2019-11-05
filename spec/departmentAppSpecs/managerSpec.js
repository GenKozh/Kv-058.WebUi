describe("Manager test", function() {
  const Employee = require("../../modules/employee");
  const Manager = require("../../modules/manager");
  let employee;
  let manager;

  beforeAll(() => {
    const testPersonData1 = {
      _id: 4,
      role: "manager",
      firstName: "George",
      lastName: "Bush",
      salary: 1000,
      experience: 1,
      manager: 0,
      team: [5],
      dev_team: [],
      effCoeff: 0
    };
    const testPersonData2 = {
      _id: 4,
      role: "manager",
      firstName: "George",
      lastName: "Bush",
      salary: 1000,
      experience: 2,
      manager: 0,
      team: [5, 6, 7, 8, 1, 2, 3],
      dev_team: [],
      effCoeff: 0
    };
    const testPersonData3 = {
      _id: 4,
      role: "manager",
      firstName: "George",
      lastName: "Bush",
      salary: 1000,
      experience: 1,
      manager: 0,
      team: [5, 6, 7, 8, 9, 11, 10, 12, 15, 1, 2, 3],
      dev_team: [],
      effCoeff: 0
    };
    const testPersonData4 = {
      _id: 4,
      role: "manager",
      firstName: "George",
      lastName: "Bush",
      salary: 1000,
      experience: 1,
      manager: 0,
      team: [5, 6, 7],
      dev_team: [5,6],
      effCoeff: 0
    };
    manager1 = new Manager(testPersonData1);
    manager2 = new Manager(testPersonData2);
    manager3 = new Manager(testPersonData3);
    manager4 = new Manager(testPersonData4);
  });

  // Each Manager gets salary +

  it("should be able to return salary", function() {
    //arrange
    //act
    const result = manager1.getSalary();
    //assert

    expect(result).toBeDefined();
    expect(result).toBe(1000);
  });

  // +200$ if his team has >5 members

  it("+200$ if his team has >5 members", function() {
    //arrange

    //act
    const result = manager2.getSalary();
    //assert

    expect(result).toBe(1200);
  });
  it("+300$ if his team has >10 members", function() {
    //arrange

    //act
    const result = manager3.getSalary();
    //assert

    expect(result).toBe(1300);
  });
  it("salary*1.1 if more than half of team members are Developers", function() {
    //arrange

    //act
    const result = manager4.getSalary();
    //assert

    expect(result).toBe(1100);
  });


});
