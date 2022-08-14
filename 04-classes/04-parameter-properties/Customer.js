"use strict";
class Customer {
    //Constructor Short cut using parameter properties
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
}
//Instance of class
let myCustomer = new Customer("Steph", "Curry");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
