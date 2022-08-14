import { Shape } from "./Shapes";

export class Rectangle extends Shape{

        constructor( X: number, Y: number,
            private _width: number, private _length: number){
                super(X, Y);
        }

        
    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }

    public get length(): number {
        return this._length;
    }
    public set length(value: number) {
        this._length = value;
    }

    getInfo(): string {
        return super.getInfo() + `, width=${this._width}, length=${this._length}`;
    }

}