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

var b = function removeAllDuplicates(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) === -1) {
            newArray.push(array[i])
        };
    } return newArray;
};
console.log(b([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));

/* Exercise 3. 
a) Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true */

function checkElements(array) {
    if (array.length % 2 !== 0) {
        return true;
    } else {
        return false;
    };
};
console.log(checkElements([1, 2, 9, 2, 1]));

/*b) Write a function that counts the number of elements less than the middle
element. If the given array has an even number of elements, print out an error
message.
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4*/

function countArr(array) {
    var count = 0;
    if (array.length % 2 === 0) {
        return 'Error baby: There is an even number of elements';
    }
    var middleElement = array[Math.floor(array.length / 2)];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < middleElement) {
            count++;
        };
    } return count;
};
console.log(countArr([-1, 8.1, 3, 6, 2.3, 44, 2.11]));

/* Exercise 4. 
Write a function that finds the smallest element of a given array. The function should
return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output: { minValue: -2, minLastIndex: 6 } */

function smallestElement(array) {
    var minValue = Math.min(...array);
    var minLastIndex = array.lastIndexOf(minValue);
    var outputObject = {minvalue: minValue, minLastIndex: minLastIndex};
    return outputObject;
};
console.log(smallestElement([1, 4, -2, 11, 8, 1, -2, 3]));

/* Exercise 5.
a. Write a function that finds all the elements in a given array less than a given element.
Input: [2, 3, 8, -2, 11, 4], 6
Output: [2, 3, -2, 4] */

function findElLessThanGivenEl (arr, el) {
    newArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < el) {
            newArray.push(arr[i])
        };
    } return newArray
};
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

function findPro(arr) {
    var newArray = [];
    var string = arr.join(" ");
    for (var i = 0; i < arr.length; i++) {
        string = arr[i].toLowerCase();
        if (string.startsWith("pro")) {
        newArray.push(arr[i]);
        }       
    }
    return newArray
};
console.log(findPro(["JavaScript", "Programming", "fun", "product"]));

/* c. Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it. */

function filterElements (array, callback) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newArray.push(array[i]);
        };
    } return newArray;
};    
console.log(filterElements([2, 3, 8, -2, 11, 4], function(el) {return el < 6}))
console.log(filterElements(["JavaScript", "Programming", "fun", "product"], function(el) {return el.toLowerCase().startsWith("pro")}))


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

function calculateAverage(array) {
    var average = 0;
    array.forEach(element => {
        average += element.price / array.length;
    });
    return average.toFixed(3);
};
console.log(calculateAverage(array));


/* d. Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. */

function printExpensive(array) {
    var max = 0;
    array.forEach(element => {
        max = Math.max(element.price);
    });
    var maxItem = array.find((element) => element.price === max);
    return maxItem.name.toUpperCase();
};
console.log(printExpensive(array));


/* Exercise 7. 
a. Write a function that checks if a given string is written in all capitals. */

function checkString(string) {
    if (string.toUpperCase() === string) {
        return true;
    } else {
        return false;
    };
};
console.log(checkString("AAaaaAAAAAaa"))


/* b. Write a function that checks if a given string contains any digits. */

function checkForDigits(string) {
    return /[0-9]/.test(string);
};
console.log(checkForDigits("AAaaaAA7AAAaa"))


/* c. Write a function that checks if a given string is a valid hexadecimal color. */

function validHexColor(string) {
    var array = Array.from(string);
    for (var i = 0; i < array.length; i++) {
        if (array.length === 7 && array[0] === "#") {
            if (array[i]=== "A" || array[i]=== "B" || array[i]=== "C" || array[i]=== "D" || array[i]=== "E" || array[i]=== "F" || array[i] >= 0 || array[i] <= 9) {
                return true;
            };
        } else {
            return false;
        };
    };
};
console.log(validHexColor("#AAAA345"));


/* d. Write a function that checks if a given number belongs to the interval from 1900 to 2018. */

function belongsToInterval(number) {
    if (1900 <= number && number <= 2018) {
        return true;
    } else {
        return false;
    };
};
console.log(belongsToInterval(1928));


/* e. Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d). */

function Validator(string1, string2, string3, number) {
    this.stringValidator = checkIfCapitals(string1);
    this.passwordValidator = checkForDigits(string2);
    this.colorValidator = checkIfHexColor(string3);
    this.yearValidator = checkInterval(number);
};
var a = new Validator("aaAAAAA","aaAA7AAA", "#AAAA45", 1928);
console.log(a);


/* Exercise 8. 
Write a function that calculates the number of days to your birthday.
Input: 25 February 
Output: 5 days */

var birthday = new Date('10/28/2023');
var today = new Date();

function calculateDays(birthday, today) {
    var difference = birthday.getTime() - today.getTime();
    var daysUntil = Math.ceil(difference / (1000 * 3600 * 24));
    return daysUntil;
};
console.log(calculateDays(birthday, today) + " days");


/* Exercise 9. 
Write a function that for a given departure and arrival time calculates the time the trip takes. 
Input: 8:22:13 11:43:22
Output: 3 hours 21 minutes 9 seconds */

function calculateTripTime(departure, arrival) {
    var d = departure.split(":");
    var a = arrival.split(":");
    for (var i = 0; i < d.length; i++) {
        var dep = parseInt(d[i]);   
    };
    for (var j = 0; j < a.length; j++) {
        var arr = parseInt[a[j]];  
    };
    var deph = 24 - d[0];
    var depm = 60 - d[1];
    var deps = 60 - d[2];
    var arrh = 24 - a[0];
    var arrm = 60 - a[1];
    var arrs = 60 - a[2];
    var resulth = deph - arrh;
    var resultm = depm - arrm;
    var results = deps - arrs;
    var result = resulth + " hours " + resultm + " minutes " + results + " seconds";
    return result;
};
console.log(calculateTripTime("8:22:13", "11:43:22"));


/* Exercise 10. a. 
Write a constructor function that creates points in space. Each point in space has
its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space. */

function Coordinates(x, y, z) {
    this.xAxis = x;
    this.yAxis = y;
    this.zAxis = z;
};
var a = new Coordinates(3, 5, 1);
console.log(a);


/* b. Write a function that calculates the distance between two points in the space. */

function calculateDistance(p1, p2) {
    var a = p2.x - p1.x;
    var b = p2.y - p1.y;
    var c = p2.z - p1.z;
    return Math.hypot(a, b, c);
};

var distance = calculateDistance({x: 5, y: 8, z: 1}, {x: 4, y: 9, z: 2});
console.log(distance);


/* Exercise 11. 
a. Write a function that generates a random integer value between 5 and 20. 
b. Write a function that generates a random integer value between 50 and 100. */

function generateRandomInt(min, max) {
    var difference = max - min;
    var randomNr = Math.random();
    randomNr = Math.floor( randomNr * difference);
    randomNr = randomNr + min;
    return randomNr;
};
console.log(generateRandomInt(5, 20));
console.log(generateRandomInt(50, 100));


/* c. Write a function which expects a number and a callback generator function and returns an array of numbers produced by the generator function. */

function generateRandomArray(number) {
    var array = [];
    for (var i = 0; i < number; i++) {
    array.push(Math.round(Math.random() * number))
    } return array;
};  
console.log(generateRandomArray(6));


/* Exercise 12. Write a function that shuffles the elements of a given array. 
Input: [3, 6, 11, 2, 9, 1]
Output: [6, 2, 9, 1, 3, 11]  (it can be any random permutation of the given array) */

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    } return array;
};
console.log(shuffleArray([3, 6, 11, 2, 9, 1]));