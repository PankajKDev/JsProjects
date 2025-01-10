// Write a JavaScript function that accepts a string 
// as a parameter and converts the first
//letter of each word of the string in upper case.

function ConvertToUpper(inputString){
    let splitArray=inputString.split("",inputString.length);
    splitArray[0]=splitArray[0].toUpperCase();
   let CapitalisedString=splitArray.join("")
   return CapitalisedString;
}

console.log(ConvertToUpper("damnnnnnnnnnnnnnnnnn"))