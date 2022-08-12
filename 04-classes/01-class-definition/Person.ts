class Person {
    fName: string;
    lName: string;

    constructor(theFirstName: string, theLastName: string){
        this.fName = theFirstName;
        this.lName = theLastName;
    }


}



//Instance of class
let myPerson = new Person("Steph", "Curry");
// myPerson.fName = "Lebron";
// myPerson.lName = "James";

console.log(myPerson.fName);
console.log(myPerson.lName);