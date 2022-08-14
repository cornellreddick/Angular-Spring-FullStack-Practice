export class Shape{
 
    constructor(private _X: number, private _Y: number){
    }

    public get y(): number {
        return this._Y;
    }

    public set y(value: number) {
        this._Y = value;
    }

    public get x(): number {
        return this._X;
    }

    public set x(value: number) {
        this._X = value;
    }

    getInfo(){
        return `x=${this._X}, Y=${this._Y}`;
    }

}