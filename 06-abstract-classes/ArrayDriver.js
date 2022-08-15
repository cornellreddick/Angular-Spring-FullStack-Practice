"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myCircle = new Circle_1.Circle(7, 8, 12);
let myRectangle = new Rectangle_1.Rectangle(12, 12, 13, 1);
// declare an array of shapes that are empty
let Shapes = [];
// ass the shapes to the array
Shapes.push(myCircle);
Shapes.push(myRectangle);
for (let s of Shapes) {
    console.log(s.getInfo());
    console.log(s.calculateArea());
    console.log();
}
