//array of numbers.
var shows = [8, 9, 5, 5.7, 2, 10];
//Setting total
var total = 0;
//loop over arrays
for (var i = 0; i < shows.length; i++) {
    console.log(shows[i]);
    total += shows[i];
}
// Gettting the average of shows
var average = total / shows.length;
console.log("The shows average is " + average);
