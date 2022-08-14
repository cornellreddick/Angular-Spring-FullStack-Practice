"use strict";
exports.__esModule = true;
var Shapes_1 = require("./Shapes");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shapes_1.Shape(5, 5);
console.log(myShape.getInfo());
var myCircle = new Circle_1.Circle(7, 8, 12);
console.log(myCircle.getInfo());
var myRectangle = new Rectangle_1.Rectangle(12, 12, 13, 1);
console.log(myRectangle.getInfo());
