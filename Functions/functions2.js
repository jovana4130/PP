//1. Write a function to check whether the `input` is a string or not.
//''My random string'' -> true
// 12 -> false 

var a = 'My random string';
var b = '12';

function checkInput(a) {
if (typeof a === 'string') {
    return 'true';
} else (typeof a !== 'string') 
    return 'false';
}
console.log(checkInput(12));


//2. Write a function to check whether a string is blank or not.
//''My random string'' -> false
//'' '' -> true
//12 -> false
//false -> false

var a = 'My random string';
var b = ' ';
var c = '12';
var d = 'false';

function checkIfBlank(string) {
    if (string === ' ') {
        return 'true';
    } else (string !== ' ')
        return 'false';
}
console.log(checkIfBlank(' '));

//3. Write a function that concatenates a given string n times (default is 1).
//''Ha'' -> ''Ha''
//''Ha'', 3 -> ''Ha''

string = 'Ha';

function repeat(string, count) {
    if (typeof(count) === 'undefined') {
       count=1;
    }
}
console.log(string.repeat(1));
console.log(string.repeat(3));

//
function concatenatesNString (string,n) {
    var result = '';
    for (var i = 0; i < n; i++) {
        result += string;
    } return result;
}
console.log(concatenatesNString('Ha', 3));

//4. Write a function to count the number of letter occurrences in a string.
//''My random string'', ''n'' -> 2

var a = 'My random string';
var b = 'n';
var result = '0';

for (var i = 0; i < a.length; i++) {
    if (a[i] === b) result++;
}
console.log(result);

/*5. Write a function to find the position of the first occurrence of a character in a string. The
result should be the position of character. If there are no occurrences of the character, the
function should return -1. */

var a = 'My random string';
var b = 's';
var result = 0;

for (var i = 0; i < a.length; i++) {
    if (a[i] === b) result = i;
    else if (a[i] !== b) result ='-1';
}
console.log(result);

/*6. Write a function to find the position of the last occurrence of a character in a string. The
result should be in human numeration form. If there are no occurrences of the character,
function should return -1. */

var a = 'My random string';
var b = 'y';
var result = 0;

for (var i = 0; i < a.length; i++) {
    if (a[i] === b) result = i+1;
    else if (a[i] !== b) result ='-1';
}
console.log(result);

/*7. Write a function to convert string into an array. Space in a string should be represented as
“null” in new array.
&quot;My random string&quot; -&gt; [&quot;M&quot;, &quot;y&quot;, null, &quot;r&quot;, &quot;a&quot;]
&quot;Random&quot; -&gt; [&quot;R&quot;, &quot;a&quot;, &quot;n&quot;, &quot;d&quot;, &quot;o&quot;, &quot;m&quot;]*/

var a = 'My random string';
var resultArray = [];

function convertingToArray([i]) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] )
    return [a];
}
console.log(convertingToArray(a));


if (a === 'string') result = [a];

/*8. Write a function that accepts a number as a parameter and checks if the number is prime or
not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself. */



/*9. Write a function that replaces spaces in a string with provided separator. If separator is not
provided, use “-” (dash) as the default separator.
&quot;My random string&quot;, &quot;_&quot; -&gt; &quot;My_random_string&quot;
&quot;My random string&quot;, &quot;+&quot; -&gt; &quot;My+random+string&quot;
&quot;My random string&quot; -&gt; &quot;My-random-string&quot; */

var a = 'My random string';
var result = ' ';

function spaceToSeparator(string) {
    var result = ' ';
    for (var i = 0; i < string.length; i++) {
        if (string[i] == ' ') result += '_';
        else (result += string[i]);        
} return result;
}
console.log(spaceToSeparator('My random string'));

/*10. Write a function to get the first n characters and add “...” at the end of newly created string. */

var a = 'My random string';

function firstN()






/*11. Write a function that converts an array of strings into an array of numbers. Filter out all
non-numeric values.
[&quot;1&quot;, &quot;21&quot;, undefined, &quot;42&quot;, &quot;1e+3&quot;, Infinity] -&gt; [1, 21, 42, 1000]*/

/*12. Write a function to calculate how many years there are left until retirement based on the
year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
already retired, a proper message should be displayed.*/

/*13. Write a function to humanize a number (formats a number to a human-readable string) with
the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -&gt; 1st
//11 -&gt; 11th */