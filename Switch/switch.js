/*Exercise 1 and 2*/

var day = 100;

switch(day) {
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3: 
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break; 
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
    case 7:
        day = 'Sunday';
        break;
    default:
        day = 'Input must be a number between 1 and 7';
}
console.log(day);

/*Exercise 3*/

var day = 6;

switch(day) {
    case 1:
        day = 'It\'s weekday';
        break;
    case 2:
        day = 'It\'s weekday';
        break;
    case 3: 
        day = 'It\'s weekday';
        break;
    case 4:
        day = 'It\'s weekday';
        break; 
    case 5:
        day = 'It\'s weekday';
        break;
    case 6:
        day = 'It\'s weekend';
        break;
    case 7:
        day = 'It\'s weekend';
        break;
    default:
        day = 'Input must be a number between 1 and 7';
}
console.log(day); 

var month = 13;

switch (month) {
    case 1:
        month = 'January';
        break;
    case 2:
        month = 'February';
        break;
    case 3:
        month = 'March';
        break;
    case 4:
        month = 'April';
        break;
    case 5:
        month = 'May';
        break;
    case 6:
        month = 'June';
        break;
    case 7:
        month = 'July';
        break;
    case 8:
        month = 'August';
        break;
    case 9:
        month = 'September';
        break;
    case 10:
        month = 'October';
        break;
    case 11:
        month = 'November';
        break;
    case 12:
        month = 'December';
        break;
    default: 
        month = 'Input must be a number between 1 and 12';
}
console.log(month);


var season = 1;

switch (season) {
    case 1:
        season = 'Winter';
        break;
    case 2:
        season = 'Winter';
        break;
    case 3:
        season = 'Spring';
        break;
    case 4:
        season = 'Spring';
        break;
    case 5:
        season = 'Spring';
        break;
    case 6:
        season = 'Summer';
        break;
    case 7:
        season = 'Summer';
        break;
    case 8:
        season = 'Summer';
        break;
    case 9:
        season = 'Fall';
        break;
    case 10:
        season = 'Fall';
        break;
    case 11:
        season = 'Fall';
        break;
    case 12:
        season = 'Winter';
        break;
    default: 
        season = 'Input must be a number between 1 and 12';
}
console.log(season);

var grade = 'A';

switch (grade) {
    case 'A':
        grade = 'Good job';
        break;
    case 'B':
        grade = 'Pretty good';
        break;
    case 'C':
        grade = 'Passed';
        break;
    case 'D':
        grade = 'Not so good';
        break;
    case 'F':
        grade = 'Failed';
        break;
    default:
        grade = 'Unknown grade';
}
console.log(grade);
    
var city = 'Becej';
var result = '';

switch (city) {
    case 'Novi Sad':
    case 'Beograd':
    case 'Nis':
        result = 'Serbia';
    break;
    case 'Szegedin':
    case 'Budapest':
        result = 'Hungary';
    break;
    case 'Zagreb':
    case 'Osijek':
    case 'Blato':
    case 'Korchula':
    case 'Split':
    case 'Varazdin':
    case 'Opatija':
    case 'Makarska':
    case 'Rijeka':
    case 'Dubrovnik':
        result = 'Hrvatska';
    break;
    default:
        result = 'Please choose a different city';
}
console.log(result);

/*Exercise 8*/

var number1 = 5;
var number2 = 10;
var result = '*';

switch (result) {
    case '+':
        result = number1 + number2;
        break;
    case '-':
        result = number1 - number2;
        break;
    case '*':
        result = number1 * number2;
        break;
    case '/':
        result = number1 / number2;
        break;

}
console.log(result);