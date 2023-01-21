var hero = {
    name: 'Superman',
    sayName: function (){
        return 'Hi I am ' + hero.name;
    }
};

console.log(hero.sayName());






var hero = {
    name: 'Superman',
    sayName: function () {
    return 'Hi I am ' + this.name;
    }
};

console.log(hero.sayName());



var hero = {
    name: 'Superman',
    this.occupation = 'Ninja',
    sayName: function () {
    return 'Hi I am ' + this.name;
    }
};

console.log(hero.o);

function Hero() {
    this.occupation = 'Ninja';
}
console.log();

var hero = new Hero();
hero.occupation;

console.log(hero.Hero());


function Hero(name) {
    this.name = name;
    this.occupation = 'Ninja';
    this.whoAreYou = function () {
        return "I'm " + this.name +
        " and I'm a " + this.occupation;
    };
}

var heroOne = new Hero('Michelangelo');
var heroTwo = new Hero('Donatello');
heroOne.whoAreYou();

// "I'm Michelangelo and I'm a Ninja"

heroTwo.whoAreYou();

//"I'm Donatello and I'm a Ninja"

var hero = Hero('Leonardo');

typeof hero;

// "undefined"

