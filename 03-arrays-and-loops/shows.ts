//array of numbers.
let shows: number [] = [8, 9, 5, 5.7, 2, 10];

//Setting total
let total: number = 0;

//loop over arrays
for (let i = 0; i < shows.length; i++){
    console.log(shows[i]);
    total+=shows[i];
}

// Gettting the average of shows
let average: number = total / shows.length;
console.log("The shows average is " + average);