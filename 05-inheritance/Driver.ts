import { Shape } from "./Shapes";
import { Circle} from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(5,5);
console.log(myShape.getInfo());

let myCircle = new Circle(7, 8, 12);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(12,12, 13, 1);
console.log(myRectangle.getInfo());


