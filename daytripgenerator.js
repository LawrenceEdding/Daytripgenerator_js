function getRandomInt(max) { // chooses random number
    return Math.floor(Math.random() * Math.floor(max));
}
function chooseRandom(array){
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
        if(array[i] === undefined)
            continue;
        newArray.push(array[i]);
    }
    return newArray;
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
function showResults(array){//return string
    let acceptableMsg = `These are your results\n
    Destination:   ${array[0]}\n
    Restaurant:    ${array[1]}\n
    Transport:     ${array[2]}\n
    Entertainment: ${array[3]}\n`;
   return (acceptableMsg);
}
function isHappy(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] === true){
            continue;
        }
        return false;
    }
    return true;
}
function checkEmptyArray(array){//False means empty
    for(let i = 0; i < array.length; i++){
        if(array[i].length === 0)
            return false;
    }
    return true;
}
function chooseEvents(result,flag,chart){
    for(let i = 0; i < result.length; i++){
        if(flag[i] === false)
            result[i] = chooseRandom(chart[i]);
    }
    return result;
}
function promptUserForApproval(array, index){
    return prompt(`Is ${array[index]} acceptable? \n
    Please reply Yes or No.`);
}
function flagResults(roll, flag, input){
    for(let i = 0; i < flag.length; i++){ 
        if(flag[i] === false){
            do{
                input = promptUserForApproval(roll, i);
            }while(input === '');
            flag[i] = readYesNo(input);
        }
    }
    return flag;
}
function userCorrectRoll(flag, roll){
    for(let i = 0; i < flag.length; i++){
        if(flag[i] === false){
            roll[i] = prompt(`I am sorry but ${roll[i]} was the final option for that category. Please input your preferred choice.`);
        }
    }
    return roll;
}
//function rebuild array DONE
//function make random choice DONE
//function ask if choices are acceptable DONE
//function print to console. DONE
//function ask which are unacceptable DONE
//DOES NOT WORK IF INPUT IS NULL
let userInput;
let destinationArray = ['Beach','Woods','Movie theater','Park'];
let restaurantArray = ['McDonalds','Wendys','Arbys','Chipotle'];
let transportationArray = ['Car','Bus','Rental','Uber'];
let entertainmentArray = ['Playing cards','Watching the sun set','Painting','Eating snacks'];
let superArray = [destinationArray, restaurantArray, transportationArray, entertainmentArray];
let rollArray = [];
rollArray.length = 4;
let flagRollArray = [false, false, false, false];

do{
    rollArray = chooseEvents(rollArray,flagRollArray,superArray);
    alert(showResults(rollArray));
    flagRollArray = flagResults(rollArray,flagRollArray,userInput);
    for(let i = 0; i < rollArray.length; i++){
        superArray[i] = rebuildArray(superArray[i],rollArray[i]);
    }
}while(!isHappy(flagRollArray) && checkEmptyArray(superArray));
//Apologize if not happy. can see based on which ones still end up false.
rollArray = userCorrectRoll(flagRollArray,rollArray);

console.log(showResults(rollArray));