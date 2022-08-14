class Customer {
//Constructor Short cut using parameter properties

    constructor( private _firstName: string, private _lastName: string){
        this._firstName = _firstName;
        this._lastName = _lastName;

    }
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }

}


//Instance of class
let myCustomer = new Customer("Steph", "Curry");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);