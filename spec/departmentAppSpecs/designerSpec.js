describe("Designer test", function() {
  const Employee = require("../../modules/employee");
  const Designer = require("../../modules/designer");
  let employee;
  let manager;

  beforeAll(() => {
    const testPersonData1 = {
      _id: 4,
      role: "designer",
      firstName: "George",
      lastName: "Bush",
      salary: 1000,
      experience: 1,
      manager: 0,
      team: [],
      dev_team: [],
      effCoeff: 0
    };
    const testPersonData2 = {
      _id: 4,
      role: "designer",
      firstName: "George",
      lastName: "Bush",
      salary: 1000,
      experience: 1,
      manager: 0,
      team: [],
      dev_team: [],
      effCoeff: 1
    };
    const testPersonData3 = {
      _id: 4,
      role: "designer",
      firstName: "George",
      lastName: "Bush",
      salary: 1000,
      experience: 1,
      manager: 0,
      team: [],
      dev_team: [],
      effCoeff: .1
    };

    designer1 = new Designer(testPersonData1);
    designer2 = new Designer(testPersonData2);
    designer3 = new Designer(testPersonData3);
  });

 // Each Designer gets the salary = salary*effCoeff


  it("Each Designer gets the salary = salary*effCoeff", function() {
    //arrange
    //act
    const result = designer1.getSalary();
    //assert

    expect(result).toBeUndefined();
  });
  
  it("Each Designer gets the salary = salary*effCoeff", function() {
    //arrange
    //act
    const result = designer2.getSalary();
    //assert

    expect(result).toBe(1000);
  });

  it("Each Designer gets the salary = salary*effCoeff", function() {
    //arrange
    //act
    const result = designer3.getSalary();
    //assert

    expect(result).toBe(100);
  });



});
