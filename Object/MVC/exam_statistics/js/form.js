'use strict';

class Form extends Exam {
    constructor (subject, name, surname, grade) {
        super(subject, name, surname, grade);
    }
/*    if ( document.Form.name.value === ' ')
        return 'Please provide your Name and Surname';
};*/

var nameInputValue = inputNameElement.value;

    if (nameInputValue === ' ')
        inputNameElement.textContent = 'Please provide your Name and Surname';
        return;
    };




var dateInputValue = inputDateElement.value;


var Student = new Student();

var addStudentErrorElement = document.querySelector('#add-student-error');
var addSubjectErrorElement = document.querySelector('#add-subject-error');
var addGradeErrorElement = document.querySelector('#add-grade-error');

function newStudent() {
    var subjectValue = inputSubjectElement.value;
    var nameValue = inputNameElement.value;
    var gradeValue = inputGradeElement.value;

    if (!subjectValue) {
        inputSubjectElement.textContent = 'Please choose the Subject, from the drop down menu.';
        return;
    }
    if (!nameValue) {
        inputNameElement.textContent = 'Please provide your Name and Surname.';
        return;
    }
    if (!gradeValue) {
        inputGradeElement.textContent = 'Please choose the Grade, from the drop down menu.';
        return;
    }

}
