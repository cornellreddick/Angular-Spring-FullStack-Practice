var Customer = /** @class */ (function () {
    function Customer(theFirstName, theLastName) {
        this._fName = theFirstName;
        this._lName = theLastName;
    }
    Object.defineProperty(Customer.prototype, "fName", {
        get: function () {
            return this._fName;
        },
        set: function (value) {
            this._fName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lName", {
        get: function () {
            return this._lName;
        },
        set: function (value) {
            this._lName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
//Instance of class
var myCustomer = new Customer("Steph", "Curry");
// myCustomer.fName = "Lebron";
// myCustomer.lName = "James";
console.log(myCustomer.fName);
console.log(myCustomer.lName);
