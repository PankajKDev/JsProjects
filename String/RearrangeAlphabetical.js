// Write a JavaScript function that returns a passed
//  string with letters in alphabetical order.

function alphabeticalString(inputString){
let originalString=inputString.toLowerCase();
let splitArray=originalString.split("").sort();
let orderedString=splitArray.join("")

return orderedString;
}

console.log(alphabeticalString("alphabets"))