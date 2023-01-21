/*1. Create constructor functions with properties representing the following:
○ Person: name, surname
○ Employee: inherits Person and has job and salary
○ Developer: inherits from Employee and has specialization
○ Manager: inherits from Employee and has department */
'use strict';

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
};
Person.prototype.fullName = function() {
    return this.name + ' ' + this.surname;
};
Person.prototype.printInfo = function() {
    console.log(this.fullName());
};

/*var luke = new Person('Luke', 'SkyWalker');
luke.printInfo(); */


function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
};

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
    console.log(Employee.prototype);
Employee.prototype.getData = function () {
    return this.name + ' ' + this.surname + ', salary: ' + this.salary;
};
Employee.prototype.getSalary = function () {
    return this.salary;
}
Employee.prototype.increaseSalary = function () {
    this.salary = this.salary * 1.1;
    console.log(this.salary * 1.1);
};
/*Employee.prototype.printInfo = function(){
    var fulllName = this.fullName();
    console.log(fulllName + ' ' + this.job + ' ' + this.salary + ' ' );
};

var luke = new Employee('Luke', 'SkyWalker', 'Jedi Knight', '5000');
/*luke.printInfo();*/

//--------


function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
};
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function () {
    console.log(this.specialization);
};

//--------
    /*console.log(Developer.prototype);
Developer.prototype.printInfo = function(){
    var fulllName = this.fullName();
    console.log(fulllName + ' ' + this.job + ' ' + this.salary + ' ' + this.specialization);
};
//--------
var luke = new Developer('Luke', 'SkyWalker', 'Jedi Knight', '5000', 'Force');
console.log(luke);

/*luke.printInfo();*/

//--------


function Manager(name, surname, job, salary, specialization, department) {
    Developer.call(this, name, surname, job, salary, specialization);
    this.department = department;
};

Manager.prototype = Object.create(Developer.prototype);
Manager.prototype.constructor = Manager;
    console.log(Manager.prototype); 

Manager.prototype.getDepartment = function () {
    console.log(this.department)
};
Manager.prototype.changeDepartment = function(newDepartment) {
    this.department = newDepartment;
    console.log(this.department);
}; 
/*Manager.prototype.printInfo = function(){
    var fulllName = this.fullName();
    console.log(fulllName + ' ' + this.job + ' ' + this.salary + ' ' + this.specialization + ' ' + this.department);
};*/

var luke = new Manager('Luke', 'SkyWalker', 'Jedi Knight', '5000', 'Force', 'Light Side');
console.log(luke);
console.log(luke.getDepartment());
console.log(luke.changeDepartment('Force ghost'));
console.log(luke);

//--------






