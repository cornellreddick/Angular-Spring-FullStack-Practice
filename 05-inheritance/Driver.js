"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shapes_1 = require("./Shapes");
const Circle_1 = require("./Circle");
let myShape = new Shapes_1.Shape(5, 5);
console.log(myShape.getInfo());
let myCircle = new Circle_1.Circle(7, 8, 12);
console.log(myCircle.getInfo());
