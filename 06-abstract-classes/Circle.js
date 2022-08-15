"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shapes_1 = require("./Shapes");
class Circle extends Shapes_1.Shape {
    constructor(_X, _Y, _radius) {
        super(_X, _Y);
        this._radius = _radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this._radius, 2);
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    getInfo() {
        return super.getInfo() + `, radius=${this.radius}`;
    }
}
exports.Circle = Circle;
