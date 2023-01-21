//1. Write a program that calculates the maximum of two given numbers.

function maximum (a, b) {
    if (a > b) {
        return `${a} is greater than ${b}`;
    } else if (b > a) {
        return `${b} je greater than ${a}`;
    }
return 'Numbers are equal';
}
var c = maximum(3,2);
console.log(c);


//2. Write a program that checks if a given number is odd.
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
}
console.log(checkTheNumber(33));
console.log(checkTheNumber(111));
console.log(checkTheNumber(888));
console.log(checkTheNumber('zdravo'));

//3. Write a program that checks if a given number is a three digit long number.

function threeDigitNumber(a) {
    if (typeof a !== 'number'){
        return
    }
}
100 && a < 999 

console.log();

//4. Write a program that calculates an arithmetic mean of four numbers.

function arithmetics (a, b, c, d){
    var arsr = ((a+b+c+d)/4);
    return arsr;
}
console.log(arithmetics());

//5. Write a program that draws a square of a given size. For example, if the size of
//square is 5 the program should draw:
/*****
* *
* *
* *
*****

//6. Write a program that draws a horizontal chart representing three given values.
For example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * */

//7. Write a program that calculates a number of digits of a given number.
//8. Write a program that calculates a number of appearances of a given number in a
//given array.
//Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
//Result: 3//



