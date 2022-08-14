"use strict";
class Customer {
    constructor(theFirstName, theLastName) {
        this._fName = theFirstName;
        this._lName = theLastName;
    }
    get fName() {
        return this._fName;
    }
    set fName(value) {
        this._fName = value;
    }
    get lName() {
        return this._lName;
    }
    set lName(value) {
        this._lName = value;
    }
}
//Instance of class
let myCustomer = new Customer("Steph", "Curry");
// myCustomer.fName = "Lebron";
// myCustomer.lName = "James";
console.log(myCustomer.fName);
console.log(myCustomer.lName);
