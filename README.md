# Kv-058.WebUi
homework tasks

1. Create structure for Department:

There are 3 types of Employees: Developer, Designer and Manager

Each Employee has: first name, last name, salary, experience (years) and manager
Each Designer has effectiveness coefficient (0 < x <= 1)
Each Manager has team of Developers and Designers.

Department should have list of managers(which have their own teams)

Department should be able to give salary (for each employee write message: "$firstName $lastName: got salary: $salaryValue")
Each Employee gets the salary, defined in field salary. If experience of employee is > 2 years, he gets bonus + 200$, if experience is > 5 years, he gets salary * 1.2 + bonus 500
Each Designer gets the salary = salary*effCoeff
Each Manager gets salary +

200$ if his team has >5 members
300$ if his team has >10 members
salary*1.1 if more than half of team members are Developers.


Redefine string representation for Employee as follows: "$firstName $lastName, manager:${manager.lastName}, experience: $experience"

2. Write unit tests using Jasmine for the giveSalary method (atleast one test), and for other method except constructor.


3. Create a NodeJs Express app to serve the Department data using REST API:

Have a separate array of all the employees in department and an array of managers from task #1.
GET /api/v1/employees should return a list of all employees except managers in format [{"type": "designer", "id": 0, "manager_id": 1, other data...}, {"type": "developer", "id": 0, "manager_id": 1, other data...}], where id is the index of employee in the general array, but do not return the calculated salary with bonuses in the list!!!! Return manager_id if he has a manager.
POST /api/v1/employees should accept an object {"type": "designer", other data...} (no id in post, as client does not know it when creating new employees) and depending on type field create an instance of Developer or Designer.
GET /api/v1/employees/:id should return all info about specific employee from general employee list in format ["type": "designer", "id": 0, "salary": 1500, other data...}, here you should return the employee's salary with bonuses!
GET /api/v1/managers should return a list of all managers in format [{"type": "manager", "id": 0, other data...}], where id is the index of manager in the managers array, do not return the calculated salary with bonuses in the list, and do not return the team members!!!!
POST /api/v1/managers should accept an object {"type": "manager", other data...} (no id in post, as client does not know it when creating new employees) and create a Manager in you app.
GET /api/v1/managers/:id should return all info about specific manager in format ["type": "manager", "id": 0, "salary": 1500, other data...}, here you should return the managers's salary with bonuses. Do not return the team list!.
GET /api/v1/managers/:id/team should return a list of this manager's team in format [{"type": "designer", "id": 0, other data...}, {"type": "developer", other data...}]

POST /api/v1/managers/:id/team should accept an object {"employee_id": 0} and should add an employee from general employee list by his employee_id (or index) to manager's team


4. Re-write everything using TypeScript :)