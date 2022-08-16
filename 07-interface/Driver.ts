import { FootballCoach } from "./FootballCoach";
import { BaskeballCoach } from "./BasketballCoach";
import { Coach } from "./Coach";


let footballCoach = new FootballCoach();

let basketballCoach = new BaskeballCoach();

//Declare an empty array
let coachs: Coach [] = [];

//Add Coaches to the array
coachs.push(footballCoach);
coachs.push(basketballCoach);

//Print daily workout
for( let c of coachs){
    console.log(c.getDailyWorkOut());
}





