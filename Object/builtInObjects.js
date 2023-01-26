/* Exercise 1. 
Write a functional expression that duplicates each element of a given array. 
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1] */

var a = function duplicates(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push(array[i], array [i])
    } return newArray;
};

console.log(a([2, 4, 7, 11, -2, 1]));




/* Exercise 2. 
Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] */

var b = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
var result = b.filter((e, index) => { 
    return b.indexOf(e) === index;
});

console.log(result);


/* Exercise 3. 
a) Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true */

var c = [1, 2, 9, 2, 1];
function checkArr (c) {
    if (c.length %2 !==0) {
        return true;
    }
}
console.log(checkArr(c));







for (i = 0; i < c.length; i++) {
    if (c[i] %2 !==0)
    return true;
}

var result 

/*b) Write a function that counts the number of elements less than the middle
element. If the given array has an even number of elements, print out an error
message.
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4*/

var d = [-1, 8.1, 3, 6, 2.3, 44];
function countArr (d) {
    if (d.length %2 ===0) {
        return 'Error baby!';
    }
}
console.log(countArr(d));



function countEl(arr) {
    var count = 0;
    if (arr.length % 2 === 0) {
        return "Error";
    } 
    else {
        var m = Math.floor(arr.length / 2);
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < arr[m]) {
                count++;
            }
        }
        return count;
    }
}
console.log(countEl([-1, 8.1, 3, 6, 2.3, 44]));

function countEl(arr) {
    var count = 0;
    if (arr.length % 2 === 0) {
        return "Error";
    } 
    else {
        var m = arr.length / 2 - 0.5;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < arr[m]) {
                count++;
            }
        }
        return count;
    }
}
console.log(countEl([-1, 8.1, 3, 6, 2.3, 44, 2.11]));


/* Exercise 4. 
Write a function that finds the smallest element of a given array. The function should
return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output: { minValue: -2, minLastIndex: 6 } */

var e = [1, 4, -2, 11, 8, 1, -2, 3];


/* Exercise 5.
a. Write a function that finds all the elements in a given array less than a given element.
Input: [2, 3, 8, -2, 11, 4], 6
Output: [2, 3, -2, 4] */

var f = [2, 3, 8, -2, 11, 4];
var result = f.filter(function (e) {
    return e < 6;
});

console.log(result);


var res = [];

function findElLessThanGivenEl (arr, el) {
    var res = arr.filter(function (e) {
        return e < el;
    });
    console.log(res);
}
console.log(findElLessThanGivenEl([2, 3, 8, -2, 11, 4], 6));

/* b. Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive.
Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
Output: [’Programming’, ‘product’] */

/*var g = ['JavaScript', 'Programming', 'fun', 'product'];

function findPro (g) {
    var result = g.map(function (e) {
        return e.toLowerCase();
     })
     console.log(result);
     for (var i = 0; i < g.length; i++) {
        var hasValue = g.indexOf('pro');
     }

     var hasValue = g.indexOf('pro') !== -1;
     if(hasValue) {
        console.log(g)
     }
}

console.log(findPro(g));



var b = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
var result = b.filter((e, index) => { 
    return b.indexOf(e) === index;
});

console.log(result);


var g = ['JavaScript', 'Programming', 'fun', 'product'];

function findPro (g) {
    var toLowerCase = g.map(function (e) {
        return e.toLowerCase();
     })
     console.log(toLowerCase);
     var result = g.filter((e, index) => {
        return result.indexOf(e) = index;
     })
}
console.log(findPro(g));


     
     for (var i = 0; i < g.length; i++) {
        var hasValue = g.indexOf('pro');
     }

     var hasValue = g.indexOf('pro') !== -1;
     if(hasValue) {
        console.log(g)
     }
}

console.log(findPro(g));





// program to check if an array contains a specified value

const array = ['you', 'will', 'learn', 'javascript'];

const hasValue = array.indexOf('javascript') !== -1;

// check the condition
if(hasValue) {
    console.log('Array contains a value.');
} else {
    console.log('Array does not contain a value.');
} */

var arr = ["JavaScript", "Programming", "fun", "product"];
var newVal = arr.filter((el) => el.toLocaleLowerCase().includes("pro"));
console.log(newVal);


/* c. Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it. */

/* Exercise 6. 
    a. Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
[
{name: ‘apples’, price: 100},
{name: ‘milk’, price: 80},
{name:’bananas’, price: 150}
] */

var shoppingList = [
    {name: 'apples', price: 100},
    {name: 'milk', price: 80},
    {name:'bananas', price: 150}
];
console.log(shoppingList);

/* b. Write a function that calculates the total price of your shopping list*/

var shoppingList = [
    {name: 'apples', price: 100},
    {name: 'milk', price: 80},
    {name:'bananas', price: 150}
];
function calculateTotal (arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i].price;
    };
    return total;
};
console.log(calculateTotal(shoppingList));



/* c. Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. */

var shoppingList = [
    {name: 'apples', price: 100},
    {name: 'milk', price: 80},
    {name:'bananas', price: 150}
];
/*function calculateAverage 



var price = 0;
var price3dec = price.toFixed(3);*/