export class Shape{
 
    constructor(private _X: string, private _Y: string){
    }

    public get y(): string {
        return this._y;
    }

    public set y(value: string) {
        this._y = value;
    }

    public get x(): string {
        return this._x;
    }

    public set x(value: string) {
        this._x = value;
    }

    getInfo(){
        return `x=${this._X}, Y=${this._Y}`;
    }

}