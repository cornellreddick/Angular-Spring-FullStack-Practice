"use strict";
exports.__esModule = true;
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(_X, _Y) {
        this._X = _X;
        this._Y = _Y;
    }
    Object.defineProperty(Shape.prototype, "y", {
        get: function () {
            return this._Y;
        },
        set: function (value) {
            this._Y = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "x", {
        get: function () {
            return this._X;
        },
        set: function (value) {
            this._X = value;
        },
        enumerable: false,
        configurable: true
    });
    Shape.prototype.getInfo = function () {
        return "x=".concat(this._X, ", Y=").concat(this._Y);
    };
    return Shape;
}());
exports.Shape = Shape;
