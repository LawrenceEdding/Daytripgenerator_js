function getRandomInt(max) { // chooses random number
    return Math.floor(Math.random() * Math.floor(max));
}
function roll(array){
    return array[getRandomInt(array.length)];
}


function rebuildArray(array, removedElement){
    array = initializeElementInArray(array,removedElement);
    return removeUndefinedInArray(array);
}
function findPositionInArray(array,searchedVar){
    for(let i = 0; i < array.length; i++){
        if(array[i] === searchedVar)
        return i;
    }
}
function initializeElementInArray(array,initializedElement){
    let position = findPositionInArray(array,initializedElement);
    array[position] = undefined;
    return array;
}
function removeUndefinedInArray(array){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] !== undefined){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
function chooseWhichArray(number){
    switch(number){
        case 0:
            return destinationArray;
        case 1:
            return restaurantArray;
        case 2:
            return transportationArray;
        case 3:
            return entertainmentArray;
        default:
            return console.error();
    }
}
function readYesNo(string){
    while(true){
        string = string.toUpperCase();
        let stringArray = string.match(/[A-Z]/g);
        string = makeArrayIntoString(stringArray);
        switch(string){
            case 'YES':
                return true;
            case 'NO':
                return false;
            default:
                string = prompt('Please reply Yes or No.');
        }
    }
}
function makeArrayIntoString(array){
    string = '';
    for(let i = 0; i < array.length; i++){
        string += array[i];
    }
    return string;
}

//function rebuild array DONE
//function make random choice DONE
//function ask if choices are acceptable TODO
//function print to console. TODO
//function ask which are unacceptable TODO
//function
//TODO Make array of booleans to run parallel with rollArray.
//Array will flag which ones need to be rerolled.

let userInput;
let destinationArray = ['Beach','Woods','Movie theater','Park'];
let restaurantArray = ['McDonalds','Wendys','Arbys','Chipotle'];
let transportationArray = ['Car','Bus','Rental','Uber'];
let entertainmentArray = ['Playing cards','Watching the sun set','Painting','Eating snacks'];
let rollArray = [];
rollArray.length = 4;
let flagRollArray = [];
for(let i = 0; i < 4; i++){
    rollArray[i] = roll(chooseWhichArray(i));
    console.log(rollArray[i]);
}
let acceptableMsg = `Are these results acceptable?\n
 Destination:   ${rollArray[0]}\n
 Restaurant:    ${rollArray[1]}\n
 Transport:     ${rollArray[2]}\n
 Entertainment: ${rollArray[3]}\n
 Please reply with Yes or No.`;
alert(acceptableMsg);

for(let i = 0; i < rollArray.length; i++){
    userInput = prompt(`Is ${rollArray[i]} acceptable? \n
            Please reply Yes or No.`);
    flagRollArray[i] = readYesNo(userInput);
    console.log(flagRollArray[i]);
}


console.log();