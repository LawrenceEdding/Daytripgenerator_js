function getRandomInt(max) { // chooses random number
    return Math.floor(Math.random() * Math.floor(max));
}
function roll(array){
    return array[getRandomInt(array.length)];
}
function assignRoll(idArray, number){
    switch(number){
        case 0:
    }
}
//function rebuild array
//function make random choice
//function ask if choices are acceptable
//function print to console.
//function ask which are unacceptable
//function


let destinationArray = ['Beach','Woods','Movie theater','Park'];
let restaurantArray = ['McDonalds','Wendys','Arbys','Chipotle'];
let transportationArray = ['Car','Bus','Rental','Uber'];
let entertainmentArray = ['Play cards','Star watching','Painting','Eat snacks'];
let rollArray = [];
rollArray.length = 4;
for(let i = 0; i < 4; i++){
    switch(i){
        case 0:
            rollArray[i] = roll(destinationArray);
            break;
        case 1:
            rollArray[i] = roll(restaurantArray);
            break;
        case 2:
            rollArray[i] = roll(transportationArray);
            break;
        case 3:
            rollArray[i] = roll(entertainmentArray);
            break;
    }
}
