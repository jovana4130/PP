/*var a = [2, 3, 11];
a.length=5;
console.log(a); 

var s = 'ab34abc';
console.log(parseInt(s));

var a = 10;
var b = 12;
var tmp;

tmp = a;
a =b;
b = tmp;
console.log(a, b);

var isWritter = true;

console.log(!isWritter);

var a = [2, 5, 18, -4, 2];
var result = a[0]



for (var i = 1; i < a.length; i++) {
    if (a[i] > result) {
        result = a[i];
    }
    
}
console.log(result);


var isB = [true];
var isS = [false];
console.log(isB && isS);

var a = [2, 5, 18, -4, 2];
var result = a[0]




var sum = 0;

for (var i = 4; i < 8; i=i+1) {
    sum += i;
    console.log(sum);
}


*/

/*
var n = 10;
console.log(++n);

var isB = [true];
var isS = [false];
console.log(isB || isS);

var n = '34abc';
console.log(parseInt(n));


for (var i = 0; i < 10; i+=2) {
    console.log(i);
    
}

for (var i = 3; i >= 0; i--) {
    console.log(i);
    
}

console.log(2+true);

var n = 23;
n -= 2
console.log(n);

var sum = 0;
for (var i = 0; i < 5; i++) {
    sum += i;
    console.log(sum);
}

var array = [];
for (var i = 0; i < 4; i++) {
    array [2 * i]=i;
    array [2 * i + 1]=i;
}
console.log(array);



for (var i = 1; i < 6; i++) {
    if (i==3 || i==4) {
        break;
    }
    console.log(i);
}

var n = 'abc';
console.log(n + n);

var n = 'coffee';
n[0] = 'C';
console.log(n);

var n = 'JavaScript Programming';
var result = n[3];
console.log(result);

function f(){}
var result;
result = f();
console.log(result);

function f(a,b){
    return a+b;
}
console.log(f(12));


var array = [];
for (var i = 0; i < 4; i++) {
    array [i]=2*i;
}
console.log(array); */

function t(a, b, f) {
    var result;
    console.log(result);
}
function double(x) {
    return 2*x;
}
t(2, 4, double);



 var input =12;

function f() {
    input =15;
}

console.log(input);

console.log(console.log('JS'));

(function (){
    console.log('spring time');
})();

console.log(n);
var n = 5;


(function (s){
    console.log(s);
})('JS');


var input =12;

function f() {
    input =15;
}
f;

console.log(input);

'use strict';

var x =1;

function f() {
    y =3;
    return x * y
}
f(4);

console.log(x);

var a =12;
var b =3;
var result;

function add() {
    return a+b;
}
result=add(2, 11);
console.log(result);


console.log(mul(2, 3));
var mul = function (x, y) {
    return x * y;
}


console.log(sum(2, 3));
function sum (x, y) {
    return x+y+1;
}

var r;
r = (function (a, b) {
    return a + b;
})(2, 11);
console.log(r);


var a =10;
function f(a, b) {
    a++;
    b--;
    console.log(a, b);
}
f(a,2);
console.log(a);

function transform(a, b, f) {
    var result;
    result = f(a) + f(b);
    console.log(result);
}
transform(2, 4, function (x) {return x + 1;});



function f() {
    return function (a, b) {
        return a + b;
    }
}
var result = f()(1, 3);

console.log(result);

function f(a, b) {
    var result = a + b;
}
console.log(f(2,1));



var a =20;
function f(n) {
    var result = a + n;
    a = 30;
    return result;
}
console.log(f(5));




var result;
function add(a, b) {
    return a + b;
}
result = add(2);
console.log(add);

var r;
(function (a, b) {
    return a + b;
})(2, 11);
console.log(r);


function f() {
   return function (a, b) {
    return a + b;
    }
}
var result = f();
console.log(result);


var result;
function add(a, b) {
    return a + b;
}
result = add(2);
console.log(result);