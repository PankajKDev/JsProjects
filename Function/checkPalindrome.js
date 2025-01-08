// A function to take a string
//  and return true/false if palindrome

function palindrome(inputString){
    let originalString=inputString.toLowerCase();
    let stringArray=originalString.split("",originalString.length);
    let reverseArray=stringArray.reverse();
    let paliString=reverseArray.join("");
    if(originalString==paliString){
        return true;
    }
    else{
        return false;
    }

}

console.log(palindrome("woow"))
