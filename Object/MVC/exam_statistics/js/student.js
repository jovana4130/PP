/*function Student(name, surname) {
    this.name = name;
    this.surname = surname;
};

Student.prototype.getStudentData = function () {
    var firstLetter = this.name[0].toUpperCase() + this.surname[0].toUpperCase();
    return 'Student: ' + firstLetter;
};*/

'use strict';

class Student {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getStudentData() {
        var firstLetter = this.name[0].toUpperCase() + this.surname[0].toUpperCase();
        return 'Student: ' + firstLetter;
    }
};
