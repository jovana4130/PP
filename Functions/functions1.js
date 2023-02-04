/*Exercise 1. 
Write a program that calculates the maximum of two given numbers.*/

function maximum (a, b) {
    if (a > b) {
        return `${a} is greater than ${b}`;
    } else if (b > a) {
        return `${b} je greater than ${a}`;
    }
return 'Numbers are equal';
};
var c = maximum(3,2);
console.log(c);


/*Exercise 2. 
Write a program that checks if a given number is odd.*/

function checkTheNumber (a) {
    if (typeof a !== 'number'){
        return `Molimo Vas unesite broj`;
    }
    if (a % 2 ==0) {
        return `Broj ${a} je paran broj`;
    } if (a % 2 ==1) {
        return `Broj ${a} je neparan broj`;
    }
    return;
};
console.log(checkTheNumber(33));
console.log(checkTheNumber(111));
console.log(checkTheNumber(888));
console.log(checkTheNumber('zdravo'));

/*Exercise 3. 
Write a program that checks if a given number is a three digit long number.*/

function threeDigitNumber(a) {
    if (typeof a !== 'number'){
        return
    }
};
100 && a < 999 

console.log();

/*Exercise 4. 
Write a program that calculates an arithmetic mean of four numbers.*/

function arithmetics (a, b, c, d) {
    var result = ((a + b + c + d) / 4);
    return result;
};

var a = arithmetics (1, 2, 3, 4);
console.log(a);


/*Exercise 5. 
Write a program that draws a square of a given size. For example, if the size of
//square is 5 the program should draw:
/*****
* *
* *
* *
***** */

function drawSq(a, b) {
    var output = '';

    for (var i = 0; i < a; i++) {
    for (var j = 0; j < b; j++) {
        if ( i === 0 || i === a - 1 || j === 0 || j === b - 1) {
            output += '*';
        } else {
            output += ' ';
        };
    };
    if (i !== a - 1) output += "\n";    
    } return output
};

var b = drawSq(4, 6);
console.log(b);


/*Exercise 6. 
Write a program that draws a horizontal chart representing three given values.
For example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * */

function horizChart (a, b, c) {
    var output = ' ';
    for (var i = 0; i < a; i++) {
        output += '*';
    }   
    if (i !== a - 1) output += '\n';  
    for (var j = 0; j < b; j++) {
        output += '*'; }
    if (j !== b - 1) output += '\n';
    for (var k = 0; k < c; k++) {
        output += '*';
    };
        return output
};

var c = horizChart(4, 11, 7);
console.log(c);



/*Exercise 7. 
Write a program that calculates a number of digits 
of a given number.*/

function numberOfDigits(a) {
    var result = 0;
    if (a >= 1) ++result;
    while (a / 10 >= 1) {
      a /= 10;
      ++result;
    }
    return result;
  };

  var d = numberOfDigits(116346457);
  console.log(d);

/*Exercise 8. 
Write a program that calculates a number of appearances of a given number in a
//given array.
//Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
//Result: 3// */


function numberOfAppear(a, e) {
    
    var result = 0;

    for (var i = 0; i < a.length; i++) {
        if (a[i] === e) {
        result += 1;
        }
    } return result
};

var e = numberOfAppear ([2, 4, 7, 8, 7, 7, 1], 7);
console.log(e);


/*Exercise 9. 
Write a program that calculates the sum of odd elements of a given array. */

function sumOddEl(a) {
    
    var sum = 0;

    for (var i = 0; i < a.length; i++) {
        if (a[i] % 2 === 1) {
            sum += a[i];
        }
    } return sum
};

var f = sumOddEl([7, 1, 4, 2]);
console.log(f);

/*Exercise 10. 
Write a program that calculates the number of appearances of a letter a in a
given string. Modify the program so it calculates the number of both letters a and
A. */

function numberOfAppear(arr) {
    
    var result = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'a' || arr[i] === 'A' ) {
            result += 1;
            }
        } return result
    };

    var g = numberOfAppear("AAaaaAaaAAaAaAA");
    console.log(g);

/*Exercise 11. 
Write a program that concatenates a given string given number of times. For
example, if “abc” and 4 are given values, the program prints out abcabcabcabc. */

function concatenatesString(string, a) {
    var result = '';
    while (a > 0) {
        result += string;
        a--;
    } return result
};

var h = concatenatesString('abc', 4);
console.log(h);
