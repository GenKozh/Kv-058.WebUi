# Kv-058.WebUi
homework tasks

Create structure for Department:

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