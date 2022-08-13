class Customer {
    private _fName: string;
    private _lName: string;
   

    constructor(theFirstName: string, theLastName: string){
        this._fName = theFirstName;
        this._lName = theLastName;
    }


    public get fName(): string {
        return this._fName;
    }

    public set fName(value: string){
        this._fName = value;
    } 

    public get lName(): string {
        return this._lName;
    }
    public set lName(value: string) {
        this._lName = value;
    }
}


//Instance of class
let myCustomer = new Customer("Steph", "Curry");
// myCustomer.fName = "Lebron";
// myCustomer.lName = "James";

console.log(myCustomer.fName);
console.log(myCustomer.lName);