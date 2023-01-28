'use strict';

var studentCount = 0;
var passedCount = 0;
var failedCount = 0;

var selectSubject = document.querySelector("#subjects");
var newStudent = document.querySelector("#name");
var addEntry = document.querySelector("#add");
var entryError = document.querySelector("#entry-error");
var chooseGrade = document.querySelector("#grades");

var subjectPassed = document.querySelector("#subject-passed");
var subjectFailed = document.querySelector("#subject-failed");


var newItem = document.createElement("li");
newItem.textContent = subject + " - " + student + "     " + grade;

addEntry.addEventListener('click'), function(event) {
    
if (grade >= 6) {
    passedCount++;
    passedCountSpan.textContent = passedCount;
    passedList.appendChild(newItem);
} else {
    failedCount++;
    failedCountSpan.textContent = failedCount;
    failedList.appendChild(newItem);
};


if(failedCount === 0){
    failedCountSpan.textContent = "0";
    percentageFailed.textContent = "0%";
} else {
    var percentage = (failedCount / studentCount) * 100;
    percentageFailed.textContent = percentage.toFixed(0) + "%";
};

};



