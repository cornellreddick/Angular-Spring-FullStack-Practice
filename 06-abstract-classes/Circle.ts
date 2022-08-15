import { Shape } from "./Shapes";


export class Circle extends Shape{
    calculateArea(): number {
        return Math.PI * Math.pow(this._radius, 2);
    }

 constructor(_X: number, _Y : number, 
    private _radius: number){
     super(_X, _Y);
 }

 public get radius(): number {
    return this._radius;
}

public set radius(value: number) {
    this._radius = value;
}

getInfo(): string {
    return super.getInfo() + `, radius=${this.radius}`;
}

}