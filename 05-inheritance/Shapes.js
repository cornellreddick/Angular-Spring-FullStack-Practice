"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    constructor(_X, _Y) {
        this._X = _X;
        this._Y = _Y;
    }
    get y() {
        return this._Y;
    }
    set y(value) {
        this._Y = value;
    }
    get x() {
        return this._X;
    }
    set x(value) {
        this._X = value;
    }
    getInfo() {
        return `x=${this._X}, Y=${this._Y}`;
    }
}
exports.Shape = Shape;
