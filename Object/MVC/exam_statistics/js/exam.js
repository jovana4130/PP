'use strict';

class Exam extends Subject  {
    constructor(subject, name, surname, grade) {
        super(subject);
        this.name = name;
        this.surname = surname;
        this.grade = grade;
    }
    getExamInfo() {
        var firstLetter = this.name[0].toUpperCase() + this.surname[0].toUpperCase();
        return 'Subject: ' + subject + 'Student: ' + firstLetter;
    }
    hasPassed() {
        if (this.grade > 5 === 'Passed') {
            this.grade > 5 !== 'Failed';
            //morace value
        };
    }
};


