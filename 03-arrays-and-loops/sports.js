//Array of sports
var sports = ["Basketball", "Football", "Road Cycling", "Tennies"];
// loop through array
// for (let i = 0; i < sports.length; i++){
//     console.log(sports[i]);
// }
// Simplified loop
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sport = sports_1[_i];
    if (sport == "Football") {
        console.log(sport + " is my favorite sport!");
    }
    else {
        console.log(sport);
    }
}
