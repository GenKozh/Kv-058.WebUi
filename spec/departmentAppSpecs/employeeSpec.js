describe("Employee test", function() {
  const Employee = require("../../modules/employee");
  let employee;

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
      experience: 3,
      manager: 0,
      team: [5],
      dev_team: [],
      effCoeff: 0
    };
    const testPersonData3 = {
      _id: 4,
      role: "manager",
      firstName: "George",
      lastName: "Bush",
      salary: 1000,
      experience: 20,
      manager: 0,
      team: [5],
      dev_team: [],
      effCoeff: 0
    };
    employee1 = new Employee(testPersonData1);
    employee2 = new Employee(testPersonData2);
    employee3 = new Employee(testPersonData3);
  });



  it("should be able to return salary", function() {
    //arrange
    //act
    const result = employee1.getSalary();
    //assert

    expect(result).toBeDefined();
  });
  
  
  
  
  
  it("should be able to return base salary if experience is under 2 years", function() {
    //arrange

    //act
    const result = employee1.getSalary();
    //assert

    expect(result).toBe(1000);
  });
  
  
  
  
  
  it("should be able to return salary + 200 if experience is more than 2 years", function() {
    //arrange
    //act
    const result = employee2.getSalary();
    //assert

    expect(result).toBe(1200);
  });
  
  
  
  
  
  it("should be able to return salary*1.2 + 500 if experience is more than 5 years", function() {
    //arrange
    //act
    const result = employee3.getSalary();
    //assert

    expect(result).toBe(1700);
  });
  
  
  
  
  
  it("should be able to return salary*1.2 + 500 if experience is more than 5 years", function() {
    //arrange
    //act
    const result = employee3.getSalary();
    //assert

    expect(result).toBe(1700);
  });


  it("should be able to return string representation", function() {
    //arrange
    //act
    const result = employee3.toString();
    //assert

    expect(result).toBe('George Bush, manager:0, experience: 20');
  });





});
