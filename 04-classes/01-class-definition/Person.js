var Person = /** @class */ (function () {
    function Person(theFirstName, theLastName) {
        this.fName = theFirstName;
        this.lName = theLastName;
    }
    return Person;
}());
//Instance of class
var myPerson = new Person("Steph", "Curry");
// myPerson.fName = "Lebron";
// myPerson.lName = "James";
console.log(myPerson.fName);
console.log(myPerson.lName);
