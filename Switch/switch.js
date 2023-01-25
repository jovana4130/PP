/*Exercise 1. 
Write a program that shows text representation of a day in a week for a number input from
1 to 7. Print output in console.
For input 1, output should be “Monday”. */

var day = 1;
//var result = '';

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
};
console.log(day);
//console.log(result);


/*Exercise 2.
 Write a program that shows text representation of a day in a week for a number input from
1 to 7. All other cases output a message explaining that input must be a number between 1
and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be a number between 1 and 7”.*/

var day = 10;
//var result = '';

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
};
console.log(day);
//console.log(result);


/*Exercise 3. 
Write a program that for a 1-7 number input (representing a day in a week) shows if that day
is a weekday or weekend. All other cases output a message explaining that input must be a
number between 1 and 7.
For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”. */

var day = 6;
//var result = '';

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
};
console.log(day); 
//console.log(result);

/* Exercise 4. 
Write a program that for a 1-12 number input (representing a month in a year) shows that
month’s name. All other cases output a message explaining that input must be a number
between 1 and 12.
For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”. */

var month = 13;
//result = "";

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
};
console.log(month);
//console.log(result);

/* Exercise 5. 
Write a program that for a 1-12 number input (representing a month in a year) shows what
season it is. All inputs different from 1-12 output a message explaining that input must be a
number between 1 and 12. */

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
};
console.log(season);

/* Exercise 6. 
Write a program that for a string input of a grade from “A”-“F” outputs a proper info
message about that grade in the following manner: A - &quot;Good job&quot;&quot;, B - &quot;Pretty good&quot;&quot;, C -
&quot;Passed&quot;&quot;, D - &quot;Not so good&quot;&quot;, F - &quot;Failed&quot;. Input different from letters A-F outputs a message
&quot;Unknown grade&quot;. */


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
};
console.log(grade);

/* Exercise 7. 
Write a program that takes as input a city name and outputs the country where the city is.
You may choose which cities and countries you want to output yourself, however there has
to be at least 5 countries and 15 cities. Note that each country must have a different
number of cities. Input different from the listed cities should output a message&quot;Please
choose a different city&quot;. */
    
var city = 'Blato';
var result = '';

switch (city) {
    case 'Novi Sad':
    case 'Beograd':
    case 'Nis':
        result = 'Serbia';
    break;
    case 'Szeged':
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
};
console.log(result);

/*Exercise 8.
Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!*/

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

};
console.log(result);

