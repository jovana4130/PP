/*1. Write a program to insert a string within a string at a particular position (default is 1,
beginning of a string).
&quot;My random string&quot;, &quot;JS &quot; -&gt; &quot;JS My random string&quot;
&quot;My random string&quot;, &quot;JS &quot;, 10 -&gt; &quot;My random JS string&quot;*/

var a = 'My random string';
var b = 'JS';
var c = 1;
var d = 10;


function insertString(mainString, insertString, stringPosition) {
    insertString = '';
    for (var i = 0; i < mainString.length; i++) {
        if (mainString[i] === stringPosition) {
            mainString[i] = mainString + insertString;
        }
        return mainString;
}
}
var b = insertString('My random string', 'JS', 1);
console.log(b);

var a = 'My random string';
var b = 'JS';
var c = 1;




function insertString(a, b, c) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === c) {
            a[c] = b;
        }
} return insertString;
}

console.log(insertString(a, b));




/*2. Write a program to join all elements of the array into a string skipping elements that are
undefined, null, NaN or Infinity.
[NaN, 0, 15, false, -22, '';, undefined, 47, null]*/

var a = [NaN, 0, 15, false, -22, '', undefined, 47, null];
result = '';

function remove(a) {
for (var i = 0; i < a.length; i++) {
    if(a[i] === NaN && a[i] === undefined && a[i] === null && a[i] === Infinity) {
        
    } return a !== NaN, undefined, null, Infinity;
}
}
console.log(remove(a));


function joinNumb (array) {
    var string = '';
    for(i=0; i<array.length; i++){
        if(!!(array[i]) == true){
            string += array[i];
            (array[i] == 0) = true;
        } 
    } return string;
   
 }
 console.log(joinNumb([NaN, 0, 15, false, -22, undefined, 47, null]));
 console.log(typeof(joinNumb([NaN, 0, 15, false, -22, undefined, 47, null])));  //string

 /* 3. Write a program to filter out falsy values from the array.
[NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null] -&gt; [15, -22, 47] */


/*4. Write a function that reverses a number. The result must be a number.
12345 -&gt; 54321 // Output must be a number */

/*5. Write a function to get the last element of an array. Passing a parameter &#39;n&#39; will return the
last &#39;n&#39; elements of the array.
[7, 9, 0, -2] -&gt; -2
[7, 9, 0, -2], 2 -&gt; [0, -2] */


/*6. Write a function to create a specified number of elements with pre-filled numeric value
array.
6, 0 -&gt; [0, 0, 0, 0, 0, 0]
2, &quot;none&quot; -&gt; [&quot;none&quot;, &quot;none&quot;]
2 -&gt; [null, null] */

/*7. Write a function that says whether a number is perfect.
28 -&gt; 28 is a perfect number.
Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum
of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known
as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors
(including itself).
E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.

Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next
perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128. */

/*8. Write a function to find a word within a string.
&#39;The quick brown fox&#39;, &#39;fox&#39; -&gt; &quot;&#39;fox&#39; was found 1 times&quot;
&#39;aa bb cc dd aa&#39;, &#39;aa&#39; -&gt; &quot;&#39;aa&#39; was found 2 times&quot; */

/*9. Write a function to hide email address.
&quot;myemailaddress@bgit.rs&quot; -&gt; &quot;mye...@bgit.rs&quot;*/

/*10. Write a program to find the most frequent item of an array.
[3, &#39;a&#39;, &#39;a&#39;, &#39;a&#39;, 2, 3, &#39;a&#39;, 3, &#39;a&#39;, 2, 4, 9, 3] */