import { Shape } from "./Shapes";
import { Circle} from "./Circle";
import { Rectangle } from "./Rectangle";


let myCircle = new Circle(7, 8, 12);
let myRectangle = new Rectangle(12,12, 13, 1);

// declare an array of shapes that are empty

let Shapes: Shape[] = [];

// ass the shapes to the array


Shapes.push(myCircle);
Shapes.push(myRectangle);

for( let s of Shapes ){
    console.log(s.getInfo());
    console.log(s.calculateArea());
    console.log();
}







