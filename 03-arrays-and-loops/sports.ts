//Array of sports
let sports: string[] = ["Basketball", "Football", "Road Cycling", "Tennies"];

// loop through array
for (let i = 0; i < sports.length; i++){
    console.log(sports[i]);
}

// Simplified loop
for (let sport of sports){

    if(sport == "Football"){
        console.log(sport + " is my favorite sport!");
    }else {
        console.log(sport);
    }    
    
}



