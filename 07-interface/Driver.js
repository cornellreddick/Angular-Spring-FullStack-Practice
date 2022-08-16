"use strict";
exports.__esModule = true;
var FootballCoach_1 = require("./FootballCoach");
var BasketballCoach_1 = require("./BasketballCoach");
var footballCoach = new FootballCoach_1.FootballCoach();
var basketballCoach = new BasketballCoach_1.BaskeballCoach();
//Declare an empty array
var coachs = [];
//Add Coaches to the array
coachs.push(footballCoach);
coachs.push(basketballCoach);
//Print daily workout
for (var _i = 0, coachs_1 = coachs; _i < coachs_1.length; _i++) {
    var c = coachs_1[_i];
    console.log(c.getDailyWorkOut());
}
