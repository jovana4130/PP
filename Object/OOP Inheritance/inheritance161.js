// person constructor function
function Person(name, surname){
    this.name = name;
    this.surname = surname;
}

// all persons will share fullName and printInfo methods as they are
// provided in the prototype object of Person constructor function
    Person.prototype.fullName = function(){
    return this.name + ' '; + this.surname;
}
    Person.prototype.printInfo = function(){
        console.log(this.fullName());
}
    var pera = new Person('Pera', 'Peric');
    pera.printInfo();

// we would like Programmer to inherit from Person
    function Programmer(name, surname, favouriteLanguage){
        Person.call(this, name, surname);
        this.favouriteLanguage = favouriteLanguage;
}
// we create the object with prototype Person.prototype
    Programmer.prototype = Object.create(Person.prototype);

//Overwrite constructor property of inherited prototype
    Programmer.prototype.constructor = Programmer;
        console.log(Programmer.prototype);
        console.log(Person.prototype);
        Programmer.prototype.printInfo = function(){
            var fulllName = this.fullName();
            console.log(fulllName + ' ' + this.favouriteLanguage);
}
    var laza = new Programmer('Laza', 'Lazic', 'JS');
    laza.printInfo();