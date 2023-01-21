var a = 54
var b = 55
var c = a > b 
var d = a < b 
var e = a = b // Jedno = je za dodelu vrednosti. == i === su za poredjenje.
var f = a == b
var g = a === b
    console.log(c)
    console.log(d)
    console.log(e)
    console.log(f)
    console.log(g)


var p1 = true
var q1 = true
console.log(p1 && q1)
console.log(p1 || q1)

var p2 = true
var q2 = false
console.log(p2 && q2)
console.log(p2 || q2)

var p3 = false 
var q3 = true
console.log(p3 && q3)
console.log(p3 || q3)

var p4 = false
var q4 = false
console.log(p4 && q4)
console.log(p4 || q4)


var age = 34
console.log(age < 0)
console.log(age > 120)
console.log(age < 0 && age >120)


var minSpeedAllowed = 60
var maxSpeedAllowed = 120

var motor = 80
console.log(motor > maxSpeedAllowed) //We are driving safe. 




